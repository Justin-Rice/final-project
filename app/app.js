import * as MODEL from "../model/model.js"

function init(){
    // let currentHeroImage = "home";
    

$("nav a").click(function(e){
    let btnId = this.id
    let contentID = btnId + "Content";

    
if(contentID === "homeContent"){
    MODEL.getPageContent(contentID);
    $('.hero').css("display", "block")
    $(".nav-black").css("display", "none")

    $(".bottom-flex a").click(function(event){
        $('.hero').css("display", "none")
        $(".nav-black").css("display", "block")
        
        let homebtnId = this.id
        let homeContentID = homebtnId + "Content";
       // console.log(homeContentID);
        MODEL.getPageContent(homeContentID);
    
        });

   
    
    
    //$(".links-black").css("display", "block"
}else if( contentID === "galleryContent"){
    MODEL.getPageContent(contentID);
    $('.hero').css("display", "none")
    $(".nav-black").css("display", "block")

    $(".colors a").click(function(event){

    let gallerybtnId = this.id
    let galleryContentID = gallerybtnId + "Content";
    console.log("pain");
    MODEL.getPageContent(galleryContentID);

    });


}else if(contentID === "blogContent"){
    MODEL.getPageContent(contentID);
    $('.hero').css("display", "none")
    $(".nav-black").css("display", "block")

    $(".blogs a").click(function(event){

        let blogbtnId = this.id
        let blogContentID = blogbtnId + "Content";
        console.log("work");
        MODEL.getPageContent(blogContentID);
    
        });
    
    
   }else{
    
    MODEL.getPageContent(contentID);

    $('.hero').css("display", "none")
    $(".nav-black").css("display", "block")
}

    console.log("plz");
});





}
function blog(){
    
            $("#app .bottom-flex a").click(function(event){
                $('.hero').css("display", "none")
                $(".nav-black").css("display", "block")
        
                let homebtnId = this.id
                let homeContentID = homebtnId + "Content";
               // console.log(homeContentID);
                MODEL.getPageContent(homeContentID);
            
                });

                $(".hero a").click(function(event){
                    $('.hero').css("display", "none")
                    $(".nav-black").css("display", "block")
            
                    let homebtnId = this.id
                    let homeContentID = homebtnId + "Content";
                   // console.log(homeContentID);
                    MODEL.getPageContent(homeContentID);
                
                    });

        



}



$(document).ready(function (){
    
    init();
    MODEL.getPageContent("homeContent");
    blog();

});

