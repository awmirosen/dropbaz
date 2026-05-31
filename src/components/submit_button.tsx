"use client";

import { useFormStatus } from "react-dom";
import Button from "@/components/ui/Button";

type SubmitButtonType = {
  title: string;
  loading: string;
};

const SubmitButton = ({ title, loading }: SubmitButtonType) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} size="full">
      {pending ? loading : title}
    </Button>
  );
};

export default SubmitButton;
