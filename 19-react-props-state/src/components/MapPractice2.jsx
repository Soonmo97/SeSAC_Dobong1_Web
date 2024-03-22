import { useState, useRef } from 'react';

export default function MapPractice() {
  const [list, setList] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const [searchCate, setSearchCate] = useState('author');
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState([]);

  const authorRef = useRef();
  const titleRef = useRef();

  const addList = () => {
    console.log(title, author);
    if (title.trim().length === 0 || author.trim().length === 0) {
      return authorRef.current.focus();
    }
    setList(
      list.concat({
        id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
        title,
        author,
      })
    );
    setTitle('');
    setAuthor('');
  };

  const searchRun = () => {
    let searchResult = list.filter((item) => {
      // console.log(item);
      console.log(item[searchCate].includes(search));
      if (!item[searchCate].includes(search)) {
        return null;
      }
      return item;
    });
    setSearchList(searchResult);
    setSearch('');
  };
  console.log(searchList);

  return (
    <div>
      <div style={{ border: '1px solid black', padding: '10px' }}>
        작성자:
        <input
          type="text"
          placeholder="작성자"
          style={{ margin: '0 10px' }}
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          ref={authorRef}
        />
        제목:
        <input
          type="text"
          placeholder="제목"
          style={{ marginLeft: '10px' }}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          ref={titleRef}
        />
        <button style={{ marginLeft: '10px' }} onClick={addList}>
          작성
        </button>
      </div>
      <br></br>
      <br></br>

      <div>
        <select
          onChange={(e) => {
            setSearchCate(e.target.value);
          }}
        >
          <option value="author">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          style={{ marginLeft: '10px' }}
          type="text"
          value={search}
          placeholder="검색어"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button style={{ marginLeft: '10px' }} onClick={searchRun}>
          검색
        </button>
      </div>

      <br></br>
      <table style={{ width: '400px' }} border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {list.map((el) => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.title}</td>
              <td>{el.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
      {/* 검색결과 */}
      {searchList.length === 0 ? (
        <h5>검색 결과가 없습니다.</h5>
      ) : (
        <table style={{ width: '400px' }} border={1} cellSpacing={0}>
          <thead>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </thead>
          <tbody>
            {searchList.map((el) => {
              return (
                <tr key={el.id}>
                  <td>{el.id}</td>
                  <td>{el.title}</td>
                  <td>{el.author}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
