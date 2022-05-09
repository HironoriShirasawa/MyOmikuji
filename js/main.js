'use strict';

{
  const btn = document.getElementById('btn');
 
  btn.addEventListener('click', ()=> {
    // const results = ['大吉','中吉','吉','末吉','凶','大凶'];
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = '大吉'; //5%
    } else if (n < 0.3) {
      btn.textContent = "中吉";//25%git
    } else if (n < 0.75) {
      btn.textContent = "吉"; //45%
    } else if (n < 0.95){
      btn.textContent = "凶" //20%
    } else {
      btn.textContent = "大凶" //5%
    }
  });
}