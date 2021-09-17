const data = [{
        id: 1,
        name: 'Lawrence Grace',
        image: 'images/Maribel.png',
        bgImage: 'images/portrait.png',
        country: 'USA',
        description: 'We are here to showcase our technology in military business and a better life for all',


    },
    {
        id: 2,
        name: 'Lawrence Grace',
        image: 'images/Maribel.png',
        bgImage: 'images/portrait.png',
        country: 'USA',
        description: 'We are here to showcase our technology in military business and a better life for all',

    },
    {
        id: 3,
        name: 'Lawrence Grace',
        image: 'images/Maribel.png',
        bgImage: 'images/portrait.png',
        country: 'USA',
        description: 'We are here to showcase our technology in military business and a better life for all',

    },
    {
        id: 4,
        name: 'Lawrence Grace',
        image: 'images/Maribel.png',
        bgImage: 'images/portrait.png',
        country: 'USA',
        description: 'We are here to showcase our technology in military business and a better life for all',

    },
    {
        id: 5,
        name: 'Lawrence Grace',
        image: 'images/Maribel.png',
        bgImage: 'images/portrait.png',
        country: 'USA',
        description: 'We are here to showcase our technology in military business and a better life for all',

    },
    {
        id: 6,
        name: 'Lawrence Grace',
        image: 'images/Maribel.png',
        bgImage: 'images/portrait.png',
        country: 'USA',
        description: 'We are here to showcase our technology in military business and a better life for all',

    },
];


const lessSpeaker = document.querySelector('#speaker-less');

let lessHtml = '';
let allHtml = '';
const lessNum = 2;
const allNum = data.length;



for (let i = 0; i < lessNum; i += 1) {
    lessHtml += `
    <div class="card-4-speaker">
    <div class="s-portrait">
        <img class="f-photo" src="${data[i].image}" alt="${data[i].name}">
        <img clas="b-portrait" id="b-portrait" src="${data[i].bgImage}" alt="${data[i].name}">
    </div>
    <div class="details">
        <h3 class="detail-h-3">${data[i].name}</h3>
        <h4 class="detail-h-4">${data[i].country}</h4>
        <div class="detail-line"></div>
        <p class="detail-p-1">${data[i].description}</p>

    </div>

  </div>
    `;
}
lessSpeaker.innerHTML = lessHtml;



const showAllSpeaker = document.querySelector('#speaker-all');
// const allSpeaker = document.querySelector('#speaker-all div');

for (let i = 0; i < allNum; i += 1) {
    allHtml += `
  <div class="card-4-speaker">
  <div class="s-portrait">
      <img class="f-photo" src="${data[i].image}" alt="${data[i].name}">
      <img clas="b-portrait" id="b-portrait" src="${data[i].bgImage}" alt="${data[i].name}">
  </div>
  <div class="details">
      <h3 class="detail-h-3">${data[i].name}</h3>
      <h4 class="detail-h-4">${data[i].country}</h4>
      <div class="detail-line"></div>
      <p class="detail-p-1">${data[i].description}</p>

  </div>

</div>
`;
}
showAllSpeaker.innerHTML = allHtml;

const showMore = document.querySelector('#show-more');
const showLess = document.querySelector('#show-less');

function showSpeakers() {
    lessSpeaker.style.display = 'none';
    showAllSpeaker.style.display = 'block';
    showMore.style.display = 'none';
    showLess.style.display = 'inline-block';
}

showMore.addEventListener('click', showSpeakers);

function closeSpeakers() {
    lessSpeaker.style.display = 'block';
    showAllSpeaker.style.display = 'none';
    showMore.style.display = 'inline-block';
    showLess.style.display = 'none';
}

showLess.addEventListener('click', closeSpeakers);