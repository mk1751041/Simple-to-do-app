// 웹과 App간의 연결을 해주는 역할
import App from "./App.js";
import { getItem } from "./storage.js";

// 사이트에 쓰일 데이터를 로컬 스토리지에 저장된 데이터를 가져와 초기화한다.
const initialState = getItem('todos', []);
// index.html의 main태그(class = app)를 사용한다.
const $app = document.querySelector('.app');
// App을 생성 => { 작업할 웹 태그, 로컬 스토리지의 현재 데이터 }
new App({
    $target: $app,
    initialState
})