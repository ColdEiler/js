
// ---------------- 3 ----------------
function alerted(){
    var arr_links = document.querySelectorAll('a');
    var count = arr_links.length;
    alert(`Количество ссылок на странице: ${count}`);
}
// exersise 5

let parent = document.querySelector('.paragraph');

function add_p(){
    	
	let text = prompt('Введите текст');
	while(text){
		let new_p = document.createElement('p');
		new_p.innerHTML = text;
		parent.append(new_p);
		text = prompt('Введите текст');
	}
    return;
}

parent.addEventListener('click', function(e){
    var target = e.target;
    if (target.nextElementSibling === null)
    {
        alert('Следующего абзаца нет!!!');
        return;
    }
    next = confirm(`Вы уверены, что хотите удалить этот абзац? содержимое: ${target.nextElementSibling.innerHTML}`);
    if (!next) return;
    this.removeChild(target.nextElementSibling);    
}
)

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




var re_fio = /[А-Яа-я]+ /
// имя 
var input_fio = document.querySelector(".FIO input");
var fio_right = document.querySelector(".FIO .right");
input_fio.addEventListener("blur",()=>check_fio());

function check_fio(){
    var myFio = document.head_hunter.id_FIO.value;
    var valid_fio = re_fio.test(myFio);
    if (valid_fio){
        fio_right.setAttribute("class", "right valid");
    }else{
        fio_right.setAttribute("class", "right novalid");
        //alert("Что-то не так c полем фио!!! ");
    }
}

let pas = document.getElementById('pas');
let pas2 = document.getElementById('pas2');
pas2.addEventListener("blur",()=>check_password());
function check_password(){
    if(document.head_hunter.pwd.value != document.head_hunter.pwd1.value || document.head_hunter.pwd.value == ''){
        pas.setAttribute("class", "right novalid");
        //alert ("Что не так с паролем")
    } else {
        pas.setAttribute("class", "right valid");
    }
}


let skills = document.querySelectorAll("input[type=checkbox]");
let skills_block = document.querySelector(".skills .right");

skills[skills.length-1].addEventListener("blur", () =>check_skills());
function check_list(skills){
    for (let i = 0; i < skills.length; i++) {
        if(skills[i].checked){
            return true;
        }
    }
    return false;
}
function check_skills() {
    if (check_list(skills)) {
        skills_block.setAttribute("class", "right valid");
    } else{
        skills_block.setAttribute("class", "right novalid");
    }
}




let edu_block = document.querySelector(".education .right")
let edu = document.getElementById('select')
edu.addEventListener("blur",()=> check_select());
function check_select(){

    if(edu.selectedIndex == -1)
    {
        edu_block.setAttribute("class", "right novalid");
    }else{
        edu_block.setAttribute("class", "right valid");
    }
}


let mailbox = document.querySelector('.email .right');
let email = document.querySelector(".email input");

email.addEventListener("blur",()=>check_email());

function check_email(){
    var re_mail = /^[\w-\.]{2,}@[\w-]{2,}\.[a-z]{2,4}$/i; // Регулярка почты /^[a-zA-Z\d\.]+@[a-z\d\.]+/
    var myMail = document.head_hunter.id_email.value; 
    var valid_mail = re_mail.test(myMail);
    if (valid_mail){
        mailbox.setAttribute('class', 'right valid');
    }else{
        mailbox.setAttribute('class', 'right novalid');
        //alert("что-то не так с почтой!!!");
    }
}

let phone_right = document.querySelector('.phone .right');
let phone_input= document.querySelector('.phone input');
phone_input.addEventListener("blur",() => check_phone());

function check_phone(){
    var re_phone = /^\+?[7|8].?\(?\d{3}\)?\-?\d{3}\-?\d{2}\-?\d{2}$/; // Регулярка телефона
    var myPhone = document.head_hunter.id_phone.value;
    var valid_phone = re_phone.test(myPhone);
    if (valid_phone){
        phone_right.setAttribute('class',"right valid");
    }else{
        phone_right.setAttribute('class',"right novalid");
        //alert("что-то не так с телефоном")
    }
}

let about = document.getElementById('id_about');
let about_right = document.querySelector('.about .right')
let about_text = document.querySelector("textarea");

about_text.addEventListener("blur",()=>{check_about(); return});

function check_about(){
    if (about.value !='') {
        about_right.setAttribute("class","right valid");
    }else {
        about_right.setAttribute("class","right novalid");
        //alert("что-то не так с разделом о себе")
    }
}

function valid(){
 check_fio();
 check_password();
 check_skills();
 check_select();
 check_email();
 check_phone();
 check_about();   
}

function exit(){
    let all = document.querySelectorAll(".right");
    all.forEach(item=>item.classList.remove('valid','novalid'));
}