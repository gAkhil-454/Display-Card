let cartvalue = 0;
        let slideIndex = 1;
        let choosen = 0;
        showSlides(slideIndex);

        function plusSlides(n) {
        showSlides(slideIndex += n);
        }

        function currentSlide(n) {
        showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        }
        function currbut(n){
            let nos = document.getElementsByClassName("size");

            for(let i = 0 ; i < nos.length; i++){
                if(nos[i].classList)
                nos[i].classList.remove("selected");
            }
            nos[n-1].classList.add("selected");
            choosen = nos[n-1].innerHTML;
        }
        function increase(n){
            
            cartvalue++;
            alert("Size "+ choosen+  " Added to cart, total cart value is " + cartvalue);
        }
        function show(){
            alert("Added to whishlist");
        }