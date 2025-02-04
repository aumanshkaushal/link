module.exports = [{
name: "ping",
type: "interaction",
prototype: "slash",
code: `

$interactionFollowUp[{newEmbed: {color:2a616a}{description:
<a:greenstars:1336271036152283156> **__Websocket Ping:__** \`$pingms\`
<a:greenstars:1336271036152283156> **__Database Ping:__** \`$getFirebasePingms\`
}}]
$interactionDefer
`
}]