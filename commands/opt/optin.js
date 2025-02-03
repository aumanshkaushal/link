module.exports = [{
name: "optin",
type: "interaction",
prototype: "slash",
code: `
$channelSendMessage[$getVar[commandLogChannel];{newEmbed: {description:<:add:1294692912310779935> $userName has opted in!
> Guild: $guildName[$guildID] | ID: $guildID}{color:2a616a}{timestamp}{footer:User ID#COLON# $authorID}{thumbnail:$authorAvatar} }]
$optIn[$authorID]
$interactionReply[You will now receive notifications from me!]
$onlyIf[$isOpttedIn[$authorID]==false;You are already opted in! {interaction}]
`
}]