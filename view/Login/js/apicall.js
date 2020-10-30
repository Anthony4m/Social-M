//get form and listen for submit button to be clicked
const SignupForm = document.getElementById("new-user");
SignupForm.addEventListener("submit",(e)=>{
  //select username email and password inputs
    const name = document.querySelector('#username').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    //turn into json file
  const NewUser = JSON.stringify({
    'username':name,
    'email':email,
    'password':password
  }
  );
  //ost into db
fetch("http://127.0.0.1:3333/users",{
  'method':'POST',
  'body':NewUser,
  'headers': {
    'Content-Type': 'application/json'
  }
})
  .then(response =>{
    //if response is ok constinue
    if (!response.ok){
      console.log("wrong")
    }
    //redirect to another page
    //window.location.replace('../Login-Copy/index.html');
    console.log(response);
    response.json()})
  .then(data=>console.log(data));
  e.preventDefault();
});
