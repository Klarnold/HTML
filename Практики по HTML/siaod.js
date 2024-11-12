//installing jQuery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.7.1.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);


const pics = document.getElementById("biggerGallery")
const mainPic = document.getElementById("p4")

const form = document.querySelector("form");
const pswd = document.getElementById("pswd")
var a = document.createElement('a');
var shop = document.createElement('shop')
a.href = "2-прак.html"
let isDrawing = false

var capcha_res = "";

window.onload = function() {const capcha = document.getElementById("capcha");
    const characters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    const length = Math.floor(Math.random() * (3) + 3)
    
    for (let i=onabort; i<length; i++){
        capcha_res += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    capcha.textContent = capcha_res;
}

function func_1(){
    alert("Иди работать");
}

function func_2(){
    if (document.getElementById("nature").style.color == "white"){
        document.getElementById("nature").innerHTML="Я снова люблю природу!";
        document.getElementById("nature").style.color = "rgb(136,9,9)"; 
    }
    else {
        document.getElementById("nature").innerHTML="Я ненавижу природу!";
        document.getElementById("nature").style.color = "white"; 
    }
}

function change_page(shown, hidden){
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

function like(clicked_id){
    

    element = document.getElementById(clicked_id)
    var str = element.textContent;
    var num = parseInt(str.substring(2))


    if (element.style.color == "rgb(0, 0, 0)")
    {
        num--
        element.textContent = "♥ " + num.toString()
        element.style.background = 'rgb(0,0,0)'
        element.style.color = 'rgb(99,0,0)'
    }
    else{
        num++
        element.textContent = "♥ " + num.toString()
        element.style.background = 'rgb(255,255,255)'
        element.style.color = 'rgb(0,0,0)'
    }
}


function al(){

    isDrawing = !isDrawing;
    if (isDrawing == false){
        const hearts = document.querySelectorAll('.box');
        hearts.forEach(heart => heart.remove());
    }
}

document.addEventListener('mousemove', (event) => {
    if (isDrawing) {
        const box = document.createElement('div');
        box.className = 'box';
        box.textContent = '♥';
        box.style.left = `${event.pageX}px`; // Устанавливаем позицию по X
        box.style.top = `${event.pageY}px`; // Устанавливаем позицию по Y
        document.body.appendChild(box); // Добавляем элемент на страницу
    }
});

function isEmpty(obj){
    return (obj.value == "");
}

function check_capcha(){
    const res = document.getElementById("cap");

    if (isEmpty(res))
        return false;
    else
    if (res.value == capcha_res){
        alert("Correct!");
        return true;
    }
    else if (res.value.charAt(0) >= '0' && res.value.charAt(0) <= '9'){
        if (res.value == capcha_res)
        {
           //alert("Nice job!")
            return true
        }
        else{
            //alert("Nope")
            return false
        }
    }
    else{
        alert("Wrong! Repeat input! " + res.value.charAt(0))
        capcha_res = "";
        const nums = "0123456789"

        const num1 = Math.floor(Math.random() * 10)
        const num2 = Math.floor(Math.random() * 10)

        capcha_res = (num1 + num2) + '';

        capcha.textContent = num1 + " + " + num2 + '';
        return false
    }

}


function go_to_the_site(){
    if (window.location.href == a){
        window.location.href="enter.html";
    }
    else{ 
        if (check_capcha())
            if (document.getElementById("name").value.length < 3)
            {
                alert("Вы ввели слишком короткое имя пользователя!");
                document.getElementById("pswd").value = "";
                document.getElementById("name").value = "";
            }
            else
            {
                if (document.getElementById("pswd").value == "1111" )
                    window.location.href="2-прак.html";
                else
                {
                    document.getElementById("pswd").value = "";
                    alert("Вы неверно ввели пароль, попробуйте ещё раз!");
                }
            }
    }
}

function create_cube(){
    const box = document.getElementById("box");


    const obj = document.createElement('div');
    obj.style.position = 'absolute';
    obj.className = 'obj';
    obj.textContent = 'O';   
    for (let j=0; j<100; j++){
        
        let num1 = Math.floor(Math.random() * 250 + 10);
        let num2 = Math.floor(Math.random() * 250);
        obj.style.left = num1  + 'px';
        obj.style.top =  parseInt(document.querySelector('.box').offsetTop) + num2  + 'px';
        document.body.appendChild(obj); // Добавляем элемент на страницу
    }
    
}

function go_to_shop(){
    if (window.location.href == a)
        window.location.href = "shop.html";
    else
        window.location.href = "2-прак.html";
        
}


function handler(event){
    event.target.addEventListener('click', function(){
        /*tempObj[tempObj.length - 1] */
        if (event.target.src)
        {
            let tempObj = event.target.src.split('/');
            let mainObj = mainPic.src.split('/');
            mainObj[mainObj.length - 1] = tempObj[tempObj.length - 1];
            mainPic.src = mainObj.join('/');
        }
    })
}


pics.onmouseover = handler;



