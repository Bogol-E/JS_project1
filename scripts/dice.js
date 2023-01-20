// DOM 요소 생성 함수
/*
function domAdd(){
    console.log('domAdd');
}
*/


const dispDom = (s1P, s2P, bt1p, bt2p) => {
    // DOM 제어
    document.getElementById("s1").style.display = s1P;
    document.getElementById("s2").style.display = s2P;
    document.getElementById("bt1").style.display = bt1p;
    document.getElementById("bt2").style.display = bt2p;
  }

  

const showDice = () =>{
    const n = Math.floor(Math.random()*6) + 1;
    const s1 = document.querySelector("#s1");

    s1.innerHTML = `<img src=./images/${n}.png>`;
    console.log(n);

    const un = document.querySelectorAll("input[type=radio]");

    let ox;
    if (n == un) {
      ox = "o";
    } else {
      ox = "x";
    }
    console.log(n, ox);
  
    s2.innerHTML = `<img src=./images/${ox}.png>`;
    console.log(`사용자 선택 수 확인 => ${un}`);

    
    dispDom("block", "block", "none", "block");
}

const showOk = () => {
    
    window.location.reload()
  
  }


