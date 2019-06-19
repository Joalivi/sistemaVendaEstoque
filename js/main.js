if(localStorage.getItem("Produtos")===null){
    var Produtos = [];    
    var idproduto=0;
}else{
    var ProdutosStorage=localStorage.getItem("Produtos");
    var Produtos = JSON.parse(ProdutosStorage);
    var idproduto = localStorage.getItem("IdProduto");
}
if(localStorage.getItem("Funcionarios")===null){
    var Funcionarios = [];
}else{
    var FuncionariosStorage=localStorage.getItem("Funcionarios");
    var Funcionarios = JSON.parse(FuncionariosStorage);
}
var novofuncionario = {name: "John", idade: 25};
Funcionarios.push(novofuncionario);
novofuncionario = {name: "Wick", idade: 25};
Funcionarios.push(novofuncionario);

function listarTudo(){
    if(Produtos.length===0){
        document.getElementById("listagemProdutos").innerHTML="<p>Nenhum produto foi encontrado</p>";
    }else{
        var string="<table class=\"table table-hover mt-2\">"+
        "<thead>"+
          "<tr>"+
            "<th scope=\"col\">Id</th>"+
            "<th scope=\"col\">Nome</th>"+
            "<th scope=\"col\">Data de Validade</th>"+
            "<th scope=\"col\">Taxa de Imposto (%)</th>"+
            "<th scope=\"col\">Quantidade</th>"+
            "<th scope=\"col\">Preço</th>"+
            "<th scope=\"col\">Funcionário</th>"+
          "</tr>"+
        "</thead><tbody>";
        for(i=0;i<Produtos.length;i++){
            string=string.concat("<tr><td>"+Produtos[i].id+"</td><td>"+Produtos[i].nome+"</td>"+
            "<td>"+Produtos[i].data+"</td><td>"+Produtos[i].taxa+"</td><td>"+Produtos[i].quantidade+
            "</td><td>"+Produtos[i].preco+"</td><td>"+Produtos[i].funcionario+"</td>"+
            "<td><button class=\"btn btn-outline-danger\" onclick=\"removerProduto("+Produtos[i].id+")\">"+
            "<img src=\"../img/trash.png\" height=\"20px\"width=\"20px\">"+ 
          "</button></td>"+
          "<td><a href=\"edit.html\"class=\"btn btn-outline-primary\">"+
            "<img src=\"../img/edit.png\" height=\"20px\"width=\"20px\">"+ 
          "</a></td></tr>");
        }
        string=string.concat("</tbody></table>");
        document.getElementById("listagemProdutos").innerHTML=string;
    }
}

function removerProduto(id){
    for(i=0;i<Produtos.length;i++){
        if(Produtos[i].id==id){
            Produtos.splice(i,1);
        }
    }
    localStorage.setItem("Produtos", JSON.stringify(Produtos));
    window.location.reload();
}

function buscarNome(){
    if(Produtos.length===0){
        document.getElementById("listagemProdutos").innerHTML="<p>Nenhum produto foi encontrado</p>";
    }else if(document.getElementById("buscanome").value.length===0){
        document.getElementById("listagemProdutos").innerHTML="<p>Digite um nome válido</p>";
    }else{
        var count=0;
        var busc=document.getElementById("buscanome").value.toUpperCase();
        var string="<table class=\"table table-hover mt-2\">"+
        "<thead>"+
          "<tr>"+
            "<th scope=\"col\">Id</th>"+
            "<th scope=\"col\">Nome</th>"+
            "<th scope=\"col\">Data de Validade</th>"+
            "<th scope=\"col\">Taxa de Imposto (%)</th>"+
            "<th scope=\"col\">Quantidade</th>"+
            "<th scope=\"col\">Preço</th>"+
            "<th scope=\"col\">Funcionário</th>"+
          "</tr>"+
        "</thead><tbody>";
        for(i=0;i<Produtos.length;i++){
            var aux=Produtos[i].nome.toUpperCase();
            if(aux.indexOf(busc)!=-1){
                string=string.concat("<tr><td>"+Produtos[i].id+"</td><td>"+Produtos[i].nome+"</td>"+
                "<td>"+Produtos[i].data+"</td><td>"+Produtos[i].taxa+"</td><td>"+Produtos[i].quantidade+
                "</td><td>"+Produtos[i].preco+"</td><td>"+Produtos[i].funcionario+"</td>"+
                "<td><button class=\"btn btn-outline-danger\" onclick=\"removerProduto("+Produtos[i].id+")\">"+
                "<img src=\"../img/trash.png\" height=\"20px\"width=\"20px\">"+ 
              "</button></td>"+
              "<td><button class=\"btn btn-outline-primary\" onclick=\"salvarid("+Produtos[i].id+")\">"+
                "<img src=\"../img/edit.png\" height=\"20px\"width=\"20px\">"+ 
              "</button></td></tr>");
                count++;
            }
        }
        if(count!=0){
            string=string.concat("</tbody></table>");
        }else{
            string="<p>Nenhum produto foi encontrado</p>";
        }
        document.getElementById("listagemProdutos").innerHTML=string;
    }
}
function salvarid(id){
    localStorage.setItem("idedit",id);
    window.location.href="./edit.html";
}
function preencheCamposProdutos(){
    for(i=0;i<Produtos.length;i++){
        if(localStorage.getItem("idedit")==JSON.stringify(Produtos[i].id)){
            document.getElementById("nomeProduto").value=Produtos[i].nome;
            document.getElementById("dataValidade").value=Produtos[i].data;
            document.getElementById("taxaImposto").value=Produtos[i].taxa;
            document.getElementById("quantidadeProduto").value=Produtos[i].quantidade;
            document.getElementById("precoProduto").value=Produtos[i].preco;
            document.getElementById("funcionarioProduto").value=Produtos[i].funcionario;
            break;
        }
    }
}

function submitCadastroProduto(){
    var idp = ++idproduto;
    var nomep = document.getElementById("nomeProduto").value;
    var datap = document.getElementById("dataValidade").value;
    var taxap = document.getElementById("taxaImposto").value;
    var quantidadep = document.getElementById("quantidadeProduto").value;
    var precop = document.getElementById("precoProduto").value;
    var funcionariop = document.getElementById("funcionarioProduto").value;
    var produto = {id: idp, nome: nomep, data: datap, taxa: taxap, quantidade: quantidadep, 
                   preco: precop, funcionario: funcionariop};
    Produtos.push(produto);
    localStorage.setItem("Produtos", JSON.stringify(Produtos));
    localStorage.setItem("IdProduto", idproduto);
}
function comboFuncionarios(){
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