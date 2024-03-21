var dados = [
    { 
        titulo: "CÉLULA DIVERGENTE", 
        descricao: "Diferente do escolhido: Cor, tamanho, ou marca - Enviar código de postagem (não é necessário fotos). <br><br> Produtos completamente diferentes ou não comercializados pela loja parceira: Necessário fotos. Encaminhar para Célula Divergente. <br><br> Sem embalagem, enviar para Célula Divergente para possível análise. Caso de resgate oferecido pela Célula Divergente, já podemos seguir com o Resgate e identificar no ticket que foi tratado pela Célula Divergente. Pedido de falta item, Fullfillment enviar para Célula Divergente. <br><br> Produto falso com valor alto, fora do prazo de 7 dias (dentro dos 90 dias), solicitar laudo do fabricante. (Para possível atendimento) Produto falso fora do prazo enviar para o e-mail da qualidade e prazo de 8 dias úteis (produtosuspeito3P@magazineluiza.com). <br><br> Caixa vazia Magalu Entregas: Enviar para CD. Caixa vazia Convencional: Enviar para Célula Divergente. <br><br> Se no protocolo tiver retorno do seller, podemos finalizar dentro de MediAção. Caso não tenha retorno, devolver para Célula Divergente."
    },
    { 
        titulo: "RESGATE JÁ", 
        descricao: "Pedido de Desculpas: Até 10% do valor do pedido, mediante motivo justo registrado no ticket de Zendesk, que tenha lesado o cliente ou prejudicado sua experiência de compra com a gente. <br><br> Devolução de frete: Mediante a evidência da não utilização do mesmo. <br><br> Exemplo: Prazo de entrega estava para o dia 15/12 e foi entregue dia 30/12. <br><br> Alçada: O valor máximo a ser aprovado de resgate é o valor do pedido. Se o valor do Resgate for superior a 1.000,00, a gerência solicitante deverá discutir o caso com Gestão de Riscos. <br><br> Depósito para funcionário: Só será permitido se o colaborador, na condição de cliente, evidenciar que foi lesado. Precisa do “ok” do Diretor. <br><br> Produto avariado/quebrado: Podemos devolver até 50% do valor do produto. É necessário anexar a foto da avaria no ticket de atendimento. <br><br> O mesmo agente que ofereceu resgate já, seja por qualquer motivo, dará o aceite no ticket de MediAção e aplicar a macro aguardando cliente (pendente). Assim que o cliente retornar com os dados bancários, o agente irá abrir o resgate e acompanhar. <br><br> Não incluímos o valor do frete para devolução. <br><br> Falta item kit - Histórico de recorrência de comportamento do cliente, não atendemos. <br><br> Avaria - Precisa de fotos para comprovar para auditoria, referente ao valor unitário, somente produto rodo. <br><br> Precisa abrir um ticket e enviar como novo antes de aplicar a macro. <br><br> Informações: <br><br> O que é produto avariado? Avaria é um produto de grande porte. Exemplo: Fogão, geladeira, Tv. <br><br> O que é produto quebrado? Quebrado é um produto de pequeno porte. Ex: Potes de vidro, copos, espelhos. <br><br> Abrir um ticket e enviar como novo antes de aplicar a macro."
    },
    { 
        titulo: "COLETA", 
        descricao: "Pedido já estornado, sempre informar o cliente que a coleta será realizada em até 30 dias. Se não houver a coleta, informar o seller sobre descarte do produto."
    },
    { 
        titulo: "GERAR POSTAGEM REVERSA MANUAL", 
        descricao: "Quando for gerar postagem Magalu Entregas no protocolo giba e der erro, vamos tentar gerar pelo Django de postagem antes de pedir o endereço do cliente. <br><br> Link de acesso: <a href='https://magaluentregas-admin.magazineluiza.com.br/shipping/shipping/?q=0' target='_blank'>https://magaluentregas-admin.magazineluiza.com.br/shipping/shipping/?q=0</a> <br><br> Solicitar login à supervisão. <br><br> Em caso de erro pelo Django, solicitar os dados de endereço do cliente e gerar manual pelo site dos Correios. <br><br> Gerar consultando o endereço de devolução do seller no Dash abaixo: <a href='https://lookerstudio.google.com/reporting/25c0af03-8cb6-436e-b54e-c175664714df/page/RWdyC' target='_blank'>https://lookerstudio.google.com/reporting/25c0af03-8cb6-436e-b54e-c175664714df/page/RWdyC</a>"
    },
    { 
        titulo: "PRAZOS", 
        descricao: "Entrega atrasada Magalu entregas: 2 dias úteis. <br><br> Retira loja: 2 dias úteis. <br><br> Gerar coleta Magalu Entregas: 2 dias úteis. <br><br> Gerar recobrança: 2 dias úteis. <br><br> Célula Divergente: 2 dias úteis. <br><br> Caixa vazia: 2 dias úteis. <br><br> Acareação: 5 dias úteis. <br><br> Acionar GR: 2 dias úteis. <br><br> Acionar liberação: 2 dias úteis. <br><br> Acionar Seller: 24 horas úteis. <br><br> Magalu pay: 3 dias úteis. <br><br> Cupom: 2 dias úteis. <br><br> Retido na fiscalização: 12 dias úteis após abrir o ticket."
    },
    {
    titulo: "MAGALU ENTREGAS", 
    descricao: "Com nota fiscal sem despacho na GFL, seguir com cancelamento. <br><br> Sem nota fiscal emitida em 2 dias, seguir com cancelamento. <br><br> Não interagir na fila do seller no protocolo em casos de Operações Especiais (Apenas de reclamação). (Macro de Diversos) <br><br> Não solicitar código de rastreio quando a postagem enviada for Magalu Entregas, consultar no site dos Correios. (Deixar evidenciado se der algum erro e for necessário solicitar)"
     },
     { 
        titulo: "ENTREGA CONVENCIONAL", 
        descricao: "Deixar o ticket “Em espera” sempre que houver qualquer tipo de cobrança ao seller. <br><br> Consultar o rastreio das transportadoras pelo SSW com o número da Nota Fiscal. <br><br> Informar seller o motivo pelo qual o cliente será atendido por política. <br><br> Não interagir na fila do seller no protocolo em casos de Operações Especiais (Apenas de reclamação). (Macro de Diversos)"
    },
    { 
        titulo: "GR", 
        descricao: "Solicitar dados bancários e data de nascimento antes de enviar ao GR. <br><br> Reembolso de custo ou despesas. (Ex: Falta item, comprou o produto por conta). Solicitar laudo/comprovante/orçamento. <br><br> Cartão+Magalu pay enviar para o GR direto. <br><br> Pedido com divergência de valor, enviar para o Gr corrigir. Informar estorno na mesma forma de pagamento realizada. <br><br> Comprovante de estorno automático no sandiego, pedido cancelado depois do 90 dias, precisa de atender por fluxo alternativo <br><br> Orientar o cliente a entrar em contato com o banco e passar o número do código de autenticação. <br><br> Seller ofereceu valor acima da política, resgate irá atender, precisa de ter um protocolo de reclamação, não tendo precisa abrir de dúvidas gerais."
    },
    { 
        titulo: "NEGAR ATENDIMENTO", 
        descricao: "Ar condicionado instalado não cancelamos. Orientar contato com a assistência."
    },
    
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
                descricaoElement.innerHTML = "" + desc;
                descricaoElement.classList.add("descricao");

                // Adicionar a descrição após o botão clicado
                this.parentNode.insertBefore(descricaoElement, this.nextSibling);
            };
        }(descricao)); // Utilizando um closure para garantir que a descrição correta seja passada ao evento de clique

        // Adicionar o botão ao contêiner
        container.appendChild(botao);
        container.appendChild(document.createElement("br")); // Adicionar uma quebra de linha
    }
    document.addEventListener("DOMContentLoaded", function() {
    var sugestoesBtn = document.getElementById("sugestoes-btn");
    var sugestoesTexto = document.createElement("div");
    sugestoesTexto.id = "sugestoes-texto";
    sugestoesTexto.innerHTML = "Texto de sugestões aqui";

    sugestoesBtn.addEventListener("click", function() {
        if (sugestoesTexto.style.display === "none") {
            sugestoesTexto.style.display = "block";
        } else {
            sugestoesTexto.style.display = "none";
        }
    });

    document.body.appendChild(sugestoesTexto);
});
document.addEventListener("DOMContentLoaded", function() {
    var sugestoesBtn = document.getElementById("sugestoes-btn");
    sugestoesBtn.addEventListener("click", function() {
        window.open("https://magazineluiza.workplace.com/profile.php?id=100087314237293", "_blank");
    });
});

}

// Chamar a função para criar os botões e descrições
criarBotoesEDescrições();
