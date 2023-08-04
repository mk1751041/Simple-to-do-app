// 웹 페이지의 모든 컴포넌트들을 제어하여 구동시키는 역할
import Header from "./Header.js"
import TodoForm from "./TodoForm.js"
import TodoList from "./TodoList.js"
import { setItem } from "./storage.js"

// 웹을 그릴 DOM 객체와 로컬 스토리지 데이터를 받음
export default function App({ $target, initialState }){
    // Header 생성 => text에 원하는 제목 입력
    new Header({
        $target,
        text: 'Todo-app 만들기'
    })

    // TodoForm 생성 => onSubmit에 데이터 추가를 위한 함수 입력
    new TodoForm({
        $target,
        // 입력받은 text를 로컬 스토리지에 추가하고 리스트를 최신화 해주는 함수
        onSubmit: (text) => {
            const nextState = [...todoList.state, {
                text
            }]
            todoList.setState(nextState);

            setItem('todos', JSON.stringify(nextState));
        }
    })

    // TodoList 생성 => 객체를 받아와 내부 요소들을 사용함
    const todoList = new TodoList({
        $target,
        initialState
    })
}