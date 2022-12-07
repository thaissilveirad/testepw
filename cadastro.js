const nome = document.querySelector("#nome");
const user = document.querySelector("#user");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const confirma = document.querySelector("#confirma");
// const botao = document.querySelector(".submit");
const str = " ";


nome.addEventListener('keypress', () => {
    if(nome.value == '') {
             nome.classList.add('erro');
             document.querySelector("#msgNome").innerHTML = 'Preencha este campo';
         }else if(nome.value.includes(str) == false) {
             document.querySelector("#msgNome").innerHTML = 'Informe o nome COMPLETO!';
             }else{
                 nome.classList.remove('erro');
                 document.querySelector("#msgNome").innerHTML = '';
                 nome.classList.add('ok');
                 nome = true;
            }
        
});


email.addEventListener('keypress', () => {
 if(email.value == '') {
     email.classList.add('erro');
     document.querySelector("#msgEmail").innerHTML = 'Preencha este campo';
 }else if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || email.value.indexOf(".") - email.value.indexOf("@") == 1) {
     document.querySelector("#msgEmail").innerHTML = 'E-mail inválido!';

 }else {
     email.classList.remove('erro');
     document.querySelector("#msgEmail").innerHTML = '';
     email.classList.add('ok');
     email = true;
 }
});


user.addEventListener('keypress', () => {
    if(user.value == '') {
             user.classList.add('erro');
             document.querySelector("#msgUser").innerHTML = 'Preencha este campo';
         }else {
             user.classList.add('ok');
             document.querySelector("#msgUser").innerHTML = '';
             user = true;
         }
});

senha.addEventListener('keypress', () => {
    if(senha.value == '') {
             senha.classList.add('erro');
             document.querySelector("#msgSenha").innerHTML = 'Preencha este campo';
         } else if(senha.value.length < 4) {
             document.querySelector("#msgSenha").innerHTML = 'A senha deve ter mais de 4 caracteres!';
         }else {
             senha.classList.remove('erro');
             document.querySelector("#msgSenha").innerHTML = '';
             senha.classList.add('ok');
             senha = true;
        }
});


confirma.addEventListener('keypress', () => {
    if(confirma.value == '') {
             confirma.classList.add('erro');
             document.querySelector("#msgConfirma").innerHTML = 'Preencha este campo';
         }else if(confirma.value != senha.value) {
             document.querySelector("#msgConfirma").innerHTML = 'As senhas não são iguais!';
         }else {
             confirma.classList.remove('erro');
             document.querySelector("#msgConfirma").innerHTML = '';
             confirma.classList.add('ok');
             confirma = true;
         }
});



botao.addEventListener('click', () => {
     if(nome.value != '' || email.value != '' || user.value != '' || senha.value != '' || confirma.value != '') {
    //  window.location.href = "inicial.html";
   alert(`${user.value}, você foi cadastrado(a) com sucesso!`);
     }

});

// let users = localStorage.getItem('users');
// if (!users) {
//     users = [];
// }
// else {
//     users = JSON.parse(users);
//     console.log(users);
// }

// botao.addEventListener('click', () => {
//     if(nome.value != '' || email.value != '' || user.value != '' || senha.value != '' || confirma.value != '') {
//     window.location.href = "inicial.html";
//     alert(`${user.value}, você foi cadastrado(a) com sucesso!`);
//     users.push({
//         name: nome.value,
//         email: email.value,
//         user: user.value,
//         senha: senha.value,
//     });
//     localStorage.setItem('users', JSON.stringify(users));
//     nome.value = '';
//     email.value = '';
//     user.value = '';
//     senha.value = '';

//     }
// });