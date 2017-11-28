var config = {
    apiKey: "AIzaSyABYl3WcpQqWPvhQP1BcPddhYWDFKeJ6Cw",
    authDomain: "proyectoprogramacion-e3521.firebaseapp.com",
    databaseURL: "https://proyectoprogramacion-e3521.firebaseio.com",
    projectId: "proyectoprogramacion-e3521",
    storageBucket: "proyectoprogramacion-e3521.appspot.com",
    messagingSenderId: "352112999600"
};
//setTimeout("location.href=''", 5000);
var select;
$('#chooscat').change(function () {
    select = $(this).find("option:selected").text();
    console.log(select);
});

$(document).ready(function () {

    $('.ir-arriba').click(function () {
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.ir-arriba').slideDown(300);
        } else {
            $('.ir-arriba').slideUp(300);
        }
    });

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

        document.getElementById("txtModelo").value = "";
        document.getElementById("chooscat").value = "Elije una opcion";
        document.getElementById("txtPrecio").value = "";
        document.getElementById("txtEstado").value = "";
        document.getElementById("txtEstado").value = "";
        document.getElementById("txtNombre").value = "";
        document.getElementById("txtApellido").value = "";
        document.getElementById("txtTelefono").value = "";
        document.getElementById("txtEmail").value = "";
        document.getElementById("txtDescrpicion").value = "";


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
    var div1 = document.getElementById('div1');
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

function leerFerrari() {
    let fbdb = firebase.database();
    let autos = fbdb.ref("/auto/");
    autos.on("value", snapshot => {
        snapshot.forEach(snap => {
            console.log(snap);
            var marca = snap.val().select;

            console.log(marca);
            var childData = snap.val();
            var divx = document.getElementById('lol');
            if (marca.match("Ferrari")) {


                console.log("true xd");

                // DIV GENERAL
                var div = document.createElement('div');
                div.classList = "col-lg-3 col-md-6 mb-4";

                // DIV CARD
                var divCard = document.createElement('div');
                divCard.classList = "card";

                // IMAGEN
                var imagen = document.createElement('img');
                firebase.storage().ref().child("autos/" + snap.key + ".jpg").getDownloadURL().then(function (url) {
                    imagen.src = url;
                });
                imagen.classList = "card-img-top";
                // DIV CARD-BODY
                var divCardBody = document.createElement('div');
                divCardBody.classList = "card-body";

                // H4
                var h4 = document.createElement('h4');
                h4.classList = "card-tittle";

                // P
                var p = document.createElement('p');
                p.classList = "card-text";

//                // DIV FOOTER
//                var divCardFooter = document.c            <input type="button" onclick="mostrarModal()">reateElement('div');
//                divCardFooter.classList = "card-footer";

//                // A
//                var verMas = document.createElement('a');
//                verMas.classList = "btn btn-primary";
//                verMas.type = "button";
//                verMas.innerHTML = "Ver mas";
//                verMas.id = snap.val().key;
//                verMas.setAttribute("data-toggle", "modal");
//                verMas.setAttribute("data-target", "#modalJs");
//
//                var divModal = document.createElement('div');
//                divModal.classList = "modal fade";
//                divModal.id = "modalJs";
//                divModal.setAttribute("tabindex", "-1");
//                divModal.setAttribute("role", "dialog");
//                divModal.setAttribute("aria-labelledby", "modalLabelJs");
//                divModal.setAttribute("aria-hidden", "true");
//
//                var divModal2 = document.createElement('div');
//                divModal2.classList = "modal-dialog"
//                divModal2.setAttribute("role", "document");
//
//                var divModal3 = document.createElement('div');
//                divModal3.classList = "modal-content"
//
//                var divModalHeader = document.createElement('div');
//                divModalHeader.classList = "modal-header";
//
//                var h5 = document.createElement('h5');
//                h5.classList = "modal-title";
//                h5.id = "modalLabelJs"
//
//                var divModalBody = document.createElement('modal-body');
//                divModalBody.classList = "modal-body";
//
//                var pModal = document.createElement('p')
//
//
//                h5.innerHTML = "Mi auto";
//
//                pModal.innerHTML = '<hr>' +
//                    "Marca: " + childData.select + '<br>' +
//                    "Precio: " + childData.precio + '<br>' +
//                    "Estado: " + childData.estado + '<br>' + '<hr>' +
//                    "Contacto: " + '<br>' +
//                    "Nombre: " + childData.nombre + '<br>' +
//                    "Apellido: " + childData.apellido + '<br>' +
//                    "Telefono: " + childData.telefono + '<br>' +
//                    "Email: " + childData.email + '<br>' + '<hr>' +
//                    "Descripcion: " + childData.descripcion;

//                divModal.append(divModal2);
//                divModal2.append(divModal3);
//                divModal3.append(divModalHeader);
//                divModalHeader.append(h5);
//                divModal3.append(divModalBody);
//                divModalBody.append(pModal);



                // AGREGAMOS LO CREADO
                divx.append(div);
                div.append(divCard);
                divCard.append(imagen);
                divCard.append(divCardBody);
                divCardBody.append(h4);
                divCardBody.append(p);

                //divCardFooter.append(a);

                // SETEAMOS EL TEXTO
                h4.innerHTML = childData.modelo;

                p.innerHTML = '<hr>' +
                    "Marca: " + childData.select + '<br>' +
                    "Precio: " + childData.precio + '<br>' +
                    "Estado: " + childData.estado + '<br>' + '<hr>' +
                    "Contacto: " + '<br>' +
                    "Nombre: " + childData.nombre + '<br>' +
                    "Apellido: " + childData.apellido + '<br>' +
                    "Telefono: " + childData.telefono + '<br>' +
                    "Email: " + childData.email + '<br>' + '<hr>' +
                    "Descripcion: " + childData.descripcion;
            }
        })

    })
}

function mostrarModal() {
    console.log("dsdsd");
    $('#modalJs').modal('show');
}

function leerLamborghini() {
    let fbdb2 = firebase.database();
    let autos2 = fbdb2.ref("/auto/");
    autos2.on("value", snapshot => {
        snapshot.forEach(snap2 => {
            console.log(snap2);
            var marca = snap2.val().select;

            console.log(marca);
            var childData = snap2.val();
            var divx = document.getElementById('lol');
            if (marca.match("Lamborghini")) {


                console.log("true xd");

                // DIV GENERAL
                var div = document.createElement('div');
                div.classList = "col-lg-3 col-md-6 mb-4";

                // DIV CARD
                var divCard = document.createElement('div');
                divCard.classList = "card";

                // IMAGEN
                var imagen = document.createElement('img');
                firebase.storage().ref().child("autos/" + snap2.key + ".jpg").getDownloadURL().then(function (url) {
                    imagen.src = url;
                });
                imagen.classList = "card-img-top";
                // DIV CARD-BODY
                var divCardBody = document.createElement('div');
                divCardBody.classList = "card-body";

                // H4
                var h4 = document.createElement('h4');
                h4.classList = "card-tittle";

                // P
                var p = document.createElement('p');
                p.classList = "card-text";

                // DIV FOOTER
                var divCardFooter = document.createElement('div');
                divCardFooter.classList = "card-footer";


                // AGREGAMOS LO CREADO
                divx.append(div);
                div.append(divCard);
                divCard.append(imagen);
                divCard.append(divCardBody);
                divCardBody.append(h4);
                divCardBody.append(p);
                divCard.append(divCardFooter);
                //divCardFooter.append(a);

                // SETEAMOS EL TEXTO
                h4.innerHTML = childData.modelo;

                p.innerHTML = '<hr>' +
                    "Marca: " + childData.select + '<br>' +
                    "Precio: " + childData.precio + '<br>' +
                    "Estado: " + childData.estado + '<br>' + '<hr>' +
                    "Contacto: " + '<br>' +
                    "Nombre: " + childData.nombre + '<br>' +
                    "Apellido: " + childData.apellido + '<br>' +
                    "Telefono: " + childData.telefono + '<br>' +
                    "Email: " + childData.email + '<br>' + '<hr>' +
                    "Descripcion: " + childData.descripcion;
            }
        })

    })
}

// FUNSIONES PARA CAMBIAR IMAGENES
function cambiarImagenFerrariNegro() {
    document.getElementById("imagen-portada").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FNegr%2Ffrente.jpg?alt=media&token=ba7e6dff-46c1-4d24-ac32-8abefc9982ff";
    document.getElementById("imagen1").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FNegr%2Ffrente.jpg?alt=media&token=ba7e6dff-46c1-4d24-ac32-8abefc9982ff";
    document.getElementById("imagen2").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FNegr%2Ffrente2.jpg?alt=media&token=1929090a-8a79-4b14-a41a-ef4f64d8a6c6";
    document.getElementById("imagen3").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FNegr%2Fcostado.jpg?alt=media&token=ebf5d1c6-bdd3-420a-8480-5a43d68531af";
    document.getElementById("imagen4").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FNegr%2Fcostado2.jpg?alt=media&token=556d20e2-6d69-4249-8a4e-e5c8ec487080";
    document.getElementById("imagen5").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FNegr%2Fcostado3.jpg?alt=media&token=a29c66f8-f9c0-435f-9c1e-cb6f879df31c";
    document.getElementById("imagen6").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FNegr%2Fcostado4.jpg?alt=media&token=44be9860-8af9-4cf7-8028-bb5d6185788b";
    document.getElementById("imagen7").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FNegr%2Fcostado5.jpg?alt=media&token=1a4f466c-4126-4037-8c87-d1ce285a5ba6";
    document.getElementById("imagen8").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FNegr%2Fcostado6.jpg?alt=media&token=88e746f1-caa8-49dd-9576-66439aefeccc";
    document.getElementById("imagen9").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FNegr%2Fadentro.jpg?alt=media&token=8708cbc3-f9b5-45cc-a280-b2172d2fd326";
    document.getElementById("imagen10").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FNegr%2Fadentro1.jpg?alt=media&token=7bc02bab-874e-4f2c-83f9-9be85cbdf78c";
    document.getElementById("imagen11").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FNegr%2Frueda.jpg?alt=media&token=26e47c41-4d96-4abc-ae90-bc7152b53511";
}

function cambiarImagenFerrariRojo() {
    document.getElementById("imagen-portada").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FRojo%2Fportada1.png?alt=media&token=6b37f819-4c36-4432-9aac-6b478a8e8ca6";
    document.getElementById("imagen1").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FRojo%2Fportada1.png?alt=media&token=6b37f819-4c36-4432-9aac-6b478a8e8ca6";
    document.getElementById("imagen2").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FRojo%2Fcostado.jpg?alt=media&token=220ea6de-ca9c-4b81-aef3-d282d293e260";
    document.getElementById("imagen3").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FRojo%2Fcostado2.jpg?alt=media&token=17aee7fc-fa7d-4e6d-815b-75f1b2c7ddbe";
    document.getElementById("imagen4").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FRojo%2Fcostado3.jpg?alt=media&token=c7c1f9e4-e45d-416a-994e-07fdbcd43759";
    document.getElementById("imagen5").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FRojo%2Fcostado4.jpg?alt=media&token=98e4a073-1303-4bda-900a-048a28e0734d";
    document.getElementById("imagen6").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FRojo%2Fatras.jpg?alt=media&token=5ebf19e2-3092-43c5-";
    document.getElementById("imagen7").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FRojo%2Fatras2.jpg?alt=media&token=4ebaefc5-7a9b-4fa3-acb5-68207ea8e982";
    document.getElementById("imagen8").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FRojo%2Fatras3.jpg?alt=media&token=eb176cf7-7b7a-4af0-a879-14ff6581a694";
    document.getElementById("imagen9").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FRojo%2Frueda.jpg?alt=media&token=18ecee04-1d43-4eb6-a9ec-89cd534bcb84";
    document.getElementById("imagen10").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FRojo%2Fadentro.jpg?alt=media&token=bae1c77e-c043-45d7-b85a-434308b7fc63";
    document.getElementById("imagen11").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2F299-GTB%2FRojo%2Fadentro2.jpg?alt=media&token=ae5e4468-9924-480f-a739-4f655a50f7fe";
}

function cambiarFerrari2Negro() {
    document.getElementById("imagen-portada-italia").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FNegro%2Ffrente.jpg?alt=media&token=5369720b-4e5c-4236-9790-dac4448306bd";
    document.getElementById("imagenItalia1").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FNegro%2Ffrente.jpg?alt=media&token=5369720b-4e5c-4236-9790-dac4448306bd";
    document.getElementById("imagenItalia2").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FNegro%2Ffrente1.jpg?alt=media&token=1c806f4f-4664-47b1-a2b2-e9f7ea88ee46";
    document.getElementById("imagenItalia3").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FNegro%2Ffrente2.jpg?alt=media&token=3e5e9132-c9cd-4bef-8b5d-608bbaa6aad9";
    document.getElementById("imagenItalia4").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FNegro%2Fcostado.jpg?alt=media&token=619e10c2-ef00-4f3a-b1d5-55420463ef51";
    document.getElementById("imagenItalia5").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FNegro%2Fatras.jpg?alt=media&token=60617a11-d585-49bb-a65c-68586c5361b6";
    document.getElementById("imagenItalia6").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FNegro%2Fatras1.jpg?alt=media&token=322e9fb6-9bd3-4a62-880d-2947740624a6";
    document.getElementById("imagenItalia7").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FNegro%2Fatras2.jpg?alt=media&token=63350ad1-e4b1-4d10-aa15-bd6e2abbc347";
    document.getElementById("imagenItalia8").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FNegro%2Frueda.jpg?alt=media&token=7b618c99-9a37-4810-b110-bae9abeb20fd";
    document.getElementById("imagenItalia9").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FNegro%2Fadentro.jpg?alt=media&token=6f6ae444-a6e1-4fd6-b375-01764f998e87";

}

function cambiarFerrari2Blanco() {
    document.getElementById("imagen-portada-italia").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FBlanco%2Fportada.png?alt=media&token=3678d4b3-22fd-4ae0-8514-7c1354e59f41"
    document.getElementById("imagenItalia1").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FBlanco%2Fportada.png?alt=media&token=3678d4b3-22fd-4ae0-8514-7c1354e59f41";
    document.getElementById("imagenItalia2").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FBlanco%2Fcostado.jpg?alt=media&token=00d58ca3-acb8-4900-9d28-a8792d191faa";
    document.getElementById("imagenItalia3").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FBlanco%2Fcostado1.jpg?alt=media&token=e4e72968-5f7a-4cc9-8929-8482d6475a66";
    document.getElementById("imagenItalia4").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FBlanco%2Fcostado2.jpg?alt=media&token=0fe4f14c-dc26-45af-ae5a-7288a67d65bc";
    document.getElementById("imagenItalia5").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FBlanco%2Fcostado3.jpg?alt=media&token=779cd3d0-5ca2-43be-bd7b-4ca0b0fc4d5f";
    document.getElementById("imagenItalia6").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FBlanco%2Fatras.jpg?alt=media&token=898fd07b-4321-4224-9e5c-7233dc5470b1";
    document.getElementById("imagenItalia7").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FBlanco%2Fatras1.jpg?alt=media&token=c1663b3c-6cf0-455f-b0d4-ec544f807505";
    document.getElementById("imagenItalia8").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FBlanco%2Fatras2.jpg?alt=media&token=541e1abe-ef1f-42fc-805c-91b75cd40961";
    document.getElementById("imagenItalia9").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FBlanco%2Fadentro.jpg?alt=media&token=ef1d625e-7550-4e60-a31f-e8e8fcdd190d";
}

function cambiarFerrari2Rojo() {
    document.getElementById("imagen-portada-italia").src = "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FRojo%2Ffrente.jpg?alt=media&token=076d580a-9f9b-43d0-be38-42daac5227c0"
    document.getElementById("imagenItalia1").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FRojo%2Ffrente.jpg?alt=media&token=076d580a-9f9b-43d0-be38-42daac5227c0";
    document.getElementById("imagenItalia2").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FRojo%2Ffrente1.jpg?alt=media&token=eeeb9ab6-68d2-4588-8a0a-ee7ae9c4dfac";
    document.getElementById("imagenItalia3").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FRojo%2Fatras.jpg?alt=media&token=ca4eceba-a0a9-4d18-9a58-becc6e18acaf";
    document.getElementById("imagenItalia4").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FRojo%2Fatras2.jpg?alt=media&token=67ea9390-6748-4b4a-9324-e01f381cd30b";
    document.getElementById("imagenItalia5").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FRojo%2Fatras3.jpg?alt=media&token=188dea14-7ae7-4240-90c6-1f3e5df694e0";
    document.getElementById("imagenItalia6").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FRojo%2Frueda.jpg?alt=media&token=519935aa-62cc-4edb-851f-68cf18f65683";
    document.getElementById("imagenItalia7").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FRojo%2Fadentro2.jpg?alt=media&token=ead9f6cb-16bc-45da-b8c2-712a75dc6da5";
    document.getElementById("imagenItalia8").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FRojo%2Fadentro3.jpg?alt=media&token=ba8d3ad4-b900-41ae-b978-32b0b62aa442";
    document.getElementById("imagenItalia9").src =
        "https://firebasestorage.googleapis.com/v0/b/proyectoprogramacion-e3521.appspot.com/o/static%2FFerrari%2FItalia%2FBlanco%2Fadentro.jpg?alt=media&token=ef1d625e-7550-4e60-a31f-e8e8fcdd190d";
}


// Initialize Firebase
$(document).ready(function () {
    firebase.initializeApp(config);
    console.log(window.location.href);
    if (window.location.href == "file:///home/gino/Escritorio/Ejercicios-HTML/Proyecto-html/templates/misAutos.html") {
        leerDatos();
    }
    if (window.location.href == "file:///home/gino/Escritorio/Ejercicios-HTML/Proyecto-html/templates/ferrari.html") {
        leerFerrari();
    }
    if (window.location.href == "file:///home/gino/Escritorio/Ejercicios-HTML/Proyecto-html/templates/lamborghini.html") {
        leerLamborghini();
    }
    $('.carousel').carousel({
        interval: 3000
    });
})
