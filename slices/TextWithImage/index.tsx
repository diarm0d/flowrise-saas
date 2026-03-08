import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  SliceComponentProps,
  RichTextComponents,
  PrismicImage,
  PrismicRichText,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import clsx from "clsx";

const components: RichTextComponents = {
  heading2: ({ children }) => (
    <Heading
      as="h2"
      size="lg"
      className={`mb-4 md:mb-6 mt-12 first:mt-0 last:mb-0`}
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p
      className={`text-2xl md:text-2xl font-normal leading-10 font-body text-slate-600 mb-4 md:mb-8 max-w-md`}
    >
      {children}
    </p>
  ),
};

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage: FC<TextWithImageProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className={clsx(slice.variation === "imageRight" && "md:order-2")}>
          <PrismicImage
            field={slice.primary.image}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="grid gap-4">
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
          <PrismicRichText field={slice.primary.body} components={components} />
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
