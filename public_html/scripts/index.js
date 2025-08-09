/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

import {loadBackground} from "./webgl-basic.js"

loadBackground('#ifdef GL_ES\n\
precision mediump float;\n\
#endif\n\
\n\
uniform vec2 u_resolution;\n\
uniform vec2 u_mouse;\n\
uniform float u_time;\n\
\n\
void main() {\n\
    vec2 st = gl_FragCoord.xy/u_resolution.xy;\n\
    st.x *= u_resolution.x/u_resolution.y;\n\
\n\
    vec3 color = vec3(0.);\n\
    color = vec3(st.x,st.y,abs(sin(u_time)));\n\
\n\
    gl_FragColor = vec4(color,1.0);\n\
}');

