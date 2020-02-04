var document = document.createElement("document");
var num = 0;

function showform(){
	let artistform = document.getElementById('add-div');
    if(artistform.style.display == "none" || artistform.style.display == ""){
        artistform.style.display = "block";
    } else {
        artistform.style.display = "none";
    }        
}

function deleteartist(inId){    
    var deleteE = document.getElementById(inId);
    deleteE.parentNode.removeChild(deleteE);
    num--;
}

function addArtist(){
    
    var Bdelete = document.createElement("button");
    Bdelete.id =  num;
    Bdelete.onclick = function(){deleteartist(Bdelete.id)};
    Bdelete.className = "delete"
    Bdelete.innerHTML = "Delete";
    
    var list = document.getElementById("list");
    var Div = document.createElement("div");
    Div.className = "container";
    Div.id = num;
   
    var details = document.createElement("div");
    details.className = "artists-profile";
    
    var newDiv = document.createElement("div");
    newDiv.className = "artist-div";

    var pic = document.createElement("img");
    
	var Des = document.createElement("p");
	
    var artist = document.createElement("h3");
    
    details.append(artist, Des);
    newDiv.append(pic, details);
    Div.append(newDiv, Bdelete);

    if((Des.innerHTML = document.getElementById("about").value) == ""){
        Des.innerHTML = "Nothing there."
    }
    
  	if ((artist.innerHTML = document.getElementById("name").value) == ""){
        artist.innerHTML = "Random Artist" + num;
    } 
	
	pic.width = 80;
    pic.src = document.getElementById("url").value;
    pic.height = 80;
  
    num++;    
    list.append(Div);
	showform();
}
