---
# 📝 MODELO DE PROJETO: Preencha os campos abaixo para inserir seu projeto no site.
# DICA: Não apague as aspas "" e mantenha os recuos para o site não quebrar.

visivel: false # Altere para 'true' para apresentar o projeto do site
titulo: "NOME DO SEU PROJETO AQUI"
autor: "Nome do Autor ou Equipe"
resumo: "Escreva aqui uma frase curta (máximo 150 caracteres) que resuma o projeto."
idade_minima: 10 
duracao: "2 horas" 
dificuldade: "iniciante" # Opções: iniciante, intermediario, avancado
categoria: ["Eletrônica", "Artesanato"] # Adicione ou remova categorias entre colchetes
thumbnail: "/thumbnails/layout.jpg" # Caminho da imagem que aparece na listagem --- essa imagem precisa estar na pasta [thumbnails] para maior organização.
tags: ["arduino", "maker", "escola"]

recursos:  
  # Exemplo de arquivo próprio do projeto (coloque o arquivo na pasta /projetos/nome-do-projeto/)
  - nome: "Enunciado do Projeto"
    tipo: "pdf"
    url: "/projetos/layout-base/enunciado.pdf"

  # Exemplo de link externo
  - nome: "Site UDESC CEAVI"
    tipo: "link"
    url: "https://www.udesc.br/ceavi"
---

## Sobre o Projeto

Explique o que o projeto faz e qual o principal aprendizado.
Ex: "Neste projeto, vamos aprender como a energia solar se transforma em movimento."

## Materiais Necessários

* 1x Item Principal
* 1x Componente Eletrônico
* 1x Ferramenta Necessária
* 1x Insumo / Sucata

## Passo a Passo

1. **Preparação dos Materiais:** Organize todos os itens da lista acima e limpe a sua área de trabalho.
2. **Montagem:** Descreva como montar o circuito ou estrutura física.
3. **Conexões:** Siga o diagrama abaixo para conectar os componentes.
   ![Diagrama de conexões](/projetos/layout-base/imagem-layout.png)
4. **Programação:** Carregue o código abaixo no seu microcontrolador.
    ```cpp
    // Cole seu código aqui dentro
    void setup() {
      pinMode(13, OUTPUT);
    }

    void loop() {
      digitalWrite(13, HIGH);
      delay(1000);
      digitalWrite(13, LOW);
      delay(1000);
    }
    ```
5. **Teste:** Verifique se o comportamento está correto e ajuste se necessário.