import AddClipboardForm from "@/components/form/add_form";

export const metadata = {
  title: "Dropbaz | add",
};

const AddClipboard = () => {
  return (
    <section className="flex justify-center items-center mx-1">
      <AddClipboardForm />
    </section>
  );
};

export default AddClipboard;
