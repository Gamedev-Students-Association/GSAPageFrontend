export async function loadBackground(VertexShader, FragmentShader){
    const background = document.querySelector("#background");
    const backgroundOpenGLContext = background.getContext("webgl");
    
    if(backgroundOpenGLContext === null || arguments.length === 0){
        const pageBody = document.body;
        pageBody.style.backgrounColor = "rgb(46,47,51)";
        pageBody.style.backgroundImage = 'url("images/GSA_banner.jpg")';
        pageBody.style.backgroundRepeat = "repeat";
        pageBody.style.backgroundPosition = "top center";
        pageBody.style.color = "white";
        pageBody.style.margin = "0";

        return;
    }
//    background.style.heigth = "1000px";
    
    
    backgroundOpenGLContext.clearColor(1.0, 1.0, 1.0, 1.0);
    backgroundOpenGLContext.clear(backgroundOpenGLContext.COLOR_BUFFER_BIT);
    
    const backgroundBuffer = backgroundOpenGLContext.createBuffer();
    backgroundOpenGLContext.bindBuffer(backgroundOpenGLContext.ARRAY_BUFFER, backgroundBuffer);
    
    const screenVertices = new Float32Array(8);
    screenVertices[0] = -1;
    screenVertices[1] = 1;
    screenVertices[2] = 1;
    screenVertices[3] = 1;
    screenVertices[4] = 1;
    screenVertices[5] = -1;
    screenVertices[6] = -1;
    screenVertices[7] = -1;
    
    backgroundOpenGLContext.bufferData(backgroundOpenGLContext.ARRAY_BUFFER, screenVertices.length * screenVertices.BYTES_PER_ELEMENT, backgroundOpenGLContext.STATIC_DRAW);
    backgroundOpenGLContext.bufferData(backgroundOpenGLContext.ARRAY_BUFFER, screenVertices, backgroundOpenGLContext.STATIC_DRAW);
    
    const backgroundVertexShader = backgroundOpenGLContext.createShader(backgroundOpenGLContext.VERTEX_SHADER);
    backgroundOpenGLContext.shaderSource(backgroundVertexShader, VertexShader);
    backgroundOpenGLContext.compileShader(backgroundVertexShader);
    
    const backgroundFragmentShader = backgroundOpenGLContext.createShader(backgroundOpenGLContext.FRAGMENT_SHADER);
    backgroundOpenGLContext.shaderSource(backgroundFragmentShader, FragmentShader);
    backgroundOpenGLContext.compileShader(backgroundFragmentShader);
    
    const backgroundProgram = backgroundOpenGLContext.createProgram();
    
    backgroundOpenGLContext.attachShader(backgroundProgram, backgroundVertexShader);
    backgroundOpenGLContext.attachShader(backgroundProgram, backgroundFragmentShader);
    
    backgroundOpenGLContext.linkProgram(backgroundProgram);
    backgroundOpenGLContext.useProgram(backgroundProgram);
    
    let OpenGLExposedVariables = new Object;
    OpenGLExposedVariables['attributes'] = {};
    OpenGLExposedVariables['uniforms'] = {};
    
    let lineWords;
    const vertexShaderLines = VertexShader.split('\n');
    for(let line = 0; line < vertexShaderLines.length; ++line){
        lineWords = vertexShaderLines[line].split(' ');
        if(lineWords[0] === 'attribute'){
            OpenGLExposedVariables['attributes'][lineWords[2].slice(0,-1)] =  backgroundOpenGLContext.getAttribLocation(backgroundProgram, lineWords[2].slice(0,-1));
        }
        if(lineWords[0] === 'uniform'){
            OpenGLExposedVariables['uniforms'][lineWords[2].slice(0,-1)] =  backgroundOpenGLContext.getAttribLocation(backgroundProgram, lineWords[2].slice(0,-1));
        }
    }
    

    const fragmentShaderLines = FragmentShader.split('\n');
    for(let line = 0; line < fragmentShaderLines.length; ++line){
        lineWords = fragmentShaderLines[line].split(' ');
        if(lineWords[0] === 'attribute'){
            OpenGLExposedVariables['attributes'][lineWords[2].slice(0,-1)] =  backgroundOpenGLContext.getAttribLocation(backgroundProgram, lineWords[2].slice(0,-1));
        }
        if(lineWords[0] === 'uniform'){
            OpenGLExposedVariables['uniforms'][lineWords[2].slice(0,-1)] =  backgroundOpenGLContext.getAttribLocation(backgroundProgram, lineWords[2].slice(0,-1));
        }
    }
    
    console.log(OpenGLExposedVariables);
}