$(document).ready(()=>{
    $("#submit").click(()=>{
        $.ajax({
          url: 'new.php',
          type: 'POST',
          data: {
             acao: "cadastro",
             user: $("#user").val(),
             senha: $("#senha").val(),
          },
          success: (resultado) => {
            alert("Administrador cadastrado com sucesso!");
            window.location.href('admin.php');
          }
        });
    });
    $("#loginsubmit").click(()=>{
        $.ajax({
            url: 'new.php',
            type: 'POST',
            data: {
              acao: "login",
              user: $("#user").val(),
              senha: $("#senha").val()
            },
            success: (resultado) => {
                alert("Administrador logado com sucesso!");
                window.location.href('admin.php');
            }
          });
    });
});