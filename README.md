# etch-a-sketch

Etch-a-Sketch Project for Odin

## Brief

This Etch-a-Sketch project is to simulate the traditional children's toy on a webpage.
The components on the page are simple, consisting of the drawing area which is centered and buttons allowing users to create new grid area, choose random color and sketch like pencil.

## How to build this project

In order to create grid as user want, I use JS to create rows and each col in that rows. This makes a perfect square grid having same pixels on both sides. To make grid dynamically and responsively, I use Flex box.

Due to the fact that each pixel in the grid is created by JS not hard-coded in HTML, I have to add Event Listener with each of every pixels at the time it's created.

Then, the best part of this project is that it allows users to choose among three modes (black mode, random RGB mode, sketch mode. Each mode is assigned to a button on the screen.

- The New Grid will pop up an alert to ask user enter the size of grid, then display that grid with default black mode.

- The random RGB will regenerate that grid with the same size but now in random RGB mode.

- The Sketch Mode will regenerate the grid with ability of sketching like using pencil.
