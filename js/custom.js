var server;
//server = "http://localhost/spetinfo_app/";
server = "http://spetinfo.com/spetinfo/";
$(function(){
connect();
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