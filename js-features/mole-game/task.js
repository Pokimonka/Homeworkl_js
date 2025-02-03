const killedMole = document.getElementById("dead");
const missMole = document.getElementById("lost");
let holes = document.querySelectorAll(".hole");
let score = 0;
let miss = 0;

document.addEventListener('DOMContentLoaded', function () {

    function play(hole) {
        if (hole.target.classList.contains('hole_has-mole')) {
            killedMole.textContent = ++score;
        } else {
            missMole.textContent = ++miss;
        }
        if (score === 10) {
            endPlay("Победа");
        } else if (miss === 5) {
            endPlay("Проигрыш");
        }

    }

    function endPlay(msg){
        alert(msg);
        score = 0;
        miss = 0;
        killedMole.textContent = score;
        missMole.textContent = miss;
    }

    holes.forEach(hole => {
        hole.addEventListener('click', play);
    });

})
