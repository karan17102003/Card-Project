function validateForm(){
    var firstName=document.forms["RegForm"]["FirstName"];
    var lastName=document.forms["RegForm"]["LastName"];
    var country=document.forms["RegForm"]["Country"];
    var phoneNumber=document.forms["RegForm"]["PhoneNumber"];
    var state=document.forms["RegForm"]["State"];
    var city=document.forms["RegForm"]["City"];
    var village=document.forms["RegForm"]["Village"];
    if(firstName.value==""){
        window.alert("please enter your name");
        firstName.focus();
        return false;
    }
    if(lastName.value==""){
        window.alert("please enter your name");
        lastName.focus();
        return false;
    }
    if(country.value==""){
        window.alert("please enter your country");
        country.focus();
        return false;
    }
    if(phoneNumber.value==""){
        window.alert("please enter Number");
        phoneNumber.focus();
        return false;
    }
    if(state.value==""){
        window.alert("please enter your state");
        state.focus();
        return false;
    }
    if(city.value==""){
        window.alert("please enter city");
        city.focus();
        return false;
    }
    if(village.value==""){
        window.alert("please enter your village");
        village.focus();
        return false;
    }
    
    
        if(register()){
            window.alert("registeration is done")
            return true;
        }
        else{
            return false;
        }
    
}
let users=[];
function register(){
    var firstName=document.forms["RegForm"]["FirstName"].value;
    var lastName=document.forms["RegForm"]["LastName"].value;
    var country=document.forms["RegForm"]["Country"].value;
    var phoneNumber=document.forms["RegForm"]["PhoneNumber"].value;
    var state=document.forms["RegForm"]["State"].value;
    var city=document.forms["RegForm"]["City"].value;
    var village=document.forms["RegForm"]["Village"].value;
    var newUser={
        id:Number(new Date),
        "firstName":firstName,
        "lastName":lastName,
        "country":country,
        "phoneNumber":phoneNumber,
        "state":state,
        "city":city,
        "village":village
    }
    users.push(newUser)
    console.log(users)
    var userString=JSON.stringify(users);
   localStorage.setItem('user',userString);

}