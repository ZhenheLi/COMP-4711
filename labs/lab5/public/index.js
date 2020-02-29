
var List = [];

function send(){
  fetch('/add',{
    method: 'POST',
    body: JSON.stringify(List),
    header: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
  })
}

function get(){
  fetch('/get')
  .then((res)=>{res.json()
    .then(function (data){
      if (data.length > 0){
        List = data;
        console.log(List.length + " after reading the file");
        load();
      }
    })
  })
}

function showform() {
    let artistForm = document.getElementById("add-div");
    if (artistForm.style.display === "block") {
        artistForm.style.display = "none";
    } else {
        artistForm.style.display = "block";
    }
}

function search() {
     let i, searchInput, filter, list, li, Card, Name;
    searchInput = document.getElementById("search");
    filter = searchInput.value.toUpperCase();
    list = document.getElementById("list");
    li = list.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        Card = li[i].getElementsByClassName("artist-Name")[0];
        Name = Card.innerText.toUpperCase();
        if (Name.indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function addArtist() {
    // let list = document.getElementById("list");

    let name = document.getElementById("name").value;
    let about = document.getElementById("about").value;
    let url = document.getElementById("url").value;

    let artist = [name, about, url];
    // let dateString = new Date();
    List.push(artist);
    console.log(List.length + "add artist");
    // localStorage.setItem(dateString.toString(), JSON.stringify(artist));
    // artist = makediv(artist);
    send();
    get();
    // list.appendChild(artist);
    name.text =  " ";
    about.text = " ";
    url.text = " ";
    showform();
}

function loadArtists() {
    // let list = document.getElementById("list");
    // let storageSize = localStorage.length;
    // for (let i = 0; i < storageSize; i++) {
    //     let Key = localStorage.key(i);
    //     let data = JSON.parse(localStorage.getItem(Key));
    //     let div = makediv(data);
    //     list.appendChild(div);

    // }
    var outerDiv = document.getElementById("list").childElementCount;
      var aList = document.getElementById("list");
      console.log(outerDiv);
      for(i = 0; i < outerDiv; i++){
        aList.children[i].style.display = "none";
      }

      for(i = 0; i < List.length; i++){
      var plist = document.getElementById("list");
      var detail = document.createElement("div");
      var detailText = document.createElement("div");
      var name = document.createElement("b");
      var about = document.createElement("p");
      var img = document.createElement("img");

      var deleteDiv = document.createElement("div");
      var deleteBtn = document.createElement("button");

      var cArtist = List[i];

      var getName = cArtist.name;
      var getAbout = cArtist.about;
      var getUrl = cArtist.url;

      detailText.setAttribute("class","div");
      detail.setAttribute("class","innerdiv");
      detail.setAttribute("id",getName);
      img.setAttribute("src",getUrl);
      deleteBtn.setAttribute("class", "deleteBtn");
      deleteDiv.setAttribute("onclick", "deleteDiv(this)");
      deleteDiv.setAttribute("class", "deleteDiv");
      name.textContent = getName;
      about.textContent = getAbout;
      deleteBtn.textContent = "delete";

      detailText.append(name);
      detailText.append(about);

      detail.append(img);
      detail.append(detailText);
      detail.append(deleteDiv);


      plist.append(detail);
      }
    
}

// function makediv(info) {
//     let li = document.createElement("li");

//     let newArtistDiv = document.createElement("div");
//     newArtistDiv.className = "div";
//     li.appendChild(newArtistDiv);

//     let innerDiv = document.createElement("div");
//     innerDiv.className = "innerdiv";
//     newArtistDiv.appendChild(innerDiv);

//     let imgDiv = document.createElement("div");
//     imgDiv.className = "img";
//     innerDiv.appendChild(imgDiv);

//     let imgElement = document.createElement("img");
//     imgElement.src = info[2];
//     imgDiv.appendChild(imgElement);

//     let profileDiv = document.createElement("div");
//     profileDiv.className = "artists-profile";
//     innerDiv.appendChild(profileDiv);

//     let nameDiv = document.createElement("div");
//     nameDiv.className = "artist-Name";
//     profileDiv.appendChild(nameDiv);

//     let nameElement = document.createElement("b");
//     nameElement.innerText = info[0];
//     nameDiv.appendChild(nameElement);

//     let bioDiv = document.createElement("div");
//     bioDiv.className = "artist-Bio";
//     profileDiv.appendChild(bioDiv);

//     let bioElement = document.createElement("p");
//     bioElement.innerText = info[1];
//     bioDiv.appendChild(bioElement);

//     let deleteDiv = document.createElement("div");
//     deleteDiv.className = "delete";
//     let deleteBtn = document.createElement("button");
//     deleteBtn.innerText = "Delete";
//     deleteBtn.className = "deleteBtn";
//     deleteBtn.onclick = function() {
//         deleteBtn.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(li);
//     };
    
//     deleteDiv.appendChild(deleteBtn);
//     innerDiv.appendChild(deleteDiv);

//     return li;
// }



// loadArtists();













































