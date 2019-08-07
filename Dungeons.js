var numSala= 0;
var hello= null;
var isNull= true;
/*derecha, arriba, izquierda,abajo*/
var map = new Map ();
map.set(0,[1,4,6,null]);
map.set(1,[null,2,0,null]);
map.set(2,[null,3,4,1]);
map.set(3,[null,null,5,2]);
map.set(4,[3,5,7,0]);
map.set(5,[3,11,10,4]);
map.set(6,[0,7,null,null]);
map.set(7,[4,10,8,6]);
map.set(8,[7,9,null,null]);
map.set(9,[10,13,null,8]);
map.set(10,[5,12,9,7]);
map.set(11,[null,14,12,5]);
map.set(12,[11,null,13,10]);
map.set(13,[12,null,null,9]);
map.set(14,[null,null,15,11]);
map.set(15,[14,null,16,null]);
map.set(16,[null,null,null,null]);

var visitedMap = [];
window.onload = function load(){
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	Sala(xhttp);
    }
};
xhttp.open("GET", "https://raw.githubusercontent.com/ValenDieguez/Formularios-Llmm/master/preguntasyrespuestas.xml");
xhttp.send();

}


function Sala(xml){
	parser = new DOMParser();
	xmlDoc = parser.parseFromString(xml.responseText,"text/xml");
	document.getElementById('boton').onclick = checkPreguntas;
	Tags=["nombre","Pregunta","eleccion1","eleccion2","eleccion3","eleccion4"];

	crearRadio()
	

	
	
}


function mapPrinter(){
	var salaConstuctor= "sala"+numSala;
	var mapChanger = document.getElementById(salaConstuctor).style.color= "White";
}
function pantalla(){
	
	
}

function crearRadio() {
	mapPrinter();
	document.getElementById('boton').onclick = checkPreguntas;
	document.getElementById('my_form').innerHTML=''
	var i=numSala
    var numSol = 4;
    var element = document.getElementById("my_form");
	
    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "pregunta");
    element.appendChild(div);
    //Radio inputs
    var k=0
		
		//sala
		var salaName = xmlDoc.getElementsByTagName('sala')[i].getElementsByTagName('nombre')[k].innerHTML;
		
		var name = document.createElement('h1');
		name.innerHTML = salaName + "<br>";
        div.appendChild(name);
		
		//pregunta
		
		var preguntaTRACK = xmlDoc.getElementsByTagName('sala')[i].getElementsByTagName('Pregunta')[k].innerHTML;
		var preguntaTexto = document.createElement('h2');
		preguntaTexto.innerHTML = preguntaTRACK + "<br>";
        div.appendChild(preguntaTexto);
		
		
//question 1
        var question1 = xmlDoc.getElementsByTagName('sala')[i].getElementsByTagName('eleccion1')[k].innerHTML;
        var radioBut1 = document.createElement("input");

        radioBut1.setAttribute("type", "radio");
        radioBut1.setAttribute("name", i);
        radioBut1.setAttribute("value", k);
        radioBut1.setAttribute('id', "div" + i + k + "radio");
        div.appendChild(radioBut1);
        var label = document.createElement('label');
        label.setAttribute('for', "div" + i + k + "radio");
        label.innerHTML = question1 + "<br>";
        div.appendChild(label);
		//question2
		var question2 = xmlDoc.getElementsByTagName('sala')[i].getElementsByTagName('eleccion2')[k].innerHTML;
        var radioBut2 = document.createElement("input");

        radioBut2.setAttribute("type", "radio");
        radioBut2.setAttribute("name", i);
        radioBut2.setAttribute("value", k);
        radioBut2.setAttribute('id', "div" + i + k + "radio");
        div.appendChild(radioBut2);
        var label2 = document.createElement('label');
        label2.setAttribute('for', "div" + i + k + "radio");
        label2.innerHTML = question2 + "<br>";
        div.appendChild(label2);
		
		//question 3
		var question3 = xmlDoc.getElementsByTagName('sala')[i].getElementsByTagName('eleccion3')[k].innerHTML;
        var radioBut3 = document.createElement("input");

        radioBut3.setAttribute("type", "radio");
        radioBut3.setAttribute("name", i);
        radioBut3.setAttribute("value", k);
        radioBut3.setAttribute('id', "div" + i + k + "radio");
        div.appendChild(radioBut3);
        var label3 = document.createElement('label');
        label3.setAttribute('for', "div" + i + k + "radio");
        label3.innerHTML = question3 + "<br>";
        div.appendChild(label3);
		
		//question4
		
		var question4 = xmlDoc.getElementsByTagName('sala')[i].getElementsByTagName('eleccion4')[k].innerHTML;
        var radioBut4 = document.createElement("input");

        radioBut4.setAttribute("type", "radio");
        radioBut4.setAttribute("name", i);
        radioBut4.setAttribute("value", k);
        radioBut4.setAttribute('id', "div" + i + k + "radio");
        div.appendChild(radioBut4);
        var label4 = document.createElement('label');
        label4.setAttribute('for', "div" + i + k + "radio");
        label4.innerHTML = question4 + "<br>";
        div.appendChild(label4);
    
	
	


}

