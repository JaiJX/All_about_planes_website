console.log("Hello Jaison, Your Script Works.")


function toggledropDown() {
    const dropcontent = document.querySelector('.dropitems');
    dropcontent.classList.toggle('show');

    //Closing menu
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropitems");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}}
console.log("Script Works")
