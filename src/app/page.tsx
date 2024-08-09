import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to my SaaS Project</h1>
      <Link href="/posts" className="text-blue-500 underline">
        View Posts
      </Link>
    </main>
  );
}
