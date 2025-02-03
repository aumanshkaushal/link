module.exports = [{
name: "onMessageDelete",
type: "messageDelete",
code: `

$channelSendMessage[1336063717250568193; <@$authorID> ($userName | $authorID) has deleted a message in <#$channelID>!
> Message: \`$oldMessage\`]

`
}]