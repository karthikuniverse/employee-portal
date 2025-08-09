import { useState } from "react";

function AccordionItem({ title, children }: any) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border rounded-lg overflow-hidden mb-2 mt-2 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="text-[#087eff] w-full flex justify-between items-center px-4 py-3 border-b bg-[#ffff] hover:bg-[hsl(228, 85%, 63%)] transition"
      >
        <span className="font-medium">{title} <span className='text-[12px]'>( Please specify your search )</span></span>
        <span>{open ? <i className="ri-arrow-down-line"></i> : <i className="ri-arrow-up-line"></i>}</span>
      </button>
      {open && <div className="px-4 py-3 text-gray-700">{children}</div>}
    </div>
  );
}


export default AccordionItem