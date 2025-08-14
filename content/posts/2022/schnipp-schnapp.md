---
date: 2022-01-01
titleImage: /images/title_images/schnipp_schnapp.png
titleImageAlt: A hedge forming the words "Schnipp Schnapp" being cut apart by hedge trimmers. The hedge trimmers are about to cut into a cartoonish bomb. Above the text there are four characters, a ghost, a squid, a fox, and a cat.
description: Schnipp Schnapp is a online multiplayer party game for up to eight players. In Schnipp Schnapp you need to cut a hedge into shape, so that the other players recognize it. But watch out, while you can always trim a hedge smaller, you can't grow it back once it is cut.
---

# Schnipp Schnapp - Online Multiplayer Party Game

2022 I wanted to challenge myself to see if my dev abilities had progressed far enough to code a real-time online multiplayer game.
In the course of 3 weeks, "Schnipp-Schnapp" was born.
A party game about cutting a hedge into shape.

![A hedge forming the words "Schnipp Schnapp" being cut apart by hedge trimmers. The hedge trimmers are about to cut into a cartoonish bomb. Above the text there are four characters, a ghost, a squid, a fox, and a cat.](/images/posts/schnipp_schnapp/Splash.png)

The premise is simple: You are given a word, a hedge, and a pair of hedge trimmers, and need to cut the hedge so that other players can see what it's supposed to be.

<!--more-->

## Gameplay Loop

But of course, it's not that simple. You can only cut from the edge of your hedge, so no cutting out shapes on the inside.
Everything you cut off, is gone.
Cut a too large part of your hedge, it will fall off, and you have little left to work with.

::image-group
![A menu with a list of players, settings to enter a custom name and choose an avatar, and several options. A deactivated button reads "Waiting for Players..."](/images/posts/schnipp_schnapp/lobby.png)
![Wood panels with several pieces of text. The top-most text reads "Round 1". Underneath, the text reads "Your Turn! Nomnom" followed by a picture of the player avatar. In the bottom a text reads: "Cut the hedge into: Snail"](/images/posts/schnipp_schnapp/your_turn.png)
![A Hedge in roughly the shape of a deer with overlay text reading "The Word was: Deer". A list of players on the left shows the players scores. In the top left a text reads: "Red Shirts Turn" "What does the Hedge look like?""](/images/posts/schnipp_schnapp/deer.png)
![Two hedges next to each other with plaques. The plaques show who cut the hedge, and what the hedge was supposed to be. One hedge is a television, and has a winning badge. The other hedge is a pencil.](/images/posts/schnipp_schnapp/garden.png)
![A podium made out of boxes labeled 1, 2 and 3. The top 3 players avatars are on the boxes, with their names above their heads. All avatars look happy and are dancing.](/images/posts/schnipp_schnapp/victory.png)
::

For those that want an extra challenge, there are optional flowers and bombs.
Flowers give you extra points, when you keep them on the hedge.
Bombs explode when cut, taking a large area with them. This can be beneficial!

You get points for each player that correctly guesses your hedge, and for quickly guessing correctly.
At the end of the game a garden presents all hedges cut, and a podium, featuring the winning players.

In addition to choosing a name, everyone get's a randomly generated avatar, which can be re-rolled any number of times in the lobby.
The avatars are generated from a set of body-shapes, mouth-shapes, eye-shapes and randomly re-colored.

## Networking

Since this is a online-multiplayer game, there's of course a lot going on below the surface here.
To minimize lag, as little data is sent over the network as possible.
For instance, The shape of the hedge is never transmitted itself.
Instead, all information about where and when a cut is preformed is being transmitted, and then the correct hedge shape is calculated by each client individually.

For crosse-player events, such as who guessed a word first, or when a game starts and ends, the main host is the source of truth.
Triggers for these events are sent to the main-host by remote procedure calls, and their results then transmitted to all clients.

Real-time information, such as the position of the shears, or the cutting itself, is managed by the player currently cutting the hedge to eliminate any lag for them.
For these events, the main-host acts as a transfer-hub, relaying the information to all other clients.

## Obvious Shape Mitigation

Since there are only a number of options to choose from for the guessing players, if these options were completely random, the choice would often be too obvious.
This is why the shapes store shape descriptors.

![A list of words being rendered in Firefox. Each line in the list has several toggle buttons which show a different shape](/images/posts/schnipp_schnapp/schnipp-schnapp-word-utility.jpg)

For example, a moon could be "crescent", and so could a banana.
A bed could be "square", and so could a TV.

To authors these shapes, I built a quick web-app in svelte, which allowed me to define words, and their shape descriptors.

The game then randomly chooses words, but highly prefers groups of words with similar shape descriptors.

## How to Play

Unfortunately the site originally hosting Schnipp-Schnapp (GOTM) went offline a while ago.
You can download a Desktop build here, which was used during testing and development, but it lacks some of the fancier features of GOTM such as invite links, and orchestrating client connections in browser.

::color-button{to="/downloads/SchnippSchnapp.win64.exe" target="\_blank"}
Download for Windows
::

::color-button{to="/downloads/SchnippSchnapp.linux.zip" target="\_blank"}
Download for Linux
::
