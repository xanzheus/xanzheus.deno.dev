import { h } from "https://deno.land/x/sift@0.1.7/mod.ts";

const SuperCenter = ({ children }) => {
  return (
    <div className="flex justify-center items-center top-0 bottom-0 mx-auto">
      {children}
    </div>
  );
};

export default SuperCenter;
