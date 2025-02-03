module.exports = [{
name: "onMessageUpdate",
type: "messageUpdate",
channel: "1336063717250568193",
code: `

$channelSendMessage[1336063717250568193; {newEmbed: {description:<@$authorID> ($userName | $authorID) has updated a message in <#$channelID>!
> Old Message: \`$oldMessage\`

> New Message: \`$message\`} {color:#00aeff} {timestamp} {thumbnail:$userAvatar[$authorID]} }]
$onlyIf[$isBot[$authorID]!=true;]

`
}]