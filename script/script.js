const generateBtn = document.querySelector("#generateBtn");
const output = document.querySelector("#output");
const options = document.querySelector(".options").querySelectorAll("input");

const data = ["abcdefghijklmnopqrstuvwxyz", "0123456789"];
const words = ["On", "The", "Other", "Hand", "Denounce", "With", "Righteous", "Dignation", "And", "Dislike", "Men", "Who", "Are", "So", "Demoralize", "Charms", "A", "Pleasure", "Moment", "Blinded", "By", "Desire", "That", "They", "Cannot", "Forest", "Pain", "And", "Trouble", "Bound", "To", "Ensure", "Random", "Words", "Which", "Dont", "Look", "Even", "Slightly", "Believable"];
const rand = ()=>{ return Math.random();}


function generatePassword(tempData, passLenLimit){
    var tempPass = [], optionNum = [], pass = "", word;

    if(options[3].checked == true)      word = wordBased(passLenLimit);
    if(options[0].checked == true && !word) {    tempData.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ"); optionNum.push(1);    }
    if(options[1].checked == true) {    tempData.push("!\"#$%&\'()*+-./:;<=>?@[\\]^_\`{|}~"); optionNum.push(2);    }
    
    console.log("t:",tempData);
    for(var i=0; i<passLenLimit; i++){
        
        if(!word) {
            //fill pos with char
            tempPass.push(tempData[0][parseInt(rand() * tempData[0].length)]);
            //fill pos with number according to condition
            if(i%2==0)  tempPass[parseInt(rand()*tempPass.length)] = tempData[1][parseInt(rand() * tempData[1].length)];
        }
        else{
            //fill pos with number
            tempPass.push(tempData[1][parseInt(rand() * tempData[1].length)]);
        } 
        
        //fill pos with upper according to condition
        if((tempData.length == 3) && (i%4 == 0)) tempPass[parseInt(rand()*tempPass.length)] = tempData[2][parseInt(rand() * tempData[2].length)];
        
        //fill pos with special according to condition
        if((tempData.length == 4) && i%3 == 0) {
            tempPass[parseInt(rand()*tempPass.length)] = tempData[2][parseInt(rand() * tempData[2].length)];
            tempPass[parseInt(rand()*tempPass.length)] = tempData[3][parseInt(rand() * tempData[3].length)];
        }        
    }
    tempPass.forEach( ch => {pass+=ch});
    console.log(pass)
    if(word){
        pass = pass.slice(0, (pass.length - word.length)+1);
        pass = word + pass;
    }
    
    return pass;
}


function wordBased(passLenLimit){
    var word = "";
    if(options[3].checked == true){     /////  word based checked

        word = words[ parseInt(rand() * words.length) ];
        while(word.length > passLenLimit-3){                 //change word ilimPt
            word = words[ parseInt(rand() * words.length) ];
        }

        while(word.length < passLenLimit - 5){      //check and keep adding words untill it reaches limit (passLenLimit-3)
            var tempWord = words[ parseInt(rand() * words.length) ];
            console.log("Wlen:"+word.length+" Tlen:"+tempWord.length);
            //check if it exceeds given length(passLenLimit-3)
            (word + tempWord).length < passLenLimit-3 ? (word+=tempWord) : (tempWord = words[ parseInt(rand() * words.length) ]);
        } 

    }
    return word;
}


generateBtn.addEventListener("click", ()=>{
    
    var password, passLenLimit, tempData = [];
    data.forEach( ch =>{ tempData.push(ch)});
    passLenLimit = options[2].checked==true ? parseInt(14 + rand()*12) :10;

    

    password = generatePassword(tempData, passLenLimit);   
    console.log("d:",data)
    output.innerHTML = "<span>"+password+"</span>";
    document.querySelector(".len").innerText ="length " + password.length;
});
