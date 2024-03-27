import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function StudentDetail({ students }) {
  const { studentName } = useParams();

  // console.log(students);
  // console.log(studentName);
  const [targetStudent] = students.filter((student) => {
    return student.name === studentName;
  });

  const [nameParams, setNameParams] = useSearchParams();
  // console.log(nameParams.get('name')); // '지수'

  // console.log(targetStudent);
  const navigate = useNavigate();
  return (
    <>
      <p className="student" key={targetStudent.id}>
        학생 이름은 <span className="name">{targetStudent.name}</span> 입니다.
        <br />
        {targetStudent.name === 'new' && (
          <span>
            실제 학생 이름은{' '}
            <span className="realName">{nameParams.get('name')}</span>입니다.
          </span>
        )}
        <br />
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          이전 페이지로
        </button>
      </p>
    </>
  );
}