function checkPreguntas() {
	
	var element = document.getElementById("my_form");
	
    var div = document.createElement("div");
    div.setAttribute("id", "div" + numSala);
    div.setAttribute("class", "pregunta");
    element.appendChild(div);

    var radios = document.getElementsByName(numSala);
    
    for (var z = 0, length = radios.length; z < length; z++) {

        if (radios[z].checked) //Selecciona la respuesta seleccionada
        {
            //Comprueba si tiene el atributo correcto=true, y si es así, suma 1 a los puntos
            var preguntaSel = radios[z].getAttribute("value");
			//document.getElementById('my_form').innerHTML='';
			if(z==0){

            var resp = xmlDoc.getElementsByTagName("sala")[numSala].getElementsByTagName(("eleccion1"))[preguntaSel].getAttribute("correcto");

			var salaName = xmlDoc.getElementsByTagName('sala')[numSala].getElementsByTagName('respuesta1')[0].innerHTML;
				var name = document.createElement('h2');
				 name.setAttribute('id', "respuesta");
				name.innerHTML = salaName + "<br>";
				div.appendChild(name);
				var isCorrect = xmlDoc.getElementsByTagName("eleccion1")[numSala].getAttribute("correcto");
				document.getElementById('boton').onclick = cambiarSala;

            if (resp) {
				isNull = false;
                return isNull;
            }
            
			
			}
			
			
			else if(z==1){

            var resp2 = xmlDoc.getElementsByTagName("sala")[numSala].getElementsByTagName(("eleccion2"))[preguntaSel].getAttribute("correcto");
			var salaName = xmlDoc.getElementsByTagName('sala')[numSala].getElementsByTagName('respuesta2')[0].innerHTML;
				var name = document.createElement('h2');
				name.setAttribute('id', "respuesta");
				name.innerHTML = salaName + "<br>";
				div.appendChild(name);
			
				document.getElementById('boton').onclick = cambiarSala;

            if (resp2) {
				isNull = false;
                 return isNull;
            }
            
			
			}
			
			
			else if(z==2){

            var resp3 = xmlDoc.getElementsByTagName("sala")[numSala].getElementsByTagName(("eleccion3"))[preguntaSel].getAttribute("correcto");
			var salaName = xmlDoc.getElementsByTagName('sala')[numSala].getElementsByTagName('respuesta3')[0].innerHTML;
				var name = document.createElement('h2');
				name.setAttribute('id', "respuesta");
				name.innerHTML = salaName + "<br>";
			div.appendChild(name);
			document.getElementById('boton').onclick = cambiarSala;

            if (resp3) {
				isNull = false;
                  return isNull;
			
			}
            
			
			}
			
			
			else if(z==3){

            var resp4 = xmlDoc.getElementsByTagName("sala")[numSala].getElementsByTagName(("eleccion4"))[preguntaSel].getAttribute("correcto");
			var salaName = xmlDoc.getElementsByTagName('sala')[numSala].getElementsByTagName('respuesta4')[0].innerHTML;
				var name = document.createElement('h2');
				name.setAttribute('id', "respuesta");
				name.innerHTML = salaName + "<br>";
				div.appendChild(name);
				document.getElementById('boton').onclick = cambiarSala;

            if (resp4) {
				isNull = false;
                  return isNull;
            }
            
			
			}
			
			
			
	}}
    
 return isNull;

    }
	
