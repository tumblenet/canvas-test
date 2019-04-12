import BasicObject from "../../Core/BasicObject";
import Vector2 from "../../Core/Math/Vector2";

export default abstract class Renderable extends BasicObject {
    constructor(public pos:Vector2) {
        super();
    }
    update(DeltaTime: number) {
    }
    abstract render(context:CanvasRenderingContext2D);
}