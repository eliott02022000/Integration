

document.body.style.display = "block";
document.querySelector('#content #full_content').style.display = "none";
document.querySelector('header #top-bar').style.display = "none";
document.querySelector('footer').style.display = "none";
document.querySelector('div .clear').style.display = "none";
document.querySelector('body #content').style.display = "none";

var divbackground = document.createElement("div"); 
divbackground.setAttribute("id", "leftcontainer");
var showbackground = document.body.appendChild(divbackground); 
document.body.insertBefore(divbackground, showbackground);  

var form = document.createElement("form"); 
form.method = "post"
form.action = "?action=login"
divbackground.appendChild(form);


var divlogo = document.createElement("div"); 
divlogo.setAttribute("id", "logo");
divlogo.setAttribute('href', "http://intranet.supinternet.fr/")
form.appendChild(divlogo);

var username = document.createElement("input");
username.type = "text"
username.name = "login"
username.placeholder = "Username"
username.id = "username"
form.appendChild(username);


var password = document.createElement("input");
password.type = "password"
password.name = "pwd"
password.placeholder = "Password"
password.id = "password"
form.appendChild(password);

var submit = document.createElement("input");
submit.type = "submit"
submit.name = "do"
submit.value = "LOGIN"
submit.id = "submit"
form.appendChild(submit);

var forgotpwd = document.createElement("a");
forgotpwd.href = "?action=forgot_pwd"
forgotpwd.innerHTML = "Forgot password ?"
forgotpwd.id = "forgotpwd"
divbackground.appendChild(forgotpwd);

var logoo = document.querySelector('#top-bar-left');
logoo.setAttribute('href', 'http://intranet.supinternet.fr')
logoo.setAttribute('cursor', 'pointer')


var menuburger = document.createElement('div');
menuburger.class = 'menuburger'
document.querySelector('div#top-bar').appendChild(menuburger)

document.querySelector('#submit').addEventListener('click', () => {
  setInterval(() =>  { 
    document.querySelector('header #top-bar').style.display = "block";
    document.querySelector    
  }, 2000);
})



// });



// if (document.querySelectorAll('#sidebar') != null) {
//   console.log()
// }







/* <input type="text" placeholder="luke.skywalker" name="login"></input>
<input type="password" placeholder="*********" name="pwd"></input>
<input type="submit" value="Connexion" name="do"></input>
<a href="?action=forgot_pwd">Mot de passe oublié?</a> */