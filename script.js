var tabKanjiFinal, rdnNumber, progress_bar;

document.querySelector('.start-btn').addEventListener('click', function (){
    document.getElementById("myBar").style.width = "0%";
    var Lesson = document.forms[0];
    var tabtest = [];
    var i;
    plop = 0
    tabKanjiReview=[];

    for (i = 0; i < Lesson.length; i++) {
      if (Lesson[i].checked) {
        tabtest = tabtest.concat(tabIntermediate[i])}
    }
    tabKanjiFinal = tabtest;
    progress_bar = tabKanjiFinal.length;
    incr_progress = 100 / progress_bar;
    Alea();
})

document.querySelector('.next-btn').addEventListener('click',function (){
  move(incr_progress);
  tabKanjiFinal.splice(rdnNumber,1);

  if (tabKanjiFinal.length!==0) {
    document.querySelector('.Kanji_image').style.display = 'none';
    Alea();
  }
  else if (tabKanjiFinal.length==0 && tabKanjiReview.length!==0) {
    document.querySelector('.Kanji_image').style.display = 'none';
    reviewKanji();
  }
  else {
    alert("pls click nex game");  
    console.log('There are no Knaji for review');
  }
})

document.querySelector('.result-btn').addEventListener('click',function print(){
    var rdnImage = tabKanjiFinal[rdnNumber].Path;
    var Kanji_ImageDOM = document.querySelector('.Kanji_image')
    Kanji_ImageDOM.style.display = 'block';
    Kanji_ImageDOM.src = rdnImage
})

function Alea(){
    rdnNumber = Math.floor(Math.random()*tabKanjiFinal.length);
    var rdnRomaji = 'Do the kanji for ' + tabKanjiFinal[rdnNumber].Romaniji;
    document.getElementById ('romanji').innerHTML = rdnRomaji
}

var plop=0;
function move(valu) {
    var elem = document.getElementById("myBar");
    console.log(elem.style.width);
    if (elem.style.width != "100%"){
      console.log("test");
      plop = plop + valu;
      elem.style.width = plop + "%";
    }
}

var tabKanjiReview = []; //Code Pol
function reviewKanji(){
  var reviewRoamnji = 'Do the kanji for ' + tabKanjiReview[0].Romaniji;
  document.getElementById ('romanji').innerHTML = reviewRoamnji
}

document.querySelector('.result-btn').addEventListener('click',function print(){
  if (tabKanjiFinal.length!==0) {
    var rdnImage = tabKanjiFinal[rdnNumber].Path;
    var Kanji_ImageDOM = document.querySelector('.Kanji_image')
    Kanji_ImageDOM.style.display = 'block';
    Kanji_ImageDOM.src = rdnImage
  }
  else {
  var Kanji_ImageDOM = document.querySelector('.Kanji_image')
  Kanji_ImageDOM.style.display = 'block';
  Kanji_ImageDOM.src = tabKanjiReview[0].Path;
  tabKanjiReview.shift()
  }
})

function Alea(){
  rdnNumber = Math.floor(Math.random()*tabKanjiFinal.length);
  var rdnRomaji = 'Do the kanji for ' + tabKanjiFinal[rdnNumber].Romaniji;
  document.getElementById ('romanji').innerHTML = rdnRomaji
}

document.querySelector('.addReview-btn').addEventListener('click',function () {
  tabKanjiReview.push(tabKanjiFinal[rdnNumber]);
  tabKanjiFinal.splice(rdnNumber,1);
  if (tabKanjiFinal.length!==0) {
    document.querySelector('.Kanji_image').style.display = 'none'
    Alea();
  }
  else if (tabKanjiFinal.length==0 && tabKanjiReview.length!==0) {
    document.querySelector('.Kanji_image').style.display = 'none';
    reviewKanji();
  }
  else {
    console.log('There are no Knaji for review');
    alert("pls click nex game");
  }
})

