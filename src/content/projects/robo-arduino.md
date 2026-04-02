---
titulo: "Robô Seguidor de Linha com Arduino"
resumo: "Construa um robô que segue uma linha automaticamente usando sensores e Arduino."
idade_minima: 14
duracao: "2 a 4 horas"
autor: "Equipe Maker"
dificuldade: "avancado"
categoria: ["Robótica", "Arduino", "Automação"]
thumbnail: "/robo-linha.jpg"
tags: ["arduino", "robo", "sensor", "linha", "automacao"]
---

# Robô Seguidor de Linha

Um robô capaz de seguir uma linha no chão de forma automática usando sensores de luz. Esse projeto é muito usado em competições de robótica!

## Materiais
* 1 Arduino Uno
* 2 motores DC
* 1 ponte H (L298N ou similar)
* 2 sensores infravermelhos (IR)
* 1 chassi com rodas
* Bateria (7V a 12V)
* Jumpers (fios)
* Fita preta (para fazer a linha no chão)

## Como fazer

### 1. Montagem do robô
1. Fixe os motores no chassi.
2. Conecte as rodas.
3. Instale a ponte H no chassi.
4. Posicione os sensores IR na parte frontal (virados para o chão).

### 2. Ligações elétricas
1. Conecte os motores na ponte H.
2. Ligue a ponte H no Arduino.
3. Conecte os sensores IR nas portas digitais do Arduino.
4. Alimente o sistema com a bateria.

### 3. Lógica do funcionamento
1. Os sensores detectam a linha preta no chão.
2. Se ambos sensores detectam branco → anda reto.
3. Se um sensor detecta preto → corrige direção.
4. Se ambos detectam preto → para ou ajusta.

### 4. Código básico (Arduino)

```cpp
int sensorEsq = 2;
int sensorDir = 3;

void setup() {
  pinMode(sensorEsq, INPUT);
  pinMode(sensorDir, INPUT);
}

void loop() {
  int esq = digitalRead(sensorEsq);
  int dir = digitalRead(sensorDir);

  if (esq == LOW && dir == LOW) {
    // frente
  } else if (esq == LOW && dir == HIGH) {
    // virar direita
  } else if (esq == HIGH && dir == LOW) {
    // virar esquerda
  } else {
    // parar
  }
}