import { useForm } from 'react-hook-form';

export default function PracticeForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    // console.log('valid::', data);
    console.log(watch());
  };

  const onInvalid = (data) => {
    // console.log('inValid::', data);
    console.log(watch());
    console.log(errors.name);
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        type="text"
        placeholder="이름"
        {...register('name', {
          required: '이름은 필수 항목입니다.',
        })}
      />
      {errors.name?.message}
      <br />
      <input
        type="text"
        placeholder="나이"
        {...register('age', {
          validate: {
            checkZeroUp: (value) => {
              return value <= 0 && '0 이상의 숫자만 입력 가능합니다';
            },
          },
        })}
      />
      {errors.age?.message}
      <br />
      <button type="submit">제출</button>
    </form>
  );
}
