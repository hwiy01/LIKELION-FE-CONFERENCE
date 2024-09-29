//부모컴포넌트
import React, { useState } from 'react';
import PropsTestChildComponent from './PropsTestChildComponent';

// 외부 변수 선언 (상태가 아님)
let testText = '1';
let testNum = 1;
const obj = { testText, testNum };

const PropsTestParentComponent = () => {

  // 부모 컴포넌트의 렌더링을 트리거하기 위한 state
  const [renderer, setRenderer] = useState(false); 

  // testText 값을 '1'씩 추가하는 함수
  const onClickText = () => {
    testText += '1';
    obj.testText += '1'; 
  };

  // testNum 값을 1씩 증가시키는 함수 
  const onClickNum = () => {
    testNum += 1; 
    obj.testNum += 1;
  };

  // console에 현재 testText와 testNum 출력 (상태와는 무관한 값)
  const onClick = () => console.log(testText, testNum);

  return (
    <div>
      <PropsTestChildComponent testNum={testNum} testText={testText} obj={obj} />
      
      {/* 각각 버튼 클릭 시 외부 변수 변경, 하지만 상태 변화는 아님 */}
      <button onClick={onClickText}>text</button>
      <button onClick={onClickNum}>num</button>
      <button onClick={onClick}>log parent</button>
      
      {/* 부모 컴포넌트 강제 렌더링 트리거 */}
      <button onClick={() => setRenderer(current => !current)}>render parent</button>
    </div>
  );
};

export default PropsTestParentComponent;
