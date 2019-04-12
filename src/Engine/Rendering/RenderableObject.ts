import BasicObject from '../Core/BasicObject';
import Vector2 from '../Core/Math/Vector2';
import RenderingEngine from './RenderingEngine';

export default abstract class RenderableObject extends BasicObject {
    public pos:Vector2;
    abstract render(renderer:RenderingEngine);
}