const SignupForm = document.getElementById("new-user");
SignupForm.addEventListener("submit",(e)=>{
    const name = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
  const NewUser = JSON.stringify({
    'username':name,
    'email':email,
    'password':password
  }
  );
fetch("http://127.0.0.1:3333/users",{
  'method':'POST',
  'body':NewUser,
  'headers': {
    'Content-Type': 'application/json'
  }
})
  .then(response =>{
    if (!response.ok){
      console.log("wrong")
    }
    window.location.replace("http://stackoverflow.com");
    console.log(response);
    response.json()})
  .then(data=>console.log(data));
  e.preventDefault();
});
