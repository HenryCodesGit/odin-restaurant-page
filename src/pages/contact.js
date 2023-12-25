export default function assignPageContents(parent){
    console.log(parent);

    let p = document.createElement('p');
    p.classList.add('motto');
    p.textContent= "Empty Contact";
    parent.appendChild(p);

}