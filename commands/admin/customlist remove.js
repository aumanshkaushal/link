module.exports = [{
name: "customlist",
type: "interaction",
prototype: "slash",
code: `
$autoCompleteRespond[$autoCompleteCustomUrl[$guildID]]

$onlyIf[$isAutoComplete==true;]
$onlyIf[$interactionData[options._subcommand]==remove;]

`
},{
name: "customlist",
type: "interaction",
prototype: "slash",
code: `
$interactionFollowUp[✅]

$removeCustomUrl[$guildID;$nonEscape[$slashOption[link]]]
$channelSendMessage[$getVar[commandLogChannel];{newEmbed: {description:<:minus:1294693536998101184> \`$base64toString[$nonEscape[$slashOption[link]]]\` has been removed from the custom url list by $userName!
> Guild: $guildName[$guildID] | ID: $guildID}{color:2a616a}{timestamp}{footer:User ID#COLON# $authorID}{thumbnail:$authorAvatar} }]
$interactionDefer[true]


$onlyIf[$hasPerms[$guildID;$authorID;administrator]==true||$isUserTrusted[$guildID;$authorID]==true;<:exclaim:1294694172447477840> You cannot use this command!
-# <:reply:1292516585092808817> You either need the \`Administartor\` permission or need to have a trusted role!{interaction}{ephemeral}]

$onlyIf[$isAutoComplete==false;]
$onlyIf[$interactionData[options._subcommand]==remove;]

`
}]