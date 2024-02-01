import { Board } from "./Board";
import { Colors } from "./Colors"
import { Figure } from "./figures/Figure";

export class Cell { 
    readonly x:number;
    readonly y:number;
    readonly color:Colors;
    figure:Figure| null;
    board:Board;
    avaliable:boolean;
    id:string // реакт ключи 

    constructor (board:Board, x:number, y:number, color:Colors,figure:Figure| null ) {
        this.x = x 
        this.y = y
        this.color = color
        this.board = board
        this.figure = figure
        this.avaliable = false
        this.id = crypto.randomUUID()
    }
}