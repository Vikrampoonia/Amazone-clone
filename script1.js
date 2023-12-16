
let img_a=document.getElementsByClassName("a");
let SlideIndex_a=1;
console.log("hello 1");
SlideShowa(SlideIndex_a);

console.log("hello 2");
function PlusSlidesa(n)
{
    console.log("hello 3");
    SlideShowa(SlideIndex_a+=n);
}

function CurrentSlide(SlideIndex_a)
{
    console.log("hello 4");
    SlideShowa(SlideIndex_a);
}

function SlideShowa(n)
{
    console.log("hello 5");
    if(n>=img_a.length)
    {
        n=1;  
    }
    if(n<1)
    {
        n=img_a.length;
    }

    for(let i=0; i<img_a.length; i++)
    {  
        img_a[i].style.display="none";
    }
    for(let i=n; i<=n+3; i++)
    {
        img_a[i-1].style.display="inline-block";
    }
}

