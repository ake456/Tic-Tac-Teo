let title = document.querySelector('.title');
let turn = 'x';
let spuares = [];
let restart = document.querySelector('.re');
function end(num1,num2,num3) {
    title.innerHTML = `${spuares[num1]} winner`;
        document.getElementById('item'+num1).style.background = '#000';
        document.getElementById('item'+num2).style.background = '#000';
        document.getElementById('item'+num3).style.background = '#000';
        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000);
}
function winnner(){
    for (let i = 1; i < 10; i++) {
        spuares[i] = document.getElementById('item' + i).innerHTML;
    }
    if (spuares[1] == spuares[2] && spuares[2] == spuares[3] && spuares[1] != '') {
        end(1,2,3);
    } else if (spuares[4] == spuares[5] && spuares[5] == spuares[6] && spuares[5] != '') {
        end(4,5,6);
    } else if (spuares[7] == spuares[8] && spuares[8] == spuares[9] && spuares[8] != '') {
        end(7,8,9);
    } else if (spuares[1] == spuares[4] && spuares[4] == spuares[7] && spuares[4] != '') {
        end(1,4,7);
    } else if (spuares[2] == spuares[5] && spuares[5] == spuares[8] && spuares[5] != '') {
        end(2,5,8);
    } else if (spuares[3] == spuares[6] && spuares[6] == spuares[9] && spuares[6] != '') {
        end(3,6,9);
    } else if (spuares[1] == spuares[5] && spuares[5] == spuares[9] && spuares[5] != '') {
        end(1,5,9);
    } else if (spuares[3] == spuares[5] && spuares[5] == spuares[7] && spuares[5] != '') {
        end(3,5,7);
    }
}

function game(id) {
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML == ''){
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O';
    } else if(turn === 'o' && element.innerHTML == '') {
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X';
    }
    winnner();
}

restart.addEventListener('click' , function restart() {
    setTimeout(function(){location.reload()},100);
})
