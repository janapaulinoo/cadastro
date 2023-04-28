function Validar(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let confirmesuasenha = document.getElementById('confirmSenha').value;
    let nome = document.getElementById('nome').value;
    let date= document.getElementById('date').value;
    let telefone = document.getElementById('telefone').value;
    let cpf = document.getElementById('cpf').value;
    let cep = document.getElementById('cep').value;
    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let complemento = document.getElementById('complemento').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;

    
    if(!email || !senha  || !confirmesuasenha || !nome || !date || !telefone || !cpf || !cep || !rua || !numero || !complemento ||!bairro || !cidade || !estado){
     alert("Campos de preenchimento obrigatório. Favor preecher");
    
    }else{
    alert("Campos preechidos com sucesso!");
    window.open('cadastrado.html', '_self');
}

}
 
