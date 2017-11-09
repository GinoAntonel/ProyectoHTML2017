var config = {
    apiKey: "AIzaSyABYl3WcpQqWPvhQP1BcPddhYWDFKeJ6Cw",
    authDomain: "proyectoprogramacion-e3521.firebaseapp.com",
    databaseURL: "https://proyectoprogramacion-e3521.firebaseio.com",
    projectId: "proyectoprogramacion-e3521",
    storageBucket: "proyectoprogramacion-e3521.appspot.com",
    messagingSenderId: "352112999600"
};
var select;
    $('#chooscat').change(function () {
        select = $(this).find("option:selected").text();
        console.log(select);
    });

function tomarDatos() {
    var modelo;
    //var marca;
    var precio;
    var estado;

    var nombre;
    var apellido;
    var telefono;
    var email;

    var descripcion;
    
    
    var auto = {
        "modelo": "",
        "select": select,
        "precio": "",
        "estado": "",
        "nombre": "",
        "apellido": "",
        "telefono": "",
        "email": "",
        "descripcion": ""
    };

    
    

    
    auto.modelo = document.getElementById("txtModelo").value;
    //auto.marca = document.getElementById("txtMarca").value;
    auto.precio = document.getElementById("txtPrecio").value;
    auto.estado = document.getElementById("txtEstado").value;

    auto.nombre = document.getElementById("txtNombre").value;
    auto.apellido = document.getElementById("txtApellido").value;
    auto.telefono = document.getElementById("txtTelefono").value;
    auto.email = document.getElementById("txtEmail").value;
    auto.descripcion = document.getElementById("txtDescrpicion").value;
    
    escribirDatos(auto);

    document.getElementById("lblModelo").innerHTML = modelo;
    document.getElementById("lblMarca").innerHTML = marca;
    document.getElementById("lblPrecio").innerHTML = precio;
    document.getElementById("lblEstado").innerHTML = estado;

    document.getElementById("lblNombre").innerHTML = nombre;
    document.getElementById("lblApellido").innerHTML = apellido;
    document.getElementById("lblTelefono").innerHTML = telefono;
    document.getElementById("lblEmail").innerHTML = email;
    document.getElementById("lblDescripcion").innerHTML = descripcion;

}


function escribirDatos(json) {
    var elemento = firebase.database().ref("/auto/").push(json);
    var storageRef = firebase.storage().ref().child("autos/" + elemento.key + ".jpg");
    var file = document.getElementById('file').files[0];
    console.log(file);
    storageRef.put(file).then(function (snapshot) {
        console.log('Uploaded a blob or file!');
    });
    leerDatos();
}

function leerDatos() {
    //var div1 = document.getElementById('div1');
    var leadsRef = firebase.database().ref('/auto/');
    leadsRef.on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            console.log(childData);

            //CREAR DIV
            var div = document.createElement('div');
            div.classList = "col-lg-4 col-sm-6 text-center mb-4";

            //CREAR IMAGEN
            var imagen = document.createElement('img');
            firebase.storage().ref().child("autos/" + childSnapshot.key + ".jpg").getDownloadURL().then(function (url) {
                imagen.src = url;
            });
            imagen.classList = "rounded-circle img-fluid d-block mx-auto"

            //CREAMOS TITULO
            var h3 = document.createElement('h3');

            //CREAMOS TEXTO
            var textoMarca = document.createElement('p');

            // AGREAMOS LO CREADO
            div1.append(div);
            div.append(imagen);
            div.append(h3);
            div.append(textoMarca);

            // SETEAMOS EL TEXTO
            h3.innerHTML = childData.modelo;
            textoMarca.innerHTML = '<hr>' +
                "Marca: " + childData.select + '<br>' +
                "Precio: " + childData.precio + '<br>' +
                "Estado: " + childData.estado + '<br>' + '<hr>' +
                "Contacto: " + '<br>' +
                "Nombre: " + childData.nombre + '<br>' +
                "Apellido: " + childData.apellido + '<br>' +
                "Telefono: " + childData.telefono + '<br>' +
                "Email: " + childData.email + '<br>' + '<hr>' +
                "Descripcion: " + childData.descripcion;

            //texto.innerHTML = childData.apellido;
            //        div.innerHTML = "<h3></h3>" + "<p></p>";
            //        console.log(div); 
            //        document.getElementById("troll").innerHTML = div;
            //        console.log(document.getElementById("troll"));
        });
    });
}
// FUNSIONES PARA CAMBIAR IMAGENES
function cambiarImagenFerrariNegro() {
    document.getElementById("imagen1").src = "../static/ferrari/299-GTB/negro/frente.jpg";
    document.getElementById("imagen2").src = "../static/ferrari/299-GTB/negro/frente2.jpg";
    document.getElementById("imagen3").src = "../static/ferrari/299-GTB/negro/costado.jpg";
    document.getElementById("imagen4").src = "../static/ferrari/299-GTB/negro/costado2.jpg";
    document.getElementById("imagen5").src = "../static/ferrari/299-GTB/negro/costado3.jpg";
    document.getElementById("imagen6").src = "../static/ferrari/299-GTB/negro/costado4.jpg";
    document.getElementById("imagen7").src = "../static/ferrari/299-GTB/negro/costado5.jpg";
    document.getElementById("imagen8").src = "../static/ferrari/299-GTB/negro/costado6.jpg";
    document.getElementById("imagen9").src = "../static/ferrari/299-GTB/negro/adentro.jpg";
    document.getElementById("imagen10").src = "../static/ferrari/299-GTB/negro/adentro1.jpg";
    document.getElementById("imagen11").src = "../static/ferrari/299-GTB/negro/rueda.jpg";
}

