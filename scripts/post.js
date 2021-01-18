function triggerEditMode(){
    var editArray = document.getElementsByClassName('editMode');
    for(var i = 0; i< editArray.length; i++){
        editArray[i].style.display = 'block';
    }
    for(var j = 0; j < document.getElementsByClassName("readMode").length; j++){
        document.getElementsByClassName("readMode")[j].style.display = 'none';
    }
    //document.getElementsByClassName()
}

var likes = 0;
function likePost(){
 likes++;
 document.getElementById("noLikes").style.display = 'none';
 document.getElementById("likes").style.display = 'block';
 document.getElementById('likesCount').innerHTML = likes;
 document.getElementById("likeText").innerHTML = 'Liked'
}


var commentArray = [];

function postComment(){
    commentArray = [];
    commentArray.push(document.getElementById("commentBox").value );
    commentArray.forEach(function(val, index) {
        document.getElementById("comments").innerHTML+= '<p>'+val+'</p>';
    });
    document.getElementById("commentBox").value = '';
}