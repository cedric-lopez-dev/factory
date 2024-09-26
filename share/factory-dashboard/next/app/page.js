import Link from "next/link";
import { execCommand } from "./services/factoryService";

export default async function Home() {

  const allContainers = await execCommand('docker ps -a');
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" href={'/install'}><button>install</button></Link>

    </main>
  );
}

