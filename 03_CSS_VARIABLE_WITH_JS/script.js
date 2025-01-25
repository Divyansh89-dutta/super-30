const inputs=document.querySelectorAll(".controls input");

console.log(inputs);

function handleUpdate(){
   
    const suffix=this.dataset.sizing || '';
    
    let root=document.documentElement;
    console.log(this.name,this.value,suffix);
    root.style.setProperty(`--${this.name}`,this.value+suffix);
}

inputs.forEach(input=>{
    input.addEventListener("change",handleUpdate);
});


inputs.forEach(input=>{
    input.addEventListener("musemove",handleUpdate);
});