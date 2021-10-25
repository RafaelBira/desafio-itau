function validarDados() {
var dados=[]
dados.push(document.getElementById("id_nome"));
dados.push(document.getElementById("id_cpf"));
dados.push(document.getElementById("id_endereco"));
dados.push(document.getElementById("id_numero"));
dados.push(document.getElementById("id_telefoneCelular"));
for (var i=0; i<dados.length; i++) {
if(dados[i].value=="") return;
}
alert("Cadastro realizado com sucesso!");
//enviar os dados para o servidor
}
function verificarSexo() {
if(document.getElementById("id_sexo").value=="outro") {
document.getElementById("id_sexo_outro").style.display = "block";
}
else {
document.getElementById("id_sexo_outro").style.display = 'none';
}
}
function verificarCpf() {
var cpf=document.getElementById("id_cpf");
if(cpf.value.length==3 || cpf.value.length==7) {
document.getElementById("id_cpf").value=cpf.value+".";
}
else if(cpf.value.length==11) {
document.getElementById("id_cpf").value=cpf.value+"-";
}
}
function verificarTelefoneCelular() {
var celular=document.getElementById("id_telefoneCelular");
if(celular.value.length===0) {
document.getElementById("id_telefoneCelular").value=celular.value+"(";
}
else if(celular.value.length===3) {
document.getElementById("id_telefoneCelular").value=celular.value+")";
}
else if(celular.value.length===9) {
document.getElementById("id_telefoneCelular").value=celular.value+"-";
}
}
function verificarTelefoneFixo() {
var fixo=document.getElementById("id_telefoneFixo");
if(fixo.value.length==0) {
document.getElementById("id_telefoneFixo").value=fixo.value+"(";
}
else if(fixo.value.length===3) {
document.getElementById("id_telefoneFixo").value=fixo.value+")";
}
else if(fixo.value.length===8) {
document.getElementById("id_telefoneFixo").value=fixo.value+"-";
}
}