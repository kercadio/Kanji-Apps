class Item {
    constructor(Romaniji, English, Path) {
      this.Romaniji = Romaniji;
      this.English = English;
      this.Path = Path;
    }
  }

Niku = new Item("Niku", "Beef","Kanji/NikuKanji.PNG");
Sora = new Item("Sora", "Sky","Kanji/SkyKanji.PNG");
Tori = new Item("Tori", "Bird","Kanji/Tori.PNG");
Mono = new Item("Mono","Thing","Kanji/Mono.PNG");
Gohan = new Item("Gohan","Food","Kanji/Gohan.PNG");
Umi = new Item("Umi", "Sea","Kanji/Umi.PNG");
Karada = new Item("Karada", "Same","Kanji/Karada.PNG");
Onaji = new Item("Onaji", "same","Kanji/Onaji.PNG");
Ryo = new Item("Ryo", "Ingredient","Kanji/Ryo.PNG");
Toku = new Item("Toku", "Special","Kanji/Toku.PNG");
Ri = new Item("Ri", "Reason","Kanji/Ri.PNG");
Hiru = new Item("Hiru", "daytime","Kanji/Hiru.PNG");
tsuku = new Item("Tsuku","Arrive","Kanji/Tsuku.PNG");
Yasui = new Item("Yasui", "Cheap", "Kanji/Yasui.PNG");
Warui = new Item("Warui", "Bad","Kanji/Warui.PNG");
Minato = new Item("Minato", "Port","Kanji/Minato.PNG");
//
Kanojo = new Item("Kare", "He", "Kanji/Kanojo.PNG");
Dai = new Item("Dai", "age_Era","Kanji/Dai.PNG");
Ryu = new Item("Ryu", "to stay", "kanji/Ryu.PNG");
Kasoku = new Item("zoku", "family", "Kanji/Kazoku.PNG");
Oya = new Item("Oya", "Parents", "Kanji/Oya.PNG");
Kiru = new Item("Kiru", "to cut", "Kanji/Kiru.PNG");
Eigo= new Item("Eigo","English", "Kanji/Eigo.PNG");
Mise = new Item("Mise","Shop","Kanji/Mise.PNG"); 
//
Shinu = new Item("Shinu","to die","Kanji/Shinu.PNG");
Imi = new Item("Imi","Meaning","Kanji/Imi.PNG");
Aji = new Item("Aji", "Taste","Kanji/Aji.PNG");
Chyuu =new Item("Chyuu","to pour","Kanji/Chyuu.PNG");
Natsu =new Item("Nastu", "Summer","Kanji/Natsu.PNG");
Sakana = new Item("Sakana", "Fish","Kanji/Sakana.PNG");
Tera = new Item("Tera","Temple","Kanji/Tera.PNG");
Hiro =new Item("Hiro", "Spacius;wide","kanji/Hiro.PNG");
Ten =new Item("Ten","To roll over","Kanji/Ten.PNG");
Kariru =new Item("Kariru", "To borrow", "Kanji/Kariru.PNG");
Hashi =new Item("Hashi", "to run", "Kanji/Hashi.PNG");
Tate =new Item("Tate", "to build", "Kanji/Tate.PNG");
Chi = new Item("Chi", "Ground","Kanji/Te.PNG");
Ba =new Item("Ba","Place","Kanji/Ba.PNG");
Ashi =new Item("Ashi", "Hand","Kanji/Ashi.PNG");
Too =new Item("Too","to pass", "Kanji/Too.PNG");

var tabKanji_treize = [Niku, Sora,Tori,Mono,Gohan,Hiru,Umi,Karada,Onaji,Ryo,Toku,Ri,Hiru,tsuku,Yasui,Warui,Minato]
var tabKanji_quatorze = [Kanojo,Dai,Ryu,Kasoku,Oya,Kiru,Eigo,Mise]
var tabKanji_quinze = [Shinu,Imi,Aji,Chyuu,Natsu,Sakana,Tera,Hiro,Ten,Kariru,Hashi,Tate,Chi,Ba,Ashi,Too]
var tabIntermediate = [tabKanji_treize, tabKanji_quatorze,tabKanji_quinze]

var tabKanjiFinal, rdnNumber;

document.querySelector('.start-btn').addEventListener('click', function (){
    var Lesson = document.forms[0];
    var tabtest = [];
    var i;
    for (i = 0; i < Lesson.length; i++) {
      if (Lesson[i].checked) {
        tabtest = tabtest.concat(tabIntermediate[i])
      }
    }
    tabKanjiFinal = tabtest;
    Alea();
  })

  
document.querySelector('.next-btn').addEventListener('click',function (){
  tabKanjiFinal.splice(rdnNumber,1);
  if (tabKanjiFinal.length!==0) {
    document.querySelector('.Kanji_image').style.display = 'none'
    Alea();
  }else alert("pls click nex game")
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

//////This is the new file

var tabKanjiFinal, rdnNumber;

var tabKanjiReview = []; //Code Pol

document.querySelector('.start-btn').addEventListener('click', function (){
  var Lesson = document.forms[0];
  var tabtest = [];
  var i;
  tabKanjiReview=[];
  for (i = 0; i < Lesson.length; i++) {
    if (Lesson[i].checked) {
      tabtest = tabtest.concat(tabIntermediate[i])
    }
  }
  tabKanjiFinal = tabtest;
  Alea();
})

  
document.querySelector('.next-btn').addEventListener('click',function (){
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

function reviewKanji(){
  var reviewRoamnji = 'Do the kanji for ' + tabKanjiReview[0].Romaniji;
  document.getElementById ('romanji').innerHTML = reviewRoamnji
}
