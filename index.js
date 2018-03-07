function getFirstSelector(selector){
  return document.querySelector(selector)
};

function nestedTarget(){
  return document.querySelector('#nested, .target')

}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('.ranked-list')
    for (let i = 0; i < rankedList.length; i++) {
  let children = rankedList[i].children
    for (let c = 0; c < children.length; c++) {
      children[c].innerHTML = parseInt(children[c].innerHTML) + n
    }
  }
};

function deepestChild(){
  const elements = document.getElementById('grand-node').querySelectorAll('div');
 return elements[elements.length - 1];
}
