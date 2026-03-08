import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  SliceComponentProps,
  RichTextComponents,
  PrismicRichText,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";

const components: RichTextComponents = {
  heading2: ({ children }) => (
    <Heading as="h2" size="sm" className={`mb-4 font-semibold text-center`}>
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className={`text-center text-slate-600 mb-8`}>{children}</p>
  ),
};

/**
 * Props for `CtaBanner`.
 */
export type CtaBannerProps = SliceComponentProps<Content.CtaBannerSlice>;

/**
 * Component for "CTA Banner" Slices.
 */
const CtaBanner: FC<CtaBannerProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-4xl m-auto shadow-xl md:px-12 px-4 py-12 grid place-items-center rounded-lg bg-linear-to-tr from-cyan-50 via-white to-emerald-50">
        <PrismicRichText
          field={slice.primary.headline}
          components={components}
        />
        <PrismicRichText
          field={slice.primary.description}
          components={components}
        />
        <div className="mt-4">
          <Button href={slice.primary.button_link.link_type}>
            {slice.primary.button_link.text}
          </Button>
        </div>
      </div>
    </Bounded>
  );
};

export default CtaBanner;
