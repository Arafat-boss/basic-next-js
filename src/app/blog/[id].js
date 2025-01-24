export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
  
    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }));
  
    return { paths, fallback: false };
  }
  
  export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();
  
    return { props: { post } };
  }
  
  const BlogDetails = ({ post }) => (
    <div className="p-6">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
    </div>
  );
  
  export default BlogDetails;