export function getCurrentTab() {
  var re = /home\/(.*)/i
  return extractRegexGroup(re)
}

function extractRegexGroup(re) {
  var regexResultArray = re.exec(window.location.toString())
  if (regexResultArray) return regexResultArray[1]
  return ''
}

export function randAvatarColor(){
  var colors = ['#43b19c', '#efc94c', '#de5948', '#4561af', '#d643a8'];
  return colors[Math.floor(Math.random()*colors.length)];
}
