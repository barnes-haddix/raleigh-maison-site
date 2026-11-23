import Image from "next/image"; // Next.js <img> wrapper

export default function Home() {
  // className strings are Tailwind CSS utility classes
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          //className="dark:invert h-5 w-[100px]"
          src="/text.png"
          alt="awesome text"
          width={800}
          height={120}
          priority
        />
      </main>
    </div>
  );
}
