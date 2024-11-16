var linha = [];
var registrosCarrinho = 0;

function adicionar () {
    linha = [];

    var produto = document.getElementById ('nome').value;
    var preco = parseFloat(document.getElementById ('preco').value).toFixed(2);
    var idProd = document.getElementById ('idProd').value;

    document.getElementById('erro').innerHTML = '';

    try {
        if (document.getElementById ('imagem').files[0].name == '') throw 'O campo IMAGEM não deve ser vazio!';

        if (!(isNaN (produto)) && (produto != ''))  throw 'Digite um texto no campo PRODUTO!';
        if (produto == '') throw 'O campo para o PRODUTO não deve ser vazio!';

        if (preco == '') throw 'O campo para a PREÇO não deve ser vazio!';
        if (preco <= 0) throw 'O PREÇO deve ser maior que 0 (zero)!';

        if (idProd == '') throw 'O campo para o ID não deve ser vazio!';
        if (idProd < 0) throw 'O ID deve ser maior que 0 (zero)!';
        
        linha.push (document.getElementById ('imagem').files[0].name);
        linha.push (produto);
        linha.push (preco);
        linha.push (idProd);

        alert("Informações Cadastradas!");

        registrosCarrinho = localStorage.length;
        localStorage.setItem ("Linha " + registrosCarrinho, linha);

        document.getElementById ('imagem').value = '';
        document.getElementById ('nome').value = '';
        document.getElementById ('preco').value = '';
        document.getElementById ('idProd').value = '';

    } catch (erro) {
        document.getElementById ('erro').innerHTML = erro;
    }
}

function limpar () {
    alert("Informações limpadas!");
    localStorage.clear();
}