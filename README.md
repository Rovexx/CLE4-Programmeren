## Speelbare game

https://stud.hosted.hr.nl/0940512/game/docs/

## Checklist

- [V] De game heeft een startscherm en een eindscherm.
- [V] Er zijn geen bugs.

## Toelichting OOP 

- Classes
Ik heb alle objecten van de game in een class gezet. Zo heb ik bijvoorbeeld een spaceship class (dit ben jij) en een astroid class. deze moet je vermijden.
- Encapsulation 
Ik maak overal gebruik van encapsulation. Zo maak ik bijvoorbeeld functies die overal bruikbaar moeten zijn public. Maar andere dingen zoals de snelheid en de toets registraties private omdat die alleen in het spacship.ts document gebuikt moeten worden. Het is niet de bedoeling dat iemand vanuit astroid bijvoorbeeld de snelheid van het spaceship gaat veranderen.
- Composition
Mijn game is zo opgebouwd dat mijn game een speelscherm heeft. Dit speelscherm heeft astroids en een spaceship. Er is dus niet 1 document dat alles heeft maar het is opgebouwd uit meerdere delen.
- Inheritance
Mijn spaceship en astroids maken gebruik van inheritance omdat zij het gameObject.ts bestand allebei gebruiken. Zo word er geen dubbele code geschreven in beide bestanden.

## Klassendiagram

![save the spaceship](https://user-images.githubusercontent.com/32699476/41508388-43bc07c6-7244-11e8-9320-c072c10f8622.png)

## Peer review

https://github.com/Sweetpurple616/PGRM04/issues/1

https://github.com/JeroenvanderRhee/game-prog/issues/1

## Extra uitdaging

Audio via de Howler.js library.
