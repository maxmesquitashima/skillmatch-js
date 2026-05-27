# Skill Match 35: Simulador de Compatibilidade com Vaga Front-End Júnior

## 📋 Sobre o Projeto
O **Skill Match 35** é um motor de análise e simulador de compatibilidade desenvolvido inteiramente em **JavaScript puro (Vanilla JS)**. O projeto foi desenhado para ajudar programadores em início de carreira a avaliarem o seu alinhamento técnico com as oportunidades de mercado para Front-End Júnior.

O sistema analisa o perfil de um candidato contra uma lista de vagas de emprego criadas dinamicamente através de Programação Orientada a Objetos (POO). A aplicação calcula a percentagem de correspondência de competências, identifica quais os requisitos em falta, classifica o nível de afinidade e gera uma recomendação personalizada de estudos baseada nas lacunas encontradas.

## 🎯 Objetivo
Este projeto foi desenvolvido como o **Mini-Projeto Avaliativo do Módulo 01 (Semana 06)**, tendo como objetivo consolidar e demonstrar o domínio dos seguintes fundamentos essenciais do JavaScript:

* **Lógica de Programação & Operadores:** Aplicação de operadores lógicos e fórmulas matemáticas para cálculo de percentagens.
* **Estruturas Condicionais (If/Else):** Segmentação e classificação do nível de compatibilidade técnica.
* **Laços de Repetição (Loops):** Iteração automatizada sobre coleções de objetos utilizando `for...of`.
* **Programação Orientada a Objetos (POO):** Criação de classes moldes, aplicação de **Herança** (`extends`/`super`) e manipulação de contexto com a palavra-chave `this`.
* **Métodos Avançados de Array:** Manipulação e transformação de dados utilizando métodos de alta ordem como `.map()` e `.filter()`.
* **Funções de Alta Ordem (Callbacks e Closures):** Retenção de estado na memória para contagem de fluxos (*closure*) e execução de rotinas personalizadas pós-processamento (*callback*).
* **Assincronismo:** Simulação de comunicação com um servidor externo através de **Promises** e sintaxe moderna **Async/Await**.

## 🛠️ Tecnologias e Conceitos Aplicados

A tabela abaixo apresenta uma explicação simples e didática dos pilares técnicos exigidos e implementados neste motor de análise:

| Conceito Técnico | Descrição Didática (Do Zero) | Aplicação Prática no Projeto |
| :--- | :--- | :--- |
| **POO (Classes e Herança)** | Funciona como a criação de "moldes". Criamos uma estrutura base geral (`Vaga`) e uma derivada (`VagaFrontEnd`) que herda todas as propriedades e métodos do pai, mas adiciona características específicas (como o nível da vaga). | Instanciação de todas as vagas do mercado através da classe filha `VagaFrontEnd`. |
| **Funções de Alta Ordem: Callbacks** | É o equivalente a deixar um "recado" ou uma instrução para que uma função seja executada apenas num momento futuro determinado. | Função `finalizarAnalise` que recebe e executa uma mensagem personalizada no fim do programa. |
| **Funções de Alta Ordem: Closures** | Ocorre quando uma função interna "lembra" e mantém acesso ao escopo onde foi criada, permitindo guardar e modificar variáveis de forma privada. | Função `criarContadorDeAnalises` que mantém a contagem incremental de vagas avaliadas sem perder o estado. |
| **Assincronismo (Promises e Async/Await)** | Permite ao sistema gerir tarefas que demoram algum tempo (como descarregar dados da internet) sem bloquear a execução do resto do programa. O `Async/Await` faz o código esperar pela resposta de forma elegante. | Função `buscarVagasSimuladas` com `setTimeout` de 1 segundo para fingir uma requisição de rede. |

## 🚀 Como Executar o Projeto

Este projeto foca-se exclusivamente na lógica de programação e nos fundamentos do JavaScript, pelo que **não necessita do Node.js** ou de configurações complexas.

1. Certifique-se de que possui os ficheiros `index.html` e `skillmatch.js` na mesma pasta.
2. **Abra o ficheiro `index.html`** no seu navegador web de preferência (Chrome, Edge, Firefox).
3. Pressione a tecla **F12** (ou clique com o botão direito em qualquer lado da página e selecione **"Inspecionar"**).
4. Navegue até à aba **Console**.
5. O sistema irá carregar as vagas assincronamente e exibirá todo o histórico de análises e recomendações diretamente no ecrã.

*Nota: Se preferir testar isoladamente, pode copiar todo o código contido em `skillmatch.js` e colá-lo diretamente dentro do Console do navegador.*

## 📂 Estrutura de Ficheiros do Repositório

```text
skillmatch-js/
├── index.html       # Interface HTML simples para carregar o script no navegador
├── skillmatch.js    # Código-fonte principal com a engine e regras de negócio (Core)
└── README.md        # Documentação detalhada e contextualização do projeto
👥 Autor
Desenvolvido por Maximiliano.

GitHub: maxmesquitashima

LinkedIn: www.linkedin.com/in/maximiliano-shimabucuro-0924411a6

Quadro Kanban: https://github.com/users/maxmesquitashima/projects/2/views/1

Video: https://www.loom.com/share/4eb1e0b019294527a03f75ebdcaf6e7d