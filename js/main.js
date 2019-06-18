var Funcionarios = [];
var Produtos = [];
var novofuncionario = {name: "John", idade: 25};
Funcionarios.push(novofuncionario);
novofuncionario = {name: "Wick", idade: 25};
Funcionarios.push(novofuncionario);

function submitCadastroProduto(){
    var idp = document.getElementById("idProduto").value
    var nomep = document.getElementById("nomeProduto").value;
    var datap = document.getElementById("dataValidade").value;
    var taxap = document.getElementById("taxaImposto").value;
    var quantidadep = document.getElementById("quantidadeProduto").value;
    var precop = document.getElementById("precoProduto").value;
    var funcionariop = document.getElementById("funcionarioProduto").value;
    var produto = {id: idp, nome: nomep, data: datap, taxa: taxap, quantidade: quantidadep, 
                   preco: precop, funcionario: funcionariop};
    Produtos.push(produto);
}
function comboFuncionarios(){
    document.getElementById("funcionarioProduto").innerHTML="";
    var string="";
    for(i=0;i<Funcionarios.length;i++){
        string = string.concat("<option>"+Funcionarios[i].name+"</option>");
    }
    document.getElementById("funcionarioProduto").innerHTML=string;
}

function submitlogin(){
    var usuario=document.getElementById('inputUsuario').value;
    var senha=document.getElementById('inputSenha').value
    if(usuario!="admin" || senha!="admin"){
        document.getElementById("loginerrado").removeAttribute('hidden');
        return false;
    }
}

class Estoque{

}