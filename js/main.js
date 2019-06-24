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
    var idfuncionario=0;
}else{
    var FuncionariosStorage=localStorage.getItem("Funcionarios");
    var Funcionarios = JSON.parse(FuncionariosStorage);
    var idfuncionario = localStorage.getItem("IdFuncionario")
}

if(localStorage.getItem("Vendas")===null){
    var Vendas = [];
    var idvendas=0;
}else{
    var VendasStorage=localStorage.getItem("Vendas");
    var Vendas = JSON.parse(VendasStorage);
    var idvendas = localStorage.getItem("IdVendas")
}

function zeraVariaveis(){
    localStorage.clear();
}
function listarTudoFuncionarios(){
    if(Funcionarios.length===0){
        document.getElementById("listagemFuncionarios").innerHTML="<p>Nenhum funcionário foi encontrado</p>";    
    }else{
        var string="<table class=\"table table-hover mt-2\">"+
        "<thead>"+
            "<tr>"+
            "<th scope=\"col\">Id</th>"+
            "<th scope=\"col\">Nome</th>"+
            "<th scope=\"col\">Endereço</th>"+
            "<th scope=\"col\">Salário</th>"+
            "<th scope=\"col\">Cargo</th>"+
            "</tr>"+
        "</thead><tbody>";
        for(i=0;i<Funcionarios.length;i++){
            string=string.concat("<tr><td>"+Funcionarios[i].id+"</td><td>"+Funcionarios[i].nome+"</td>"+
            "<td>"+Funcionarios[i].endereco+"</td><td>"+Funcionarios[i].salario+"</td><td>"+Funcionarios[i].cargo+"</td>"+
            "<td><button class=\"btn btn-outline-danger\" onclick=\"removerFuncionario("+Funcionarios[i].id+")\">"+
            "<img src=\"../img/trash.png\" height=\"20px\"width=\"20px\">"+ 
            "</button></td>"+
            "<td><button class=\"btn btn-outline-primary\" onclick=\"salvarid("+Funcionarios[i].id+")\">"+
            "<img src=\"../img/edit.png\" height=\"20px\"width=\"20px\">"+ 
        "</button></td></tr>");
        }
        string=string.concat("</tbody></table>");
        document.getElementById("listagemFuncionarios").innerHTML=string;
    }
}

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
          "<td><button class=\"btn btn-outline-primary\" onclick=\"salvarid("+Produtos[i].id+")\">"+
          "<img src=\"../img/edit.png\" height=\"20px\"width=\"20px\">"+ 
        "</button></td></tr>");
        }
        string=string.concat("</tbody></table>");
        document.getElementById("listagemProdutos").innerHTML=string;
    }
}

function listarVendas(){
    if(Produtos.length===0){
        document.getElementById("listagemVendas").innerHTML="<p>Nenhum produto foi encontrado</p>";
    }else{
        var string="<table class=\"table table-hover mt-2\">"+
        "<thead>"+
          "<tr>"+
            "<th scope=\"col\">Id</th>"+
            "<th scope=\"col\">Produto</th>"+
            "<th scope=\"col\">Quantidade</th>"+
            "<th scope=\"col\">Funcionário</th>"+
          "</tr>"+
        "</thead><tbody>";
        for(i=0;i<Vendas.length;i++){
            string=string.concat("<tr><td>"+Vendas[i].id+"</td><td>"+Vendas[i].produto+"</td><td>"+Vendas[i].quantidade+
            "</td><td>"+Vendas[i].funcionario+"</td>"+
            "<td><button class=\"btn btn-outline-danger\" onclick=\"removerVendas("+Vendas[i].id+")\">"+
            "<img src=\"../img/trash.png\" height=\"20px\"width=\"20px\">"+ 
            "</button></td></tr>");
        }
        string=string.concat("</tbody></table>");
        document.getElementById("listagemVendas").innerHTML=string;
    }
}

