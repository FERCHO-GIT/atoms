window.Questions = [
    { id: '1', desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quasi error beatae. Quod fugiat adipisci velit in earum voluptatem quia tempora enim! Consequatur suscipit enim est adipisci quos dolores repudiandae!' },
    { id: '2', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in dignissimos perspiciatis facere tenetur, dicta pariatur adipisci consequatur eaque quae sunt inventore laborum iure nulla iste architecto. Dicta, mollitia voluptatum!' },
    { id: '3', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam dolor aliquid dolorem ducimus error rerum pariatur sit, libero eius magnam ea rem corrupti itaque. Earum alias et veritatis repudiandae?' },
    { id: '4', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in dignissimos perspiciatis facere tenetur, dicta pariatur adipisci consequatur eaque quae sunt inventore laborum iure nulla iste architecto. Dicta, mollitia voluptatum!' },
    { id: '5', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam dolor aliquid dolorem ducimus error rerum pariatur sit, libero eius magnam ea rem corrupti itaque. Earum alias et veritatis repudiandae?' },
    { id: '6', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in dignissimos perspiciatis facere tenetur, dicta pariatur adipisci consequatur eaque quae sunt inventore laborum iure nulla iste architecto. Dicta, mollitia voluptatum!' }
];

window.onload = lunch;

function lunch() {
    var tabs = ['js-tab', 'css-tab', 'sec-tab'];
    document.getElementById('css-panel').style.display = 'none';
    document.getElementById('sec-panel').style.display = 'none';

    for (let i = 0; i < tabs.length; i++) {
        document.getElementById(tabs[i]).addEventListener('click', clickedTab, false);
    }
    
    function clickedTab(event) {
        event.preventDefault();
        let idTab = event.target.id;

        switch (idTab) {
            case 'js-tab':
                changedTab(idTab);
                document.getElementById(tabs[1]).classList.remove('active-tab');
                document.getElementById(tabs[2]).classList.remove('active-tab');
                document.getElementById('js-panel').style.display = 'block';
                document.getElementById('css-panel').style.display = 'none';
                document.getElementById('sec-panel').style.display = 'none';
                break;
            case 'css-tab':
                changedTab(idTab);
                document.getElementById(tabs[0]).classList.remove('active-tab');
                document.getElementById(tabs[2]).classList.remove('active-tab');
                document.getElementById('js-panel').style.display = 'none';
                document.getElementById('css-panel').style.display = 'block';
                document.getElementById('sec-panel').style.display = 'none';
                break;
            case 'sec-tab':
                changedTab(idTab);
                document.getElementById(tabs[0]).classList.remove('active-tab');
                document.getElementById(tabs[1]).classList.remove('active-tab');
                document.getElementById('js-panel').style.display = 'none';
                document.getElementById('css-panel').style.display = 'none';
                document.getElementById('sec-panel').style.display = 'block';
                break;
        }

        function changedTab(id) {
            document.getElementById(id).classList.add('active-tab');
        }
    }

    document.getElementById('questions-tab').addEventListener('click', function (e) {
        e.preventDefault();
        buildQuestion(e.target);
    }, false);

    function buildQuestion(element) {
        let countElements = element.parentNode.children.length;
        let newElement = document.createElement('div');
        let num = parseInt(element.id);
        let text = null;
        
        if (countElements == 1 && element.tagName == 'A') {
            text = window.Questions[num - 1].desc;
            newElement.appendChild(document.createTextNode(text));
            element.parentNode.appendChild(newElement);
            element.style.backgroundColor = 'rgb(102, 200, 219)';
            element.classList.add('arrow');
            element.style.color = 'rgb(255, 255, 255)';
        } else if (countElements == 2 && element.tagName == 'A') {
            element.parentNode.removeChild(element.parentNode.lastChild);
            element.style.backgroundColor = 'rgb(255, 255, 255)';
            element.classList.remove('arrow');
            element.style.color = 'rgb(29, 29, 29)';
        }
    }
}