console.log("hello");

function CustomerData(){
    
    
    let FirstName=document.getElementById("FirstName").value;
    let LastName=document.getElementById("LastName").value;
    let MobileNumber=document.getElementById("MobileNumber").value;
    let PinCode=document.getElementById("PinCode").value;
    let Adress=document.getElementById("Adress").value;
    let EmailId=document.getElementById("EmailId").value;

    
    localStorage.removeItem("FirstName");
    localStorage.removeItem("LastName");
    localStorage.removeItem("MobileNumber");
    localStorage.removeItem("PinCode");
    localStorage.removeItem("Adress");
    localStorage.removeItem("EmailId");
    
    
    
    localStorage.setItem("FirstName",FirstName);
    localStorage.setItem("LastName",LastName);
    localStorage.setItem("MobileNumber",MobileNumber);
    localStorage.setItem("PinCode",PinCode);
    localStorage.setItem("Adress",Adress);
    localStorage.setItem("EmailId",EmailId);
}


