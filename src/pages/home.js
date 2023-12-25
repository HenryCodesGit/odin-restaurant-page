import '../styles/home.css';
import Profile from '../img/chef.png'

export default function assignPageContents(parent){
    console.log(parent);
    
    let img = document.createElement('img');
    img.classList.add('profile');
    img.src = Profile;
    parent.appendChild(img);

    let p = document.createElement('p');
    p.classList.add('motto');
    p.textContent= "The secret to our delicious food is butter. A ridiculous amount of it too. At least seven knobs in every pastry.";
    parent.appendChild(p);

}