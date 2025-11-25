import { cn } from "@/lib/utils";

export const MainPage = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative max-w-[1400px]  mx-auto px-5 md:px-[60px]",
        className
      )}
    >
      {children}
    </div>
  );
};
