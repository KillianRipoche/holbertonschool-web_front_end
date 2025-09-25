function createElement(data) {
  const text = document.createElement("p");
  text.textContent = data;
  document.body.appendChild(text);
};

function queryWikipedia(callback) {
  const content = new XMLHttpRequest();
  content.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
  content.onload = function () {
    if (content.status === 200) {
      const response = JSON.parse(content.responseText);
      const pages = response.query.pages;
      const extract = Object.values(pages)[0].extract;
      callback(extract);
    }
  }
  content.send();
}

queryWikipedia(createElement);
