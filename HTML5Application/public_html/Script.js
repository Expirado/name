function verificarMaioridade() {
    nome = document.getElementById('nome').value;
    ano = document.getElementById('ano').value;

    ano = parseInt(ano);

    if (isNaN(ano)) {
        alert('Informe um ano de nascimento válido.');
        // limpa o campo
        document.getElementById('ano').value = '';
        // foco
        document.getElementById('ano').focus();
        return;
    }

    idade = 2019 - ano;

    if (idade >= 18 && idade <=69 ) {
        situacao = 'você é obrigado a votar';
    } else if (idade == 17) {
        situacao = 'o seu voto é opcional';
    } else if (idade >= 70) {
        situacao = 'o seu voto é opcional'
    } else 
        situacao = 'você não pode votar'

        frase = nome + ', você tem ' + idade + ' anos e  ' + situacao + '!';
        frase = '<h3 class="destaque">' + frase + '</h3>';

        document.getElementById('resultado').innerHTML = frase;
}