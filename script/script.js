const generateBtn = document.querySelector("#generateBtn");
const output = document.querySelector("#output");
const options = document.querySelector(".options").querySelectorAll("input");


function rand(num /*upper:0, lower:1, specail:2*/, arr){
    var length;
    if(num==0 || num==2) length = 26;
    else if(num==1) length = 10;
    else length = 32; 

    var index = parseInt(Math.random()*length);

    return arr[num][index];
}

const data = [
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    ["0","1","2","3","4","5","6","7","8","9"],
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ", ", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "\`", "{", "|", "}", "~"]
];

var password;


function generatePassword(){
    password = "";
    var passLength = options[2].checked==true ? (14 + Math.random()*12) : (9 + Math.random()*5);

    for(var i=0; i<passLength; i++){
    
        if(options[0].checked == true && options[1].checked == false){ // upper is checked & special is unchecked
            switch(parseInt(Math.random()*3)){
                case 0: password+=rand(0,data);
                break;
                case 1: password+=rand(1,data);
                break;
                case 2: password+=rand(2,data);
                break;
            }
        }
        else if(options[0].checked == false && options[1].checked == true){ // upper is unchecked & special is checked
            switch(parseInt(Math.random()*3)){
                case 0: password+=rand(0,data);
                break;
                case 1: password+=rand(1,data);
                break;
                case 2: password+=rand(3,data);
                break;
            }
        }
        else if(options[0].checked == true && options[1].checked == true){  //upper & specail both checked
            switch(parseInt(Math.random()*4)){
                case 0: password+=rand(0,data);
                break;
                case 1: password+=rand(1,data);
                break;
                case 2: password+=rand(2,data);
                break;
                case 3: password+=rand(3,data);
                break;
            }
        }
        else {                                        // none checked
            switch(parseInt(Math.random()*2)){
                case 0: password+=rand(0,data);
                break;
                case 1: password+=rand(1,data);
                break;
            }
        }
        //loop ends
    }

}

generateBtn.addEventListener("click",()=>{
    generatePassword();   
    output.innerHTML = "<span>"+password+"</span>";
    document.querySelector(".len").innerText ="length " + password.length;
});
