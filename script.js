console.log("Your Script Works.")


function dropDown() {
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
}};


function radioClick() {
    const radio1checked = document.getElementById("radioBox1").checked;
    const radio2checked = document.getElementById("radioBox2").checked;
    console.log(radio1checked, radio2checked)


    if(radio1checked && radio2checked) {
        alert("You must choose one")
    }
    else if(radio1checked){
        alert("Try Starbucks it's Better");
    }
    else if (radio2checked) {
        alert("You know Good Coffee!");
    }
    else {
        alert("Try Coffee");
    }
}


