import { ParamsType } from "@/types/global";
import { getClipboardData } from "@/actions/get-data";
import { notFound } from "next/navigation";

import CopyButton from "@/components/copy-button";
import { LuCopy, LuLink2 } from "react-icons/lu";

export const metadata = {
  title: "Dropbaz | Clipboard",
};

const ViewNode = async ({ params }: ParamsType) => {
  const { id } = await params;

  const { content, code } = await getClipboardData(id);

  if (!content) return notFound();

  return (
    <section>
      <div className="flex justify-center items-center mb-4 gap-2">
        <span className="mx-1 text-lg mt-1">{code}</span>
        <CopyButton content={code.toString()} size="md" icon={<LuCopy />} />
        <CopyButton
          content={`${process.env.URL}/${code}`}
          size="md"
          icon={<LuLink2 />}
        />
      </div>
      <div>
        <div className="w-full relative my-2">
          <textarea
            name="content"
            defaultValue={content}
            className="w-full min-h-80 p-4 border border-stone-600 dark:border-stone-400 focus:outline-0 rounded-md"
            autoFocus
          />
        </div>
        <div className="w-full">
          <CopyButton
            content={content}
            size="full"
            title="copy text"
            doneTitle="copied!"
            icon={<LuCopy />}
          />
        </div>
      </div>
    </section>
  );
};

export default ViewNode;
