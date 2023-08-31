let processScroll = () => {
  let docElem = document.documentElement,
    docBody = document.body

  let scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
    scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight

  let scrollPercent = scrollTop / scrollBottom * 100 + '%';

  document.getElementById("progress-bar").style.setProperty("--netWidth", scrollPercent);
}
document.addEventListener('scroll', processScroll);

const currentYear = new Date().getFullYear();
const year = document.getElementById('year');
year.textContent = currentYear;


// let showSearch = () =>{
//   let sb =document.getElementById("searchbox")
//   sb.style.classList.remove('dis-none');
//   sb.style.classList.add('dis-static');
// }
// document.getElementById("sicon").addEventListener('click', showSearch);