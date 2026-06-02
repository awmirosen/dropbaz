"use client";

import { AddToClipboard } from "@/actions/clipboard/add";
import { useState } from "react";

import SubmitButton from "@/components/submit-button";

export const maxChar = 1200;
const AddClipboardForm = () => {
  const [data, setData] = useState({ content: "" });

  return (
    <form action={AddToClipboard} className="w-full">
      <div className="w-full relative">
        <textarea
          name="content"
          onChange={(e) => setData({ content: e.target.value as string })}
          value={data.content}
          className="w-full min-h-80 p-4 border border-stone-600 dark:border-stone-400 focus:outline-1 outline-stone-600 dark:outline-stone-400 rounded-md"
          required
          autoFocus
          maxLength={maxChar}
          placeholder="write here"
        />
      </div>
      <div className="flex mt-4">
        <div className="w-1/2 flex select-none text-stone-800 dark:text-stone-300">
          <span>{data.content.length}</span>
          <span className="px-1.5">-</span>
          <span>{maxChar.toString() as string}</span>
        </div>
        <div className="w-1/2">
          <SubmitButton title="Create" loading="Creating.." />
        </div>
      </div>
    </form>
  );
};

export default AddClipboardForm;
