import { ParamsType } from "@/types/global";
import { getClipboardData } from "@/actions/get-data";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Dropbaz | Clipboard",
};

const ViewNode = async ({ params }: ParamsType) => {
  const { id } = await params;

  const { content, code, createdAt } = await getClipboardData(id);

  if (!content) return notFound();

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default ViewNode;
