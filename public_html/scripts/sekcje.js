/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
import {loadBackground} from "./webgl-basic.js"

loadBackground('\
\n\attribute vec4 vPosition;\n\
\n\
void main() {\n\
            gl_Position = vPosition;\n\
        }','#ifdef GL_ES\n\
precision mediump float;\n\
#endif\n\
\n\
uniform float u_time;\n\
\n\
void main() {\n\
	gl_FragColor = vec4(0.991,0.324,1.000,1.000);\n\
}');

