// Array de objetos contendo títulos e descrições
var dados = [
    { 
        titulo: "Bombeiras", 
        descricao: "Diferente do escolhido: Cor, tamanho, voltagem ou marca - Enviar código de postagem (NÃO é necessário fotos);<br>Produtos completamente diferentes ou não comercializados pela loja parceira: necessário fotos. Encaminhar para bombeiras;<br>Sem embalagem enviar para bombeiras para possível análise;<br>Caso de resgate ofertado pelas bombeiras, iremos abrir por aqui e identificar no ticket que foi tratado pelas bombeiras;<br>Pedido de falta item Fullfillment enviar para bombeiras;<br><br>Produto falso com valor alto ou passou de 3 meses solicitar laudo;<br>Produto falso fora do prazo enviar para o e-mail da qualidade e prazo de 8 dias uteis; (produtosuspeito3P@magazineluiza.com)<br><br>Caixa vazia Magalu entrega - Enviar para CD<br>Caixa vazia Convencional - Enviar para Bombeiras<br><br>Bombeiras fazer a tratativa de Seller fraudador;<br><br>Se no protocolo tiver retorno do seller podemos finalizar dentro de mediação.<br>Se não tiver retorno devolver para bombeiras<br><br>Foram finalizados em massa casos em espera das bombeiras, caso tiver algum em atraso enviar para Tânia priorizar<br><br>O prazo para diferente do escolhido é de 90 dias." 
    },
    { 
        titulo: "Título 2", 
        descricao: "Descrição do Título 2" 
    },
    { 
        titulo: "Título 3", 
        descricao: "Descrição do Título 3" 
    },
    { 
        titulo: "Título 4", 
        descricao: "Descrição do Título 4" 
    },
    { 
        titulo: "Título 5", 
        descricao: "Descrição do Título 5" 
    },
    { 
        titulo: "Título 6", 
        descricao: "Descrição do Título 6" 
    },
    { 
        titulo: "Título 7", 
        descricao: "Descrição do Título 7" 
    },
    { 
        titulo: "Título 8", 
        descricao: "Descrição do Título 8" 
    },
    { 
        titulo: "Título 9", 
        descricao: "Descrição do Título 9" 
    },
    { 
        titulo: "Título 10", 
        descricao: "Descrição do Título 10" 
    }
];

// Função para criar os botões e adicionar ao HTML
function criarBotoesEDescrições() {
    var container = document.getElementById("titulos-e-descricoes");
    for (var i = 0; i < dados.length; i++) {
        var titulo = dados[i].titulo;
        var descricao = dados[i].descricao;

        // Criar um botão para cada título
        var botao = document.createElement("button");
        botao.textContent = titulo;

        // Adicionar um evento de clique para exibir a descrição correspondente
        botao.addEventListener("click", function(desc) {
            return function() {
                // Verificar se a descrição já está sendo exibida
                var descricaoAtual = document.querySelector(".descricao");
                if (descricaoAtual) {
                    descricaoAtual.parentNode.removeChild(descricaoAtual);
                }

                // Criar um parágrafo para exibir a descrição
                var descricaoElement = document.createElement("p");
                descricaoElement.innerHTML = "Descrição: " + desc;
                descricaoElement.classList.add("descricao");

                // Adicionar a descrição após o botão clicado
                this.parentNode.insertBefore(descricaoElement, this.nextSibling);
            };
        }(descricao)); // Utilizando um closure para garantir que a descrição correta seja passada ao evento de clique

        // Adicionar o botão ao contêiner
        container.appendChild(botao);
        container.appendChild(document.createElement("br")); // Adicionar uma quebra de linha
    }
}

// Chamar a função para criar os botões e descrições
criarBotoesEDescrições();
