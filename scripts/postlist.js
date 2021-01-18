var deleteModalId = null;
function deletePost(){
   document.getElementById(deleteModalId).remove();
   $("#deleteConfirmationModal").modal("hide");
}

function openDeleteModal(_id)
{   
    deleteModalId = _id;
    $("#deleteConfirmationModal").modal("show");
}

function openPostDetail(){
    window.open("post.html",'_self')
}