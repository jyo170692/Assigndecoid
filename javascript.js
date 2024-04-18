const a =document.querySelectorAll('.ip')
const sp =document.querySelectorAll('sp')
const bt = document.querySelectorAll('.bt')
const bte = document.querySelectorAll('.bte')
const bti =   document.querySelectorAll('.bti')
const cen =document.querySelectorAll('.cen')
const cen2 =document.querySelector('#cen2')
a.forEach((e)=>
{
    e.addEventListener("click",()=>
    {
       
         e.nextElementSibling.style.opacity="0"
        
    })
})
sp.forEach((e)=>
{
    e.addEventListener("click",()=>
    {
        
        e.style.opacity="0"
        
    })
})


cen.forEach((e)=>
{
 
    e.addEventListener("mouseover",()=>
    {
    e.style.border="3px solid blue"

    })
})


cen.forEach((e)=>
{
    e.addEventListener("mouseout",()=>
{
    e.style.border="3px solid white"
    
})
})

bt.forEach((e)=>
{
    e.addEventListener("mouseover",()=>
{
    e.style.border="3px solid blue"
    
})
})

bt.forEach((e)=>
{
    e.addEventListener("mouseout",()=>
{
    e.style.border="0"
    
})
})
bte.forEach((e)=>
{
    e.addEventListener("mouseover",()=>
{
    e.style.border="3px solid blue"
    
})
})
bte.forEach((e)=>
{
    e.addEventListener("mouseout",()=>
{
    e.style.border="1px solid black"
    
})
})
bti.forEach((e)=>
{
    e.addEventListener("mouseover",()=>
{
    e.style.border="3px solid blue"
    e.style.borderRadius = "12px"
})
})
bti.forEach((e)=>
{
    e.addEventListener("mouseout",()=>
{
    e.style.border="3px solid white"
    e.style.borderRadius = "12px"
})
})