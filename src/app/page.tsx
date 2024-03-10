import Image from "next/image";

export default async function Home() {
  await new Promise(resolve => setTimeout(resolve, 5000));
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Insanity check</h1>
      </div>
    </main>
  );
}
