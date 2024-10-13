module.exports = [{
name: "trusted",
type: "interaction",
prototype: "slash",
$if: "old",
code: `

$interactionFollowUp[$get[message]]


$if[$hasPerms[$guildID;$authorID;administrator]==true||$isUserTrusted[$guildID;$authorID]==true]

$if[$isRoleTrusted[$guildID;$slashOption[role]]==true]

$removeTrustedRole[$guildID;$slashOption[role]]

$let[message;<:minus:1294693536998101184> <@&$slashOption[role]> has been removed from the trusted staff list!]

$else

$let[message;<:exclaim:1294694172447477840> That role is not in the trusted staff list!]

$endif

$else

$let[message;<:exclaim:1294694172447477840> You cannot use this command!
-# <:reply:1292516585092808817> You either need the \`Administartor\` permission or need to have a trusted role!]


$endif

$interactionDefer[true]
$onlyIf[$interactionData[options._subcommand]==remove;]

`
}]