/* nav */
{
    let subNav = function( { id = 'navUl' }={} ){
        this.id = id;
    };

    subNav.prototype.showSubnav = function(){
        let ul = document.getElementById( this.id );
        let lis = ul.children;
        for( let i of lis ){
            i.addEventListener("mouseenter",function(){
                let subUl = i.children[1];
                if( !subUl ){
                    return false;
                }
                subUl.style.display = "block";
            });
            i.addEventListener("mouseleave",function(){
                let subUl = i.children[1];
                if( !subUl ){
                    return false;
                }
                subUl.style.display = "none";
            });
        }
    };

    let mysubNAv = new subNav({
        id : "navUl"
    });
    mysubNAv.showSubnav();

}
/* banner */
{
    let banner = document.getElementById("banner");
    let bannerUl = document.getElementById("bannerUl");
    let ctrls = document.getElementById("ctrls");
    let lis = bannerUl.children;

    let index = 0;


    let findSiblings = function( tag ){
        let  child = tag.parentNode.children ;
        let  siblings = [] ;
        for( let i=0 ; i <= child.length - 1 ; i++){
            if(  child[i] === tag ){
                continue;
            }
            siblings.push( child[i] );
        }
        return siblings ;
    };


    let removeSiblingClass = function( tag , classN ){
        let siblings = findSiblings(tag);
        for( let i = 0 ; i <= siblings.length-1 ; i++ ){
            siblings[i].classList.remove( classN );
        }
    };

    let showPic = function( index ){

        lis[index].classList.add( "show" );
        removeSiblingClass( lis[index] , "show" );

        dots[index].classList.add("on");
        removeSiblingClass( dots[index] , "on" );
    };


    for( let i = 0; i <= lis.length-1 ; i++ ){
        let span = document.createElement("span");
        ctrls.appendChild(span);
    }
    let dots = ctrls.children;

    showPic( index );

    let goLeft = function( event ){
        index--;
        if( index < 0 ){
            index = lis.length-1;
        }
        showPic( index );
    };
    let goRight = function( event ){
        index++;
        if( index > lis.length - 1 ){
            index = 0;
        }
        showPic( index );
    };

    for( let i =0 ; i <= dots.length-1 ; i++ ){
        dots[i].addEventListener("click",function(){
            index = i;
            showPic( index );
            console.log("1")
        })
    }

    let myset = setInterval( goRight , 5000 );
    banner.addEventListener("mouseenter",function(){
        clearInterval(myset);
        console.info(1);
    });
    banner.addEventListener("mouseleave",function(){
        myset = setInterval( goRight , 5000 );
    });
}
/* 选项卡 */
{
    function Option(index){
        for(let i=1;i<=4;i++)
        {
            let cont = document.getElementById("option"+i);
            let lis = document.getElementById("yzUl").children;
            if(i===index) {
                cont.style.display="block";
                lis[i-1].classList.add("choose")
            }
            else
            {
                cont.style.display="none";
                lis[i-1].classList.remove("choose")
            }
        }
    }
}

