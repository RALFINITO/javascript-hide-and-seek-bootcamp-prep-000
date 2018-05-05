function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var elements = document.querySelectorAll('.ranked-list')
  for(let i = 0; i < elements.length; i++){
    elements[i].innerHTML = parseInt(elements[i].innerHTML) + n
  }
  
}

function deepestChild(){
  var topNode = document.querySelector("div#grand-node")
  var level = 1
  var maxLevel = drillDown(topNode,level)
  return maxLevel.element
}


function drillDown(element, level){
  if(element.children.length ===  0){
    return {element: element, level: level}
  }
  level = level + 1
  for(let i = 0; i < element.children.length; i++){
    var child = element.children[i]
    var drillChild = drillDown(child, level)
    if(drillChild.level>level){
      level = drillChild.level
      element = drillChild.element
    }
  }
  return {element: element, level: level}
}