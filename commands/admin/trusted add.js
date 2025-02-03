module.exports = [{
name: "trusted",
type: "interaction",
prototype: "slash",
$if: "old",
code: `

$interactionFollowUp[$get[message]]


$if[$hasPerms[$guildID;$authorID;administrator]==true||$isUserTrusted[$guildID;$authorID]==true]

$if[$isRoleTrusted[$guildID;$slashOption[role]]!=true]

$addTrustedRole[$guildID;$slashOption[role]]

$let[message;<:add:1294692912310779935> <@&$slashOption[role]> has been added to the trusted staff list!]


$channelSendMessage[$getVar[commandLogChannel];{newEmbed: {description:<:add:1294692912310779935> <@&$slashOption[role]> (ID: $slashOption[role] | Name: $roleName[$slashOption[role]]) has been added to the trusted staff list by $userName!
> Guild: $guildName[$guildID] | ID: $guildID}{color:2a616a}{timestamp}{footer:User ID#COLON# $authorID}{thumbnail:$authorAvatar} }]

$else

$let[message;<:exclaim:1294694172447477840> That role is already in the trusted staff list!]

$endif

$else

$let[message;<:exclaim:1294694172447477840> You cannot use this command!
-# <:reply:1292516585092808817> You either need the \`Administartor\` permission or need to have a trusted role!]


$endif

$interactionDefer[true]
$onlyIf[$interactionData[options._subcommand]==add;]

`
}]