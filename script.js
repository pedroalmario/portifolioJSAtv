document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    document.querySelectorAll(".img-link").forEach(contactLink => {
        contactLink.addEventListener("click", function() {
            const responseMessage = document.getElementById("responseMessage");
            responseMessage.innerText = "Link de contato acessado com sucesso!";
            responseMessage.style.color = "green";

            setTimeout(() => {
                responseMessage.innerText = ""; 
            }, 3000);
        });
    });


    const backToTopButton = document.createElement("button");
    backToTopButton.innerText = "⬆";
    backToTopButton.id = "backToTop";
    backToTopButton.style.display = "none";
    document.body.appendChild(backToTopButton);


    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });


    backToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
