const music = new Audio();
      music.src = './audios/music.mp3';
      music.volume = .5;
      
let music_status = 'off';

const addClass = (el, cl)=>{
  cl.forEach((c)=>{
    el.classList.add(c);
  });
};

const removeClass = (el, cl)=>{
  cl.forEach((c)=>{
    el.classList.remove(c);
  });
};

const createElements = (el, cl)=>{
  const html = document.createElement(el);
    addClass(html, cl);
  return html;
};

function music_play() {
  const status = document.querySelectorAll('.status')[0];
    if(music_status === 'off') {
       addClass(status, ['status-on']);
       removeClass(status, ['status-off']);
     music_status = 'on';
     status.innerText = music_status.toUpperCase();
       music.play();
    } else {
       addClass(status, ['status-off']);
       removeClass(status, ['status-on']);
     music_status = 'off';
     status.innerText = music_status.toUpperCase();
       music.pause();
    };
};

function content_open() {
  const content = document.querySelector('.content');
     if(content) {
        if(content.classList.contains('close')) {
           removeClass(content, ['close']);
        };
          addClass(content, ['open']);
     };
};

function content_close() {
  const content = document.querySelector('.content');
     if(content) {
        if(content.classList.contains('open')) {
           removeClass(content, ['open']);
        };
          addClass(content, ['close']);
     };
};

function settings_open() {
  const settings = document.querySelector('.settings');
     if(settings) {
        if(settings.classList.contains('close')) {
           removeClass(settings, ['close']);
        };
          addClass(settings, ['open']);
          content_close();
     };
};

function settings_close() {
  const settings = document.querySelector('.settings');
     if(settings) {
        if(settings.classList.contains('open')) {
           removeClass(settings, ['open']);
        };
          addClass(settings, ['close']);
          content_open();
     };
};