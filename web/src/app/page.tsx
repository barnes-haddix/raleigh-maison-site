/*
 * Style help:
 * sm:items-start - left-aligns children on screens ≥640px
 * justify-between - pins content to the top
 * self-center - center only this element within flexbox
 */

import InstagramLink from "@/components/InstagramLink";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-5xl font-bold text-center sm:text-6xl">
          Raleigh Maison
        </h1>
        <InstagramLink handle="raleighmaison" />
      </main>
    </div>
  );
}
