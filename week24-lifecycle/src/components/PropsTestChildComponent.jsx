import React, { useState } from 'react';

const PropsTestChildComponent = ({ testNum, testText, obj }) => {
    // 자식 컴포넌트의 렌더링을 트리거하기 위한 state
    const [renderer, setRenderer] = useState(false);
  
    return (
      <div id={renderer.toString()}>
        {/* 부모로부터 받은 props를 화면에 표시 */}
        <h3>str: {testText}</h3>
        <h3>num: {testNum}</h3>
        <h3>obj: {obj.testText} / {obj.testNum}</h3>
  
        {/* 자식 컴포넌트를 강제 렌더링하는 버튼 */}
        <button onClick={() => setRenderer((current) => !current)}>render child</button>
        
        {/* 자식 컴포넌트의 props 값을 console에 출력 */}
        <button onClick={() => console.log(testText, testNum, obj)}>log child</button>
      </div>
    );
  };
  
  export default PropsTestChildComponent;
  