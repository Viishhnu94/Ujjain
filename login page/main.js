function registerPage() {

    document.getElementById("first_image").style.display = "none";
    document.getElementById("image01").style.display = "none";
    document.getElementById("form1").style.display = "none";
    document.getElementById("first-page").style.display = "none";
    document.getElementById("ram-ghat-name").style.display = "none";

    document.getElementById("second-image").style.display = "block";
    document.getElementById("image02").style.display = "block";
    document.getElementById("form2").style.display = "block";
    document.getElementById("exit-login").style.display = "block";
    document.getElementById("mahakaleshwar-name").style.display = "block";

    document.getElementById("third-image").style.display = "none";
    document.getElementById("image03").style.display = "none";
    document.getElementById("form3").style.display = "none";
    document.getElementById("exit-from-reset-login").style.display = "none";
    document.getElementById("ved-shala-name").style.display = "none";

    document.getElementById("circle2").style.backgroundColor = "white";
    document.getElementById("circle1").style.backgroundColor = "none";

    document.getElementById("circle2").style.backgroundColor = "white";
    document.getElementById("circle1").style.backgroundColor = "initial";
    document.getElementById("circle3").style.backgroundColor = "initial";


}

//----------------------------- register----------------------------

var formEl = document.getElementById('form2');
formEl.addEventListener('submit',function(e){
    e.preventDefault();

    var nameEl = document.getElementById("your-name").value;
    var emailEl = document.getElementById("email-address").value;
    var numberEl = document.getElementById("mobile-number").value;
    var passwordEl = document.getElementById("password").value;
    var register = document.getElementById("login_button02").value;

    // fetch post request
    fetch('http://13.50.223.218:8097/user/registretion',{
        method: 'POST',
        body : JSON.stringify({
                "userName": nameEl,
                "email":emailEl,
                "mobileNo":numberEl,
                "password":passwordEl
        }),
        headers : {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);

        if(data.statuscode == 200) {
            alert("Register success full !")
            window.location.assign("main.html")
           
        }
        else{
            alert("This number is already existed")
        }
    })

   
})









function resetPage() {
    document.getElementById("first_image").style.display = "none";
    document.getElementById("image01").style.display = "none";
    document.getElementById("form1").style.display = "none";
    document.getElementById("first-page").style.display = "none";
    document.getElementById("ram-ghat-name").style.display = "none";

    document.getElementById("second-image").style.display = "none";
    document.getElementById("image02").style.display = "none";
    document.getElementById("form2").style.display = "none";
    document.getElementById("exit-login").style.display = "none";
    document.getElementById("mahakaleshwar-name").style.display = "none";

    document.getElementById("third-image").style.display = "block";
    document.getElementById("image03").style.display = "block";
    document.getElementById("form3").style.display = "block";
    document.getElementById("exit-from-reset-login").style.display = "block";
    document.getElementById("ved-shala-name").style.display = "block";

    document.getElementById("circle1").style.backgroundColor = "initial";
    document.getElementById("circle2").style.backgroundColor = "initial";
    document.getElementById("circle3").style.backgroundColor = "white";


}

function loginPage01() {

    document.getElementById("second-image").style.display = "none";
    document.getElementById("image02").style.display = "none";
    document.getElementById("form2").style.display = "none";
    document.getElementById("exit-login").style.display = "none";
    document.getElementById("mahakaleshwar-name").style.display = "none";

    document.getElementById("third-image").style.display = "none";
    document.getElementById("image03").style.display = "none";
    document.getElementById("form3").style.display = "none";
    document.getElementById("exit-from-reset-login").style.display = "none";
    document.getElementById("ved-shala-name").style.display = "none";

    document.getElementById("first_image").style.display = "block";
    document.getElementById("image01").style.display = "block";

    document.getElementById("form1").style.display = "block";
    document.getElementById("password_input").style.margin = "15px 0px";

    document.getElementById("first-page").style.display = "block";
    document.getElementById("ram-ghat-name").style.display = "block";

    document.getElementById("circle1").style.backgroundColor = "white";
    document.getElementById("circle2").style.backgroundColor = "none";

    document.getElementById("circle1").style.backgroundColor = "white";
    document.getElementById("circle2").style.backgroundColor = "initial";
    document.getElementById("circle3").style.backgroundColor = "initial";


}


function loginPage02() {

    document.getElementById("second-image").style.display = "none";
    document.getElementById("image02").style.display = "none";
    document.getElementById("form2").style.display = "none";
    document.getElementById("exit-login").style.display = "none";
    document.getElementById("mahakaleshwar-name").style.display = "none";

    document.getElementById("third-image").style.display = "none";
    document.getElementById("image03").style.display = "none";
    document.getElementById("form3").style.display = "none";
    document.getElementById("exit-from-reset-login").style.display = "none";
    document.getElementById("ved-shala-name").style.display = "none";

    document.getElementById("first_image").style.display = "block";
    document.getElementById("image01").style.display = "block";

    document.getElementById("form1").style.display = "block";
    document.getElementById("password_input").style.margin = "15px 0px";

    document.getElementById("first-page").style.display = "block";
    document.getElementById("ram-ghat-name").style.display = "block";

    document.getElementById("circle1").style.backgroundColor = "white";
    document.getElementById("circle2").style.backgroundColor = "initial";
    document.getElementById("circle3").style.backgroundColor = "initial";

}






