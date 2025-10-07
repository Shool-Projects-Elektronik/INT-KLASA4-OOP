
const button = document.getElementById('button')
const form  = document.getElementById('pass')

button.addEventListener('click',addUser)

class Uzytkownik
{
   constructor(pass) 
   {
    this.pass = pass;
   }
}

const users = []

let userCount = 0;



function checkPass(pass) {
  
  if (pass.length < 8) return false;
 
  let hasNum = false;
  for (let i = 0; i < pass.length; i++) {
    const c = pass[i];
    if (c >= '0' && c <= '9') {
     hasNum = true;
      break; 
    }
  }
  return hasNum;
}

function addUser()
{
   if (!checkPass(form.value)) {
      alert("nieprawidlowe haslo");
      return;
    }

    
    const user = new Uzytkownik(form.value);
    users.push(user);

    console.log("Dodano użytkownika:", user);
    console.log("Wszyscy użytkownicy:", users);
}
