var images = ["IMG_0344.jpg","IMG_0345.jpg","IMG_5553.jpg"];
var names = ["Akanksha Sarma","Maitreyi Devi","Biswajit Sarma"];
var i = 0;
function update(){
    i++
    var members = 2;
    if(i>members){
        i = 0;
    }
    var updated_image = images[i];
    var updated_names = names[i];
    document.getElementById("family_member").innerHTML = updated_names;
    document.getElementById("Family_img").src = updated_image;
}