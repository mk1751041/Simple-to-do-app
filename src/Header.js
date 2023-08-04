// 받아온 text를 이용해 헤더 제목을 생성하는 컴포넌트
export default function Header({ $target, text }){
    // h1 태그를 생성하고 웹에 추가한다.
    const $header = document.createElement('h1');
    $target.appendChild($header);
    
    // h1 태그의 텍스트를 받아온 text로 변경한다.
    this.render = () => {
        $header.textContent = text;
    }

    this.render();
}