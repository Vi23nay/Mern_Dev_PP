let showmorebtn2 = document.querySelector('#showmorebp2');
let pbtn = document.querySelector('#paragraphdes');
let addtocartbtn = document.querySelector('#addtocartb');
let buttonsp1click = document.querySelector('.buttonsp1');

let f2 = false;

let flag = false;
addtocartbtn.addEventListener("click" ,function(){
    if(flag == false){
    addtocartbtn.innerHTML = `ADDED TO CART`;

    let modaldiv = document.createElement('div');
    modaldiv.classList.add('viewcartshow');

    modaldiv.innerHTML = `
    <button id="viewcartbp2">View Cart</button>
    <p id="messageinterest">THANK YOU FOR SHOWING YOUR INTEREST IN THIS PRODUCT</p>
    `;
    
    buttonsp1click.append(modaldiv);
    flag = true;

    let addb = document.querySelector('#viewcartbp2');

    addb.addEventListener("click" , function(){
        localStorage.setItem("f2","true");
        window.location.assign("./addtocart.html");
    });
    }
    else{
        return;
    }
});

showmorebtn2.addEventListener("click" , function(){
    if(showmorebtn2.innerHTML == `Show More`){
        pbtn.innerHTML = `<p>
        Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008's Grand Theft Auto IV. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and arms smuggler Trevor Philips—and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals. The open world design lets players freely roam San Andreas' open countryside and the fictional city of Los Santos, based on Los Angeles.
        </p>

        <p>
        The game is played from either a third-person or first-person perspective, and its world is navigated on foot and by vehicle. Players control the three lead protagonists throughout single-player and switch among them, both during and outside missions. The story is centred on the heist sequences, and many missions involve shooting and driving gameplay. A "wanted" system governs the aggression of law enforcement response to players who commit crimes. Grand Theft Auto Online, the game's online multiplayer mode, lets up to 30 players engage in a variety of different cooperative and competitive game modes.

The game's development began soon after Grand Theft Auto IV's release and was shared between many of Rockstar's studios worldwide. The development team drew influence from many of their previous projects such as Red Dead Redemption and Max Payne 3 and designed the game around three lead protagonists to innovate on the core structure of its predecessors. Much of the development work constituted the open world's creation, and several team members conducted field research around California to capture footage for the design team. The game's soundtrack features an original score composed by a team of producers who collaborated over several years. It was released in September 2013 for the PlayStation 3 and Xbox 360, in November 2014 for the PlayStation 4 and Xbox One, and April 2015 for Microsoft Windows. PlayStation 5 and Xbox Series X/S versions are scheduled for release in November 2021.

Extensively marketed and widely anticipated, the game broke industry sales records and became the fastest-selling entertainment product in history, earning $800 million in its first day and $1 billion in its first three days. It received widespread critical acclaim, with praise directed at its multiple protagonist design, open world, presentation and gameplay. However, it caused controversies related to its depiction of violence and women. Considered one of seventh and eighth generation console gaming's most significant titles and among the best video games ever made, it won year-end accolades including Game of the Year awards from several gaming publications. It is the second best-selling video game of all time with over 145 million copies shipped, and as of April 2018 the most financially successful entertainment product of all time, with about $6 billion in worldwide revenue.
In 2004,[i] Michael Townley, Trevor Philips, and Brad Snider partake in a failed robbery in Ludendorff, North Yankton, resulting in all three being presumed dead. Nine years later, Michael is living with his family in the city of Los Santos, under the alias Michael De Santa, after making a secret agreement with the Federal Investigation Bureau (FIB)[j] agent Dave Norton to stay hidden. Across town, gangbanger Franklin Clinton is working for a corrupt Armenian car salesman and meets Michael while attempting to fraudulently repossess his son's car; the two later become friends. When Michael finds his wife sleeping with her tennis coach, he and Franklin chase the coach to a mansion, which Michael destroys in anger. The owner of the mansion, drug lord Martin Madrazo, demands compensation. Michael returns to a life of crime to obtain the money, enlisting Franklin as an accomplice. With the help of Michael's old friend Lester Crest, a disabled hacker, they rob a jewellery store to pay off the debt. Meanwhile, Trevor, who now lives in squalor on the outskirts of Los Santos, hears of the heist and realises that it was Michael's work; Trevor had believed that Michael was killed in the Ludendorff heist. Trevor tracks Michael down and reunites with him, forcing Michael to reluctantly accept him back into his life.

As time goes on, the lives of the protagonists spiral out of control. Michael's criminal behaviour prompts his family to leave him. He becomes a movie producer, and comes into conflict with Devin Weston, a billionaire venture capitalist and corporate raider, who attempts to shut down his studio, and vows revenge after Michael thwarts his efforts and inadvertently kills his assistant. Franklin must rescue his friend Lamar Davis from rival gangster Harold "Stretch" Joseph, who attempts to kill them to prove himself to his new gang. Trevor consolidates his control over various black markets in Blaine County, waging war against The Lost outlaw motorcycle club, several Latin American street gangs, rival meth dealers, private security firm Merryweather Security, and triad kingpin Wei Cheng.

Having broken his agreement with Dave by committing heists again, Michael is coerced by him and his superior agent, Steve Haines, into performing a series of operations alongside Franklin and Trevor to undermine the International Affairs Agency (IAA).[k] Under Steve's direction and with Lester's help, they attack a convoy carrying funds intended for the IAA and steal an experimental chemical weapon from an IAA lab. As Steve comes under scrutiny, he forces Michael and Franklin to erase evidence against him from the FIB servers. Michael takes the opportunity to wipe the data on his activities, destroying Steve's leverage over him.

Eventually, Michael, Trevor, Franklin, and Lester start planning a greater heist: raiding the Union Depository's gold bullion reserve. By this time, Michael reconciles with his family. However, Trevor discovers that Brad was not imprisoned as led to believe, but killed during the Ludendorff heist and buried in a grave marked for Michael. Trevor feels betrayed, causing friction within the group and threatening to undermine their plans. Meanwhile, Steve betrays Michael and Dave, and they become caught in a Mexican standoff between the FIB, IAA, and Merryweather. Trevor aids them, feeling that only he has the right to kill Michael, and agrees to perform the Union Depository heist and part ways with Michael afterward.

The heist is successful, but Franklin is then approached separately by Steve and Dave, who contend that Trevor is a liability, and Devin, who wants retribution for Michael's betrayal. Franklin has three choices: kill Trevor, kill Michael, or attempt to save both in a suicide mission. Should Franklin choose to kill either Michael or Trevor, he ceases contact with the man he spares and returns to his old life.[31][32] Otherwise, Michael and Trevor reconcile and the trio withstands an onslaught from the FIB and Merryweather before going on to kill Cheng, Stretch, Steve, and Devin. The three protagonists cease working together but remain friends.[33]

</p>
        `;
        showmorebtn2.innerHTML = `Show Less`;
        }
        else{
            pbtn.innerHTML = ` Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008's Grand Theft Auto IV. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and arms smuggler Trevor Philips—and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals. The open world design lets players freely roam San Andreas' open countryside and the fictional city of Los Santos, based on Los Angeles.
            The game is played from either a third-person or first-person perspective, and its world is navigated on foot and by vehicle. Players control the three lead protagonists throughout single-player and switch among them, both during and outside missions. The story is centred on the heist sequences, and many missions involve shooting and driving gameplay. A "wanted" system governs the aggression of law enforcement response to players who commit crimes. Grand Theft Auto Online, the game's online multiplayer mode, lets up to 30 players engage in a variety of different cooperative and competitive game modes.
            Grand Theft Auto V is an action-adventure game[2] played from either a third-person[3] or first-person perspective.[4][b] Players complete missions—linear scenarios with set objectives—to progress through the story.[5] Outside of the missions, players may freely roam the open world. Composed of the San Andreas open countryside area, including the fictional Blaine County, and the fictional city of Los Santos, the world is much larger in area than earlier entries in the series.[6][c] It may be fully explored after the game's beginning without restriction, although story progress unlocks more gameplay content.[8]            
            `;
            showmorebtn2.innerHTML = `Show More`;
        }
});

