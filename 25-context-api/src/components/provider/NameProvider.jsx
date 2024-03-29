import { UserContext } from '../../contexts/UserContext';
import { useState } from 'react';

export default function AgeProvider(props) {
  const { children } = props;
  const [name, setName] = useState('홍길동');
  console.log(children);
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
}
