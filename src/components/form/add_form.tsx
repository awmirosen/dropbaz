"use client";

// import { addClipboard } from "@/actions/clipboard/add";
import { useState } from "react";

import SubmitButton from "@/components/submit_button";

const AddClipboardForm = () => {
  const [data, setData] = useState({ content: "" });
  const maxChar = 1200;

  return (
    <form className="w-full">
      <div className="w-full relative">
        <textarea
          name="content"
          onChange={(e) => setData({ content: e.target.value as string })}
          value={data.content}
          className="w-full min-h-80 p-4 border border-stone-600 dark:border-stone-400 focus:outline-1 outline-stone-600 dark:outline-stone-400 rounded-md"
          required
          autoFocus
          maxLength={maxChar}
        />
      </div>
      <div dir="rtl" className="flex mt-4">
        <div className="w-1/2">
          <SubmitButton title="ساختن" loading="در حال انتقال ..." />
        </div>
        <div className="w-1/2 flex justify-end select-none text-stone-800 dark:text-stone-300">
          <span>{maxChar.toString() as string}</span>
          <span className="px-1.5">-</span>
          <span>{data.content.length}</span>
        </div>
      </div>
    </form>
  );
};

export default AddClipboardForm;
