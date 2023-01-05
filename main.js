let firstname=document.getElementById('fname');
let username=document.getElementById('uname');
let userpassword=document.getElementById('upassword');
let button=document.getElementById('login');
let userDetails=[
    {
        fname:"Abarna",
        uesrname:"Abaru",
        fpassword:"Abarna406@"
    },
    {
        fname:"Amarnath",
        uesrname:"Amar",
        fpassword:"Amarnathcse"
    },
    {
        fname:"Akila",
        uesrname:"pappa",
        fpassword:"Akila123"
    }
]
button.addEventListener("click",e=>{
    e.preventDefault();
    validate();
});
function validate(){
    for(i=0;i<userDetails.length;i++){
        if(firstname.value==userDetails[i].fname && username.value==userDetails[i].uesrname && userpassword.value==userDetails[i].fpassword)
        {
             console.log('please');
            window.location.href="https://abarna10303.github.io/js_foodcards_object/";
        }
    }
    console.log('please Enter correct imformation');
}





/*let firstname=document.getElementById('fname');
let username=document.getElementById('uname');
let userpassword=document.getElementById('upassword');
let button=document.getElementById('login');
let fierror=document.getElementById('fnameerorr');
let userror=document.getElementById('unameerror');
let passerror=document.getElementById('passworderror');
button.addEventListener("click" ,e=>{
    e.preventDefault();
    firstnamefun();
    usenamefun();
    passwordfun();
});
function firstnamefun(){
    if(firstname.value=="")
    {
        fierror.innerHTML="* Please Enter your Name";
        fierror.style.color="red";
        firstname.style.border="2px solid red";
    }
    else
    {
        firstname.style.border="2px solid green";
    }
}
function usenamefun(){
    if(username.value=="")
    {
        userror.innerHTML="*please Enter your User Name";
        userror.style.color="red";
        username.style.border="2px solid red";
    }
    else if(username.value.length<5){
        userror.innerHTML="*please Enter your User Name atleast 5 characters";
        userror.style.color="yellow";
        username.style.border="2px solid yellow";
    }
    else
    {
        username.style.border="2px solid green";
    }
}
function passwordfun(){
    if(userpassword.value=="")
    {
        passerror.innerHTML="*please Enter your Password";
        passerror.style.color="red";
        userpassword.style.border="2px solid red";
    }
    else if(username.value.length<8){
        passerror.innerHTML="*please Enter your Password Atleast 8 Character";
        passerror.style.color="yellow";
        userpassword.style.border="2px solid yellow";
    }
    else
    {
        userpassword.style.border="2px solid green";
    }
}*/