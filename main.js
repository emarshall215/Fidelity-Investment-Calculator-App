//tells computer where to look
const container = document.querySelector('#container');
//Content div
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content';

container.appendChild(content);
//para in div
const paragraph = document.createElement('p');
paragraph.style.color = "red";
paragraph.textContent = "Hey, I/'m red!";

container.appendChild(paragraph);
//heading in div (container)
const h3 = document.createElement('h3');
h3.style.color = "blue";
h3.textContent = "I/'m a blue h3";

container.appendChild(h3);
//div Container
const div2 = document.createElement('div');
div2.style.backgroundColor ="pink";
div2.style.border = "black";

content.appendChild(div2);
//first child element
const h1 = document.createElement('h1');
h1.textContent = "I/'m in a div";

div2.appendChild(h1);
//second child element
const p = document.createElement('p');
p.textContent = "ME TOO!";

div2.appendChild(p);
