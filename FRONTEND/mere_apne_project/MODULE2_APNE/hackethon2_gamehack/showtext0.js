let showmorebtn0 = document.querySelector('#showmorebp0');
let pbtn = document.querySelector('#paragraphdes');
let addtocartbtn = document.querySelector('#addtocartb');
let buttonsp1click = document.querySelector('.buttonsp1');

let f0 = false;

let flag = false;
addtocartbtn.addEventListener("click" ,function(){
    if(flag == false){
    addtocartbtn.innerHTML = `ADDED TO CART`;

    let modaldiv = document.createElement('div');
    modaldiv.classList.add('viewcartshow');

    modaldiv.innerHTML = `
    <button id="viewcartbp0">View Cart</button>
    <p id="messageinterest">THANK YOU FOR SHOWING YOUR INTEREST IN THIS PRODUCT</p>
    `;
    
    buttonsp1click.append(modaldiv);
    flag = true;

    let addb = document.querySelector('#viewcartbp0');

    addb.addEventListener("click" , function(){
        localStorage.setItem("f0","true");
        window.location.assign("./addtocart.html");
    });
    }
    else{
        return;
    }
});

showmorebtn0.addEventListener("click" , function(){
    if(showmorebtn0.innerHTML == `Show More`){
        pbtn.innerHTML = `Tekken 7 focuses on 1v1 battles.[5] New features to the gameplay include:

        Rage Art: A critical move unique to each character and only accessible while in Rage mode, causing it to deactivate until the next round. If the initial attack hits the opponent, it will trigger a cinematic sequence and deal roughly 30% damage, depending on the character.
        Power Crush: Performs an attack that can absorb an opponent's hits with the Mid or High property and continue attacking.[6]
        Screw hits: This largely replaces the Ground Bound (formerly simply as Bound) mechanic, which added significant opportunity to perform long, high-damage combos, by knocking an opponent hit with a launcher back to the ground into a vulnerable state. Screw hits have similar applications as Ground Bounding moves, but the receiving opponent's animation is altered, putting them into an aerial tailspin (i.e. a "screw") as they fall to the ground. Unlike the Ground Bound, Screw hits cannot be used to do wall combos.
        With a new display system, the game's multiplayer allows players to choose which side of the screen to play on.[7] Movement has undergone some changes and is similar to the movement mechanics found in Tekken Revolution, most notably when characters walk backwards. The arcade version features the traditional stage-based playthrough, in which the player progresses by beating five different opponents one by one, ending with a fixed penultimate and final stage. Matches may be interrupted if another player joins the game. Online mode is available for both local and international play. Character customization is featured, allowing the player to modify characters' appearances.[8] For the first time in the arcade series, the game features a practice mode, which allows players to train moves against an opponent for a limited amount of time, as well as an option to collect in-game rewards, mainly customization items, through "Treasure Box" by winning enough matches.
        
        <p>
        The Fated Retribution update for arcades adds further gameplay changes.

Rage Drive: Most characters have one or more Rage Drive moves, which are either brand new moves or powered-up variations of existing moves. Like the Rage Art, it requires sacrificing their Rage mode for the round, trading the severe damage of the Rage Art for a move with less risk and different utility.
Rage Art was also adjusted so that the amount of damage dealt to the enemy is inversely proportional to the player's current health bar.
Among several new and returning characters, the update introduced Akuma, the first of several additional characters utilizing their own unique mechanics which follow the gameplay conventions of the 2D fighting games he originates from, including:

Cancelling successful or blocked attacks with special moves.
Different jump physics and air attacks which can be used more offensively than the Tekken series' standard jump attacks.
A Super Combo meter which builds up as the fight progresses, and is spent in order to use "EX" versions of special moves and Super Combo moves.
Lacking some of Tekken 7's own gameplay mechanics like the Rage Drive and 10-hit combo moves.
Two other characters added as downloadable content (DLC) after the release of the home versions of the game would include very similar fighting mechanics, those characters being Eliza and Geese. Another guest character, Noctis, has more standard Tekken gameplay but can perform jump-in attacks like the "2D" characters.

Updates to the arcade and home versions also added moves applying a Wall Bound hit state for all characters. Initially, only Geese Howard was able to perform moves inflicting the wall bound state, until the Season 2 update added the mechanic for every character.[9]
</p>
        `;
        showmorebtn0.innerHTML = `Show Less`;
        }
        else{
            pbtn.innerHTML = ` Tekken 7 focuses on 1v1 battles.[5] New features to the gameplay include:
            Rage Art: A critical move unique to each character and only accessible while in Rage mode, causing it to deactivate until the next round. If the initial attack hits the opponent, it will trigger a cinematic sequence and deal roughly 30% damage, depending on the character.
            Power Crush: Performs an attack that can absorb an opponent's hits with the Mid or High property and continue attacking.[6]
            Screw hits: This largely replaces the Ground Bound (formerly simply as Bound) mechanic, which added significant opportunity to perform long, high-damage combos, by knocking an opponent hit with a launcher back to the ground into a vulnerable state. Screw hits have similar applications as Ground Bounding moves, but the receiving opponent's animation is altered, putting them into an aerial tailspin (i.e. a "screw") as they fall to the ground. Unlike the Ground Bound, Screw hits cannot be used to do wall combos.
            With a new display system, the game's multiplayer allows players to choose which side of the screen to play on.[7] Movement has undergone some changes and is similar to the movement mechanics found in Tekken Revolution, most notably when characters walk backwards. The arcade version features the traditional stage-based playthrough, in which the player progresses by beating five different opponents one by one, ending with a fixed penultimate and final stage. Matches may be interrupted if another player joins the game. Online mode is available for both local and international play. Character customization is featured, allowing the player to modify characters' appearances.[8] For the first time in the arcade series, the game features a practice mode, which allows players to train moves against an opponent for a limited amount of time, as well as an option to collect in-game rewards, mainly customization items, through "Treasure Box" by winning enough matches.
        `;
            showmorebtn0.innerHTML = `Show More`;
        }
});




