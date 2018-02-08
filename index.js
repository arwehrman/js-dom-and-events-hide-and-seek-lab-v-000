function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.querySelector('#nested .target')
};

function increaseRankBy(num) {
  const rankedList = document.querySelectorAll('.ranked-list')
    for (let i = 0; i < rankedList.length; i++) {
    let children = rankedList[i].children
    for (let j = 0; j < children.length; j++) {
    children[j].innerHTML = parseInt(children[j].innerHTML) + num
    }
  }
};

function deepestChild() {
  const elements = document.getElementById('grand-node').querySelectorAll('div');
  return elements[elements.length - 1];
};
