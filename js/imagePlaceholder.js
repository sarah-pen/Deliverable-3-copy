document.querySelectorAll("img").forEach( img => {
    console.log("runs")
    img.onerror = function() {
        this.onerror = null; // No infinite loop if default image is also missing
        this.src = 'placeholder-image.jpg';
        this.alt = "Default image";
        };     
    }
)
