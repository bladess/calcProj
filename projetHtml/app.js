
function main(){
 
var courant ='';
var stock ='';
var imp ='';
var op ='';
var operator = ["+","-","*","/"];
$(".btn-group-vertical").children("button").click(function(){
	imp = $(this).text();
	if(imp=== "=")
	{
		$("#result2").text(operate(stock,courant,op));	
		stock = '';
		courant ='';
		op = '';
	}
	else{
		if(operator.indexOf(imp)=== -1)
		{
			courant = courant+imp;
			$("#current").text(courant);	
		}
		else{
			stock = courant;
			courant ='';
			op = imp;
			$("#stock").text(stock);
			$("#current").text(courant);
			$("#ope").text(op);
		}
	}
});

$("#buttonForm").click(function(){
	var nb1 =$("#input1").val();
	var nb2 = $("#input2").val();
	$("#result").text(operate(nb1,nb2,$("#selectOperation").val()));
});

}

function operate(op1, op2, operator){
	if(operator === "+"){
		return parseInt(op1) + parseInt(op2)
	}
	else if(operator === "-"){
		return parseInt(op1) - parseInt(op2)
	}
	else if(operator === "*"){
		return parseInt(op1) * parseInt(op2)
	}
	else if(operator === "/" && op2 !== '0'){
		return parseInt(op1) / parseInt(op2)
	}
	else{
		return "error";
	}
}
$(document).ready(function(){
	main();
});