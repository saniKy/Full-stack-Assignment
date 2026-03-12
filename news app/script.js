const API_BASE = "https://hn.algolia.com/api/v1/search?query=";

const container = document.getElementById("newsContainer");
const topicSelect = document.getElementById("topicSelect");
const button = document.getElementById("loadNews");

async function fetchNews(topic){

container.innerHTML = "Loading news...";

try{

const res = await fetch(API_BASE + topic);
const data = await res.json();

container.innerHTML = "";

data.hits.forEach(news => {

if(!news.title) return;

const card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<h3>${news.title}</h3>
<p>Author: ${news.author}</p>
<p>Points: ${news.points || 0}</p>
<a href="${news.url}" target="_blank">Read More</a>
`;

container.appendChild(card);

});

}catch(err){
container.innerHTML = "Error loading news";
}

}

button.addEventListener("click", () => {
const topic = topicSelect.value;
fetchNews(topic);
});

window.onload = () => {
fetchNews("startup");
};