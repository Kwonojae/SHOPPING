const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button')
function onAdd() {
    //1.사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }
    //2.새로운 아이템을 만듬(텍스트 + 삭제버튼)
    const item = createItem(text);
    //3.items 컨테이너안에 새로 만든 아이템을 추가한다
    items.appendChild(item);
    //4.새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block: 'center'});

    //5.인풋을 초기화 한다 .
    input.value = '';
    input.focus();
}
let id = 0; //UUID유니크 아이디
function createItem(text) {
    const itemRow = document.createElement('li');   //li태그 만들기
    itemRow.setAttribute('class', 'item__row'); //클래스 지정
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
        <div class="item" >
            <span class="item__name">${text}</span>
                <button class="item__delete">
                    <i class="fas fa-trash-alt" data-id=${id}></i>
                </button>
        </div>
    <div class="item__divider"></div>`;
    id++;    //아이템이 하나 만들어질때마다 증가함 ....
    return itemRow;
}


addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', (event) =>{
    if(event.key === 'Enter') {
        onAdd();
    }
})

items.addEventListener('click', event => {
    // if(event.target.nodeName === 'I')
    //클릭한 태그만 불러옴 
    const id = event.target.dataset.id;
    if(event.target.dataset.id){
        const toBeDeleted = document.querySelector(`.item[data-id="${id}"]`);
        //dataset을 사용해서 고유번호에(id) 맞는것을 찾아주고
        toBeDeleted.remove();
        //지워준다
    }
})
