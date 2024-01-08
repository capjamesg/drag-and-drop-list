
class DraggableList extends HTMLElement {
    constructor () {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
        const ul = this.querySelector('ol') || this.querySelector('ul');

        for (let li of ul.children) {
            li.setAttribute('draggable', true);
            li.addEventListener('dragstart', this.start);
            li.addEventListener('drop', this.drop.bind(this));
            li.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.target.style.borderBottom = 'solid 1px darkgrey';
            });
            li.addEventListener('dragleave', (e) => {
                e.target.style.borderBottom = '';
            });
            li.setAttribute('id', li.innerHTML.toLowerCase());
        }

        this._shadowRoot.appendChild(ul);

        const style = document.createElement('style');
        style.textContent = `
            li {
                cursor: move;
            }
        `;
        this._shadowRoot.appendChild(style);

        if (document.getElementById('draggable-list')) {
            const template = document.getElementById('draggable-list');
            this._shadowRoot.appendChild(template.content.cloneNode(true));
        }

        this.checkForCorrectOrder = this.checkForCorrectOrder.bind(this);
    }

    start (e) {
        e.dataTransfer.setData('text/plain', e.target.innerHTML);
    }

    drop (e) {
        e.preventDefault();
        const region = e.target;
        if (region === region.parentNode.firstElementChild && e.offsetY < region.offsetHeight / 2) {
            region.parentNode.insertBefore(e.target, region.parentNode.firstElementChild);
            return;
        }
        const data = e.dataTransfer.getData('text/plain');
        const newItem = document.createElement('li');
        newItem.innerHTML = data;
        region.parentNode.insertBefore(newItem, region.nextSibling);
        region.style.borderBottom = '';
        const dataId = data.toLowerCase();
        this._shadowRoot.getElementById(dataId).remove();
        newItem.setAttribute('draggable', true);
        newItem.addEventListener('dragstart', this.start);
        newItem.addEventListener('drop', this.drop.bind(this));
        newItem.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.target.style.borderBottom = 'solid 1px black';
        });
        newItem.addEventListener('dragleave', (e) => {
            e.target.style.borderBottom = '';
        });
        newItem.setAttribute('id', dataId);
    }

    checkForCorrectOrder () {
        console.log('checking', this);
        const ul = this._shadowRoot.querySelector('ol') || this._shadowRoot.querySelector('ul');
        const list = [];
        for (let li of ul.children) {
            list.push(li.innerHTML);
        }

        if (typeof checkForOrder === 'function') {
            checkForOrder(JSON.stringify(list) === JSON.stringify(correctOrder))
        } else {
            this.correctnessCallback(JSON.stringify(list) === JSON.stringify(correctOrder));
        }
    } 

    correctnessCallback (result) {
        if (result) {
            alert('Correct!');
        } else {
            alert('Incorrect!');
        }
    }
}

customElements.define('draggable-list', DraggableList);