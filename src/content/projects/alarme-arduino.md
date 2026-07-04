---
visivel: true
titulo: "Alarme Anti Roubo com Arduino"
autor: "Guilherme Rode, Henrique Knaul e Kaique de Oliveira"
resumo: "Um sistema de segurança caseiro montado dentro de uma caixa de sapatos. Utiliza sensores infravermelhos para detectar intrusos, disparando um alarme sonoro e exibindo alertas em uma tela LCD."
idade_minima: 12
duracao: "2 horas"
dificuldade: "avancado" 
categoria: ["Eletrônica", "Arduino", "Programação", "Maker"]
thumbnail: "/thumbnails/alarmearduino.jpeg"
tags: ["arduino", "alarme", "seguranca", "eletronica", "lcd", "sensores"]

recursos:
  - nome: "Foto do projeto pronto - caixa fechada (sistema armado)"
    tipo: "alarme arduino-1.jpeg"
    url: "/projetos/alarme-arduino/alarme-arduino-1.jpeg"

  - nome: "Foto do projeto pronto - visão interna geral (intruso detectado)"
    tipo: "alarme arduino-2.jpeg"
    url: "/projetos/alarme-arduino/alarme-arduino-2.jpeg"

  - nome: "Foto do projeto pronto - detalhe das conexões na protoboard"
    tipo: "alarme arduino-3.jpeg"
    url: "/projetos/alarme-arduino/alarme-arduino-3.jpeg"
---

## Sobre o Projeto

Nesta atividade vamos transformar uma simples caixa de sapatos em um sistema de segurança funcional usando a plataforma Arduino.
O conceito é simples e muito usado na vida real: um feixe de luz invisível a olho nu é emitido por um sensor infravermelho. Se alguém (ou alguma coisa) cruzar o caminho desse feixe, o receptor detecta a alteração e avisa o "cérebro" do sistema, o Arduino.
Enquanto está tudo tranquilo, a tela exibe a mensagem "SISTEMA ARMADO". Assim que o sensor detecta movimento, o Arduino aciona um alarme sonoro bem alto, amplificado por um funil, e a tela muda imediatamente para "INTRUSO! ALERTA LIGADO". É um ótimo projeto para aprender montagem de circuitos em protoboard, controle de displays e integração de sensores.

## Materiais Necessários

* 1x Placa Arduino Uno (com cabo USB para alimentação e programação)
* 1x Protoboard
* 1x Display LCD 16x2
* 1x Potenciômetro de 10kΩ
* 1x Par de sensores infravermelhos (IR): um emissor (cabecinha transparente) e um receptor fotodiodo (cabecinha preta)
* 1x Resistor de 220Ω (Vermelho, Vermelho, Marrom)
* 1x Resistor de 10kΩ (Marrom, Preto, Laranja)
* 1x Buzzer ativo
* 20x Fios jumper macho-macho
* 2x Fios jumper macho-fêmea
* 1x Caixa de sapatos
* 1x Funil de plástico pequeno
* Pistola de cola quente
* Estilete ou tesoura
* Fita isolante e pedaços de papelão extra para acabamento

## Passo a Passo

1. **Prepare a caixa de sapatos:** Marque e corte um retângulo na frente da caixa para encaixar o display LCD. Na tampa, faça dois furos pequenos lado a lado, por onde vão passar as "cabecinhas" do sensor infravermelho para o lado de fora.

2. **Posicione o Arduino e a protoboard:** Cole o Arduino e a protoboard no fundo da caixa com um pouco de cola quente ou fita dupla-face, para que os fios não se soltem caso a caixa seja movida.

3. **Monte o conjunto buzzer + funil:** Passe cola quente nas bordas do buzzer e cole-o na entrada mais fina do funil, que vai funcionar como um amplificador de som. Cole o funil virado para baixo ou para a lateral da caixa.

4. **Instale os sensores na tampa:** Encaixe o LED transparente (emissor) e o LED preto (receptor) nos furinhos feitos na tampa, deixando as perninhas voltadas para dentro da caixa. Como eles ficam longe da protoboard, use os fios jumper macho-fêmea para estender essas perninhas até a base.

5. **Ligue a alimentação:** Na protoboard, conecte um fio do pino 5V do Arduino até a linha vermelha (+) e um fio do GND até a linha azul (-). Essas duas linhas vão alimentar todo o resto do circuito.

6. **Conecte o sensor emissor:** Espete uma perna do resistor de 220Ω na linha vermelha (+) e a outra em um buraco livre da protoboard. Conecte a perna longa (+) do sensor emissor nesse mesmo buraco, e a perna curta (-) direto na linha azul (-).

7. **Conecte o sensor receptor:** Espete uma perna do resistor de 10kΩ na linha vermelha (+) e a outra em um buraco livre. Conecte a perna de sinal do receptor nesse mesmo ponto e puxe um fio dessa fileira até o pino 7 do Arduino. Conecte a outra perna do receptor (GND) direto na linha azul (-).

8. **Conecte o buzzer:** Ligue a perna positiva do buzzer ao pino 8 do Arduino e a perna negativa à linha azul (-).

9. **Conecte o display LCD e o potenciômetro:** Ligue os pinos 1, 5 e 16 do LCD à linha azul (-) e os pinos 2 e 15 à linha vermelha (+). No potenciômetro, ligue a perna da esquerda à linha azul (-), a da direita à linha vermelha (+) e a perna do meio (cursor) ao pino 3 (V0) do LCD. Por fim, ligue os pinos de dados do LCD aos pinos do Arduino: RS (pino 4) ao pino 12, E (pino 6) ao pino 11, D4 (pino 11) ao pino 5, D5 (pino 12) ao pino 4, D6 (pino 13) ao pino 3 e D7 (pino 14) ao pino 2. Use a foto de detalhe das conexões como referência para conferir se todos os fios estão nos lugares certos.

10. **Programe o Arduino:** Conecte o cabo USB no Arduino e no computador, abra a IDE do Arduino, copie o código da seção abaixo e faça o upload para a placa.

11. **Teste e ajuste o brilho:** Com o código carregado, ligue o circuito. Se as letras não aparecerem no display de primeira, gire suavemente o cursor do potenciômetro até a mensagem "SISTEMA ARMADO" ficar nítida. Passe a mão entre os sensores na tampa para cortar a luz infravermelha: o display deve mudar para "INTRUSO!" e o buzzer deve tocar alto dentro do funil.

## Código Fonte do Arduino

```cpp
#include <LiquidCrystal.h>

// Pinos do LCD: (RS, E, D4, D5, D6, D7)
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

const int pinoBuzzer = 8;
const int pinoReceptor = 7;

void setup() {
  lcd.begin(16, 2);
  pinMode(pinoBuzzer, OUTPUT);
  pinMode(pinoReceptor, INPUT);

  lcd.print("Iniciando...");
  delay(1000);
}

void loop() {
  // Se leitura == 0 (luz chegando), sistema armado.
  // Se leitura == 1 (luz cortada), intruso detectado.
  if (digitalRead(pinoReceptor) == 0) {
    lcd.clear();
    lcd.print("SISTEMA ARMADO");
  }
  else {
    lcd.clear();
    lcd.print("INTRUSO!");
    lcd.setCursor(0, 1);
    lcd.print("ALERTA LIGADO");

    digitalWrite(pinoBuzzer, HIGH);
    delay(2000);
    digitalWrite(pinoBuzzer, LOW);
  }

  delay(100);
}
```