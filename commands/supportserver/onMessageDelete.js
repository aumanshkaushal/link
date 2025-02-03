module.exports = [{
name: "onMessageDelete",
type: "messageDelete",
channel: "1336063717250568193",
code: `

$channelSendMessage[1336063717250568193; {newEmbed: {description:<@$authorID> ($userName | $authorID) has deleted a message in <#$channelID>!
> Message: \`$oldMessage\`} {color: #ff0000} {timestamp} {thumbnail:$userAvatar[$authorID]} }]

$onlyIf[$isBot[$authorID]!=true;]
$onlyIf[$guildID==1291481095086538824;]

`
}]