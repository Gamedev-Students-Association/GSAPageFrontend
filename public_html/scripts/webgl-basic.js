/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

async function changeShader(){
    const pole = document.getElement("canvasTest");
    const shader = new GlslCanvas(pole);
    //fetch(server);
    
    const vertexShader = null;
    const fragmentShader = null;
    shader.load(fragmentShader, vertexShader);
}