function removerFuncionario(id){
    for(i=0;i<Funcionarios.length;i++){
        if(Funcionarios[i].id==id){
            Funcionarios.splice(i,1);
        }
    }
    localStorage.setItem("Funcionarios", JSON.stringify(Funcionarios));
    window.location.reload();
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

function removerVendas(id){
    for(i=0;i<Vendas.length;i++){
        if(Vendas[i].id==id){
            Vendas.splice(i,1);
            
        }
    }
    localStorage.setItem("Vendas", JSON.stringify(Vendas));
    window.location.reload();
}

function buscarNomeFuncionarios(){
    if(Funcionarios.length===0){
        document.getElementById("listagemFuncionarios").innerHTML="<p>Nenhum funcionário foi encontrado</p>";
    }else if(document.getElementById("buscanome").value.length===0){
        document.getElementById("listagemFuncionarios").innerHTML="<p>Digite um nome válido</p>";
    }else{
        var count=0;
        var busc=document.getElementById("buscanome").value.toUpperCase();
        var string="<table class=\"table table-hover mt-2\">"+
        "<thead>"+
            "<tr>"+
            "<th scope=\"col\">Id</th>"+
            "<th scope=\"col\">Nome</th>"+
            "<th scope=\"col\">Endereço</th>"+
            "<th scope=\"col\">Salário</th>"+
            "<th scope=\"col\">Cargo</th>"+
            "</tr>"+
        "</thead><tbody>";
        for(i=0;i<Funcionarios.length;i++){
            var aux=Funcionarios[i].nome.toUpperCase();
            if(aux.indexOf(busc)!=-1){
                string=string.concat("<tr><td>"+Funcionarios[i].id+"</td><td>"+Funcionarios[i].nome+"</td>"+
                "<td>"+Funcionarios[i].endereco+"</td><td>"+Funcionarios[i].salario+"</td><td>"+Funcionarios[i].cargo+"</td>"+
                "<td><button class=\"btn btn-outline-danger\" onclick=\"removerFuncionario("+Funcionarios[i].id+")\">"+
                "<img src=\"../img/trash.png\" height=\"20px\"width=\"20px\">"+ 
                "</button></td>"+
                "<td><button class=\"btn btn-outline-primary\" onclick=\"salvarid("+Funcionarios[i].id+")\">"+
                "<img src=\"../img/edit.png\" height=\"20px\"width=\"20px\">"+ 
                "</button></td></tr>");
                count++;
            }
        }
        if(count!=0){
            string=string.concat("</tbody></table>");
        }else{
            string="<p>Nenhum funcionário foi encontrado</p>";
        }
        document.getElementById("listagemFuncionarios").innerHTML=string;
    }
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

function preencheCamposFuncionarios(){
    for(i=0;i<Funcionarios.length;i++){
        if(localStorage.getItem("idedit")==JSON.stringify(Funcionarios[i].id)){
            document.getElementById("nomeFuncionario").value=Funcionarios[i].nome;
            document.getElementById("salarioFuncionario").value=Funcionarios[i].salario;
            document.getElementById("enderecoFuncionario").value=Funcionarios[i].endereco;
            break;
        }
    }
}

function atualizaCadastroFuncionario(){
    for(i=0;i<Funcionarios.length;i++){
        if(localStorage.getItem("idedit")==JSON.stringify(Funcionarios[i].id)){
            Funcionarios[i].nome=document.getElementById("nomeFuncionario").value;
            Funcionarios[i].salario=document.getElementById("salarioFuncionario").value;
            Funcionarios[i].endereco=document.getElementById("enderecoFuncionario").value;
            localStorage.setItem("Funcionarios", JSON.stringify(Funcionarios));
            break;
        }
    }
}

function preencheCamposProdutos(){
    comboFuncionarios();
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

function atualizaCadastroProduto(){
    for(i=0;i<Produtos.length;i++){
        if(localStorage.getItem("idedit")==JSON.stringify(Produtos[i].id)){
            Produtos[i].nome=document.getElementById("nomeProduto").value;
            Produtos[i].data=document.getElementById("dataValidade").value;
            Produtos[i].taxa=document.getElementById("taxaImposto").value;
            Produtos[i].quantidade=document.getElementById("quantidadeProduto").value;
            Produtos[i].preco=document.getElementById("precoProduto").value;
            Produtos[i].funcionario=document.getElementById("funcionarioProduto").value;
            localStorage.setItem("Produtos", JSON.stringify(Produtos));
        }
    }
}

function atualizaVendaProduto(id,qtdd,i){
        
    if(localStorage.getItem("idedit")==JSON.stringify(Produtos[i].id)){
            var aux;
            aux = Number(Produtos[i].quantidade)
            aux += qtdd
            Produtos[i].quantidade=aux;
            localStorage.setItem("Produtos", JSON.stringify(Produtos));
        }
    
}

function submitCadastroFuncionario(){
    var idp = ++idfuncionario;
    var nomep = document.getElementById("nomeFuncionario").value;
    var enderecop = document.getElementById("enderecoFuncionario").value;
    var salariop = document.getElementById("salarioFuncionario").value;
    if(salariop>=10000)var cargop="Gerente";
    else if(salariop>5000 && salariop<10000) var cargop="Supervisor";
    else var cargop="Vendedor";
    var vendidosp= [];
    var funcionario = {nome: nomep, cargo: cargop, endereco: enderecop, salario: salariop, id: idp, vendidos: vendidosp};
    Funcionarios.push(funcionario);
    localStorage.setItem("Funcionarios", JSON.stringify(Funcionarios));
    localStorage.setItem("IdFuncionario", idfuncionario);
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

function submitCadastroVenda(){
    
    var vda = ++idvendas;
    var produtov = document.getElementById("vendaProduto").value;
    var quantidadev = document.getElementById("quantidadeProduto").value;
    var funcionariov = document.getElementById("funcionarioProduto").value;
    var vendas = {id: vda, produto: produtov, quantidade: quantidadev, 
                    funcionario: funcionariov};
    
    for(i=0;i<Produtos.length;i++){
        if(Produtos[i].nome===produtov){
            if(Produtos[i].quantidade < quantidadev){
                vda = idvendas--;
                window.alert(`Temos apenas ${Produtos[i].quantidade} em estoque!`);
                return;
            }
            else{
                
                atualizaVendaProduto(Produtos[i].id,Number(quantidadev)*-1,i);
            }
        }
    }   
    for(i=0;i<Funcionarios.length;i++){
        if(Funcionarios[i].nome===funcionariov){
            Funcionarios[i].vendidos.push(vda);
        }
    }
    
    Vendas.push(vendas);
    localStorage.setItem("Vendas", JSON.stringify(Vendas));
    localStorage.setItem("IdVendas", idvendas);
}

function comboProdutos(){
    var string="";
  
        for(i=0;i<Produtos.length;i++){
            string = string.concat("<option>"+Produtos[i].nome+"</option>");
        }
        document.getElementById("vendaProduto").innerHTML=string;
    
}

function comboFuncionarios(){
    var string="";
    for(i=0;i<Funcionarios.length;i++){
        string = string.concat("<option>"+Funcionarios[i].nome+"</option>");
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

function startVendas(){
    comboFuncionarios();
    comboProdutos();
}