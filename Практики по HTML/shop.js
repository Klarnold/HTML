//installing jQuery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.7.1.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

var rel = 0 // обновление экрана по колёсику
 var k = 3000;
document.body.onload = function(){
    const newDiv = document.createElement("div")
    newDiv.style.position = "fixed";
    newDiv.style.left = "35vw";
    newDiv.style.top = "30vh";
    newDiv.style.display = "flex";
    newDiv.style.alignItems = "center";
    newDiv.style.flexDirection = "column";
    newDiv.appendChild(document.createTextNode("afir"));



    const newImg = new Image(400, 300);
    newImg.src = "eclypse.png"
    newDiv.appendChild(newImg)
    document.body.appendChild(newDiv);
}

const slider = document.getElementById("slider")

const coord = document.getElementById('coordinates')
const bell = document.querySelector("ringbell")
const notifications = document.querySelectorAll("#ak")
const notification_system = document.querySelector("#notification_system")
const notifier = document.querySelector("#notifier")
const cart = document.querySelector("#cart")
const notificationList = document.querySelector("#notifications")
const link = document.querySelector("#lin")
var state=0;

class Product{
    imageSrc;
    name;
    price;
}

cart.addEventListener("click", function(){

    if (state==0)
    {
        document.getElementById("cart_menu").style.right = "0px";
        state = 1;
    }
    else{
        document.getElementById("cart_menu").style.right = "-400px";
        state = 0
    }
    

    const array = cart.src.split('/')
    if (array[array.length-1]=="cart.gif")
        cart.src = "cart.png";
    else
    {
        cart.src = "cart.gif";
        setTimeout(function(){ cart.src = "cart.png"}, 2000)
    }
})

ringbell.addEventListener('click', function(){ 
    if (notifications.length!=0)
    {
        if (notifications[0].style.marginBottom=="1em")
            notification_system.style.background="none";
        else
            notification_system.style.background="green";
    }
    notifications.forEach(function(elem){
        if (elem.style.marginBottom=="2em")
        {
            elem.style.marginBottom="0em";
            elem.style.opacity="0";
            k = 3000;
        }
        else
        {
            elem.style.marginBottom="2em";
            elem.style.opacity="1";
            k =10000;
        }
    })
})

notifications.forEach(function(elem){
    elem.addEventListener('click', function(){
        notifier.textContent = parseInt(notifier.textContent) - 1 + '';
        elem.remove();
    })
})

window.onscroll = function (){
    if (rel >= 100){
        location.reload();
        rel = 0
    }
    rel++;
}

addEventListener('click', (event) =>{
    coord.textContent = event.pageX + ':' + event.pageY
}
)

link.addEventListener('click', function(){
    if (confirm("Погодите, это реально?"))
        window.location.href= "https://avatars.mds.yandex.net/i?id=c4ab521a7745c3d67edb8b5019a64c279e180f6a-10246546-images-thumbs&n=13"
    else
        alert("Не реально")
})

setTimeout(function(){
    let newNotification = document.createElement("a");
    let notificationArray = ["aaa", "bbb", "cccc"];
    newNotification.textContent = notificationArray[Math.floor(Math.random() * 3)];
    newNotification.addEventListener('click', function(){
        notifier.textContent = parseInt(notifier.textContent) - 1 + '';
        newNotification.remove();})
    notificationList.appendChild(newNotification);
}, k)


function create(){
    let newNotification = document.createElement("a");
    newNotification.textContent = "ggg";
    document.body.appendChild(newNotification);
}

/*
slider.addEventListener('mouseover', function(){
    const runner = slider.querySelector("#runner");
    let gap = slider.querySelector("#slide").offsetLeft;
    if (runner.style.pffsetLeft<gap || runner.style.left>(gap + 380))
        runner.style.left = gap + "px";
        runner.addEventListener('drag', function(event){
            runer(event, runner, gap)
        })

    runner.addEventListener('dragend', function(event){
        runer_end(event, runner, gap)
    })
    
});
*/
function runer(event, _runner, gap){
    _runner.style.cursor = 'grab';
    if (event.pageX>gap && event.pageX<(gap + 380))
        _runner.style.left = event.pageX + "px";
}

function runer_end(event, _runner, gap){
    if (event.pageX<gap)
        _runner.style.left = gap - 10 + "px";
    else if (event.pageX>(gap + 400))
        _runner.style.left = gap + 380 + "px";
    else
        _runner.style.left = event.pageX + "px";
}

slider.querySelector("#runner").addEventListener('drag', event =>{
    runer(event, slider.querySelector("#runner"), slider.querySelector("#slide").offsetLeft);
})

slider.querySelector("#runner").addEventListener('dragend', event =>{
    runer_end(event, slider.querySelector("#runner"), slider.querySelector("#slide").offsetLeft);
})

addEventListener('resize', function(){
    if (slider.querySelector("#runner").pageX<slider.querySelector("#slide").offsetLeft)
        slider.querySelector("#runner").style.left = slider.querySelector("#slide").offsetLeft + "px";
    else if (slider.querySelector("#runner").pageX>(slider.querySelector("#slide").offsetLeft + 400))
        slider.querySelector("#runner").style.left = slider.querySelector("#slide").offsetLeft + 380 + "px";
})