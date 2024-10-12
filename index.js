require('dotenv').config();
const admin = require('firebase-admin');
const credentials = require('./secret/key.json');
const aoijs = require("aoi.js");
const bot = new aoijs.AoiClient({
  token: process.env.DiscordToken,
  prefix: ["$getVar[prefix]"],
  intents: [
    "MessageContent",
    "Guilds",
    "GuildMessages",
    "GuildMessageReactions",
    "GuildMembers",
    "GuildBans",
    "GuildMessageTyping",
    "DirectMessageTyping",
    "DirectMessages",
    "GuildVoiceStates",
    "GuildPresences",
    "GuildEmojisAndStickers",
    "GuildWebhooks"
    ],
  events: [
    "onMessage",
    "onMessageDelete",
    "onMessageUpdate",
    "onMessageDeleteBulk",
    "onGuildJoin",
    "onGuildLeave",
    "onGuildUpdate",
    "onGuildUnavailable",
    "onRoleCreate",
    "onRoleUpdate",
    "onRoleDelete",
    "onChannelCreate",
    "onChannelUpdate",
    "onChannelDelete",
    "onChannelPinsUpdate",
    "onStageInstanceCreate",
    "onStageInstanceUpdate",
    "onStageInstanceDelete",
    "onThreadCreate",
    "onThreadUpdate",
    "onThreadDelete",
    "onThreadListSync",
    "onThreadMemberUpdate",
    "onJoin",
    "onLeave",
    "onMemberUpdate",
    "onMemberAvailable",
    "onMembersChunk",
    "onEmojiCreate",
    "onEmojiDelete",
    "onEmojiUpdate",
    "onStickerCreate",
    "onStickerDelete",
    "onStickerUpdate",
    "onBanAdd",
    "onBanRemove",
    "onReactionAdd",
    "onReactionRemove",
    "onReactionRemoveAll",
    "onReactionRemoveEmoji",
    "onVoiceStateUpdate",
    "onPresenceUpdate",
    "onTypingStart",
    "onInteractionCreate",
    "onUserUpdate",
    "onVariableCreate",
    "onVariableDelete",
    "onVariableUpdate",
    "onFunctionError"
    ]
});

bot.status({
  name: "/help!",
  type: "LISTENING",
  status: "online"
});

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, "./commands/");
bot.variables(require('./variables.json'));

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const db = admin.firestore();



function recommendGame(no_of_players) {
  const fs = require('fs')
  const games = JSON.parse(fs.readFileSync('./base/info.json'))
  const keys = Object.keys(games)
  const availableGames = keys.filter(key => games[key].range[0] <= no_of_players && games[key].range[1] >= no_of_players)
  const randomIndex = Math.floor(Math.random() * availableGames.length)
  return availableGames[randomIndex]
}

bot.functionManager.createFunction({
  name: '$recommendGame',
  type: 'djs',
  code: async d => {
  const data = d.util.aoiFunc(d);
  const [ no_of_players ] = data.inside.splits;
  data.result = recommendGame(no_of_players);
  return { 
    code: d.util.setCode(data) 
    }
}  
});

bot.functionManager.createFunction({
  name: '$noUsersInVoiceChannel',
  type: 'djs',
  code: async d => {
    const data = d.util.aoiFunc(d);

    const [channelID] = data.inside.splits;

    const channel = await d.util.getChannel(d, channelID, true);
    if (!channel)
        return d.aoiError.fnError(d, "channel", {inside: data.inside});
    if (
        ![d.util.channelTypes.Voice, d.util.channelTypes.Stage].includes(
            channel.type,
        )
    )
        return d.aoiError.fnError(
            d,
            "custom",
            {inside: data.inside},
            "Channel Type Is Not Voice/Stage",
        );

    data.result = channel.members.size;

    return {
        code: d.util.setCode(data),
    };
}  
});

function getInfo(game_id, field) {
  const fs = require('fs')
  const games = JSON.parse(fs.readFileSync('./base/info.json'))
  return games[game_id][field]
}

bot.functionManager.createFunction({
  name: '$getInfo',
  type: 'djs',
  code: async d => {
    const data = d.util.aoiFunc(d);

    const [game_id, field] = data.inside.splits;

    data.result = getInfo(game_id, field);

    return {
        code: d.util.setCode(data),
    };
}  
});

function getRange(game_id) {
  const fs = require('fs')
  const games = JSON.parse(fs.readFileSync('./base/info.json'))
  if (games[game_id].range[0] === games[game_id].range[1]) {
    return games[game_id].range[0]
  }
  return games[game_id].range.join('-')
}

bot.functionManager.createFunction({
  name: '$getRange',
  type: 'djs',
  code: async d => {
    const data = d.util.aoiFunc(d);

    const [game_id] = data.inside.splits;

    data.result = getRange(game_id);

    return {
        code: d.util.setCode(data),
    };
}  
});


const { getTrustedUsers } = require('./functions/trustedUser/getTrustedUsers')

bot.functionManager.createFunction({
  name: '$getTrustedUsers',
  type: 'djs',
  code: async d => {
    const data = d.util.aoiFunc(d);

    const [guildId] = data.inside.splits;

    data.result = await getTrustedUsers(db, guildId);

    return {
        code: d.util.setCode(data),
    };
}  
});

const { addTrustedUsers } = require('./functions/trustedUser/addTrustedUsers')

bot.functionManager.createFunction({
  name: '$addTrustedUsers',
  type: 'djs',
  code: async d => {
    const data = d.util.aoiFunc(d);

    const [guildId, userId] = data.inside.splits;

    await addTrustedUsers(db, guildId, userId);

    return {
        code: d.util.setCode(data),
    };
}  
});

const { removeTrustedUsers } = require('./functions/trustedUser/removeTrustedUsers')

bot.functionManager.createFunction({
  name: '$removeTrustedUsers',
  type: 'djs',
  code: async d => {
    const data = d.util.aoiFunc(d);

    const [guildId, userId] = data.inside.splits;

    await removeTrustedUsers(db, guildId, userId);

    return {
        code: d.util.setCode(data),
    };
}  
});

const { removeAllTrustedUsers } = require('./functions/trustedUser/removeAllTrustedUsers')

bot.functionManager.createFunction({
  name: '$removeAllTrustedUsers',
  type: 'djs',
  code: async d => {
    const data = d.util.aoiFunc(d);

    const [guildId] = data.inside.splits;

    await removeAllTrustedUsers(db, guildId);

    return {
        code: d.util.setCode(data),
    };
}  
});

const { isOpttedIn } = require('./functions/opt/isOpttedIn')

bot.functionManager.createFunction({
  name: '$isOpttedIn',
  type: 'djs',
  code: async d => {
    const data = d.util.aoiFunc(d);

    const [userId] = data.inside.splits;

    data.result = await isOpttedIn(db, userId);

    return {
        code: d.util.setCode(data),
    };
}  
});

const { optIn } = require('./functions/opt/optIn')

bot.functionManager.createFunction({
  name: '$optIn',
  type: 'djs',
  code: async d => {
    const data = d.util.aoiFunc(d);

    const [userId] = data.inside.splits;

    await optIn(db, userId);

    return {
        code: d.util.setCode(data),
    };
}  
});

const { optOut } = require('./functions/opt/optOut')

bot.functionManager.createFunction({
  name: '$optOut',
  type: 'djs',
  code: async d => {
    const data = d.util.aoiFunc(d);

    const [userId] = data.inside.splits;

    await optOut(db, userId);

    return {
        code: d.util.setCode(data),
    };
}  
});
