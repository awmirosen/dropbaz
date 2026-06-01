import { BiError } from "react-icons/bi";

const NotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center mx-8">
      <BiError size={40} />
      <h2 className="text-2xl mt-1 select-none ">NotFound</h2>
    </section>
  );
};

export default NotFound;
