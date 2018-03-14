var server;
//server = "http://localhost/spetinfo/";
server = "http://spetinfo.com/spetinfo/";
$(function(){
connect();
if(localStorage.getItem("Phone") != null){
	$("#lbarinner").load(server+"leftBarLog.php");
	$("#bottom").show();
}else{
	$("#lbarinner").load(server+"leftBar.php");
}


$("#login").on('submit', function(e){
	e.preventDefault();
	var fdata = $("#login").serialize();
	$.ajax({
		url:server+"app_checkLogin.php",
		data:fdata,
		type:"post",
		beforeSend: function(){
			$("#loader").show();
		},
		success: function(data){
			$("#loader").hide();
			$("#emsg").hide();
			if(data.Status=="Success"){
				console.log(data);
				localStorage.setItem("Sno",data.Sno);
				location.href='Validate.html';
			}else{
				$("#emsg").show();
				$("#emsg").html(data.Status);
			}
		}
	});
});

$("#register").on('submit', function(e){
	e.preventDefault();
	var fdata = $("#register").serialize();
	$.ajax({
		url:server+"app_Register.php",
		data:fdata,
		type:"post",
		beforeSend: function(){
			$("#loader").show();
		},
		success: function(data){
			$("#loader").hide();
			$("#emsg").hide();
			if(data.Status=="Success"){
				console.log(data);
				localStorage.setItem("Sno",data.Sno);
				location.href='ValidateRegister.html';
			}else{
				$("#emsg").show();
				$("#emsg").html(data.Status);
			}
		}
	});
});

$("#validate").on('submit', function(e){
	e.preventDefault();
	var fdata = $("#validate").serialize();
	$.ajax({
		url:server+"app_Validate.php",
		data:fdata,
		type:"post",
		beforeSend: function(){
			$("#loader").show();
		},
		success: function(data){
			$("#loader").hide();
			$("#emsg").hide();
			if(data.Status=="Success"){
				console.log(data);
				localStorage.setItem("Sno",data.Sno);
				localStorage.setItem("Phone",data.Phone);
				location.href='index.html';
			}else{
				$("#emsg").show();
				$("#emsg").html(data.Status);
			}
		}
	});
});

$("#validateregister").on('submit', function(e){
	e.preventDefault();
	var fdata = $("#validateregister").serialize();
	$.ajax({
		url:server+"app_ValidateRegister.php",
		data:fdata,
		type:"post",
		beforeSend: function(){
			$("#loader").show();
		},
		success: function(data){
			$("#loader").hide();
			$("#emsg").hide();
			if(data.Status=="Success"){
				console.log(data);
				localStorage.setItem("Sno",data.Sno);
				localStorage.setItem("Phone",data.Phone);
				location.href='index.html';
			}else{
				$("#emsg").show();
				$("#emsg").html(data.Status);
			}
		}
	});
});
});
function connect(){
	$.ajax({
		url:server+"connect.php",
		beforeSend:function(){

		},
		success: function(str){
			$("#con").hide();
		},
		error: function(){
			$("#con").show();
		}
	});
}

function showSubCategory(cat){
	localStorage.setItem("Category",cat);
	location.href="SubCategory.html";
}

function showContent(scat){
	localStorage.setItem("SubCategory",scat);
	location.href="Content.html";
}
function showData(infoid){
	localStorage.setItem("Infoid",infoid);
	location.href="View.html";
}
function searchString(str){
	if(str.length>3){
		$.ajax({
			url:server+"app_Search.php",
			data:{"key":str},
			type:"post",
			success:function(data){
				console.log(data);
				if(data.length>0){
					$("#searchBox").show();
                   $('#mysearch').html(data);
				}else{
					$("#searchBox").hide();			
				}
			}
		});
	}else{
		$("#searchBox").hide();
	}
}

function showBar(){
	$("#lbar").toggle("slide", {direction: "left" }, 500);
  }