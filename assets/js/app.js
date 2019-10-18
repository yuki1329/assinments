$('.menuWrapper').on('click', function(){
  // テキストの入れ替え
  let text = 'menu';
  if($(this).hasClass('on')){
    text = 'menu';
  }else{
    text = 'close';
  }
  $(this).toggleClass('on').find('.menuBtn').text(text);
});
let btn = document.getElementById('btn');

btn.addEventListener('click', people);
function people() {
let changeImg = document.getElementById('change-Img');
let name = document.getElementById('name');
let res = [
  ['sisig', 'Sisig'],
  ['lechon', 'Lechon'],
  ['lumpia', 'Lumpia'],
  ['Sinigang', 'Shinigang'],
  ['balut','Balut'],
  ['Adobo','Adobo'],
  ['haroharo','Haroharo'],
  ['Kare-kare','Karekare'],
  ['Pansit-canton','Pansit Canton'],
  ['Turon','Turon']
  ]; //結果の配列

let randomNum = Math.random();
let num = Math.floor(randomNum * res.length);


changeImg.src = 'assets/img/' + res[num][0] + '.jpg';
name.textContent = res[num][1];
}