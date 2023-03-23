
// ---------------- 3 ----------------
function alerted(){
    var arr_links = document.querySelectorAll('.a');
    var count = arr_links.length;
    alert(`Количество ссылок на странице: ${count}`);
}
// exersise 4

function add_p(){
    	
	let parent = document.querySelector('.paragraph');
	let text = prompt('Введите текст');
	while(text){
		let new_p = document.createElement('p');
		new_p.innerHTML = text;
		parent.append(new_p);
		text = prompt('Введите текст');
	}
}

function remove_p(){
    let parent = document.querySelector('.paragraph');
    let childs = document.querySelectorAll('.paragraph>p');
    
    for(let i = 0; i < childs.length-1; i++){
        next=confirm(`Вы уверены, что хотите удалить ${i+2} абзац? содержимое: ${childs[i+1].innerHTML}`);
        if(next==false){
            continue;
        }
        else {parent.removeChild(childs[i+1]);}
    }
}
// ------------------- 6--------------------------------

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function swap_picture(img_1,img_2){
    src = img_1.src;
    img_1.src = img_2.src;
    img_2.src = src;
}
  
list_img = document.querySelectorAll('td img');

for(let i =0; i<list_img.length; i++){
    list_img[i].addEventListener("dblclick",()=>{
        swap_picture(list_img[i],list_img[getRandomInt(list_img.length)]);
        //console.log(getRandomInt(5));
    })
}
// ------------------ 7 задание --------------------

var num = 0;
var list = document.querySelectorAll(".list")

function menu() {
    img = document.querySelector("span img")
    for(var i = 0; i < list.length; i++) {
        list[i].style.display="block";
    }
    for(let i = 0; i < list.length; i++) {
        list[i].addEventListener('click',()=>erase_li(list[i],endSweets));
    }
    
    img.style.transform="rotate(90deg)";
}
function erase_li(elem,callback){
    elem.style.opacity=0;
    num+=1;
    if(num == list.length )
    {
        callback();
    }
}

function endSweets(){
    let div = document.querySelector(".menu")
    h2 = document.createElement('h2');
    h2.innerHTML = 'Cладости кончились (((';
    div.append(h2);
}
// ----------------------8------------------------


let elem8 = document.getElementById('tab8');
var op = -1;
var imag = document.getElementById('Picture')
var text_under = document.getElementById('under_pic')
elem8.onclick = function(){
    var block = document.getElementById('task_8')
    if (block.className === "displayed tab-content-8"){
        block.setAttribute('class', "hidden tab-content-8")
        imag.style.opacity=0;
        op = -1;
    }
    else{
        block.setAttribute('class', "displayed tab-content-8")
        setOpacity()        
        }
}

imag.onmouseover = function(){
    if( op > -1 ) {
        op -= 0.1;
        imag.style.opacity=op/10;
        text_under.style.opacity = 1 - op/10;
        setTimeout(imag.onmouseover, 20);
    }
}

imag.onmouseout = function(){
    text_under.style.opacity = 0;
    setOpacity()
}

function setOpacity() {
    if( op < 10 ) {
        op += 0.1;
        imag.style.opacity=op/10;
        timer2 = setTimeout(setOpacity, 20);
    }
}


// ------------- 9-10 ---------------

function valid(){
    var re_mail = /^[\w-\.{2}]+@[\w-]+\.[a-z]{2,4}$/i; // Регулярка почты /^[a-zA-Z\d\.]+@[a-z\d\.]+/
    var myMail = document.head_hunter.id_email.value;
    var valid_mail = re_mail.test(myMail);
    
    var re_phone = /^\+?[7|8].?\(?\d{3}\)?\-?\d{3}\-?\d{2}\-?\d{2}$/; // Регулярка телефона
    var myPhone = document.head_hunter.id_phone.value;
    var valid_phone = re_phone.test(myPhone);
    var output='';
    // имя 
    let fio = document.getElementById('FIO_right');
    if (document.head_hunter.id_FIO.value == ''){
        output += "Введите имя!!!\n";
        fio.setAttribute('class','right novalid');
    }
    else{
        fio.setAttribute('class','right valid');
    }
    // пароль

    let pas = document.getElementById('pas');
    if(document.head_hunter.pwd.value != document.head_hunter.pwd1.value || document.head_hunter.pwd.value == ''){
        output+="Что-то не так с паролями!!!\n"
        pas.setAttribute('class','right novalid');
    }
    else{
        pas.setAttribute('class','right valid');
    }

    //почта
    let mail = document.querySelector('.email .right');
    if (valid_mail){
        mail.setAttribute('class','right valid');
    }
    else{
        output += 'Email введен не правильно!!!\n';
        mail.setAttribute('class',' right novalid');
    }

    //телефон
    let phone_right = document.querySelector('.phone .right')
    if(valid_phone){
        phone_right.setAttribute('class','right valid');
    }
    else {
        output += 'телефон введен неправильно!!!\n';
        phone_right.setAttribute('class','right novalid');
    }
    // о себе

    let about = document.getElementById('id_about');
    let about_right = document.querySelector('.about .right');
    if(about.value != ''){
        about_right.setAttribute('class','right valid');
    }
    else {
        output += 'Вы ничего не ввели в разделе о себе!!!\n';
        about_right.setAttribute('class','right novalid');
    }

    if (output){
        alert(output);
    }

    
}
