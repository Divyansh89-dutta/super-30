    const canvas=document.querySelector('#draw');
    const context=canvas.getContext('2d');
    // canvas.width=window.innerWidth;
    // canvas.height=window.innerHeight;
    context.strokeStyle='#BADA55';
    context.lineJoin='round';
    context.lineCap='round';
    context.lineWidth=10;
    // context.globalCompositeOpeartion='multiply';

    let isDrawing=false;
    let lastX=0;
    let lastY=0;
    let hue=0;
    let direction=true;

    function draw(e){
        if(!isDrawing){
            //stop the function running when we are not drawing..!
            return;
        }
        context.strokeStyle=`hsl(${hue},100%,50%)`;
        
        context.beginPath();
        context.moveTo(lastX,lastY);
        context.lineTo(e.offsetX,e.offsetY);
        context.stroke();
        lastX=e.offsetX;
        lastY=e.offsetY;

        hue++;
        if(hue>=360){
            hue=0;
        }

        if(context.lineWidth>=100||context.lineWidth<=1){
            direction=!direction;
        }
        if(direction){
            context.lineWidth++;
        }
        else{
            context.lineWidth--;
        }
    }

    canvas.addEventListener("mousemove",draw);
    canvas.addEventListener("mousedown",(e)=>{
            lastX=e.offsetX;
            lastY=e.offsetY;
            isDrawing=true;
        } 
    );
    canvas.addEventListener("onmouceenter",(e)=>{
        lastX=e.offsetX;
        lastY=e.offsetY;
        isDrawing=true;
    } 
);
        
    canvas.addEventListener("mouseup",()=> isDrawing=false);
    canvas.addEventListener("mouseout",()=> isDrawing=false);
    
    //Reset Button functionality
    const resetBtn=document.querySelector('#reset');
    resetBtn.addEventListener("click",(e)=>{
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    //Download Button functionality
    const downloadBtn=document.querySelector('#download');
    downloadBtn.addEventListener("click",(e)=>{
        // Convert our canvas to a data URL
        let canvasUrl = canvas.toDataURL('image/jpeg');//for png pass parameter as "image/png"
        // Create an anchor, and set the href value to our data URL
        const createEl = document.createElement('a');
        createEl.href = canvasUrl;

        // This is the name of our downloaded file
        createEl.download = "download-this-canvas";

        // Click the download button, causing a download, and then remove it
        createEl.click();
        createEl.remove();
    });

    //Download as pdf

    document.querySelector('#pdf').addEventListener("click",(e)=>{
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG',0,0);
        pdf.save("download.pdf");
    });

    var flag=false;
   
    var fileInput = document.getElementById('file');

    // fileInput.addEventListener("change",function(e){
       
     
    //     var filePath = fileInput.value;
    
    //     // Allowing file type
    //     var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        
    //     if (!allowedExtensions.exec(filePath)) {
    //         alert('Invalid file type');
    //         fileInput.value = '';
    //         return false;
    //     }
    //     else
    //     {
        
    //         // Image preview
    //         if (fileInput.files && fileInput.files[0]) {
    //             var reader = new FileReader();
    //             reader.onload = function(e) {
    //                 document.getElementById('imagePreview').innerHTML ='<img id="one" src="' + e.target.result+ '"/>';
    //             };
    //             reader.readAsDataURL(fileInput.files[0]);
    //             flag=true;
    //         }
           
    //     }
    // });

    // if(flag===true){
    //     var img1 = document.getElementById("one");
    //     console.log(img1);
    //     context.drawImage(img1, 0, 0,50,50);
    // }
    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        // Event listener to handle when the image is loaded
        reader.addEventListener('load', function () {
            const image = new Image();

            // Event listener to handle when the image is fully loaded
            image.addEventListener('load', function () {
                // Draw the image on the canvas
                ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            });

            // Set the source of the image to the loaded data
            image.src = reader.result;
        });

        // Read the image file as a data URL
        reader.readAsDataURL(file);
    });