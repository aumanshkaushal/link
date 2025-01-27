module.exports = [{
name: "gamelink",
type: "interaction",
prototype: "slash",
$if: "old",
code: `

$interactionFollowUp[✅]

$sendGamelink[$voiceID;$authorID;
$getInfo[$get[gameId];emoji] <@$authorID> has sent you an **invite** to **$getInfo[$get[gameId];name]** from <#$voiceID>!
<:reply:1292516585092808817> <$fixUrl[$nonEscape[$slashOption[url]]]> {actionRow:{button:Join Game:link:$nonEscape[$fixUrl[$nonEscape[$slashOption[url]]]]}}
;
{newEmbed: {description:$getInfo[$get[gameId];emoji] » You just distributed a **$getInfo[$get[gameId];name]** game link to the members of <#$voiceID>!
<:reply:1292516585092808817> <$fixUrl[$nonEscape[$slashOption[url]]]>} {field:Successfully sent gamelink to#COLON#:%successUsers%:true} {field:Member who are opted-out#COLON#:%optedOut%:true} {field:Member who have their DMs disabled#COLON#:%dmsDisabled%:true}{color:6da9b5}}{actionRow:{button:Join Game:link:$nonEscape[$fixUrl[$nonEscape[$slashOption[url]]]]}}
]


$let[gameId;$gameIDFromUrl[$guildID;$nonEscape[$slashOption[url]]]]

$interactionDefer[true]
$onlyIf[$allowedUrl[$guildID;$nonEscape[$slashOption[url]]]==true;{newEmbed: {color: Red} {description:❌ \`$nonEscape[$slashOption[url]]\` is not an allowed link!}}{interaction}{ephemeral}]
$onlyIf[$isUserTrusted[$guildID;$authorID]==false||$hasPerms[$guildID;$authorID;administrator]==false;]

$if[$isUserTrusted[$guildID;$authorID]==true||$hasPerms[$guildID;$authorID;administrator]==true]

$interactionFollowUp[✅]

$sendGamelink[$voiceID;$authorID;
$getInfo[$get[gameId];emoji] <@$authorID> has sent you an **invite** to **$getInfo[$get[gameId];name]** from <#$voiceID>!
<:reply:1292516585092808817> <$fixUrl[$nonEscape[$slashOption[url]]]> {actionRow:{button:Join Game:link:$nonEscape[$fixUrl[$nonEscape[$slashOption[url]]]]}}
;
{newEmbed: {description:$getInfo[$get[gameId];emoji] » You just distributed a **$getInfo[$get[gameId];name]** game link to the members of <#$voiceID>!
<:reply:1292516585092808817> <$fixUrl[$nonEscape[$slashOption[url]]]>} {field:Successfully sent gamelink to#COLON#:%successUsers%:true} {field:Member who are opted-out#COLON#:%optedOut%:true} {field:Member who have their DMs disabled#COLON#:%dmsDisabled%:true}{color:6da9b5}}{actionRow:{button:Join Game:link:$nonEscape[$fixUrl[$nonEscape[$slashOption[url]]]]}}
]


$let[gameId;$gameIDFromUrl[$guildID;$nonEscape[$slashOption[url]]]]
$interactionDefer[true]
$endif


$onlyIf[$isUrl[$nonEscape[$slashOption[url]]]==true;{newEmbed: {color: Red} {description:❌ \`$nonEscape[$slashOption[url]]\` is not a valid url!}}{interaction}{ephemeral}]

$onlyIf[$voiceID!=;{newEmbed: {color: Red} {description:❌ You must be in an voice channel!}}{interaction}{ephemeral}]
$suppressErrors
`
}]