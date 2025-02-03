module.exports = [{
name: "recommend",
type: "interaction",
prototype: "slash",
$if: "old",
code: `

$interactionReply[$getInfo[$get[game_id];emoji] You can play **__$getInfo[$get[game_id];name]__** with \`$getRange[$get[game_id]]\` players! {actionRow:
{button:Play:link:$getInfo[$get[game_id];homepage]}
}]

$onlyIf[$get[game_id]!=;❌ No game found for the specified number of players!{interaction}]



$if[$voiceID==]
$channelSendMessage[$getVar[commandLogChannel];{newEmbed: {description:<:circle:1292523984021229648> $userName has recommended a game for $slashOption[players] players!
> Game: $getInfo[$get[game_id];name] | ID: $get[game_id]
> Guild: $guildName[$guildID] | ID: $guildID}{color:2a616a}{timestamp}{footer:User ID#COLON# $authorID}{thumbnail:$authorAvatar} }]
$let[game_id;$recommendGame[$slashOption[players]]]
$else
$if[$slashOption[players]==]
$channelSendMessage[$getVar[commandLogChannel];{newEmbed: {description:<:circle:1292523984021229648> $userName has recommended a game for $numberOfUsersInVoiceChannel[$voiceID] players!
> Game: $getInfo[$get[game_id];name] | ID: $get[game_id]
> Voice Channel: $channelName[$voiceID] | ID: $voiceID
> Guild: $guildName[$guildID] | ID: $guildID}{color:2a616a}{timestamp}{footer:User ID#COLON# $authorID}{thumbnail:$authorAvatar} }]
$let[game_id;$recommendGame[$numberOfUsersInVoiceChannel[$voiceID]]]
$else
$channelSendMessage[$getVar[commandLogChannel];{newEmbed: {description:<:circle:1292523984021229648> $userName has recommended a game for $slashOption[players] players!
> Game: $getInfo[$get[game_id];name] | ID: $get[game_id]
> Guild: $guildName[$guildID] | ID: $guildID}{color:2a616a}{timestamp}{footer:User ID#COLON# $authorID}{thumbnail:$authorAvatar} }]
$let[game_id;$recommendGame[$slashOption[players]]]
$endif
$endif



$onlyIf[$voiceID!=||$slashOption[players]!=;{newEmbed: {color: Red} {description:❌ You must either be in an voice channel **or** specify the number of players in \`players\` field!}}{interaction}{ephemeral}]

`
}]