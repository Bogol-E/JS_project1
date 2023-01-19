// DOM 요소 생성 함수
/*
function domAdd(){
    console.log('domAdd');
}
*/

const dispDom = (bt1p, bt2p) => {
    // DOM 제어
    document.getElementById("bt1").style.display = bt1p;
    document.getElementById("bt2").style.display = bt2p;
  }

const showDice = () =>{
    const n = Math.floor(Math.random()*6) + 1
    const s1 = document.querySelector("#s1")

    s1.innerHTML = `<img src=./images/${n}.png>`
    console.log(n)
    dispDom("none", "block");
}


