var result1=Math.floor((Math.random()*6)+1);
var result2=Math.floor((Math.random()*6)+1);

if(result1>result2){
    
    document.querySelector(".winner").innerHTML="Player 1";
}
else if(result1<result2){
    document.querySelector(".winner").innerHTML= "Player 2";
    
}
else{
    document.querySelector("p1").innerHTML= "Draw";

}

switch (result1) {
    case 1:
        document.querySelector(".ludo_img1").setAttribute("src","img/dice1.png");
        break;
    case 2:
        document.querySelector(".ludo_img1").setAttribute("src","img/dice2.png");
        break;
    case 3:
        document.querySelector(".ludo_img1").setAttribute("src","img/dice3.png");
        break;
    case 4:
        document.querySelector(".ludo_img1").setAttribute("src","img/dice4.png");
        break;
    case 5:
        document.querySelector(".ludo_img1").setAttribute("src","img/dice5.png");
        break;
    case 6:
        document.querySelector(".ludo_img1").setAttribute("src","img/dice6.png");
        break;

    default:
        document.querySelector(".ludo_img1").setAttribute("alt","refresh");
        break;
}
switch (result2) {
    case 1:
        document.querySelector(".ludo_img2").setAttribute("src","img/dice1.png");
        break;
    case 2:
        document.querySelector(".ludo_img2").setAttribute("src","img/dice2.png");
        break;
    case 3:
        document.querySelector(".ludo_img2").setAttribute("src","img/dice3.png");
        break;
    case 4:
        document.querySelector(".ludo_img2").setAttribute("src","img/dice4.png");
        break;
    case 5:
        document.querySelector(".ludo_img2").setAttribute("src","img/dice5.png");
        break;
    case 6:
        document.querySelector(".ludo_img2").setAttribute("src","img/dice6.png");
        break;

    default:
        document.querySelector(".ludo_img2").setAttribute("alt","refresh");
        break;
}