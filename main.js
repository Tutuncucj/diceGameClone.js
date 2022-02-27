
let btn = document.querySelector(".btn").addEventListener("click", win)

function win(){

    let randomNumber1 = Math.floor(Math.random()*6) + 1 ;
    let randomDiceImg = "images/" + "dice" + randomNumber1 + ".png";
        document.querySelectorAll("img")[0].setAttribute("src", randomDiceImg);
    
    let randomNumber2 = Math.floor(Math.random()*6) + 1 ;
    let randomDiceImg2 = "images/" + "dice" + randomNumber2 + ".png";
        document.querySelectorAll("img")[1].setAttribute("src", randomDiceImg2);

    let header = document.querySelector("h1");
        
    if(randomNumber1 > randomNumber2) {

        header.innerHTML = "🐼 İbrahim Wins!"
        let p = document.createElement("p");
        p.innerHTML = "🐼🐼🐼🐼🐼🐼🐼🐼"
        header.append(p)
        
    }else if (randomNumber1 < randomNumber2){
        header.innerHTML = "🌼Pelin Wins!🌼"
        let p = document.createElement("p");
        p.innerHTML = "🌼🌼🌼🌼🌼🌼🌼🌼"
        header.append(p)
    }   
    else {
        header.innerHTML = "🐼 İt's a Draw 🌼"
        let p =  document.createElement("p");
        p.innerHTML = "🤝🏻 Please Try Again 🤝🏻"
        header.append(p)
}            
    }

