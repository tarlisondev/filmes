const myVideo = document.querySelector('iframe');
const list = document.querySelector("#list");
const span = document.querySelector('span');

const listVideo = Videos.map((video) => {

  const btn = document.createElement('button');
  btn.innerText += video.name + " " + video.id
  console.clear();

  list.appendChild(btn);

  btn.addEventListener("click", async () => {
    myVideo.src = `https://drive.google.com/file/d/${video.link}/preview`;
    span.innerText = video.name + " " + video.id
    console.clear();
  })
})

console.clear();

