import clsx from "clsx";

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}

export default async function Bounded({
    as: Comp = 'section',
    className,
    children,
    ...rest
}: BoundedProps) {
  return (
    <Comp
        className={clsx("px-4 py-10 md:py-14 md:mx-6 lg:py-16", className)}
        {...rest}
    >
        <div className="mx-auto w-full max-w-4xl">
            {children}
        </div>
    </Comp>
  )
}