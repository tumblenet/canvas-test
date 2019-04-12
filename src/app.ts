import RenderingEngine from './Engine/Rendering/RenderingEngine'
import Square from './Engine/Rendering/RenderBasics/Square'
import Vector2 from './Engine/Core/Math/Vector2';

var canvas = <HTMLCanvasElement>  document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var renderer = new RenderingEngine(canvas);
renderer.init();

var pos = new Vector2(10,10);
var size = new Vector2(100,100);
var color = "#ffc107"
var s = new Square(pos,size,color);

function update() {
    s.pos.x +=10;
    s.pos.y +=5;
}

function render() {
    renderer.clear();
    renderer.render(s);
}

function loop() {
    update();
    render();
    requestAnimationFrame(loop);
}

loop();