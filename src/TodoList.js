// 받은 데이터를 리스트로 출력하는 컴포넌트
export default function TodoList({ $target, initialState }){
    // 리스트 추가를 위한 div 태그 설정
    const $list = document.createElement('div');
    $target.appendChild($list);
    // 리스트에 추가할 데이터의 현재 상태를 초기화
    this.state = initialState;
    // 데이터가 바뀔때마다 데이터 최신화를 해주기 위한 함수
    // App에서 객체를 받아 TodoForm 작업에 호출
    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }
    // 현재 상태 데이터를 꺼내와서 li형태로 바꾸어 HTML을 삽입하는 작업
    this.render = () => {
        $list.innerHTML = `
            <ul>
                ${this.state.map(({ text }) => `<li>${text}</li>`).join('')}
            </ul>
        `
    }

    this.render();
}