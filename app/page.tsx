import { fetchAllPosts } from '../lib/posts'

export default function Home() {
  const posts = fetchAllPosts()
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1>My Simple Blog</h1>
      {
        posts.map((post) => (
         <div key={post.names} className="mb-6 border-b pb-4">
           <h2 className="text-2xl font-semibold">{post.title}</h2>
           <p className="text-gray-500">{post.date}</p>
         </div>
       ))}
    </main>
  )
}
