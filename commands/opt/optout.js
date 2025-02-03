module.exports = [{
name: "optout",
type: "interaction",
prototype: "slash",
code: `
$channelSendMessage[$getVar[commandLogChannel];{newEmbed: {description:<:minus:1294693536998101184> $userName has opted out!
> Guild: $guildName[$guildID] | ID: $guildID}{color:2a616a}{timestamp}{footer:User ID#COLON# $authorID}{thumbnail:$authorAvatar} }]
$optOut[$authorID]
$interactionReply[You will no longer receive notifications from me!]
$onlyIf[$isOpttedIn[$authorID]==true;You are already opted out! {interaction}]
`
}]