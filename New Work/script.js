console.log("Hello Jaison, Your Script Works.")


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
}}

/*


import { neon } from '@neondatabase/serverless';

const sql = neon('postgresql://neondb_owner:npg_8ZhxeCOYVK2v@ep-dawn-river-ak83xlni-pooler.c-3.us-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require');

const posts = await sql('SELECT * FROM posts')



console.log("Script Done")
*/

