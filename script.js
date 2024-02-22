
function label_create(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}

function break_create(br){
    var ele=document.createElement(br)
return ele;
    
}

function input_create(tagname,attr1name,attr1value,attr2name,attr2value){
    var ele =document.createElement(tagname);
    ele.setAttribute(attr1name,attr1value);
    ele.setAttribute(attr2name,attr2value);
    return ele;
}
function foo(){
    {
        var first = document.getElementById("Firstname").Value;
        console.log('FirstName:${first}')

    }
    {
        var middle = document.getElementById("Middlename").Value;
        console.log('MiddleName:${middle}')
    }
    {
        var last = document.getElementById("LastName").Value;
        console.log('LastName:${last}')
    }
    {
        var email =document.getElementById("Email").Value;
        console.log('Email:${Email}')
    }
    {
        var password =document.getElementById("Password").value;
        console.log('Password:${Password}')
    }
}
 var first_label =label_create("label","for","firstname","Firstname");
 var first_break =break_create();
 var first_input =input_create("input","type","firstname","id","firstname");
 var firts1_break=break_create();

 var middle_label =label_create("label","for","middlename","Middlename");
 var middle_break =break_create();
 var middle_input =input_create("input","type","middlename","id","middlename");
 var middle1_break=break_create();

 
 var last_label =label_create("label","for","Lastname","Lastname");
 var last_break =break_create();
 var last_input =input_create("input","type","lastname","id","lastname");
 var last1_break=break_create();

 var email =label_create("label","for","Email","Email");
 var email_break =break_create();
 var email_input =input_create("input","type","Email","id","Email");
 var email1_break=break_create();

 var password =label_create("label","for","Password","Password");
 var password_break =break_create();
 var password_input =input_create("input","type","Password","id","Password");
 var password1_break=break_create();

 var button =document.createElement("button");
 button.setAttribute("type","button");
 button.setAttribute("onclick","foo()");
 button.innerHTML ="clickme";
  
document.body.append(first_label,first_break,first_input,firts1_break,middle_label,middle_break,middle_input,middle1_break,last_label.last_break,last_input,last1_break,email,email_break,email_input,email1_break,password,password1_break,password_input,password1_break,button) 
 

 

