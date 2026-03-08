import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
  RichTextComponents,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

const components: RichTextComponents = {
  heading2: ({ children }) => (
    <Heading as="h2" size="lg" className={`text-center font-semibold mb-9`}>
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p
      className={`text-xl md:text-2xl font-normal font-body text-slate-600`}
    >
      {children}
    </p>
  ),
};

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials: FC<TestimonialsProps> = ({ slice }) => {
  return (
    <Bounded
      as="section"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-2xl mx-auto mb-16 flex flex-col items-center">
        <PrismicRichText
          field={slice.primary.heading}
          components={components}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-5xl gap-x-8 gap-y-12 mx-auto">
        {slice.primary.testimonals.map((item, index) => {
          const testimonial = item.testimonal;
          if (isFilled.contentRelationship(testimonial) && testimonial.data) {
            return (
              <div
                key={index}
                className="rounded-lg bg-white shadow-lg py-4 px-4 md:px-8 grid content-between"
              >
                <PrismicRichText
                  field={testimonial.data.quote}
                  components={components}
                />
                <div className="flex items-center mt-8">
                  <PrismicImage
                    field={testimonial.data.avatar}
                    className="rounded-full mr-4"
                    width={56}
                    height={56}
                    imgixParams={{ ar: "1:1", fit: "crop" }}
                  />
                  <div className="flex flex-col">
                    <p className="text-base font-medium text-slate-700">
                      {testimonial.data.name}
                    </p>
                    <p className="text-base text-slate-600">
                      {testimonial.data.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </Bounded>
  );
};

export default Testimonials;
