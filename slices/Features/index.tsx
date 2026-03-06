import { FC } from "react";
import { Content } from "@prismicio/client";
import Bounded from "@/components/Bounded";
import { PrismicRichText, SliceComponentProps, RichTextComponents } from "@prismicio/react";
import Heading from "@/components/Heading";


export const components: RichTextComponents = {
  heading2: ({ children }) => (
    <Heading as="h2" size="lg" className={`text-center mb-12`}>
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading
      as="h3"
      size="lg"
      className={`mb-3 font-medium sm:text-left text-center`}
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p
      className={`text-base font-medium font-body text-slate-600 sm:text-left text-center`}
    >
      {children}
    </p>
  ),
};


const CalendarIcon: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
    <path
      stroke="#0891b2"
      strokeWidth="4.991"
      d="M6.667 40c0-12.57 0-18.856 3.905-22.761 3.905-3.906 10.19-3.906 22.761-3.906h13.334c12.57 0 18.856 0 22.761 3.906 3.905 3.905 3.905 10.19 3.905 22.761v6.667c0 12.57 0 18.856-3.905 22.761s-10.19 3.905-22.761 3.905H33.333c-12.57 0-18.856 0-22.761-3.905s-3.905-10.19-3.905-22.761z"
    ></path>
    <path
      stroke="#0891b2"
      strokeLinecap="round"
      strokeOpacity="0.5"
      strokeWidth="4.991"
      d="M23.333 13.333v-5m33.334 5v-5M8.333 30h63.334"
    ></path>
    <path
      fill="#0891b2"
      d="M60 56.667a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0m0-13.334a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0M43.333 56.667a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0m0-13.334a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0M26.667 56.667a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0m0-13.334a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0"
    ></path>
  </svg>
);

const GraphIcon: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
    <g stroke="#0891b2" strokeWidth="4.991" clipPath="url(#a)">
      <path strokeLinecap="round" d="M73.333 73.333H6.667"></path>
      <path
        strokeOpacity="0.5"
        d="M70 73.333v-25a5 5 0 0 0-5-5H55a5 5 0 0 0-5 5v25"
      ></path>
      <path d="M50 73.333V16.667c0-4.714 0-7.071-1.465-8.536-1.463-1.464-3.82-1.464-8.535-1.464s-7.071 0-8.535 1.464C30 9.596 30 11.953 30 16.667v56.666"></path>
      <path
        strokeOpacity="0.5"
        d="M30 73.333V31.667a5 5 0 0 0-5-5H15a5 5 0 0 0-5 5v41.666"
      ></path>
    </g>
    <defs>
      <clipPath id="a">
        <rect width="80" height="80" fill="#fff" rx="16.636"></rect>
      </clipPath>
    </defs>
  </svg>
);

const CloverIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
    <g stroke="#0891b2" strokeWidth="4.991" clipPath="url(#a)">
      <path strokeOpacity="0.5" d="M26.667 26.667h26.666v26.666H26.667z"></path>
      <path d="m53.333 53.337 10-.002c5.523 0 10.001 4.476 10.002 9.999 0 5.522-4.476 10-9.999 10.001-5.522 0-10-4.475-10.001-9.998zm-26.663 0-10-.002c-5.523 0-10 4.476-10.002 9.999 0 5.522 4.476 10 9.999 10.001 5.522 0 10-4.475 10.001-9.998zm26.663-26.67 10 .001c5.523.001 10.001-4.475 10.002-9.998 0-5.523-4.476-10-9.999-10.002-5.522 0-10 4.476-10.001 9.999zm-26.663 0-10 .001c-5.523.001-10-4.475-10.002-9.998 0-5.523 4.476-10 9.999-10.002 5.522 0 10 4.476 10.001 9.999z"></path>
    </g>
    <defs>
      <clipPath id="a">
        <rect width="80" height="80" fill="#fff" rx="16.636"></rect>
      </clipPath>
    </defs>
  </svg>
);

const HourglassIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none">
    <g stroke="#0891b2" strokeWidth="4.991" clipPath="url(#a)">
      <path d="M49.859 30.237 40 40l-9.859-9.763c-9.742-9.647-14.612-14.47-13.249-18.632q.176-.538.436-1.04C19.335 6.666 26.223 6.666 40 6.666s20.665 0 22.673 3.897q.259.503.435 1.041c1.363 4.162-3.507 8.985-13.249 18.632Z"></path>
      <path
        strokeOpacity="0.5"
        d="M30.141 49.763 40 40l9.859 9.763C59.6 59.41 64.47 64.233 63.108 68.395a7 7 0 0 1-.435 1.04c-2.008 3.898-8.896 3.898-22.673 3.898s-20.665 0-22.672-3.897a7 7 0 0 1-.436-1.041c-1.364-4.162 3.507-8.985 13.249-18.632Z"
      ></path>
    </g>
    <defs>
      <clipPath id="a">
        <rect width="80" height="80" fill="#fff" rx="16.636"></rect>
      </clipPath>
    </defs>
  </svg>
);

const icons = {
  calendar: <CalendarIcon />,
  graph: <GraphIcon />,
  clover: <CloverIcon />,
  hourglass: <HourglassIcon />,
};

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features: FC<FeaturesProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={components} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start md:place-items-center">
        {slice.primary.features.map((feature, index) => (
          <div key={index} className="max-w-xs grid sm:place-items-start place-items-center">
            {feature.icon && (
              <div className="mb-5">{icons[feature.icon as keyof typeof icons]}</div>
            )}
            <PrismicRichText field={feature.title} components={components} />
            <PrismicRichText
              field={feature.description}
              components={components}
            />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Features;
