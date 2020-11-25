class CustomSelect {
    getOptions() {
        let selectList = document.querySelectorAll('select');
        let list = [];
        for (let elem of selectList) {
            let val = [];
            let someValue = [];
            for (let valueSelect of elem) {
                list.push(valueSelect.value);
            }
            for (let i = 0; i < elem.length; i++) {
                val.push(elem[i].value);
            }
            let ul = this.createList(val);
            elem.parentNode.appendChild(ul);
        }
        return list;
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
}

class ChangeList {
    addEventListener() {
        let arrayObject = this;
        let elemSelect = document.querySelectorAll('.custom-list span');
        elemSelect.forEach(cell => cell.addEventListener('click', function(){
            let parentList = document.querySelectorAll('.custom-list .list');
            let parentListArrow = document.querySelectorAll('.custom-list');
            let getThis = cell;
            let ulList = getThis.nextSibling;
            let optionList = getThis.parentNode;
            if (optionList.classList.contains('active')) {
                ulList.classList.remove('select_show');
                optionList.classList.remove('active');
            } else {
                parentList.forEach(function (list) {
                    list.classList.remove('select_show');
                })
                parentListArrow.forEach(function (arrow) {
                    arrow.classList.remove('active');
                })
                ulList.classList.add('select_show');
                optionList.classList.add('active');
            }
            let valueOpt = arrayObject.getOptionValue();
        }));
    }
    getOptionValue() {
        let changelistNext = this;
        let valueShow = document.querySelectorAll('.list.select_show li');
        let parentSelectShow, parentUl, parentMain, listChildren, spanTextUl, changeElem, valElem;
        valueShow.forEach(opt => opt.addEventListener('click', function () {
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
            let hideListUl = changelistNext.hideList();
        }))
    }

    hideList() {
        let ulActive = document.querySelectorAll('.list');
        let parentBlock = document.querySelectorAll('.custom-list');
        ulActive.forEach(list => list.classList.remove('select_show'));
        parentBlock.forEach(block => block.classList.remove('active'));
    }
}

class CloseList  extends ChangeList {
    hideAllList() {
        let closeObject = this;
        window.addEventListener("mouseup", function (event) {
            let divToHide = document.querySelectorAll('.custom-list span');
            for (let option of divToHide) {
                if (!(event.target == option) && !(event.target.parentNode == option)) {
                    let hideListUl = closeObject.hideList();
                }
            }
        })
    }
}

