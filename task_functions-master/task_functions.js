const functions = {
  searchSubStringIgnoringTags: function (str, substring) {
    //var artWithoutTagNames=str.split('<')
    
    var resultStr
    for (var i = 0; i < str.length; i++)
    {
      resultStr = 
      }
    console.log('ff');
    return;
  }
}
var str = `'<p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
ut labore et dolore magna aliqua. Ut lorem ipsum enim ad minim veniam, quis nostrud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat.  Lorem ipsum dolor. Duis aute irure dolor in reprehenderit in voluptate 
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
qui officia deserunt mollit anim id est laborum.</p><p style="color:red">lorem <span>ipsum</span> <b>dolor sit 
amet</b>, consectetur adipiscing elit</p>'`

var search = 'lorem ipsum dolor'
function itsTag(str) {
  var istag= false
 
  for (var i = 0; i < str.length; i++)
    if (str[i] == '<') {
      istag = true
      indexOfStartTag = i
      continue
    }
    else if (str[i] == '>') {
      istag = false
      continue
    }
  return istag
  
}
function getListIdx(str, substr) {
  let listIdx = []
  let lastIndex = -1
  while ((lastIndex = str.indexOf(substr, lastIndex + 1)) !== -1) {
    listIdx.push(lastIndex)
  }
  return listIdx
}
console.log(getListIdx(str, '<'));
console.log(getListIdx(str, '>'));
functions.searchSubStringIgnoringTags()
module.exports = functions
