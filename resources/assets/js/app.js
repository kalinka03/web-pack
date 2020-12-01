class CustomSelect {
    constructor(constSelect){
        this.constSelect = constSelect;
        this.showClass = 'select_show';
        this.activeClass = 'active';
        this.constSelect = '.someselect';
        this.valueChacked = 'checked';
        this.getSelect();
        this.addEventOption();
        this.hideAllList();
    }
    getSelect(){
        this.elem = document.querySelectorAll(this.constSelect);
        for (let option of this.elem) {
            this.getOptions(option);
        }
    }
    getOptions(option) {
        let val = [];
        for (let i = 0; i < option.length; i++) {
            val.push(option[i].value);
        }
        let ul = this.createList(val);
        option.parentNode.appendChild(ul);
    }

    createList(options) {
        let divCustomList = document.createElement('div');
        divCustomList.className = 'custom-list';
        let ulList = document.createElement('ul');
        ulList.className = 'list';
        let spanList = document.createElement('span');
        spanList.className = 'current';
        let optionDisable, optValue, liChange;
        for (let i = 0; i < options.length; i++) {
            optionDisable = options[0];
        }
        spanList.innerText = optionDisable;
        for (let i = 1; i < options.length; i++) {
            optValue = options[i];
            liChange = document.createElement("li");
            liChange.textContent = optValue;
            liChange.setAttribute("value", optValue);
            ulList.appendChild(liChange);
            divCustomList.appendChild(spanList);
            divCustomList.appendChild(ulList);
        }
        return divCustomList;
    }
    addEventOption() {
        let elemSelectList = document.querySelectorAll('.custom-list span')
        let $this = this;
        elemSelectList.forEach(opt => opt.addEventListener('click', function () {
            let getThis = opt;
            let ulList = getThis.nextSibling;
            let optionList = getThis.parentNode;
                ulList.classList.add($this.showClass);
                optionList.classList.add($this.activeClass);
            $this.getOptionValue(optionList);
        }));
    }
    getOptionValue(option) {
        let $this = this;
        let listOption = option.querySelector('.list.select_show');
        let valueShow = listOption.children;
        let parentSelectShow, parentUl, parentMain, listChildren, spanTextUl, changeElem, valElem;
        for (let optionChange of valueShow) {
            optionChange.addEventListener('click', function () {
            parentSelectShow = this;
            parentUl = parentSelectShow.parentNode;
            parentMain = parentUl.parentNode;
            listChildren = parentUl.children;
            for (let option of listChildren) {
                option.classList.remove($this.valueChacked)
            }
            spanTextUl = parentSelectShow.parentNode.previousSibling;
            parentMain.classList.remove($this.activeClass);
            changeElem = this;
            valElem = changeElem.getAttribute('value');
            parentSelectShow.classList.add($this.valueChacked);
            spanTextUl.innerText = valElem;
                $this.hideList();
        })}
    }

    hideList() {
        let ulActive = document.querySelectorAll('.list');
        let parentBlock = document.querySelectorAll('.custom-list');
        ulActive.forEach(list => list.classList.remove(this.showClass));
        parentBlock.forEach(block => block.classList.remove(this.activeClass));
    }

    hideAllList() {
        window.addEventListener("mouseup", function (event) {
            let divToHide = document.querySelectorAll('.custom-list span');
            for (let option of divToHide) {
                if (!(event.target == option) && !(event.target.parentNode == option)) {
                    let hideListUl = customSelect.hideList();
                }
            }
        })
    }

    destroy() {
        let listAllDom = document.querySelectorAll('.custom-list');
        for (let elem of listAllDom) {
            elem.remove();
        }
    }
}






