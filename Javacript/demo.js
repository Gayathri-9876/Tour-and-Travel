


function validate(){
let name=document.getElementById('name').value
    if(name==""){
        document.getElementById('nameerror').innerText="Name is required"
    }
    else if(!isNaN(name)){
        document.getElementById('nameerror').innerText="Name should be string"
    }
    let contact=document.getElementById('contact').value
    if(contact==""){
        document.getElementById('contacterror').innerText="Contact is required"
    }
    else if(isNaN(contact)){
        document.getElementById('contacterror').innerText="Contact should be numeric"
    }
    else if(contact.length!=10){
        document.getElementById('contacterror').innerText="Contact should be 10 digits"
    }
    let email=document.getElementById('email').value
    if(email==""){
        document.getElementById('emailerror').innerText="Email is required"
    }
    else if(email.length>40){
        document.getElementById('emailerror').innerText="You Email is too long"
    }
   let count=document.getElementById('count').value
    if(count==""){
        document.getElementById('maxerror').innerText="Number of Travelers is required"
    }
    let age=document.getElementById('age').value
    if(age==""){
        document.getElementById('ageerror').innerText="Age is required"
    }
    let place=document.getElementById('place').value
    if(place==""){
        document.getElementById('placeerror').innerText="Destination is required"
    }
}




function validate2(){
let name2=document.getElementById('name2').value
    if(name2==""){
        document.getElementById('nameerror2').innerText="Name is required"
    }
    else if(!isNaN(name2)){
        document.getElementById('nameerror2').innerText="Name should be string"
    }
    let contact2=document.getElementById('contact2').value
    if(contact2==""){
        document.getElementById('contacterror2').innerText="Contact is required"
    }
    else if(isNaN(contact2)){
        document.getElementById('contacterror2').innerText="Contact should be numeric"
    }
    else if(contact2.length!=10){
        document.getElementById('contacterror2').innerText="Contact should be 10 digits"
    }
    let email2=document.getElementById('email2').value
    if(email2==""){
        document.getElementById('emailerror2').innerText="Email is required"
    }
    else if(email2.length>40){
        document.getElementById('emailerror2').innerText="You Email is too long"
    }
   let count=document.getElementById('count2').value
    if(count2==""){
        document.getElementById('maxerror2').innerText="Number of Travelers is required"
    }
    let age2=document.getElementById('age2').value
    if(age2==""){
        document.getElementById('ageerror2').innerText="Age is required"
    }
    let place2=document.getElementById('place2').value
    if(place2==""){
        document.getElementById('placeerror2').innerText="Destination is required"
    }
   
}





function openPopup() {
  document.getElementById("show").style.display = "flex";
}

function closePopup() {
  document.getElementById("show").style.display = "none";
}