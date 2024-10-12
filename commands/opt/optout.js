module.exports = [{
name: "optout",
type: "interaction",
prototype: "slash",
code: `
$optOut[$authorID]
$interactionReply[You will no longer receive notifications from me!]
$onlyIf[$isOpttedIn[$authorID]==true;You are already opted out! {interaction}]
`
}]