function cambiarSala(){
	if(numSala == 16){
			document.getElementById('my_form').innerHTML='';
		i=numSala
		var numSol = 4;
		var element = document.getElementById("my_form");

		var div = document.createElement("div");
		div.setAttribute("id", "div" + i);
		div.setAttribute("class", "pregunta");
	element.appendChild(div);

		//Radio inputs
		var k =0;
		
		//sala
		var salaName = xmlDoc.getElementsByTagName('sala')[i].getElementsByTagName('nombre')[k].innerHTML;
		var name = document.createElement('h1');
		name.innerHTML = salaName + "<br>";
        div.appendChild(name);
		
		//pregunta

		var preguntaTexto = document.createElement('h2');
		preguntaTexto.innerHTML = "HAS GANADO! ENHORABUENA !" + "<br>";
        div.appendChild(preguntaTexto);
		document.getElementById('boton').onclick = crearRadio;
		numSala=0;
		
		var img = document.createElement("img");
        img.setAttribute("src","img/robot.gif" );
		img.setAttribute("style","max-width:15%" );
        div.appendChild(img)
		return numSala;
			
		}
	
	else if (isNull){
		document.getElementById('my_form').innerHTML='';
		i=numSala
		var numSol = 4;
		var element = document.getElementById("my_form");

		var div = document.createElement("div");
		div.setAttribute("id", "div" + i);
		div.setAttribute("class", "pregunta");
	element.appendChild(div);
		var salaName = "YOU DIED"
		var name = document.createElement('h1');
		name.innerHTML = salaName + "<br>";
        div.appendChild(name);
		var preguntaTexto = document.createElement('h2');
		preguntaTexto.innerHTML = "Has muerto entre terribles sufrimientos. Al menos tienes pollo!";
        div.appendChild(preguntaTexto);
		document.getElementById('boton').onclick = crearRadio;
		numSala=0;
		
		var img = document.createElement("img");
        img.setAttribute("src","img/lapida.jpg" );
		img.setAttribute("style","max-width:15%" );
        div.appendChild(img)
		return numSala;
		
		
		}
	else{
	
	document.getElementById('my_form').innerHTML='';
		i=numSala
		var numSol = 4;
		var element = document.getElementById("my_form");

		var div = document.createElement("div");
		div.setAttribute("id", "div" + i);
		div.setAttribute("class", "pregunta");
	element.appendChild(div);

		//Radio inputs
		var k =0;
		
		//sala
		var salaName = xmlDoc.getElementsByTagName('sala')[i].getElementsByTagName('nombre')[k].innerHTML;
		var name = document.createElement('h1');
		name.innerHTML = salaName + "<br>";
        div.appendChild(name);
		
		//pregunta

		var preguntaTexto = document.createElement('h2');
		preguntaTexto.innerHTML = "a que sala quieres ir? (Si eliges precipicio mueres!)" + "<br>";
        div.appendChild(preguntaTexto);
		
		//question 1
        var question1 = map.get(numSala)[0];
        var radioBut1 = document.createElement("input");
        radioBut1.setAttribute("type", "radio");
        radioBut1.setAttribute("name", i);
        radioBut1.setAttribute("value", k);
        radioBut1.setAttribute('id', "div" + i + k + "radio");
        div.appendChild(radioBut1);
        var label = document.createElement('label');
        label.setAttribute('for', "div" + i + k + "radio");
		if(question1 != null){
        label.innerHTML = question1 + "<br>";
        div.appendChild(label);} else{
			label.innerHTML = "Precipicio" + "<br>";
		div.appendChild(label);}
		document.getElementById('boton').onclick = cambiadorNumSala;
		
		//question2
		
        var question2 = map.get(numSala)[1];
        var radioBut1 = document.createElement("input");
        radioBut1.setAttribute("type", "radio");
        radioBut1.setAttribute("name", i);
        radioBut1.setAttribute("value", k);
        radioBut1.setAttribute('id', "div" + i + k + "radio");
        div.appendChild(radioBut1);
        var label = document.createElement('label');
        label.setAttribute('for', "div" + i + k + "radio");
        if(question2 != null){
        label.innerHTML = question2 + "<br>";
        div.appendChild(label);} else{
			label.innerHTML = "Precipicio" + "<br>";
		div.appendChild(label);}
		document.getElementById('boton').onclick = cambiadorNumSala;
		//question3
        var question3 = map.get(numSala)[2];
	
		
        var radioBut1 = document.createElement("input");

        radioBut1.setAttribute("type", "radio");
        radioBut1.setAttribute("name", i);
        radioBut1.setAttribute("value", k);
        radioBut1.setAttribute('id', "div" + i + k + "radio");
        div.appendChild(radioBut1);
        var label = document.createElement('label');
        label.setAttribute('for', "div" + i + k + "radio");
        if(question3 != null){
        label.innerHTML = question3 + "<br>";
        div.appendChild(label);} else{
			label.innerHTML = "Precipicio" + "<br>";
		div.appendChild(label);}
		document.getElementById('boton').onclick = cambiadorNumSala;
		//question 4
        var question4 = map.get(numSala)[3];
		
        var radioBut1 = document.createElement("input");

        radioBut1.setAttribute("type", "radio");
        radioBut1.setAttribute("name", i);
        radioBut1.setAttribute("value", k);
        radioBut1.setAttribute('id', "div" + i + k + "radio");
        div.appendChild(radioBut1);
        var label = document.createElement('label');
        label.setAttribute('for', "div" + i + k + "radio");
        if(question4 != null){
        label.innerHTML = question4 + "<br>";
        div.appendChild(label);} else{
			label.innerHTML = "Precipicio" + "<br>";
		div.appendChild(label);}
		document.getElementById('boton').onclick = cambiadorNumSala;
		console.log(numSala)
		hello= numSala;
		
	
}return isNull=true;
}
		
	


