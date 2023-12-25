//The root page contains common items between all the pages
import '../styles/root.css';
import '../styles/home.css';

//This function makes all the page contents then assigns it to the inputted parent
export default function assignPageContents(parent){
    
    /* Container Contents */
    let container = document.createElement('div');
    container.classList.add('container');

    /* Header contents */
    let header = (()=>{
        let output = document.createElement('header');

        let h1 = document.createElement('h1');
        output.appendChild(h1);
        h1.textContent = 'Pâtisserie? Pâtisserie!';

        let nav = document.createElement('nav');
        output.appendChild(nav);

        let ul = document.createElement('ul');
        nav.appendChild(ul);

        ['Home','Menu','Contact'].forEach((item) =>{
            let temp = document.createElement('li');
            temp.classList.add(`${item.toLowerCase()}-button`);
            temp.textContent = item;
            ul.appendChild(temp);

            //TODO: Listeners for each button for custom items
        });

        return output;
    })();

    /* Content Container Items */
    let contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container');

    /* Footer Items */
    let footer = (()=>{
        let output = document.createElement('footer');

            let p1 = document.createElement('p');
            p1.classList.add('unbreakable');
            p1.textContent = 'Copyright © The Odin Project 2021';
            output.appendChild(p1);

            let t1 = document.createTextNode(String.fromCharCode(160)+"|"+String.fromCharCode(160));
            output.appendChild(t1);

            let p2 = document.createElement('p');
            output.appendChild(p2);
                p2.appendChild(document.createTextNode('Photo by'+String.fromCharCode(160)));

                let a = document.createElement('a');
                a.setAttribute('href','https://unsplash.com/@peacecreativestudio?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash');
                a.textContent = 'Peace Creative';
                p2.appendChild(a);

                p2.appendChild(document.createTextNode(String.fromCharCode(160)+'on'+String.fromCharCode(160)));

                let a2 = document.createElement('a');
                a2.setAttribute('href','https://unsplash.com/photos/a-bakery-window-with-pastries-behind-glass-CJ0XOPowbvc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash');
                a2.textContent = 'Unsplash';
                p2.appendChild(a2);

                return output;
    })();

    container.appendChild(header);
    container.appendChild(contentContainer);
    container.appendChild(footer);

    parent.appendChild(container);
}