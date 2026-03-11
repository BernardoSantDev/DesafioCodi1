# 💸 Widget Financeiro - Codi Academy

Bem-vindo ao repositório do **Widget Financeiro**! Este projeto foi desenvolvido como resolução da **Primeira Missão da Semana** proposta pela **Codi Academy**, focada em estruturação e estilização de interfaces, com um toque de interatividade usando JavaScript.

<img width="1917" height="916" alt="Captura de tela 2026-03-11 150826" src="https://github.com/user-attachments/assets/be30a5d9-83fd-49b3-b9bf-53c0f10a7e57" />


---

## 🎯 O Desafio
O objetivo da missão era criar um "Card" de resumo financeiro contendo:
1. Um título de apresentação ("Saldo Atual").
2. Um valor em destaque.
3. Duas caixas de informações menores lado a lado: "Entradas" (verde) e "Saídas" (vermelha).

🔥 **Bônus Implementado:** Foi adicionada a funcionalidade de "Ocultar Saldo". Ao clicar no botão com o ícone de olho, os valores financeiros são substituídos por uma máscara de segurança (`••••••••`), e o ícone do botão muda de "olho aberto" para "olho fechado".

<img width="1915" height="912" alt="Captura de tela 2026-03-11 151116" src="https://github.com/user-attachments/assets/86fce588-4b69-40ec-95de-4d080365ca8f" />

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica do card e dos contêineres de dados.
* **CSS3:** Estilização com design moderno (sombras sólidas/neobrutalismo), uso de Flexbox para alinhamento e transições suaves nos botões.
* **JavaScript (Vanilla):** Manipulação do DOM para criar o efeito de "toggle" (mostrar/esconder). Utilização de atributos customizados (`data-value`) para armazenar os valores reais de forma segura enquanto a máscara está ativa.

---

## 💡 Como Funciona a Lógica de Ocultar Saldo?

O JavaScript mapeia todos os elementos que possuem a classe `.sensitive-data`. 
Quando o botão é clicado:
1. O script verifica o estado atual (visível ou oculto).
2. Troca o atributo `src` da tag `<img>` para alterar o ícone do olho.
3. Substitui o `textContent` dos dados: ou aplica a máscara de bolinhas, ou recupera o valor original guardado no atributo `data-value` do HTML.

---

## 🚀 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/BernardoSantDev/DesafioCodi1.git
   ```
2. Abra a pasta do projeto.

3. Dê um duplo clique no arquivo index.html para abri-lo diretamente no seu navegador, ou utilize a extensão Live Server do VS Code.

---

Desenvolvido por Bernardo Silva Sant Ana de Oliveira com dedicação para a Missão 1 da Codi Academy 🚀
