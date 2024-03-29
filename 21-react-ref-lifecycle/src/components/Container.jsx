// import '../style/post.css';
import '../style/Post.scss';

export default function Container({ children }) {
  return (
    <>
      <header>📃Post List</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
