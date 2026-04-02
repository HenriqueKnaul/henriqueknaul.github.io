---
titulo: "Braço Robótico Controlado por Joystick"
resumo: "Construa um braço robótico controlado manualmente usando joystick e Arduino."
idade_minima: 14
duracao: "3 a 5 horas"
autor: "Equipe Maker"
dificuldade: "avancado"
categoria: ["Robótica", "Arduino", "Automação"]
thumbnail: "/braco-robotico.jpg"
tags: ["robo", "braco robotico", "servo motor", "joystick", "controle"]
---

# Braço Robótico com Joystick

Monte um braço robótico que pode ser controlado em tempo real usando um joystick. Esse projeto é muito usado em introdução à robótica industrial.

## Materiais
* 1 Arduino Uno
* 3 a 5 servo motores (SG90 ou MG996R)
* 1 módulo joystick (KY-023)
* Fonte de alimentação externa (5V a 6V)
* Jumpers (fios)
* Estrutura do braço (pode ser 3D, MDF ou papelão reforçado)

## Como fazer

### 1. Montagem da estrutura
1. Monte a base do braço.
2. Fixe os servos nas articulações (base, braço e garra).
3. Certifique-se de que os movimentos estão livres.

### 2. Ligações elétricas
1. Conecte os servos ao Arduino (pinos PWM).
2. Ligue o joystick:
   - Eixo X → A0
   - Eixo Y → A1
3. Use fonte externa para alimentar os servos.
4. Conecte o GND de tudo em comum.

### 3. Código básico (Arduino)

```cpp
#include <Servo.h>

Servo servoBase;
Servo servoBraco;

int joyX = A0;
int joyY = A1;

void setup() {
  servoBase.attach(9);
  servoBraco.attach(10);
}

void loop() {
  int valX = analogRead(joyX);
  int valY = analogRead(joyY);

  int posBase = map(valX, 0, 1023, 0, 180);
  int posBraco = map(valY, 0, 1023, 0, 180);

  servoBase.write(posBase);
  servoBraco.write(posBraco);

  delay(15);
}