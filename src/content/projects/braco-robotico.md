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
recursos:
  - nome: "Código Fonte do Arduino"
    tipo: "codigo"
    url: "https://github.com/HenriqueKnaul/udesc-maker/blob/main/src/content/projects/braco-robotico.md?plain=1"
  - nome: "Moldes 3D das Peças"
    tipo: "3d"
    url: "https://sketchfab.com/3d-models/projeto-braco-robotico-f350a2e85c9444c5ac46ca33586a977c"
---

## Sobre o Projeto

Monte um braço robótico que pode ser controlado em tempo real usando um joystick. Muito usado em introdução à robótica industrial.

## Materiais Necessários

- 1 Arduino Uno
- 3 a 5 servo motores SG90 ou MG996R
- 1 módulo joystick KY-023
- Fonte de alimentação externa 5V a 6V
- Jumpers fios
- Estrutura do braço em 3D, MDF ou papelão reforçado

## Passo a Passo

1. Monte a base do braço
2. Fixe os servos nas articulações base, braço e garra
3. Certifique-se de que os movimentos estão livres
4. Conecte os servos ao Arduino nos pinos PWM
5. Ligue o eixo X do joystick no A0 e o eixo Y no A1
6. Use fonte externa para alimentar os servos
7. Conecte o GND de tudo em comum
8. Carregue o código e teste os movimentos