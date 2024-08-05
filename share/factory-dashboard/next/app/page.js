import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Link className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" href={'/install'}><button>install</button></Link>

    </main>
  );
}

