import { ParamsType } from "@/types/global";

const ViewNode = async ({ params }: ParamsType) => {
  const { id } = await params;
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default ViewNode;
