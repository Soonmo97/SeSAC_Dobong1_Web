import { useNavigate, useParams } from 'react-router-dom';

export default function ProductDetailPagee({ products }) {
  // console.log(products); // array [{},{},{},..]
  // const params = useParams();
  // console.log(params); // {productId: '2'}
  // console.log(params.productId); // {productId: '2'}
  const { productId } = useParams();
  // console.log(productId);

  const navigate = useNavigate();

  // console.log(products);
  // const targetProduct = products.filter((product) => {
  //   return product.id === Number(productId);
  // })[0];

  const [targetProduct] = products.filter((product) => {
    return product.id === Number(productId);
  });

  // console.log(targetProduct); // {postId, id, name(상품명), body(상세설명), email(판매자))}

  if (!targetProduct) {
    return <main>존재하지 않는 상품입니다.</main>;
  }
  return (
    <>
      <h5>상세페이지</h5>
      <button onClick={() => navigate('/')}>홈으로 이동하기</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <ul>
        <li>판매번호: {targetProduct.id}</li>
        <li>상품명: {targetProduct.name}</li>
        <li>판매자: {targetProduct.email}</li>
        <li>상세설명: {targetProduct.body}</li>
      </ul>
    </>
  );
}
