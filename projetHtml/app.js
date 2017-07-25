
$("#buttonForm").click(function(){
	var nb1 = parseInt($("#input1").val());
	var nb2 = parseInt($("#input2").val());
	switch($("#selectOperation").val()){
		case "+":
			$("#result").text(nb1 + nb2);
			break;
		case "-":
			$("#result").text(nb1 - nb2);
			break;
		case "*":
			$("#result").text(nb1 * nb2);
			break;
		case "/":
			$("#result").text(nb1 / nb2);
			break;
		default:
			break;

	}
});
function main(){
 
var courant ='';
var stock ='';
var imp ='';
var op ='';
$(".btn-group-vertical").children("button").click(function(){
	imp = $(this).text();
	switch(imp){
		case "+":
		case "-":
		case "*":
		case "/":
			stock = courant;
			courant ='';
			op = imp;
			$("#stock").text(stock);
			$("#current").text(courant);
			$("#ope").text(op);
		break;
		case "=":
		switch(op){
			case "+":
			$("#result2").text(parseInt(stock) + parseInt(courant));
			break;
			case "-":
			$("#result2").text(parseInt(stock) - parseInt(courant));
			break;
			case "*":
			$("#result2").text(parseInt(stock) * parseInt(courant));
			break;
			case "/":
			$("#result2").text(parseInt(stock) / parseInt(courant));
			break;
			default:
			$("#result2").text("no operator");
			break;
		}
			stock = '';
			courant ='';
			op = '';
		break;
		default:
			courant = courant+imp;
			$("#current").text(courant);
		break;
		}
	


});

}


$(document).ready(function(){
	main();
});