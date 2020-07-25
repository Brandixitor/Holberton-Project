document.addEventListener("DOMContentLoaded", function(event) {

    var viewportWidth;
    var heightArticle;
    var mainContent;

    function heightContent() {
        viewportWidth = window.innerWidth;
        mainContent=document.getElementById("main");

        if (viewportWidth > 800) {
            var article=document.getElementById("article");
            heightArticle=article.offsetHeight+650;

            mainContent.style.height=heightArticle+"px";
        } else{
            mainContent.style.height="fit-content"
        };
    };

    heightContent();
    
    window.addEventListener("resize", function (){
        heightContent();
    });   



    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        if (thumbnailElement.className == "image_large") {
            thumbnailElement.title="Ver imagen completa"
            thumbnailElement.className = "small";
        } else{
            thumbnailElement.title="Volver al tamaÃ±o normal"
            thumbnailElement.className = "image_large";
        };
    });

    
    
    
    
    var i;
    for (i = 0; i < imageList.length; i++) {
        imageList[i].addEventListener("mouseover", function(){
            imageList[i].id="smart_thumbnail"
            thumbnailElement = document.getElementById("smart_thumbnail");
            thumbnailElement.addEventListener("click", function() {
                if (thumbnailElement.className == "") {
                    thumbnailElement.className = "small";
                } else{
                    thumbnailElement.className = "";
                };
            });
        });
    };

    

  

});