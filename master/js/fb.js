$(document).ready(function () {
   //var param = {lastName: "Doe", firstName: "John"};

  /* $.ajax({
     url: 'https://currvit-83a8a-default-rtdb.firebaseio.com/.json',
     type: "POST",
     data: JSON.stringify(param),
     success: function () {
       console.log("success");
     },
     error: function(error) {
       console.log("error: "+error);
     }
   });*/
   var db = firebase.database();
var ref = db.ref("cursos");
     
var table = document.getElementById("tabla");
    
//limpia la tabla
table.innerHTML = "";
 
 //con esta función recorre todos los datos almacenados en FB ordenados por mi child(tipo)
    
ref.orderByChild("Id").on("child_added", function(snapshot){
//repite el proceso como cuantas referencias encuentre y los asigna a la lista "d"
     
  var d = snapshot.val();        
        
  {
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  
  // asigna a las celdas el valir del Child especificado
  cell1.innerHTML = d.Id;
  cell2.innerHTML = d.Description;
  cell3.innerHTML = d.Url;
  }
 
        
});
   
   
   
     document.getElementById('cvcursos').onclick=function(){
$('.container1').css('display','none');
$('#art1').css('display','none');
$('#art2').css('display','none');
$('#art3').css('display','none');
$('.cvhabilidades').css('display','none');
$('.cvidiomas').css('display','none');
$('p').css('display','none');
$('#container2').css('display','flex');
} 

 });

  
 