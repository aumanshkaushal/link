module.exports = [{
name: "optin",
type: "interaction",
prototype: "slash",
code: `
$optIn[$authorID]
$interactionReply[You will now receive notifications from me!]
$onlyIf[$isOpttedIn[$authorID]==false;You are already opted in! {interaction}]
`
}]