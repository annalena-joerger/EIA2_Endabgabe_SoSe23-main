// Eisdealer-Simulator
// Anna-Lena Jörger, 269432, MKB4
// In Zusammenarbeit mit Julia Mamani, Evelin Sinner, Penelope Vogel

namespace EisdieleSimulator{

    // Objekt das x und y-Koordinate speichert
    export class Vector{
        public x: number;
        public y: number;

        // Konstruktor nimmt x- und y-Werte von außen entgegen. Daraus ergibt sich Position.
        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        // Erzeugte Distanz (z.B. Distanz zwischen Mausklick und Objekt)
        distanceTo(vec: Vector){
            return Math.sqrt(Math.pow(vec.x-this.x,2) + Math.pow(vec.y - this.y, 2));
        }
    }
}
