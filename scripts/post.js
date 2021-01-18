// likes count
var likes = 0;
//comments array
var commentArray = [];


/**
 * THis method is invoked when edit button is clicked
 */
function triggerEditMode(){

    document.getElementById("contentEditableTextArea").value = document.getElementById("contentText").innerHTML;
    document.getElementById("titleEditableInput").value = document.getElementById("postHeadingText").innerHTML;
    var editArray = document.getElementsByClassName('editMode');
    for(var i = 0; i< editArray.length; i++){
        editArray[i].style.display = 'block';
    }
    for(var j = 0; j < document.getElementsByClassName("readMode").length; j++){
        document.getElementsByClassName("readMode")[j].style.display = 'none';
    }
}

/**
 * This method is invoked when user clicks on like button;
 * This increments initial like counter which is at first set to 0
 * This also toggles the display of text when someone likes a post
 */

function likePost(){
 likes++;
 document.getElementById("noLikes").style.display = 'none';
 document.getElementById("likes").style.display = 'block';
 document.getElementById('likesCount').innerHTML = likes;
 document.getElementById("likeText").innerHTML = 'Liked';
}

/**
 * This method is used to post a comment from the input field and display that in the all comments section
 */

function postComment(){

    if(document.getElementById("commentBox").value === ''){
        alert("Please enter any comment");
        return;
    }
    commentArray = [];
    commentArray.push(document.getElementById("commentBox").value);
    commentArray.forEach(function(val, index) {
        document.getElementById("comments").innerHTML+= '<p>'+val+'</p>';
    });
    document.getElementById("commentBox").value = '';
    document.getElementById("allComments").style.display = 'block';
}


/**
 * This function handles save logic when someone updated the content and heading.
 */

function savePost(){
    document.getElementById("contentText").innerHTML =   '<p class="updatedText"><strong >Updated: </strong></p>' + document.getElementById("contentEditableTextArea").value;
    document.getElementById("postHeadingText").innerHTML = '<strong class="updatedText">Updated: </strong>' + document.getElementById("titleEditableInput").value;

    var editArray = document.getElementsByClassName('editMode');
    for(var i = 0; i< editArray.length; i++){
        editArray[i].style.display = 'none';
    }
    for(var j = 0; j < document.getElementsByClassName("readMode").length; j++){
        document.getElementsByClassName("readMode")[j].style.display = 'block';
    }

    // remove UPDATED text after 2 secs so that it does appear next time when we edit
    setTimeout(function(){
        var htmlCollectionLength = document.getElementsByClassName('updatedText').length;
        for(var k =0; k <htmlCollectionLength; k++)
        {
            document.getElementsByClassName('updatedText')[0].remove();
        }
        
    }, 2000)
}