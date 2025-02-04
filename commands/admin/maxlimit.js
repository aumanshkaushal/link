module.exports = [{
name: "maxlimit",
type: "interaction",
prototype: "slash",
code: `
$interactionFollowUp[✅]
$channelSendMessage[$getVar[commandLogChannel];{newEmbed: {description:🔧 **Max Limit** has been set to $slashOption[number] by $userName!
> Guild: $guildName[$guildID] | ID: $guildID}{color:2a616a}{timestamp}{footer:User ID#COLON# $authorID}{thumbnail:$authorAvatar} }]
$setMaxLimit[$guildID;$slashOption[number]]
$interactionDefer[true]
$onlyIf[$hasPerms[$guildID;$authorID;administrator]==true||$isUserTrusted[$guildID;$authorID]==true;<:exclaim:1294694172447477840> You cannot use this command!
-# <:reply:1292516585092808817> You either need the \`Administartor\` permission or need to have a trusted role!{interaction}{ephemeral}]

$onlyIf[$slashOption[number]>=0;{newEmbed: {color: Red} {description:❌ Please provide a valid number!}}{interaction}{ephemeral}]

`
}]