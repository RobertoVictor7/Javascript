const links = document.querySelectorAll('a');

function handleClick(e) {
  e.preventDefault();
  fetchPage(e.target.href);
  window.history.pushState(null,null,e.target.href)
}

async function fetchPage(url) {
    const pageResponse = await fetch(url);
    const pageText = await pageResponse.text();
    replaceContent(pageText)
}

function replaceContent(newText) {
    const newHtml = document.createElement('div');
    newHtml.innerHTML = newText;
    

    const oldContent = document.querySelector('.content');
    const newContent = newHtml.querySelector('.content');

    oldContent.innerHTML = newContent.innerHTML;
    document.title =  newHtml.querySelector('title').innerText;
}

window.addEventListener('popstate', () => {
    fetchPage(window.location.pathname);
})

links.forEach(link => {
    link.addEventListener('click', handleClick);
})