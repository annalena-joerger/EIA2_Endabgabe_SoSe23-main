"use strict";
// Eisdealer-Simulator
// Anna-Lena Jörger, 269432, MKB4
// In Zusammenarbeit mit Julia Mamani, Evelin Sinner, Penelope Vogel
var EisdieleSimulator;
(function (EisdieleSimulator) {
    // Objekt das x und y-Koordinate speichert
    class Vector {
        x;
        y;
        // Konstruktor nimmt x- und y-Werte von außen entgegen. Daraus ergibt sich Position.
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        // Erzeugte Distanz (z.B. Distanz zwischen Mausklick und Objekt)
        distanceTo(vec) {
            return Math.sqrt(Math.pow(vec.x - this.x, 2) + Math.pow(vec.y - this.y, 2));
        }
    }
    EisdieleSimulator.Vector = Vector;
})(EisdieleSimulator || (EisdieleSimulator = {}));
