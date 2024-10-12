module.exports = [{
name: "recommend",
type: "interaction",
prototype: "slash",
$if: "old",
code: `

$interactionReply[$getInfo[$get[game_id];emoji] You can play **__$getInfo[$get[game_id];name]__** with \`$getRange[$get[game_id]]\` players! {actionRow:
{button:Get:link:$getInfo[$get[game_id];homepage]}
}]

$onlyIf[$get[game_id]!=;❌ No game found for the specified number of players!{interaction}]

$if[$voiceID==]
$let[game_id;$recommendGame[$slashOption[players]]]
$else
$if[$slashOption[players]==]
$let[game_id;$recommendGame[$noUsersInVoiceChannel[$voiceID]]]
$else
$let[game_id;$recommendGame[$slashOption[players]]]
$endif
$endif



$onlyIf[$voiceID!=||$slashOption[players]!=;{newEmbed: {color: Red} {description:❌ You must either be in a voice channel or specify the number of players in \`players\` field!}}{interaction}{ephemeral}]

`
}]