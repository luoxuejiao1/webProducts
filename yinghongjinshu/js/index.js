{
    //二级导航
    let navUl = document.getElementById("navUl");
    let lis = navUl.children;
    for( let i = 0 ; i <= lis.length-1 ; i++ ){
        lis[i].addEventListener("mouseenter", function( event ){
            let nowTar = event.currentTarget;
            let nowUl = nowTar.children[1];
            if( !nowUl ){
                return false;
            }
            nowUl.classList.add("subnav");
        });

        lis[i].addEventListener("mouseleave", function( event ){
            let nowTar = event.currentTarget;
            let nowUl = nowTar.children[1];
            if( !nowUl ){
                return false;
            }
            nowUl.classList.remove("subnav");
        })
    }
}