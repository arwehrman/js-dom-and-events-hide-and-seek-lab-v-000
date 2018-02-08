function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget() {
  return document.querySelector('#nested .target')
};

function increaseRankBy(num) {
  //create a variable that pulls the class ranked list
  const rankedList = document.querySelectorAll('.ranked-list')
  //for loop, iterate through children of ranked-list class
    for (let i = 0; i < rankedList.length; i++) {
  let children = rankedList[i].children
  //for loop, iterate through each child adding the num to exisiting number
    for (let j = 0; j < children.length; j++) {
      // for each child, using parseInt to change string to number before adding num
      children[j].innerHTML = parseInt(children[j].innerHTML) + num
    }
  }
};

function deepestChild() {
  const elements = document.getElementById('grand-node').querySelectorAll('div');
  return elements[elements.length - 1];
};
