import { ReactNode } from "react";

// testing remote from vscode
function Grid({ children, ...props }: { children: ReactNode }) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-12 md:gap-[10px] xl:gap-[30px]`}
    >
      {children}
    </div>
  );
}

export default Grid;
