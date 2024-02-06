import { prisma } from "./lib/prisma";

export default async function Home() {
  const posts = await prisma.posts.findMany({});

  return (
    <section className="bg-gray-50 h-screen p-4">
      <h1 className="text-center text-md text-2xl">Posts from database:</h1>

      <div className="container mx-auto py-8">
        {posts.map((post) => (
          <a
            key={post.id}
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {post.title}
            </h5>
            <p className="font-normal text-gray-700">{post.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
