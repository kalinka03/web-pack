class CustomSelect {
    init() {
        const showClass = 'select_show';
        const constSelect = '.someselect';
        const parentList = document.querySelectorAll('.custom-list .list');
        const parentListArrow = document.querySelectorAll('.custom-list');
        const elem = document.querySelectorAll(constSelect);
        for (let option of elem) {
           this.getOptions(option);
        }
        this.addEventOption(showClass, parentList, parentListArrow);
        this.hideAllList();
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
    addEventOption(showClass, parentList, parentListArrow) {
        let elemSelectList = document.querySelectorAll('.custom-list span')
        let arrayObject = this;
        elemSelectList.forEach(opt => opt.addEventListener('click', function () {
            let getThis = opt;
            let ulList = getThis.nextSibling;
            let optionList = getThis.parentNode;
                parentList.forEach(function (list) {
                    list.classList.remove(showClass);
                })
                parentListArrow.forEach(function (arrow) {
                    arrow.classList.remove('active');
                })
                ulList.classList.add(showClass);
                optionList.classList.add('active');
            arrayObject.getOptionValue( optionList);
        }));
    }
    getOptionValue(option) {
        let changelistNext = this;
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
                option.classList.remove('checked')
            }
            spanTextUl = parentSelectShow.parentNode.previousSibling;
            parentMain.classList.remove('active');
            changeElem = this;
            valElem = changeElem.getAttribute('value');
            parentSelectShow.classList.add('checked');
            spanTextUl.innerText = valElem;
            changelistNext.hideList();
        })}
    }

    hideList() {
        let ulActive = document.querySelectorAll('.list');
        let parentBlock = document.querySelectorAll('.custom-list');
        ulActive.forEach(list => list.classList.remove('select_show'));
        parentBlock.forEach(block => block.classList.remove('active'));
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






