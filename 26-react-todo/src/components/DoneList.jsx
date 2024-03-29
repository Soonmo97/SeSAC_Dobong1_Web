import { useSelector } from 'react-redux';

export default function DoneList() {
  const list = useSelector((state) => state.todo.list);
  const doneList = list.filter((todo) => todo.done === true);

  return (
    <section className="DoneList">
      <h2>완료한 일</h2>
      <ul>
        {doneList.map((done) => {
          return <li key={done.id}>{done.text}</li>;
        })}
      </ul>
    </section>
  );
}
