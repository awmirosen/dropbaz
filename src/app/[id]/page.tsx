import { ParamsType } from "@/types/global";

export const metadata = {
  title: "Dropbaz | Clipboard",
};

const ViewNode = async ({ params }: ParamsType) => {
  const { id } = await params;
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default ViewNode;
