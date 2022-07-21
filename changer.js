function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}


document.body.setAttribute(
'style',
`--bg:url('./bgs/bg (${random(1,55)}).jpg');`
)
var iframe = document.body.querySelector('iframe')
try {
iframe.contentWindow.document
  ? (iframe.src = 'https://newtabs.online/newtab')
  : true
} catch (e) {}
document.title = chrome.i18n.getMessage('title')
