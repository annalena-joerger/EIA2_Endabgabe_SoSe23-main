// Eisdealer-Simulator
// Anna-Lena Jörger, 269432, MKB4
// In Zusammenarbeit mit Julia Mamani, Evelin Sinner, Penelope Vogel

namespace EisdieleSimulator{

    // Angebot hat folgende Eigenschaften: Name, Eissorte, Sauce, Topping und Preis
    export interface Angebot{
        name: string;
        sorten: Sorte[];
        sauce: Sauce;
        topping: Topping;
        price: number;
    }

    export type Sorte = 'vanille' | 'schoko' | 'karamell' | 'pistazie' | 'erdbeer' | 'straccia' | 'zitrone'
    export type Sauce = 'karamel' | 'schokolade' | 'himbeere';
    export type Topping = 'keks' | 'sahne' | 'mms';
}


