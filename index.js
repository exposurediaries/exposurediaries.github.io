let score = 0;
function buttonEvent(e){
    document.getElementById('player').textContent = e.toUpperCase();
    let comp = computer();
    document.getElementById('computer').textContent = comp.toUpperCase();
    let result = calculate(e,comp);
    document.getElementById('result').textContent = result;
    if(result == 'You Won'){
        score++;
    }
    else if(result == 'You Lost'){
        score --;
    }
    document.getElementById('score').textContent = score;
}

function calculate(player,computer){
    if(player == computer){
        return 'Draw';
    }
    if(player == 'rock'){
        if(computer=='paper'){
            return 'You Lost';
        } else {
            return 'You Won';
        }
    }
    if(player == 'paper'){
        if(computer == 'rock'){
            return 'You Won';
        } else{
            return 'You Lost';
        }
    }
    if(player == 'scissors'){
        if(computer == 'rock'){
            return 'You Lost';
        } else{
            return 'You Won';
        }
    }
}

function computer(){
    let x = Math.floor(Math.random() * 101);
    if(x<33){
        return 'rock';
    }
    else if(x>33 && x<67){
        return 'paper';
    }
    else if(x>67){
        return 'scissors';
    }
}