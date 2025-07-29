export async function loadBackground(FragmentShader){
    
    
    if(arguments.length === 0){
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
    
    const background = document.querySelector("#background");
    const shaderLoader = new GlslCanvas(background);
    
    shaderLoader.load(FragmentShader)
}