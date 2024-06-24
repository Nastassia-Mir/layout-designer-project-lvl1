const elementChoose = document.querySelector('.choose');
const elementJoin = document.querySelector('.join');
const elementBoard = document.querySelector('.board');
const elementSchoolElements = document.querySelector('.school-elements');
const elementStationery = document.querySelector('.stationery');
const elementOrganicShapes = document.querySelector('.organic-shapes');


let startTextChoose = -540;

function animationTextChoose() {
    let progress = startTextChoose;
    elementChoose.style.marginLeft = progress + "px";

    if(progress > -55) {
        if(progress > -30) {
            startTextChoose +=1; 
        } else {
            startTextChoose +=10; 
        }
    } else {
        startTextChoose +=20;
    } 
    
    if (progress < 0) {
        window.requestAnimationFrame(animationTextChoose);
    }
}

let startTextJoinSize = 10.53;

function animationTextJoinSize() {
    let progress = startTextJoinSize;
    elementJoin.style.fontSize = progress + "px";
    startTextJoinSize +=0.5;

    if (progress < 20.53) {
        window.requestAnimationFrame(animationTextJoinSize);
    } else {
        window.requestAnimationFrame(animationTextChoose);
        window.requestAnimationFrame(animationImageForward);
    }
}

let startTextJoinMove = -70;

function animationTextJoinMove() {
    let progress = startTextJoinMove;
    elementJoin.style.top = progress + "px";
    if(progress > -15) {
        startTextJoinMove +=1;
    } else {
        startTextJoinMove +=3.5;
        } 
    if (progress < 0) {
        window.requestAnimationFrame(animationTextJoinMove);
    } else {
        window.requestAnimationFrame(animationTextJoinSize);
    }
}

window.requestAnimationFrame(animationTextJoinMove);

let startBoardStationeryMoveForward = 0, startSchoolShapesMoveForward = 0;

function animationImageForward() {
    let progressBoardStationeryMove = startBoardStationeryMoveForward;
    let progressSchoolShapesMove = startSchoolShapesMoveForward;
    elementBoard.style.transform = "rotate("+ progressBoardStationeryMove + "deg)";
    elementStationery.style.transform = "rotate("+ progressBoardStationeryMove + "deg)";
    elementSchoolElements.style.transform = "rotate("+ progressSchoolShapesMove + "deg)";
    elementOrganicShapes.style.transform = "rotate("+ progressSchoolShapesMove + "deg)";

    if (progressBoardStationeryMove <= -40 && progressSchoolShapesMove >= 40) {
        startBoardStationeryMoveForward -= 0.5;
        startSchoolShapesMoveForward += 0.5;
    } else {
        startBoardStationeryMoveForward -= 1.5;
        startSchoolShapesMoveForward += 1.5;
    }

    if (progressBoardStationeryMove > -49.5 && progressSchoolShapesMove < 49.5) {
    window.requestAnimationFrame(animationImageForward);
    }
    else {
        setTimeout(stopAnimationImageBack, 100);
    }
}
    
function stopAnimationImageBack() {
    window.requestAnimationFrame(animationImageBack);
}

let startBoardStationeryMoveBack = -49.5, startSchoolShapesMoveBack = 49.5;
function animationImageBack() {
    let progressBoardStationeryMoveBack = startBoardStationeryMoveBack;
    let progressSchoolShapesMoveBack = startSchoolShapesMoveBack;
    elementBoard.style.transform = "rotate("+ progressBoardStationeryMoveBack + "deg)";
    elementStationery.style.transform = "rotate("+ progressBoardStationeryMoveBack + "deg)";
    elementSchoolElements.style.transform = "rotate("+ progressSchoolShapesMoveBack + "deg)";
    elementOrganicShapes.style.transform = "rotate("+ progressSchoolShapesMoveBack + "deg)";
    
    if (progressBoardStationeryMoveBack >= 40 && progressSchoolShapesMoveBack <=40) {
        startBoardStationeryMoveBack += 0.5;
        startSchoolShapesMoveBack -= 0.5;
    } else {
        startBoardStationeryMoveBack += 1.5;
        startSchoolShapesMoveBack -= 1.5;
    }

    if (progressBoardStationeryMoveBack < 0 && progressSchoolShapesMoveBack > 0) {
        window.requestAnimationFrame(animationImageBack);
    }
}