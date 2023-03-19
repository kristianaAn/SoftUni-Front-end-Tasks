let wholeHTML = document.getElementsByTagName('html')[0];

let lis = document.getElementsByTagName('li');
for (const li of lis) {
    li.innerHTML += '<p>Text Paragraph</p>';
    li.style.backgroundColor = 'blue';
}
