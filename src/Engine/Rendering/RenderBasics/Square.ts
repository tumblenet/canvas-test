import Renderable from "./Renderable";
import Vector2 from "../../Core/Math/Vector2";

type Color = string | CanvasGradient | CanvasPattern;
export default class Square extends Renderable {
    constructor(pos:Vector2, public size:Vector2,public color:Color) {
        super(pos);
    }
    render(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(this.pos.x,this.pos.y,this.size.x,this.size.y);
    }
    init() {
        throw new Error("Method not implemented.");
    }
}