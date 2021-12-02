buttons = document.querySelectorAll("button");
paragraphs = document.querySelectorAll("p");
buttons_len = buttons.length;

for(let i=0; i < buttons_len; i++){
    buttons[i].addEventListener("click", function(){
        navigator.clipboard.writeText(paragraphs[i].innerText);
        alert("Color " + paragraphs[i].innerText + " has been added to clipboard!");
    });
}
