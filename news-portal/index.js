document.addEventListener('DOMContentLoaded', ready);

var articles = [{
        id: '1',
        title: 'Title 1'
    },
    {
        id: '2',
        title: 'Title 2'
    },
    {
        id: '1',
        title: 'Title 3'
    }
];

function ready() {

    document.querySelector('.article-list-wrapper').appendChild(stringToDom(render({
        articles: articles
    })));
}

function render({articles}) {
    debugger;
    return `
        <div>
            ${articles.map((a) => `<div>${a.title}</div>`).toString().replace(/,/g, "")}
        </div>`
}

// function render(data) {
//     var articles = data.articles || [];

//     var tpl = tplToDom('#article-item-tpl');
//     var wrapper = document.createElement('div')

//     var articleList = articles.map((article) => {
//         var articleItem = tpl.cloneNode(true);
//         articleItem.innerText = article.title;
//         return articleItem
//     }).forEach((articleItem) => {
//         wrapper.appendChild(articleItem);
//     });

//     document.querySelector('.article-list-wrapper').appendChild(wrapper);
// }

function tplToDom(query) {
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = document.querySelector(query).innerHTML;
    return tempDiv.children[0];
}

function stringToDom(str) {
    debugger;
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = str;
    return tempDiv.children[0];
}