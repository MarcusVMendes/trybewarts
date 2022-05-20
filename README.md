# Boas vindas ao repositório do projeto trybewarts!


Este projeto foi desenvolvido por [MarcusVMendes](http://www.linkedin.com/in/marcusvmendes-dev) enquanto estudante de Desenvolvimento Web Full Stack na [Trybe](https://www.linkedin.com/school/betrybe/) no periodo 2021/2022, como requisito parcial para aprovação de módulo.  #vqv 🚀

A proposta do projeto é desenvolver uma landing page em HTML contendo um formulário com valores e estado utilizando flexbox e JavaScript.


# Habilidades

  * Criar formulários em HTML;

  * Utilizar CSS Flexbox para criar layouts flexíveis;

  * Criar regras CSS específicas para serem aplicadas a dispositivos móveis;

  * Construir páginas que alteram o seu layout de acordo com a orientação da tela;<br><br>


# Instalação do projeto localmente

Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em _marcus.mendes89@gmail.com_.
<br>
<br>

<div style="text-align: left">1. Abra o terminal e crie um diretório no local de sua preferência com o comando <b>mkdir</b>:</div><br>

```javascript
mkdir projetos
```
<br>
<div style="text-align: left">2. Entre no diretório que acabou de criar e depois clone o projeto:<div><br>


```javascript
cd projetos
git clone git@github.com:MarcusVMendes/trybewarts.git
```
<br>
<div style="text-align: left">3. Acesse o diretório do projeto e depois utilize o comando <b>npm install</b> para instalar todas as dependências necessárias:<div><br>

```javascript
cd trybewarts
npm install
```
<br>
    4. Recomenda-se o uso da extensão <b>Live Server</b> para executar o projeto no browser. 
<br><br>


# Sumário

`Requisitos obrigatórios:`
 - [1. Crie uma barra verde na parte superior da página](#1-crie-uma-barra-verde-na-parte-superior-da-página)
 - [2. Adicione o logotipo da Trybewarts com a classe `trybewarts-header-logo` no canto esquerdo da barra superior](#2-adicione-o-logotipo-da-trybewarts-com-a-classe-trybewarts-header-logo-no-canto-esquerdo-da-barra-superior)
 - [3. Acrescente um formulário de autenticação no canto direito da barra superior contendo os inputs de login, de senha e um botão de entrar](#3-acrescente-um-formulário-de-autenticação-no-canto-direito-da-barra-superior-contendo-os-inputs-de-login-de-senha-e-um-botão-de-entrar)
 - [4. Crie um título com o texto 'Trybewarts' centralizado dentro do 'Header'](#4-crie-um-título-com-o-texto-trybewarts-centralizado-dentro-do-header)
 - [5. Adicione um formulário no corpo da página, posicionado ao lado esquerdo](#5-adicione-um-formulário-no-corpo-da-página-posicionado-ao-lado-esquerdo)
 - [6. Crie um id para o formulário do requisito 5](#6-crie-um-id-para-o-formulário-do-requisito-5)
 - [7. Adicione a logo da Trybewarts no lado direito da página](#7-adicione-a-logo-da-trybewarts-no-lado-direito-da-página)
 - [8.Acrescente no formulário os inputs de 'Nome:', 'Sobrenome:' e 'Email:'](#8acrescente-no-formulário-os-inputs-de-nome-sobrenome-e-email)
 - [9. Crie um select 'Casa' contendo quatro options](#9-crie-um-select-casa-contendo-quatro-options)
 - [10. Alinhe os campos de 'Nome' e 'Sobrenome' para que fiquem em linha](#10-alinhe-os-campos-de-nome-e-sobrenome-para-que-fiquem-em-linha)
 - [11. Alinhe os campos de 'Email' e 'Casa' para que fiquem em linha](#11-alinhe-os-campos-de-email-e-casa-para-que-fiquem-em-linha)
 - [12. Crie um campo de entrada para qual família a pessoa estudante se identifica](#12-crie-um-campo-de-entrada-para-qual-família-a-pessoa-estudante-se-identifica)
 - [13. Crie campos de entrada do tipo 'checkbox' contendo seis opções](#13-crie-campos-de-entrada-do-tipo-checkbox-contendo-seis-opções)
 - [14. Crie campo de entrada para avaliar de 1 a 10 o nível de satisfação com a Trybewarts](#14-crie-campo-de-entrada-para-avaliar-de-1-a-10-o-nível-de-satisfação-com-a-trybewarts)
 - [15. Crie uma textarea com o id 'textarea' contendo o número máximo de caracteres igual à 500](#15-crie-uma-textarea-com-o-id-textarea-e-uma-label-com-a-classe-textarea-contendo-o-número-máximo-de-caracteres-igual-à-500)
 - [16. Crie um campo de entrada do tipo 'checkbox' com o id 'agreement' para validar as informações](#16-crie-um-campo-de-entrada-do-tipo-checkbox-com-o-id-agreement-para-validar-as-informações)
 - [17. Crie um botão de Enviar para submeter o formulário](#17-crie-um-botão-de-enviar-para-submeter-o-formulário)
 - [18. Faça com que o botão 'Enviar' seja habilitado somente após a checkbox do requisito 16 ser selecionada](#18-faça-com-que-o-botão-enviar-seja-habilitado-somente-após-a-checkbox-do-requisito-16-ser-selecionada)
 - [19. Crie um rodapé no final da página](#19-crie-um-rodapé-no-final-da-página)

  `Requisitos bônus:`
  - [20. Crie um contador com o ID 'counter' contendo o número de caracteres disponíveis no textarea, variando de 500 até 0, que deverá ser atualizado a medida que algo for digitado na textarea](#20-crie-um-contador-com-o-id-counter-contendo-o-número-de-caracteres-disponíveis-no-textarea-variando-de-500-até-0-que-deverá-ser-atualizado-a-medida-que-algo-for-digitado-na-textarea)
  - [21. Faça com que ao clicar no botão 'Enviar', o conteúdo do formulário seja substituído pelas informações preenchidas](#21-faça-com-que-ao-clicar-no-botão-enviar-o-conteúdo-do-formulário-seja-substituído-pelas-informações-preenchidas)

  `Requisitos não avaliativos`
  - [22. Preencha o arquivo feedback.md . Aproveite o espaço para deixar seus feedbacks sobre o projeto.](#22-preencha-o-arquivo-feedbackmd--aproveite-o-espaço-para-deixar-seus-feedbacks-sobre-o-projeto)
  - [23. Realize o desenvolvimento da versão mobile do formulário Trybewarts.](#23-realize-o-desenvolvimento-da-versão-mobile-do-formulário-trybewarts)
