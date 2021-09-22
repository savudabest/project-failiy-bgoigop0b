var names=[
    "2. My Father (dud)",
    "3. my mother (mum)",
    "4. my brothers (bro)"
];
var images=[
    "papa.jpg",
    "mama.jpg",
    "brabra.png"
];
var i=0;
function family(){
    i++;
    if(i==4){
        i=0;
    }
    document.getElementById("one").innerHTML=names[i];
    document.getElementById("family_img").src=images[i];
    }
