let showmorebtn = document.querySelector('#showmoreb');
let pbtn = document.querySelector('#paragraphdes');
let addtocartbtn = document.querySelector('#addtocartb');
let buttonsp1click = document.querySelector('.buttonsp1');

let f1 = false;
let flag = false;
addtocartbtn.addEventListener("click" ,function(){
    if(flag == false){
    addtocartbtn.innerHTML = `ADDED TO CART`;

    let modaldiv = document.createElement('div');
    modaldiv.classList.add('viewcartshow');

    modaldiv.innerHTML = `
    <button id="viewcartb">View Cart</button>
    <p id="messageinterest">THANK YOU FOR SHOWING YOUR INTEREST IN THIS PRODUCT</p>
    `;

buttonsp1click.append(modaldiv);
flag = true;
let addb = document.querySelector('#viewcartb');

    addb.addEventListener("click" , function(){
        localStorage.setItem("f1","true");
        window.location.assign("./addtocart.html");
    });


    }
    else{
        return;
    }
});


showmorebtn.addEventListener("click" , function(){
    if(showmorebtn.innerHTML == `Show More`){
    pbtn.innerHTML = `Played from a third-person perspective, the game is a cover-based third-person shooter with up to four players being able to complete missions together.[1] The game takes place in Washington D.C. seven months after its predecessor, in which a civil war between survivors and villainous bands oflag marauders breaks out.[2] In the beginning oflag the game, players create their own Division agent by customizing the character's gender and appearance.[3] In the game, players are equipped with different firearms, including assault rifles, sniper rifles and Submachine guns, and explosives like grenades to defeat enemies. These weapons are classified into different tiers and rarity. High-quality guns are difficult to obtain, but they have better weapon stats and "talents" that further help boost players' performance. The weapon stats include the following 7 domains: Damage, Rounds Per Minute, Magazine Size, Accuracy, Stability, Reload Time, and Damage Drop Off.[4] These weapons can be further customized with different attachments like scopes, iron sights and barrel attachments.[5] The game features a variety oflag gear and armor. Wearing gear from the same brand gives players a small performance boost.[6] As players complete missions, they gain loot and experience points (XP). With sufficient XP, they level up and gain SHD Tech, a currency to unlock new skills.[7] These skills include deploying gun turrets, shields and combat drones, or gaining access to weapons like seeker mines and chem launchers. Each skill has unique mods that change its functionality.[8] The game introduces new enemy types, including healers and characters that shoot foam at players.[9] Players can request backup during missions, which allows other players to join their sessions.[10] Players can join a clan, which can accommodate up to 50 players. The actions oflag individual members oflag a clan contribute to clan XP, which can be used to upgrade the clan for additional gameplay benefits.[11]
    <p>
    The Division 2 is set after the events oflag Tom Clancy's The Division, in a world devastated by Green Poison, a potent smallpox strain engineered and released in New York City by an environmental terrorist. Green Poison became a pandemic, resulting in casualties and chaos on a global scale. Facing imminent social collapse, the United States government activated a contingent oflag domestic sleeper agents called the Strategic Homeland Division (SHD), or "The Division", to preserve order and continuity oflag government. Division agents leverage advanced technology and wide autonomy to deal with threats as they see fit. They are supplemented on the field with an advanced A.I. system called ISAC.

By the beginning oflag The Division 2, most government and military personnel have evacuated Washington D.C., which has descended into lawlessness. The White House is controlled by local Division agents and a coalition oflag first responders called the Joint Task Force (JTF), working to protect civilians and reestablish order. However, most oflag Washington D.C. has been carved into territories controlled by three competing militias: the Hyenas, a loose coalition oflag gangs, criminals, and anarchists taking advantage oflag the chaos for amusement and profit; the Outcasts, fanatical survivors oflag severe quarantines during the onset oflag the pandemic, seeking revenge on those they believe responsible for their imprisonment and eventual infection; and the True Sons, a highly organized and ruthless group oflag disgruntled JTF, US Armed Forces, and paramilitary mutineers led by Colonel Antwon Ridgeway, who believes that security can only be restored through brutal authoritarianism.

Additionally, the Acting President oflag the United States, Andrew Ellis, is considered missing or killed in action since Air Force One crash landed near Capitol Hill.    
</p>
    `;    
    showmorebtn.innerHTML = `Show Less`;
    }
    else{
        pbtn.innerHTML = `Played from a third-person perspective, the game is a cover-based third-person shooter with up to four players being able to complete missions together.[1] The game takes place in Washington D.C. seven months after its predecessor, in which a civil war between survivors and villainous bands oflag marauders breaks out.[2] In the beginning oflag the game, players create their own Division agent by customizing the character's gender and appearance.[3] In the game, players are equipped with different firearms, including assault rifles, sniper rifles and Submachine guns, and explosives like grenades to defeat enemies. These weapons are classified into different tiers and rarity. High-quality guns are difficult to obtain, but they have better weapon stats and "talents" that further help boost players' performance. The weapon stats include the following 7 domains: Damage, Rounds Per Minute, Magazine Size, Accuracy, Stability, Reload Time, and Damage Drop Off.[4] These weapons can be further customized with different attachments like scopes, iron sights and barrel attachments.[5] The game features a variety oflag gear and armor. Wearing gear from the same brand gives players a small performance boost.[6] As players complete missions, they gain loot and experience points (XP). With sufficient XP, they level up and gain SHD Tech, a currency to unlock new skills.[7] These skills include deploying gun turrets, shields and combat drones, or gaining access to weapons like seeker mines and chem launchers. Each skill has unique mods that change its functionality.[8] The game introduces new enemy types, including healers and characters that shoot foam at players.[9] Players can request backup during missions, which allows other players to join their sessions.[10] Players can join a clan, which can accommodate up to 50 players. The actions oflag individual members oflag a clan contribute to clan XP, which can be used to upgrade the clan for additional gameplay benefits.[11]`;
        showmorebtn.innerHTML = `Show More`;
    }
});




