import { cn } from "@/lib/utils";
import React from "react";

const MaxwidthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return (
    <main
      className={cn(
        "w-full px-3 mx-auto max-w-full lg:max-w-[77%] xl:max-w-[84%] 2xl:max-w-[90%]",
        className
      )}
    >
      {children}
    </main>
  );
};

export default MaxwidthWrapper;
