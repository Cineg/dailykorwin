let bg = document.getElementById('bg');
let korwin = document.getElementById('korwin');
let korwinimg = 0;
let backgroundimg = 0;

let backgrounds = [
  {
    src: 'http://e-kartki.net.pl/kartki/72/2/d/pyszna-kawa-na-dzien-dobry.jpg',
    position: 'left: 50%;',
    bgposition: "background-position: left;",
  },
  {
    src: 'http://id.joe.pl/sub_images/pictures/3f5c1e78cebb0b9da21efd0de630913d_th2.gif',
    position: 'left: 50%;',
    bgposition: "background-position: left;",
  },
  {
    src: 'https://img1.obrazkionline.pl/ob/dzien-dobry/dzien-dobry_017.jpg',
    position: 'left: 0px;',
    bgposition: "background-position: right;"
  },
  {
    src: 'https://img1.obrazkionline.pl/ob/milego-dnia/milego-dnia_003.jpg',
    position: 'left:0px;',
    bgposition: "background-position: right;"
  },
  {
    src: 'https://img1.obrazkionline.pl/ob/dzien-dobry/dzien-dobry_011.jpg',
    position: 'left: 50%;',
    bgposition: "background-position: left;",
  },
  {
    src: 'http://memy.tapeciarnia.pl/memy/milego-dnia.jpg',
    position: 'left: 0px;',
    bgposition: "background-position: right;",
  }

]

let korwins = [
  {
    src: 'http://gfx.archiwum.radiozet.pl/var/radiozetv3/storage/images/wybory-prezydenckie-kandydaci-sondaze-analizy/kandydaci-na-prezydenta/janusz-korwin-mikke.-rodzina-poglady-biografia-wybory-2015/538751-5-pol-PL/Janusz-Korwin-Mikke.png'
  },
  {
    src: "imgs/1.png"
  },
  {
    src: "imgs/2.png"
  },
  {
    src: "imgs/3.png"
  }
]



bg.style =  'background: url('+backgrounds[5].src+');'+
            'background-size: cover;';
korwin.style =  'background:  url('+korwins[3].src+');'+
                'background-size: cover;'+
                'background-repeat: no-repeat;'+
                 backgrounds[backgroundimg].position+
                 backgrounds[backgroundimg].bgposition+
                'height: 300px; width" 300px;';


function korwinleft(){

  if(korwinimg == 0){
    korwinimg = korwins.length-1;
  }else{
    korwinimg -=1;
  }
  korwin.style =  'background:  url('+korwins[korwinimg].src+');'+
                  'background-size: cover;'+
                  'background-repeat: no-repeat;'+
                   backgrounds[backgroundimg].position+
                   backgrounds[backgroundimg].bgposition+
                   'height: 300px; width" 300px;';
}

function korwinright(){
  if(korwinimg == korwins.length-1){
    korwinimg = 0;
  }else{
    korwinimg +=1;
  }
  korwin.style =  'background:  url('+korwins[korwinimg].src+');'+
                  'background-size: cover;'+
                  'background-repeat: no-repeat;'+
                   backgrounds[backgroundimg].position+
                   backgrounds[backgroundimg].bgposition+
                   'height: 300px; width" 300px;';
}

function bgleft(){
  if(backgroundimg == 0){
    backgroundimg = backgrounds.length-1;
  }else{
    backgroundimg -=1;
  }
  bg.style =  'background: url('+backgrounds[backgroundimg].src+');'+
              'background-size: cover;';
  korwin.style =  'background:  url('+korwins[korwinimg].src+');'+
                  'background-size: cover;'+
                  'background-repeat: no-repeat;'+
                   backgrounds[backgroundimg].position+
                   backgrounds[backgroundimg].bgposition+
                   'height: 300px; width" 300px;';
}

function bgright(){
  if(backgroundimg == backgrounds.length-1){
    backgroundimg = 0;
  }else{
    backgroundimg +=1;
  }
  bg.style =  'background: url('+backgrounds[backgroundimg].src+');'+
              'background-size: cover;';
  korwin.style =  'background:  url('+korwins[korwinimg].src+');'+
                  'background-size: cover;'+
                  'background-repeat: no-repeat;'+
                   backgrounds[backgroundimg].position+
                   backgrounds[backgroundimg].bgposition+
                   'height: 300px; width" 300px;';
}
