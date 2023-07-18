// Eisdealer-Simulator
// Anna-Lena Jörger, 269432, MKB4
// In Zusammenarbeit mit Julia Mamani, Evelin Sinner, Penelope Vogel

namespace EisdieleSimulator{

    // Objekt mit Position, welches selektiert werden kann
    export abstract class Entity{
        // Objekt hat eine Position, die sich aus den Werten initX und initY (im constructor) ergibt
        public pos: Vector;
        // Die Position ist nicht selektiert
        public selected: boolean = false;

        // // Konstruktor nimmt x- und y-Werte von außen entgegen
        constructor(initX: number, initY: number) {
            // Position wird durch initX und initY erzeugt
            this.pos = new Vector(initX, initY);
        }

    }
}
