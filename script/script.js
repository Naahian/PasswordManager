const generateBtn = document.querySelector("#generateBtn");
const output = document.querySelector("#output");
const options = document.querySelector(".options").querySelectorAll("input");

var password;
var passLength;
var data = "abcdefghijklmnopqrstuvwxyz0123456789";

function generatePassword(data, length){
    var password = "";
    for(var i=0; i<length; i++){
        password+= data[parseInt(Math.random() * data.length)];
    }
    return password;
}


generateBtn.addEventListener("click", ()=>{

    tempData = data;
    options[0].checked == true ? tempData+="ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";   
    options[1].checked == true ? tempData+="!\"#$%&\'()*+-./:;<=>?@[\\]^_\`{|}~" : "";

    passLength = options[2].checked==true ? (14 + Math.random()*12) : (9 + Math.random()*5);

    password = generatePassword(tempData, passLength);   

    output.innerHTML = "<span>"+password+"</span>";
    document.querySelector(".len").innerText ="length " + password.length;
});
