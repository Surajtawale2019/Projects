function validation()
{
   var name1=document.getElementById("name").value; 
   var regn=/^[A-Za-z ]{2,20}$/;

   if(name1=="")
   {
        document.getElementById("span1").innerHTML="* Name Require";
        return false;
   }
   else if(regn.test(name1))
   {
        document.getElementById("span1").innerHTML="";
   }
   else
   {
       document.getElementById("span1").innerHTML="Invalid Username";
       return false;
   }
  
  
  
   // For Age //

   var age1=document.getElementById("age").value; 
   var rega=/^[0-9]{2}$/;

   if(age1=="")
   {
        document.getElementById("span2").innerHTML="* Age Require";
        return false;
   }
//    else if(age1>=16)
//    {
//         document.getElementById("span2").innerHTML="* Age Is Below";
//         return false;
//    }
   else if(rega.test(age1))
    {
        document.getElementById("span2").innerHTML="";
    } 
    else
    {
        document.getElementById("span2").innerHTML="Invalid Age";
        return false;
    }

  
  
    // For Phone Number //

   var pnum1=document.getElementById("pnum").value; 
   var regp=/^[6-9][0-9]{9}$/;

   if(pnum1=="")
   {
        document.getElementById("span4").innerHTML="* Phone Number Require";
        return false;
   }
   else if(regp.test(pnum1))
   {
        document.getElementById("span4").innerHTML="";
   }
   else
   {
       document.getElementById("span4").innerHTML="Invalid Phone Number";
       return false;
   }

   
   
   //   For Username    //

    var email1=document.getElementById("email").value;
    var regemail=/^[A-Za-z0-9@!#$%&*]{0,20}$/;

    if(email1=="")
    {
        document.getElementById("span5").innerHTML="* UserName Require";
        return false;
    }
    else if(regemail.test(email1))
    {
        document.getElementById("span5").innerHTML="";
    }

   
   
   
    //   For Password    //

   var pass1=document.getElementById("pass").value;
   var regpass=/^[A-Za-z0-9!@#$%^&*_+]{0,20}$/;

    if(pass1=="")
    {
        document.getElementById("span6").innerHTML="*Password Required";
        return false;
    }
    else if(regpass.test(pass1))
    {
        document.getElementById("span6").innerHTML="";
    }
    else
    {
        document.getElementById("span6").innerHTML="Invalid Password";
        return false;
    }

  
  
    //   For Confirm Password    //

    var cpass1=document.getElementById("cpass").value;
    var regcpass=/^[A-Za-z0-9!@#$%^&*_+]{0,20}$/;

    if(cpass1=="")
    {
        document.getElementById("span7").innerHTML="*Password Required";
        return false;
    }
    else if(pass1==cpass1)
    {
        document.getElementById("span7").innerHTML="";
    }
    else
    {
        document.getElementById("span7").innerHTML="* Password Not Matching"; 
        return false; 
    }

}