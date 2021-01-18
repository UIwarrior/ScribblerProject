/**
 * This method redirects to postlist page
 */

function redirectAllPosts (){
    window.open("html/postslist.html",'_self')
}
/**
 * This function closes sign in and open sign up modal
 */

function closeSignInOpenSignUp(){
    $("#signInModal").modal("hide");
    $("#signUpModal").modal("show");
}