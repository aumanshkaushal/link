module.exports = [{
name: "onJoin",
type: "join",
channel: "1292082568405057608",
code: `

$channelSendMessage[1336062897217999019;<:add:1294692912310779935> $userName ($authorID) has joined the server!
> Created: $creationDate[$authorID]]


$giveRole[$guildID;$authorID;1292084369405771891;User joined the server!]

$onlyIf[$guildID==1291481095086538824;]

`
}]