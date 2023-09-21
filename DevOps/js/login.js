

//Login
$(document).on('submit','#formlg',function(e){
    e.preventDefault();
    Correo=$("#Correo_log").val();
    Contraseño=$("#Contraseña_log").val();
    if(Correo!="" && Contraseña!=""){
        ajaxLogin(Correo,Contraseña);

    }
});

// Registrar
$(document).on('submit','#formrg',function(e){
    e.preventDefault();
  
    Nombre=$("#Nombre").val();
    Apellido=$("#Apellido").val();
    Correo=$("#Correo").val();
    Usuario=$("#Usuario").val();
    Contraseña=$("#Password").val();
    Confirmar_Contraseña=$("#Confirmar_Contraseña").val()
    ajaxRegistro(Nombre,Apellido,Email,Usuario,Contraseña,Confirmar_Contraseña);

});

function ajaxLogin(Correo, Contraseña){
    $.ajax({
        data:{
            "Correo": Correo,
            "Contraseña": Contraseña
        },
        type:"post",
        //dataType:"json",
        cache: false,
        //agregar el ajaxLogin.php
        url:"./../controlador/ajax/ajaxLogin.php"
    })
    .done(function(out) {
       
        var response=JSON.parse(out);
        var msj = response.msg;
        //console.log(response.ruta);
        //window.location.href =response.ruta;
        if(msj!=""){
            Swal.fire({
                text: msj,
                //icon: response.type,
                title:"Inicio de Sesion"

            })
            .then((result) =>{
               
                if(result){
                   
                   // $(Location).attr('href',response.ruta);
                    window.location.href =response.ruta;
                }
            })
        }
    })
    .fail(function(jqXHR, textStatus, errorThrown){
        console.log(textStatus);
        Swal.fire({
            title:"alerta",
            text:"la solicitud a fallado"+errorThrown

        });
    });

}

function ajaxRegistro(Nombre,Apellido,Correo,Usuario,Contraseña,Confirmar_Contraseña){
    $.ajax({
        data:{
            "Nombre":Nombre,
            "Apellido":Apellido,
            "Correo": Correo,
            "Usuario":Usuario,
            "Contraseña":Contraseña,
            "Confirmar_Contraseña":Confirmar_Contraseña,
            "Admin":0
        },
        type:"post",
        //dataType:"json",
        cache: false,
        //agrehar el ajaxRegistro de Usuario
        url:"./../controlador/ajax/ajaxRegistrarUsuario.php"
    })
    .done(function(out) {
       
        var response=JSON.parse(out);
        var msj = response.msg;
        var est=response.estado;
        console.log(response);
        //console.log(response.ruta);
        //window.location.href =response.ruta;
        if(msj!=""){
            Swal.fire({
                text: msj,
                //icon: response.type,
                title:"Inicio de Sesion"

            })
            .then((result) =>{
               
                if(result){
                   
                   // $(Location).attr('href',response.ruta);
                    //window.location.href =response.ruta;
                }
            })
        }
    })
    .fail(function(jqXHR, textStatus, errorThrown){
        console.log(textStatus);
        Swal.fire({
            title:"alerta",
            text:"La solicitud a fallado"+errorThrown

        });
    });

}


function onSignIn(googleUser){
    let profile=googleUser.getBasicProfile()
    localStorage.setItem('id',profile.getId())
    localStorage.setItem('name',profile.getName())
    localStorage.setItem('email',profile.getEmail())
    localStorage.setItem('image',profile.getImageUrl())
    window.location.replace(" index.html")
}
html")
}
