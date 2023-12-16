
let img_c=document.getElementsByClassName("c");

let SlideIndex_c=1;

SlideShowc(SlideIndex_c);


function PlusSlidesc(n)
{
    SlideShowc(SlideIndex_c+=n);
}

function CurrentSlide(SlideIndex_c)
{
    SlideShowc(SlideIndex_c);
}

function SlideShowc(n)
{
    if(n>=img_c.length)
    {
        n=1;  
    }
    if(n<1)
    {
        n=img_c.length;
    }

    for(let i=0; i<img_c.length; i++)
    {  
        img_c[i].style.display="none";
    }

    for(let i=n; i<=n+3; i++)
    {
        img_c[i-1].style.display="inline-block";
    }
}

