export function getCurrentTab() {
  var re = /home\/(.*)/i
  return extractRegexGroup(re)
}

function extractRegexGroup(re) {
  var regexResultArray = re.exec(window.location.toString())
  if (regexResultArray) return regexResultArray[1]
  return ''
}