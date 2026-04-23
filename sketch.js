function setup() {
createCanvas(800, 800);
}

function draw() {
background("#78BE27");

let cx = 400;
let cy = 400;

fill("#2196F3");
circle(cx, cy, 600); // rosto

// olhos
let olhoEsqX = cx - 100;
let olhoDirX = cx + 100;
let olhoY = cy - 100;


fill("#FFFDFD");
circle(olhoEsqX, olhoY, 160);
circle(olhoDirX, olhoY, 160);

// função pra desenhar pupila limitada
function desenhaPupila(ox, oy) {
let dx = mouseX - ox;
let dy = mouseY - oy;

let distancia = sqrt(dx * dx + dy * dy);

let limite = 15; // quanto a pupila pode se mover

if (distancia > limite) {
dx = (dx / distancia) * limite;
dy = (dy / distancia) * limite;
}

fill(0);
circle(ox + dx, oy + dy, 15);
}

desenhaPupila(olhoEsqX, olhoY);
desenhaPupila(olhoDirX, olhoY);

// nariz
fill("#12A822");
triangle(cx, cy - 20, cx - 30, cy + 20, cx + 30, cy + 20);

// boca
line(cx - 70, cy + 50, cx + 70, cy + 50);
// sobrancelhas
strokeWeight(4); // Aumenta a espessura da linha
line(cx - 160, cy - 180, cx - 60, cy - 180); // Sobrancelha esquerda (maior)
line(cx + 60, cy - 180, cx + 160, cy - 180); // Sobrancelha direita (maior e simétrica)
strokeWeight(1); // Reseta a espessura para o padrão (opcional)

}