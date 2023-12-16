
let img_b=document.getElementsByClassName("b");

let SlideIndex_b=1;

SlideShowb(SlideIndex_b);


function PlusSlidesb(n)
{
    SlideShowb(SlideIndex_b+=n);
}

function CurrentSlide(SlideIndex_b)
{
    SlideShowb(SlideIndex_b);
}

function SlideShowb(n)
{
    if(n>=img_b.length)
    {
        n=1;  
    }
    if(n<1)
    {
        n=img_b.length;
    }

    for(let i=0; i<img_b.length; i++)
    {  
        img_b[i].style.display="none";
    }

    for(let i=n; i<=n+3; i++)
    {
        img_b[i-1].style.display="inline-block";
    }
}

