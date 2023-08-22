var array_Livros = [];

function menuOpcoes(){
    var op = Number(prompt("O que você quer fazer?\n 1 - Adicionar um livro.\n 2 - Listar livros."));
    if (!op || op>3 || op<0){
        alert("Opção inválida.");
        menuOpcoes();
    } else {
        switch (op){
            case 1:
                adicionarLivro();
                break;
            case 2:
                listarLivros();
                break;
        }
    }
}

function adicionarLivro(titulo, autor, lido){
    var livro = {titulo : 'titulo', autor : 'autor', lido : 'lido'};
    livro.titulo = prompt("Adicione o titulo: ");
    livro.autor = prompt("Nome do autor: ");
    livro.lido = prompt("Esse livro já foi lido? ");
    array_Livros.push(livro);
    console.log(livro.titulo, livro.autor, livro.lido);
    menuOpcoes();

}

function listarLivros(){
    array_Livros.forEach(element => {
        console.log(`O livro: ${element.titulo} \n Autor: ${element.autor}\n Lido: ${element.lido}`);
    });
    menuOpcoes();
}

menuOpcoes();


