---
titulo: "Placar Eletrônico de Futsal Bluetooth"
resumo: "Construa um placar de LED para quadras esportivas que pode ser controlado remotamente pelo celular."
idade_minima: 14
duracao: "4 a 6 horas"
autor: "Henrique, Guilherme e Kaique"
dificuldade: "avancado"
categoria: ["Eletrônica", "Programação", "Esportes"]
thumbnail: "/placar-futsal.jpg"
tags: ["futsal", "bluetooth", "matriz led", "app", "esportes"]
recursos:
  - nome: "Código Fonte (Flutter/Arduino)"
    tipo: "codigo"
    url: "https://github.com/udesc-maker/placar-futsal"
  - nome: "Diagrama Elétrico"
    tipo: "pdf"
    url: "#"
---

## Sobre o Projeto

Pensando em acabar com a contagem de gols no grito durante os jogos da atlética toda quinta-feira, criamos este projeto. O objetivo é montar um painel de LED visível de longe para marcar os gols e o tempo da partida. 

## Materiais Necessários

- 1 Arduino Nano ou Uno
- 2 Módulos de Matriz de LED MAX7219 (cascateáveis)
- 1 Módulo Bluetooth HC-05 ou HC-06
- Protoboard e Jumpers (fios)
- Fonte de alimentação de 5V (pode ser um Power Bank)
- Um smartphone Android para o controle

## Passo a Passo

1. Conecte os pinos DIN, CS e CLK da matriz de LED nas portas digitais do Arduino (ex: 11, 10 e 13).
2. Ligue o módulo Bluetooth HC-05 (Atenção: o TX do módulo vai no RX do Arduino, e o RX do módulo vai no TX do Arduino).
3. Conecte a alimentação (VCC e GND) de todos os componentes na protoboard.
4. Baixe o código fonte do Arduino disponibilizado nos recursos adicionais e faça o upload para a placa.
5. Instale o aplicativo base no seu celular ou rode o script Python no notebook para parear com o HC-05.
6. Faça um gol de teste! Pelo aplicativo, adicione um ponto para o time da casa e veja a matriz de LED atualizar instantaneamente.