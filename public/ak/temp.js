
<!DOCTYPE HTML>
<html>
    <head>
        <style>
            body {
                margin: 0px;
                padding: 0px;
            }
            
            canvas {
                border: 1px solid #9C9898;
            }
        </style>
        <script src="http://www.html5canvastutorials.com/libraries/kinetic-v3.8.0.js">
        </script>
        <script>
            function loadImages(sources, callback){
                var images = {};
                var loadedImages = 0;
                var numImages = 0;
                for (var src in sources) {
                    numImages++;
                }
                for (var src in sources) {
                    images[src] = new Image();
                    images[src].onload = function(){
                        if (++loadedImages >= numImages) {
                            callback(images);
                        }
                    };
                    images[src].src = sources[src];
                }
            }
            
            function writeMessage(messageLayer, message){
                var context = messageLayer.getContext();
                messageLayer.clear();
                context.font = "18pt Calibri";
                context.fillStyle = "black";
                context.fillText(message, 10, 25);
            }
            
            function drawImages(images){
                var stage = new Kinetic.Stage("container", 578, 200);
                var imageLayer = new Kinetic.Layer();
                var messageLayer = new Kinetic.Layer();
                
                // darth vader
                var darthVaderImg = new Kinetic.Image({
                    image: images.darthVader,
                    x: 100,
                    y: 40,
                    width: 200,
                    height: 137
                });
                
                darthVaderImg.on("mouseover", function(){
                    writeMessage(messageLayer, "Darth Vader mouseover!");
                });
                darthVaderImg.on("mouseout", function(){
                    writeMessage(messageLayer, "Darth Vader mouseout!");
                });
                darthVaderImg.on("mousedown", function(){
                    writeMessage(messageLayer, "Darth Vader mousedown!");
                });
                darthVaderImg.on("mouseup", function(){
                    writeMessage(messageLayer, "Darth Vader mouseup!");
                });
                imageLayer.add(darthVaderImg);
                
                var yodaImg = new Kinetic.Image({
                    image: images.yoda,
                    x: 350,
                    y: 55,
                    width: 93,
                    height: 104
                });
                
                yodaImg.on("mouseover", function(){
                    writeMessage(messageLayer, "Yoda mouseover!");
                });
                yodaImg.on("mouseout", function(){
                    writeMessage(messageLayer, "Yoda mouseout!");
                });
                yodaImg.on("mousedown", function(){
                    writeMessage(messageLayer, "Yoda mousedown!");
                });
                yodaImg.on("mouseup", function(){
                    writeMessage(messageLayer, "Yoda mouseup!");
                });
                imageLayer.add(yodaImg);
                
                stage.add(imageLayer);
                stage.add(messageLayer);
            }
            
            window.onload = function(){
                var sources = {
                    darthVader: "darth-vader.jpg",
                    yoda: "yoda.jpg"
                };
                loadImages(sources, drawImages);
            };
        </script>
    </head>
    <body onmousedown="return false;">
        <div id="container">
        </div>
    </body>
</html>
