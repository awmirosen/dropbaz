import Link from "next/link";

import { PiNotePencil, PiNote } from "react-icons/pi";

const Home = () => {
  return (
    <section className="mx-1">
      <div className="w-full flex gap-x-8">
        <div className="w-1/2 flex justify-center">
          <Link href="/clipboard/add" className="w-full h-full text-lg">
            <div
              className="bg-stone-300/30 dark:bg-stone-900/40 hover:bg-stone-300/65 dark:hover:bg-stone-900/20 border border-stone-400/60 dark:border-stone-800/60 transition-colors duration-300 rounded-2xl flex justify-center ite p-4 gap-2"
              style={{ lineHeight: 1.3 }}
            >
              <PiNotePencil />
              Add
            </div>
          </Link>
        </div>
        <div className="w-1/2 flex justify-center">
          <Link href="/clipboard/view" className="w-full text-lg">
            <div
              className="bg-stone-300/30 dark:bg-stone-900/40 hover:bg-stone-300/65 dark:hover:bg-stone-900/20 border border-stone-400/60 dark:border-stone-800/60 transition-colors duration-300 rounded-2xl flex justify-center ite p-4 gap-2"
              style={{ lineHeight: 1.3 }}
            >
              <PiNote />
              View
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
