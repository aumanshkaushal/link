module.exports = [{
name: "blockvc",
type: "interaction",
prototype: "slash",
$if: "old",
code: `

$if[$isBlockedVC[$guildID;$slashOption[channel]]==true]

$channelSendMessage[$getVar[commandLogChannel];{newEmbed: {description:<:minus:1294693536998101184> <#$slashOption[channel]> ($channelName[$slashOption[channel]] | $slashOption[channel]) has been unblocked by $userName!
> Guild: $guildName[$guildID] | ID: $guildID}{color:2a616a}{timestamp}{footer:User ID#COLON# $authorID}{thumbnail:$authorAvatar} }]

$interactionFollowUp[<:minus:1294693536998101184> <#$slashOption[channel]> ($channelName[$slashOption[channel]]) has been unblocked!]
$removeBlockedVC[$guildID;$slashOption[channel]]

$else


$channelSendMessage[$getVar[commandLogChannel];{newEmbed: {description:<:add:1294692912310779935> <#$slashOption[channel]> ($channelName[$slashOption[channel]] | $slashOption[channel]) has been blocked by $userName!
> Guild: $guildName[$guildID] | ID: $guildID}{color:2a616a}{timestamp}{footer:User ID#COLON# $authorID}{thumbnail:$authorAvatar} }]

$interactionFollowUp[<:add:1294692912310779935> <#$slashOption[channel]> ($channelName[$slashOption[channel]]) has been blocked!]
$addBlockedVC[$guildID;$slashOption[channel]]

$endIf

$interactionDefer[true]


$onlyIf[$hasPerms[$guildID;$authorID;administrator]==true||$isUserTrusted[$guildID;$authorID]==true;<:exclaim:1294694172447477840> You cannot use this command!
-# <:reply:1292516585092808817> You either need the \`Administartor\` permission or need to have a trusted role!{interaction}{ephemeral}]

$onlyIf[$channelType[$slashOption[channel]]==voice||$channelType[$slashOption[channel]]==stage;<:exclaim:1294694172447477840> You can only block voice or stage channels!{interaction}{ephemeral}]

`
}]