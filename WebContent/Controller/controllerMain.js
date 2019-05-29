//#login
$(document).on("click", "#btnLogin", function(){
	$("#divStsMsgLogin").html("");
	var result = isValidFormLogin(); // use client-Model

	if (result == "true"){
		$.ajax(
		{
			type : "post",
			url : "UserLogin",
			data : $("#formLogin").serialize(),
			complete : function(response, status){
				onLogingComplete(response.responseText, status);
			}
		});
	}
	else{
		$("#divStsMsgLogin").html(result);
	}
});

function onLogingComplete(response, status){
	if (status == "success"){
		if (response == "SUCCESS")
		{
			document.location = "Home.jsp";
		}
		else{
			$("#divStsMsgLogin").html(response);
		}
	}
	else if (status == "error"){
		$("#divStsMsgLogin").html("Error while authenticating");
	}
	else{
		$("#divStsMsgLogin").html("Unknown error while authenticating");
	}
}

function isValidFormLogin(){
	var nameReg = /^[A-Za-z]+$/;
    
	if($('#txtUserName').val() == null || $('#txtUserName').val() == "")
		return "Enter Username";
	
	if($('#txtPassword').val() == null || $('#txtPassword').val() == "")
		return "Enter Password";
	
	if(!$('#txtUserName').val().match(nameReg))
		return "Invalid Character in Username Field";

	return "true";
}





//#Register
$(document).on("click", "#btnRegister", function(){
	$("#divStsMsgRegister").html("");
	var result = isValidFormRegister(); // use client-Model

	if (result == "true"){
		$.ajax(
		{
			type : "post",
			url : "UserRegister",
			data : $("#formRegister").serialize(),
			complete : function(response, status){
				onRegisterComplete(response.responseText, status);
			}
		});
	}
	else{
		$("#divStsMsgRegister").html(result);
	}
});

function onRegisterComplete(response, status){
	if (status == "success"){
		if (response == "SUCCESS")
		{
			document.location = "AddMemSucc.jsp";
		}
		else{
			$("#divStsMsgRegister").html(response);
		}
	}
	else if (status == "error"){
		$("#divStsMsgRegister").html("Error while registering");
	}
	else{
		$("#divStsMsgRegister").html("Unknown error while registering");
	}
}

function isValidFormRegister(){
	var nameReg = /^[A-Za-z]+$/;
	var numberReg =  /^[0-9]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    
    var name = $('#name').val();
    var pw = $('#pw').val();
    var cpw = $('#cpw').val();
    var add = $('#add').val();
    var mail = $('#mail').val();
    var cno = $('#cno').val();
    
    if((name == "") || (name == null))
		return "Enter Username";
    if((pw == "") || (pw == null))
		return "Enter Password";
    if((cpw == "") || (cpw == null))
		return "Enter Current Password";
    if((add == "") || (add == null))
		return "Enter Address";
    if((mail == "") || (mail == null))
		return "Enter Email";
    if((cno == "") || (cno == null))
		return "Enter Contact Number";
    if(!name.match(nameReg))
		return "Invalid Character in User Name Field";
    if(!cno.match(numberReg))
		return "Invalid Character in Contact Number Field";
    if(!mail.match(emailReg))
		return "Invalid Character in Email Field";
	
	return "true";
}

//#EditUser
$(document).on("click", "#btnEditUser", function(){
	$("#divStsMsgEditProfile").html("");
	var result = isValidFormEditUser(); // use client-Model

	if (result == "true"){
		$.ajax(
		{
			type : "post",
			url : "UserEdit",
			data : $("#formEditMyProfile").serialize(),
			complete : function(response, status){
				onUserEditComplete(response.responseText, status);
			}
		});
	}
	else{
		$("#divStsMsgEditProfile").html(result);
	}
});

function onUserEditComplete(response, status){
	if (status == "success"){
		if (response == "SUCCESS")
		{
			document.location = "UpdMemSucc.jsp";
		}
		else{
			$("#divStsMsgEditProfile").html(response);
		}
	}
	else if (status == "error"){
		$("#divStsMsgEditProfile").html("Error while editing");
	}
	else{
		$("#divStsMsgEditProfile").html("Unknown error while editing");
	}
}

function isValidFormEditUser(){
	var numberReg =  /^[0-9]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    
    var add = $('#add').val();
    var mail = $('#mail').val();
    var cno = $('#cno').val();
    
    if((add == "") || (add == null))
		return "Enter Address";
    if((mail == "") || (mail == null))
		return "Enter Email";
    if((cno == "") || (cno == null))
		return "Enter Contact Number";
    if(!cno.match(numberReg))
		return "Invalid Character in Contact Number Field";
    if(!mail.match(emailReg))
		return "Invalid Character in Email Field";
	
	return "true";
}