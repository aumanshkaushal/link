module.exports = [{
name: "gamelink",
type: "interaction",
prototype: "slash",
code: `

$interactionReply[$numberOfUsersInVoiceChannel[$voiceID]]




$onlyIf[$voiceID!=;{newEmbed: {color: Red} {description:❌ You must be in an voice channel!}}{interaction}{ephemeral}]
`
}]