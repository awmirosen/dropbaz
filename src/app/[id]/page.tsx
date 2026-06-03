import { ParamsType } from "@/types/global";
import { getClipboardData } from "@/actions/get-data";
import { notFound } from "next/navigation";
import QR from "@/components/qr";
import CopyButton from "@/components/copy-button";
import { LuCopy, LuLink2 } from "react-icons/lu";

export const metadata = {
  title: "Dropbaz | Clipboard",
};

const ViewNode = async ({ params }: ParamsType) => {
  const { id } = await params;

  const { content, code } = await getClipboardData(id);

  if (!content) return notFound();

  const url = `${process.env.URL}/${code}`;

  return (
    <section>
      {/* qr and code */}
      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center mb-4 gap-2">
          <span className="mx-1 text-2xl font-bold mt-1">{code}</span>
          <div className="flex gap-2">
            <CopyButton content={code.toString()} size="md" icon={<LuCopy />} />
            <CopyButton content={url} size="md" icon={<LuLink2 />} />
          </div>
        </div>

        <div className="flex justify-center">
          <QR url={url} />
        </div>
      </div>
      {/* content */}
      <div>
        <div className="w-full relative my-2">
          <textarea
            defaultValue={content}
            className="w-full min-h-70 p-4 border border-stone-600 dark:border-stone-400 focus:outline-0 rounded-md"
          />
        </div>
        <div className="w-full">
          <CopyButton
            content={content}
            size="full"
            title="copy all"
            doneTitle="done"
            icon={<LuCopy />}
          />
        </div>
      </div>
    </section>
  );
};

export default ViewNode;
