window.addEventListener("load", function () {
    //any code inside of this function will execute after the window loads which is all of the code
    //alert("I just created this popup");
    //now that we have loaded the window, we can select an individual html element and interact with it
    //i created a variable for what I want to the elements to do
    let redHoverText = document.getElementById("redHoverText");
    redHoverText.style.color = "orange"; //a way to hard set; once you load the window, then the text already becomes orange. this happens before the event listener 
    // console.log(redHoverText);
    // redHoverText.addEventListener("mouseover", function(){
    //redHoverText.addEventListener("click", function () {
    redHoverText.addEventListener("mouseout", function () {
        //console.log("You just hovered over that p tag")
        //console.log(redHoverText.style);
        redHoverText.style.color = "red";
        //what if we also want the text inside this p tag to change?
        //basically replace the original text with a new string when I click on it
        redHoverText.innerHTML = "**"
    });
})