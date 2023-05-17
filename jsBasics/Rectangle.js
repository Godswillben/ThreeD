import {Point} from "./Point.js";

class Rectangle{
    constructor(left, top, width, height){
        this.left= left;
        this.top= top;
        this.width=width;
        this.height=height
    }

    get area(){
        return this.width * this.height
    }

    move(dx, dy){
        this.left += dx;
        this.top += dy;
    }

    overlap(rect){
        const l1 = new Point(this.left, this.top)
        const r1 = new Point(this.left + this.width, this.top - this.height);

        const l2 = new Point(rect.left, rect.top);
        const r2 = new Point(rect.left + rect.width, rect.top - rect.height)

        // If one rectangle is on the right side of the other
        if(l1.x >= r2.x || l2.x >= r1.x){return false}

        // if one rectangle is below the other
        if(l1.y <= r2.y || l2.y <= r1.y){ return false }

        return true
    }

    mouseMove(evt){
        console.log(this.name);
        this.x = evt.clientX;
        this.y = evt.clientY;
    }

    showDays(){
    
    }
}