"use client";

import { useState, useEffect, useRef } from "react";
import OTPInput from "react-otp-input";
import SubmitButton from "@/components/submit_button";
import { ViewClipboard } from "@/actions/clipboard/view";

const OtpForm = () => {
  const [code, setCode] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (code.length === 5) {
      formRef.current?.requestSubmit();
    }
  }, [code]);

  return (
    <form action={() => ViewClipboard(code)} ref={formRef}>
      <label className="w-full flex justify-center mb-4 text-lg">
        Enter your Code
      </label>
      <OTPInput
        value={code}
        onChange={setCode}
        numInputs={5}
        inputType="number"
        key={"otpInput"}
        renderInput={(state) => (
          <input
            {...state}
            type="text"
            name="otp"
            className="h-12 my-1 border border-stone-600 dark:border-stone-400 text-center rounded-xl mx-2 first:ml-0 last:mr-0 focus:outline-1 outline-stone-600 dark:outline-stone-400"
            style={{ width: "3rem" }}
            required
          />
        )}
        shouldAutoFocus
      />
      <div className="my-4 flex">
        <SubmitButton title="Continue" loading="Loading..." />
      </div>
    </form>
  );
};

export default OtpForm;
