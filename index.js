require('dotenv').config();
const admin = require('firebase-admin');
const credentials = require('./secret/key.json');
const aoijs = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@aoijs/aoi.music");
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

const voice = new AoiVoice(bot, {
  requestOptions: {
    offsetTimeout: 0,
    soundcloudLikeTrackLimit: 200,
  },
  searchOptions: {
   youtubeClient: "WEB"
  }
});


const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, "./commands/");
bot.variables(require('./variables.json'));

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const db = admin.firestore();


const { recommendGame } = require('./functions/recommend/recommendGame')

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

const { numberOfUsersInVoiceChannel } = require('./functions/recommend/numberOfUsersInVoiceChannel')

bot.functionManager.createFunction({
  name: '$numberOfUsersInVoiceChannel',
  type: 'djs',
  code: async d => {
    const data = d.util.aoiFunc(d);

    const [channelID] = data.inside.splits;

    data.result = await numberOfUsersInVoiceChannel(d, channelID);

    return {
        code: d.util.setCode(data),
    };
}  
});

const { getInfo } = require('./functions/recommend/getInfo')

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

const { getRange } = require('./functions/recommend/getRange')

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

const { optOut } = require('./functions/opt/optOut');

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
