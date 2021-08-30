const loadData = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => loadQoute(data))
}
const loadQoute = data => {
    const qoteElement = document.getElementById('qoute');
    qoteElement.innerHTML = data.quote;
}