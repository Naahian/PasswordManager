const generateBtn = document.querySelector("#generateBtn");
const output = document.querySelector("#output");
const options = document.querySelector(".options").querySelectorAll("input");

const data = "abcdefghijklmnopqrstuvwxyz0123456789";
const words = ["On", "the", "other", "hand", "denounce", "with", "righteous", "dignation", "and", "dislike", "men", "who", "are", "so", "beguiled", "and", "demoralized", "by", "the", "charms", "A", "pleasure", "the", "moment", "blinded", "by", "desire", "that", "they", "cannot", "foresee", "the", "pain", "and", "trouble", "that", "are", "bound", "to", "ensue", "randomised", "words", "which", "dont", "look", "even", "slightly", "believable"];


function generatePassword(data, passLenLimit, word){
    var pass = "";
    for(var i=0; i<passLenLimit; i++){
        pass+= data[parseInt(Math.random() * data.length)];
    }

    if(word != ""){
        pass = pass.slice(0, pass.length - word.length);
        pass = word + pass;
    }
                            console.log("pass:",pass," word:",word)
    return pass;
}

function wordBased(passLenLimit){
    var word = "";
    if(options[3].checked == true){     /////  word based checked

        word = words[ parseInt(Math.random() * words.length) ];
        while(word.length > passLenLimit-3){                 //change word if it exceeds the limit
            word = words[ parseInt(Math.random() * words.length) ];
        }

              
        //if(word.length < passLenLimit - 4){           // check if more word insertion possible

            while(word.length < passLenLimit - 5){      //keep adding words untill it reaches limit (passLenLimit-3)
                                
                var tempWord = words[ parseInt(Math.random() * words.length) ];
                //check if it exceeds given length(passLenLimit-3)
                (word + tempWord).length < passLenLimit-3 ? (word+=tempWord) : (tempWord = words[ parseInt(Math.random() * words.length) ]);
            } 
        //}

    }
    return word;
}

generateBtn.addEventListener("click", ()=>{

    var password, passLenLimit, tempData = data, word;
    
    passLenLimit = options[2].checked==true ? (14 + Math.random()*12) : (10 + Math.random()*4);

    options[0].checked == true ? tempData+="ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";   
    options[1].checked == true ? tempData+="!\"#$%&\'()*+-./:;<=>?@[\\]^_\`{|}~" : "";
    options[3].checked == true ? word = wordBased(passLenLimit) : word = "";


    password = generatePassword(tempData, passLenLimit, word);   

    output.innerHTML = "<span>"+password+"</span>";
    document.querySelector(".len").innerText ="length " + password.length;
});
