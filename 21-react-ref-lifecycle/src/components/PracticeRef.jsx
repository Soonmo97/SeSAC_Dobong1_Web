import { useRef } from 'react';

export default function PracticeRef() {
  const inputRef = useRef();
  const divRef = useRef();

  const handleFocusAndBgcolor = () => {
    divRef.current.style.backgroundColor = inputRef.current.value;
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: 'center', width: '200px' }} ref={divRef}>
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={handleFocusAndBgcolor}>색 적용</button>
    </div>
  );
}
