module.exports = [{
name: "customlist",
type: "interaction",
prototype: "slash",
code: `

$interactionFollowUp[<:add:1294692912310779935> \`$slashOption[link]\` has been added to the custom url list!]

$addCustomUrl[$guildID;$nonEscape[$slashOption[link]]]

$interactionDefer[true]

$onlyIf[$getCustomUrlsCount[$guildID]<25;<:exclaim:1294694172447477840> You cannot add more than 25 custom URLs!{interaction}{ephemeral}]

$onlyIf[$isUrl[$nonEscape[$slashOption[link]]]==true;<:exclaim:1294694172447477840> You must provide a valid url!{interaction}{ephemeral}]

$onlyIf[$hasPerms[$guildID;$authorID;administrator]==true||$isUserTrusted[$guildID;$authorID]==true;<:exclaim:1294694172447477840> You cannot use this command!
-# <:reply:1292516585092808817> You either need the \`Administartor\` permission or need to have a trusted role!{interaction}{ephemeral}]

$onlyIf[$interactionData[options._subcommand]==add;]

`
}]