function cambiarImagenFerrariRojo() {
    document.getElementById("imagen1").src = "../static/ferrari/299-GTB/portada.jpg";
    document.getElementById("imagen2").src = "../static/ferrari/299-GTB/costado.jpg";
    document.getElementById("imagen3").src = "../static/ferrari/299-GTB/costado2.jpg";
    document.getElementById("imagen4").src = "../static/ferrari/299-GTB/costado3.jpg";
    document.getElementById("imagen5").src = "../static/ferrari/299-GTB/costado4.jpg";
    document.getElementById("imagen6").src = "../static/ferrari/299-GTB/atras.jpg";
    document.getElementById("imagen7").src = "../static/ferrari/299-GTB/atras2.jpg";
    document.getElementById("imagen8").src = "../static/ferrari/299-GTB/atras3.jpg";
    document.getElementById("imagen9").src = "../static/ferrari/299-GTB/rueda.jpg";
    document.getElementById("imagen10").src = "../static/ferrari/299-GTB/adentro.jpg";
    document.getElementById("imagen11").src = "../static/ferrari/299-GTB/adentro2.jpg";
}

function cambiarFerrari2Negro() {
    document.getElementById("imagenItalia1").src =
        "../static/ferrari/italia/negro/frente.jpg";
    document.getElementById("imagenItalia2").src =
        "../static/ferrari/italia/negro/frente1.jpg";
    document.getElementById("imagenItalia3").src =
        "../static/ferrari/italia/negro/frente2.jpg";
    document.getElementById("imagenItalia4").src =
        "../static/ferrari/italia/negro/costado.jpg";
    document.getElementById("imagenItalia5").src =
        "../static/ferrari/italia/negro/atras.jpg";
    document.getElementById("imagenItalia6").src =
        "../static/ferrari/italia/negro/atras1.jpg";
    document.getElementById("imagenItalia7").src =
        "../static/ferrari/italia/negro/atras2.jpg";
    document.getElementById("imagenItalia8").src =
        "../static/ferrari/italia/negro/rueda.jpg";
    document.getElementById("imagenItalia9").src =
        "../static/ferrari/italia/negro/adentro.jpg";

}

function cambiarFerrari2Blanco() {
        document.getElementById("imagenItalia1").src =
        "../static/ferrari/italia/blanco/portada.jpg";
    document.getElementById("imagenItalia2").src =
        "../static/ferrari/italia/blanco/costado.jpg";
    document.getElementById("imagenItalia3").src =
        "../static/ferrari/italia/blanco/costado1.jpg";
    document.getElementById("imagenItalia4").src =
        "../static/ferrari/italia/blanco/costado2.jpg";
    document.getElementById("imagenItalia5").src =
        "../static/ferrari/italia/blanco/costado3.jpg";
    document.getElementById("imagenItalia6").src =
        "../static/ferrari/italia/blanco/atras.jpg";
    document.getElementById("imagenItalia7").src =
        "../static/ferrari/italia/blanco/atras1.jpg";
    document.getElementById("imagenItalia8").src =
        "../static/ferrari/italia/blanco/atras2.jpg";
    document.getElementById("imagenItalia9").src =
        "../static/ferrari/italia/blanco/adentro.jpg";
}

// Initialize Firebase
$(document).ready(function () {
    firebase.initializeApp(config);
    console.log(window.location.href);
    if (window.location.href == "file:///home/gino/Escritorio/Proyecto/templates/misAutos.html") {
        leerDatos();
    }
    $('.carousel').carousel({
        interval: 3000
    });
})

