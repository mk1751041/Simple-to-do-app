// input box가 있고 할 일을 적고 입력을 누르면 할일이 리스트로 추가되는 컴포넌트
// DOM 타겟과 입력밭은 데이터를 리스트로 업데이트 하는 함수를 받는다. => 다른 컴포넌트와의 의존성을 없애기 위함
export default function TodoForm({ $target, onSubmit }){
    // form 태그를 생성하고 웹에 추가한다.
    const $form = document.createElement('form');
    $target.appendChild($form);

    // 데이터가 아직 추가되지 않았음을 확인하기 위한 플래그
    let isInit = false;

    this.render = () => {
        // 입력을 받기 위한 input 태그를 생성하고 이벤트를 발생시키기 위한 button 태그 생성
        $form.innerHTML = `
            <input type='text' name='todo'></input>
            <button>입력</button>
        `
        // 데이터가 아직 추가되지 않았다면
        if(!isInit){
            // form태그에 click 이벤트 등록
            $form.addEventListener('click', (e) => {
                // 지난 이벤트 입력 값을 가져오는 함수
                e.preventDefault();

                // input 태그 중에 이름이 todo인 데이터를 선택하여 가져옴
                const $input = $form.querySelector('input[name=todo]');
                // input의 value값(사용자가 적은 내용)을 저장
                const text = $input.value;

                // text가 입력되었다면 value를 초기화하고 값을 전송
                if(text.length > 1){
                    $input.value = '';
                    onSubmit(text);
                }
            })
            // 플래그 값 변경
            isInit = true;
        }
    }

    this.render();
}