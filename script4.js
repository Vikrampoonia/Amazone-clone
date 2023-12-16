let imgd=document.getElementsByClassName("layer1-1-box1");
let indexd=1;
console.log("hello 1");
Slideshowd(indexd);
function CurrentSlided(indexd)
{
    Slideshowd(indexd);
}
console.log("hello 2");
function pluslidesd(n)
{
    indexd=indexd+n;
    Slideshowd(indexd);
}

console.log("hello 3");

function Slideshowd(n)
{
    if(n>imgd.length)
    {
        n=1;
    }
    if(n<1)
    {
        n=imgd.length;
    }
    console.log("hello 4");
    for(let i=0; i<imgd.length; i++)
    {
        imgd[i].style.display="none";
    }

    imgd[n-1].style.display="block";
    console.log("index: ",n);
}