function cambiadorNumSala(){
	var id = hello;
	var element = document.getElementById("my_form");
	
  

    var radios = document.getElementsByName(id);
    for (var z = 0; z < 4; z++) {

        if (radios[z].checked) //Selecciona la respuesta seleccionada
        {
            var preguntaSel= map.get(id)[z];
			//document.getElementById('my_form').innerHTML='';
			console.log(preguntaSel)
			if(z==0){
                var numSalaElegida = map.get(id)[0]
				
            }
			
			else if(z==1){

                var numSalaElegida = map.get(id)[1]
				
            }
			
			else if(z==2){
                var numSalaElegida = map.get(id)[2]

			}
			else if(z==3){

                var numSalaElegida = map.get(id)[3]

			}
			if (preguntaSel==null){
				document.getElementById('my_form').innerHTML='';
		i=numSala
		var numSol = 4;
		var element = document.getElementById("my_form");
		var div = document.createElement("div");
		div.setAttribute("id", "div" + i);
		div.setAttribute("class", "pregunta");
		element.appendChild(div);
		var salaName = "YOU DIED"
		var name = document.createElement('h1');
		name.innerHTML = salaName + "<br>";
        div.appendChild(name);
		var preguntaTexto = document.createElement('h2');
		preguntaTexto.innerHTML = "Has muerto por no hacer caso a tus instintos. Es el pollo diablo!";
        div.appendChild(preguntaTexto);
		document.getElementById('boton').onclick = crearRadio;
		numSala=0;
		var img = document.createElement("img");
        img.setAttribute("src","img/coyote.jpg" );
		img.setAttribute("style","max-width:15%" );
        div.appendChild(img)
		return numSala;
			
			}
}
	}
	
	document.getElementById('my_form').innerHTML=''
	document.getElementById('boton').onclick = crearRadio;
	console.log (numSalaElegida)
	numSala= numSalaElegida;
	
	
	return numSala;
	
}

