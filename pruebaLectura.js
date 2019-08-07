var xmlDoc;
var numPreguntas = 0;
var totalPoints = 0;
var isAlreadyCorrect = false;
var isLogged = false;

window.onload = function () {
    leerXML();
    crearLogin();
};

function checkLogin() {

        var user = document.getElementById('usuario').value;
        var pass = document.getElementById('password').value;

        if(user != "" && pass != ""){
            isLogged = true;
            showPreguntas();
        }
        else {
            alert("No puedes dejar los campos vacíos")
        }


}

function showPreguntas(){
    document.getElementById("my_form").style.display = "block";
    document.getElementById("login").style.display = "none";
}
function leerXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            //Almacenamos la variable global xmlDoc para trabajar con ella
            xmlDoc = this.responseXML;
            numPreguntas = xmlDoc.getElementsByTagName('pregunta').length;
            imprimirPreguntas();
        }
    };
    xhttp.open("POST", "preguntas.xml", true);
    xhttp.send();

}

function imprimirPreguntas() {

    for (var i = 0; i < numPreguntas; i++) {

        var tipo = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('tipo')[0].innerHTML;

        switch (tipo) {
            case "radio":
                crearRadio(i);
                break;
            case "check":
                crearCheck(i);
                break;
            case "text":
                crearText(i);
                break;
            case "select":
                crearSelect(i);
                break;
            case "range":
                crearRange(i);
                break;
            default:
                console.log("default");
        }
    }
}

function crearRadio(i) {

    var numSol = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta').length;
    var element = document.getElementById("my_form");

    var div = document.createElement("div");
    div.setAttribute("id", "div" + i);
    div.setAttribute("class", "pregunta");
    element.appendChild(div);

    //enunciado
    var enunciado = document.createElement("label");
    enunciado.setAttribute('for', i);
    enunciado.innerHTML = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('enunciado')[0].innerHTML + "<br>";


    //Comprueba si tiene una imagen que mostrar
    var imagen = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('img')[0];
    if (imagen) {
        var img = document.createElement("img");
        img.setAttribute("src", xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('img')[0].innerHTML);
        img.setAttribute("id", "jirafa");

        div.appendChild(img)
    }
    div.appendChild(enunciado);
    //Radio inputs
    for (var k = 0; k < numSol; k++) {

        var question = xmlDoc.getElementsByTagName('pregunta')[i].getElementsByTagName('respuesta')[k].innerHTML;
        var radioBut = document.createElement("input");

        radioBut.setAttribute("type", "radio");
        radioBut.setAttribute("name", i);
        radioBut.setAttribute("value", k);
        radioBut.setAttribute('id', "div" + i + k + "radio");
        div.appendChild(radioBut);

        var label = document.createElement('label');
        label.setAttribute('for', "div" + i + k + "radio");
        label.innerHTML = question + "<br>";

        div.appendChild(label);
    }


}