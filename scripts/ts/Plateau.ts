class Plateau {
    constructor (xlength : number, ylength : number) {
        this.xLength = xlength;
        this.yLength = ylength;
    }

    public xLength : number;
    public yLength : number;

    public IsValidPosition(x: number, y: number) : boolean {
        if(x > this.xLength || y >  this.yLength) {
            return false;
        }
        return true;
    }
}

export {Plateau};