import Renderable from './RenderBasics/Renderable'

type CanvasElement = HTMLElement|HTMLCanvasElement;
export default class RenderingEngine {
    private context:CanvasRenderingContext2D;
    private canvas:HTMLCanvasElement;
    constructor(canvas:CanvasElement) {
        this.canvas = <HTMLCanvasElement> canvas;
    }

    init() {
        this.context = this.canvas.getContext('2d');
        this.clear();
    }

    clear() {
        this.context.fillStyle = '#000000';
        this.context.fillRect(0,0,window.innerWidth,window.innerHeight);
    }

    render(renderble:Renderable){
        renderble.render(this.context);
    }
}