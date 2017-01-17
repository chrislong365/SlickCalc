

var total= 0;
var current= "";
var symbol="";
var calculated= 0;
var first= 0;

	// console.log(document.getElementById('btn-0'))


	document.getElementById('btn-0').addEventListener("click", function(){
	 add('0');
	});
	// document.getElementById('btn-0').onclick= add('0') ;

	document.getElementById('btn-1').addEventListener("click", function(){
		add('1');
	});

	document.getElementById('btn-2').addEventListener("click", function(){
		add('2');
	});

	document.getElementById('btn-3').addEventListener("click", function(){
		add('3'); 
	});

	document.getElementById('btn-4').addEventListener("click", function(){
		add('4');
	});

	document.getElementById('btn-5').addEventListener("click", function(){
		add('5'); 
	});

	document.getElementById('btn-6').addEventListener("click", function(){
		add('6');
	});

	document.getElementById('btn-7').addEventListener("click", function(){
		add('7'); 
	});

	document.getElementById('btn-8').addEventListener("click", function(){
		add('8'); 
	});

	document.getElementById('btn-9').addEventListener("click", function(){
		add('9'); 
	});

	document.getElementById('btn-dec').addEventListener("click", function(){
		add('.');
	});


	document.getElementById('btn-add').addEventListener("click", addition );

	document.getElementById('btn-sub').addEventListener("click", subbtraction );

	document.getElementById('btn-mult').addEventListener("click", multiplication );
	
	document.getElementById('btn-div').addEventListener("click", division );

	document.getElementById('btn-equal').addEventListener("click", equals );

	document.getElementById('btn-neg').addEventListener("click", negate );

	document.getElementById('btn-clr').addEventListener("click", clear );

	document.getElementById('btn-back').addEventListener("click", del );

	document.getElementById('btn-square').addEventListener("click", square );







function add(val){
	if (calculated== 1 ){
		calculated= 0;
		current= val;
	}
	else
	{
		current= current.concat(val);
	}

	document.getElementById('calc__screen--digets').innerHTML= current;
}

function addition(){
	compute();
	symbol= '+';

}
function subbtraction(){
	compute();
	symbol= '-';

}
function multiplication(){
	compute();
	symbol= '*';

}
function division(){
	compute();
	symbol= '/';

}
function equals(){
	if (current== "" && total== 0)
	{
	document.getElementById('calc__screen--digets').innerHTML= "INVALID INPUT";
	}
	else
	{
		compute();
		total= 0;
		current= "";
		calculated= 1;
		first= 0;
		symbol= "";
	}
}
function negate(){
	if (current== "" && total== 0)
	{
	document.getElementById('calc__screen--digets').innerHTML= "INVALID INPUT";
	}
	else
	{
		current= "-".concat(current);
		document.getElementById('calc__screen--digets').innerHTML= current;
	}
}
function clear(){
	total= 0;
	current= "";
	first= 0;
	symbol= "";
	calculated= 0;
	document.getElementById('calc__screen--digets').innerHTML= "0";

}
function del(){
	if (current != ""){
		current= current.substring(0, current.length -1);
		document.getElementById('calc__screen--digets').innerHTML= current;
	}
	else
	{
		total=0;
		document.getElementById('calc__screen--digets').innerHTML= "0";

	}
}

function square(){
	if (current== "" && total== 0)
	{
	document.getElementById('calc__screen--digets').innerHTML= "INVALID INPUT";
	}
	else
	{
		if (calculated!=1)
		{
			total= parseFloat(current)* parseFloat(current);
			document.getElementById('calc__screen--digets').innerHTML= total;
			calculated= 1;
		}
		else
		{
			total= total* total;
			document.getElementById('calc__screen--digets').innerHTML= total;
		}
	}
}




function compute(){
	if (symbol== '+'){
		total= total + parseFloat(current);
		calculated= 1;
		document.getElementById('calc__screen--digets').innerHTML= total;
	}
	else if(symbol== '-'){
		total= total- parseFloat(current);
		calculated= 1;
		document.getElementById('calc__screen--digets').innerHTML= total;

	}
	else if(symbol== '*'){
		total= total* parseFloat(current);
		calculated= 1;
		document.getElementById('calc__screen--digets').innerHTML= total;
	}
	else if(symbol== '/'){
		if (parseFloat(current)== 0 && total!= 0)
		{
			if (String(total).charAt(0)== "-")
			{
				total= -Infinity;
			}
			else
			{
				total= Infinity;
			}
		}
		else
		{
			total= total/ parseFloat(current);
		}
		calculated= 1;
		document.getElementById('calc__screen--digets').innerHTML= total;
	}
	else if(first==0){
		total= parseFloat(current);
		current= "";
		first= 1;
		calculated= 1;
	}
}