//-----------------------Login page-------------------------------------





var formEl = document.getElementById('form1');
formEl.addEventListener('submit',function(e){
    e.preventDefault();

    
    var numberEl = document.getElementById("mobile_input").value;
    var passwordEl = document.getElementById("password_input").value;
    var loginEl = document.getElementById("login_button").value;

    // fetch post request
    fetch('http://13.50.223.218:8097/user/login',{
        method: 'POST',
        body : JSON.stringify({
                "mobileNumber":numberEl,
                "password": passwordEl
                
        }),
        headers : {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);

        if(data.statuscode == 200) {
            alert("your Login is success full !");
            window.location.assign("ujjain.html");

        }
        else{
            alert("Enter Invalid");
        }
    })

   
})



//---------------------- reset-----------------------------------------------

var formEl = document.getElementById('form3');
formEl.addEventListener('submit',function(e){
    e.preventDefault();

    
    var resetNumberEl = document.getElementById("reset-mobile-number").value;
    var newPasswordEl = document.getElementById("new-password").value;
    var confirmPasswordEl = document.getElementById("confirm-password").value;
    var loginButton03El = document.getElementById("login_button03").value;

    // fetch post request
    fetch('http://13.50.223.218:8097/user/resetpassword',{
        method: 'PATCH',
        body : JSON.stringify({
                "mobileNumber": resetNumberEl,
                "password":newPasswordEl,
                "conformPassword":confirmPasswordEl
            
                
        }),
        headers : {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data);

        if(data.statuscode == 200) {
            alert("success full !");
            window.location.assign("main.html")

           
        }
        else{
            alert("Enter Invalid")
        }
    })

   
})


//---------------circles --------------------------------



function circle1() {
    document.getElementById("second-image").style.display = "none";
    document.getElementById("image02").style.display = "none";
    document.getElementById("form2").style.display = "none";
    document.getElementById("exit-login").style.display = "none";
    document.getElementById("mahakaleshwar-name").style.display = "none";

    document.getElementById("third-image").style.display = "none";
    document.getElementById("image03").style.display = "none";
    document.getElementById("form3").style.display = "none";
    document.getElementById("exit-from-reset-login").style.display = "none";
    document.getElementById("ved-shala-name").style.display = "none";

    document.getElementById("first_image").style.display = "block";
    document.getElementById("image01").style.display = "block";

    document.getElementById("form1").style.display = "block";
    document.getElementById("password_input").style.margin = "15px 0px";

    document.getElementById("first-page").style.display = "block";
    document.getElementById("ram-ghat-name").style.display = "block";

    document.getElementById("circle1").style.backgroundColor = "white";
    document.getElementById("circle2").style.backgroundColor = "initial";
    document.getElementById("circle3").style.backgroundColor = "initial";


}



function circle2() {
    document.getElementById("first_image").style.display = "none";
    document.getElementById("image01").style.display = "none";
    document.getElementById("form1").style.display = "none";
    document.getElementById("first-page").style.display = "none";
    document.getElementById("ram-ghat-name").style.display = "none";

    document.getElementById("second-image").style.display = "block";
    document.getElementById("image02").style.display = "block";
    document.getElementById("form2").style.display = "block";
    document.getElementById("exit-login").style.display = "block";
    document.getElementById("mahakaleshwar-name").style.display = "block";

    document.getElementById("third-image").style.display = "none";
    document.getElementById("image03").style.display = "none";
    document.getElementById("form3").style.display = "none";
    document.getElementById("exit-from-reset-login").style.display = "none";
    document.getElementById("ved-shala-name").style.display = "none";


    document.getElementById("circle2").style.backgroundColor = "white";
    document.getElementById("circle1").style.backgroundColor = "initial";
    document.getElementById("circle3").style.backgroundColor = "initial";


}

function circle3() {
    document.getElementById("first_image").style.display = "none";
    document.getElementById("image01").style.display = "none";
    document.getElementById("form1").style.display = "none";
    document.getElementById("first-page").style.display = "none";
    document.getElementById("ram-ghat-name").style.display = "none";

    document.getElementById("second-image").style.display = "none";
    document.getElementById("image02").style.display = "none";
    document.getElementById("form2").style.display = "none";
    document.getElementById("exit-login").style.display = "none";
    document.getElementById("mahakaleshwar-name").style.display = "none";

    document.getElementById("third-image").style.display = "block";
    document.getElementById("image03").style.display = "block";
    document.getElementById("form3").style.display = "block";
    document.getElementById("exit-from-reset-login").style.display = "block";
    document.getElementById("ved-shala-name").style.display = "block";


    document.getElementById("circle3").style.backgroundColor = "white";
    document.getElementById("circle1").style.backgroundColor = "initial";
    document.getElementById("circle2").style.backgroundColor = "initial";

}






