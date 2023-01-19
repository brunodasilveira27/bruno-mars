const game_cards = [
  'bruno-mars1',
  'bruno-mars2',
  'bruno-mars3',
  'bruno-mars4',
  'bruno-mars5',
  'bruno-mars6',
  'bruno-mars7',
  'bruno-mars8',
  'bruno-mars9',
  'bruno-mars10',
  'bruno-mars11',
  'bruno-mars12',
  'bruno-mars13',
  'bruno-mars14',
];

const grid = document.querySelector('.grid');
const p_time = document.querySelector('.config > p');
const select = { first : '', second : '' };
let playing = false;
const time = { minutes : 0, seconds : 0 };

const createTime = (stop)=>{
  let minutes = time.minutes < 10 ? '0' + time.minutes : time.minutes;
  let seconds = time.seconds < 10 ? '0' + time.seconds : time.seconds;
    if(!stop) {
       this.interval = setInterval(()=>{
         if(time.seconds <= 59) {
            minutes = time.minutes < 10 ? '0' + time.minutes : time.minutes;
            seconds = time.seconds < 10 ? '0' + time.seconds : time.seconds;
            time.seconds++;
         }else if(time.minutes < 9) {
            time.minutes++;
            time.seconds = 0;
         }else {
           
         };
         
         p_time.innerText = `Tempo: ${minutes}:${seconds}`;
       }, 1000);
    }else{
      clearInterval(this.interval);
    };
};

const verify_cards = ()=>{
  const firstCard = select.first.getAttribute('data-card');
  const secondCard = select.second.getAttribute('data-card');
    if(firstCard === secondCard) {
       addClass(select.first.firstChild, ['disabled-card']);
       addClass(select.second.firstChild, ['disabled-card']);
         select.first = select.second = '';
    }
    else {
      setTimeout(()=>{
        removeClass(select.first, ['actived-card']);
        removeClass(select.second, ['actived-card']);
          select.first = select.second = '';
      }, 500);
    };
};

const createCards = (data)=>{
  const card = createElements('div', ['card']);
  const front = createElements('div', ['face', 'front']);
  const back = createElements('div', ['face', 'back']);
    front.style.backgroundImage = `url('images/${data}.jpg')`;
    grid.append(card);
                card.append(front);
                card.append(back);
                card.setAttribute('data-card', data);
                card.addEventListener('click', ({target})=>{
                  if(target.parentNode.className.includes('actived-card')) {
                     return;
                  } else {
                    if(select.first === '') {
                       addClass(card, ['actived-card']);
                       select.first = target.parentNode;
                    }
                    else if(select.second === '') {
                       addClass(card, ['actived-card']);
                       select.second = target.parentNode;
                         verify_cards();
                    };
                  };
                  if(!playing) {
                      playing = true;
                      createTime();
                  };
                });
};

function newGame() {
  const spread = [...game_cards, ...game_cards];
  const sort = spread.sort(()=>Math.random() - 0.5);
        sort.forEach((data)=>{
          createCards(data);
        });
};

window.onload = function() {
// game start
newGame();
};