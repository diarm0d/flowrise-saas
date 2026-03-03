import clsx from "clsx"
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next"

export default function Button({ className, ...rest}: PrismicNextLinkProps) {
    return (
        <PrismicNextLink className={clsx("block w-fit bg-cyan-700 hover:bg-cyan-800 transition-colors duration-200 ease-in-out py-3 px-12 text-white font-bold text-base tracking-wider rounded-full mb-8 md:mb-10", className)} {...rest}/>
    )
}