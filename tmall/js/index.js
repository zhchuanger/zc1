

var obtn = document.getElementById("btn-box");
var ali = obtn.getElementsByTagName("li");
var ocontent = document.getElementById("content");
var oimg = ocontent.getElementsByTagName("img");
for(var i =0;i<ali.length;i++){
    ali[i].idx = i;
    ali[i].onmouseover = function(){
        for(var j =0;j<ali.length;j++){
            ali[j].className = "";
            oimg[j].className = "";
        }
        this.className = "selected";
        oimg[this.idx].className = "active";
    }
}