var docRef = db.collection("pasajero").doc("7St4ZeTALbcR4Jxaj7kr");
/*
docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        $(".pasajeros").html(doc.data )
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
*/
let regiones = [];

db.collection("Vuelos")

    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            regiones.push(doc.id);
        });
        $("#region1").html(regiones[0]);
        $("#region2").html(regiones[1]);
        $("#region3").html(regiones[2]);
        $("#region4").html(regiones[3]);
        $("#region5").html(regiones[4]);
        $("#region6").html(regiones[5]);

        console.log("|||", vari.html());

        /*$("#region").html(regiones);

        console.log(id = "region1");
*/
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    /*
      Jalando los datos de cada región
    */
    let AsiaF = [];
    let printF = '';
    let vari = $("#region3");
    var path = 'Vuelos/' + vari.innerHTML;
    db.doc(path).get().then(function(doc) {
            if(doc.exists){
              console.log(doc.data().Destinos);
              AsiaF = doc.data().Destinos;
            }
            for(i = 0; i < AsiaF.length; i++){
              printF = printF + "<li>" + AsiaF[i] +" </li>"
            }
            $("#AsiaV1").html("<ul>"+printF+"</ul>");
            /*$("#region1").html(regiones[0]);
            $("#region2").html(regiones[1]);
            $("#region3").html(regiones[2]);
            $("#region4").html(regiones[3]);
            $("#region5").html(regiones[4]);
            $("#region6").html(regiones[5]);

            $("#region").html(regiones);

            console.log(id = "region1");
*/
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });



    //console.log(region1);
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


function home(){
  location.href = "index.html";
}
function altas(){
  location.href = "altas.html";
}
