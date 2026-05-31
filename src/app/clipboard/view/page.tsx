import OtpForm from "@/components/form/otp_form";

export const metadata = {
  title: "Dropbaz | view",
};

const ViewClipboard = () => {
  return (
    <section className="flex justify-center items-center mx-1">
      <OtpForm />
    </section>
  );
};

export default ViewClipboard;
