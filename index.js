buttons = document.querySelectorAll("button");
paragraphs = document.querySelectorAll("p");
btn_len = buttons.length;

for(let i=0; i < btn_len; i++){
    buttons[i].addEventListener("click", function(){
        navigator.clipboard.writeText(paragraphs[i].innerText);
        alert("Copied " + paragraphs[i].innerText);
    });
}
