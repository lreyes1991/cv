


var regexMail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

function checkMail()
{

	var mail = document.getElementById("txt1").value;
		if(mail.match(regexMail)){
			/*
			Swal.fire(
			{
				icon: 'success',
				title: 'Ok',
				text: 'E-mail válido!'
			})
			*/			
			alert("Excelente");
		}
		else
		{
			/*
			Swal.fire(
			{
				icon: 'error',
				title: 'Oops...',
				text: 'No es un e-mail válido!',
				footer: '<p href ="#txt1">Ingresa tu email otra vez</p>'
			})
			*/
			alert("Incorecto");
		}   
}	

