import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid max-w-7xl grid-cols-1 md:auto-rows-[28rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 bg-white p-4 transition duration-200 dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {header}  
      <div className="transition duration-200 group-hover/bento:translate-x-2 border-l pl-2 border-black">
        {icon}
        <div className="mt-2 mb-2 font-sans font-black text-neutral-600 dark:text-neutral-200 butovo">
          {title}
        </div>
        <div className="text-xs font-mono text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
