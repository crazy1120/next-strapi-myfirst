import { useSelector } from "react-redux";

import { CenterComponent, MobileComponent } from "./heroContents";

const WhiteCameraOnly = ({ data }: { data: Hero }) => {
  const { type }: { type: string } = useSelector(
    (state: { device: { type: string } }) => state.device
  );

  const { title, desc, link, theme_color, laptop_image, mobile_image } = data;
  const props = { title, desc, link, theme_color };

  return (
    <section
      className={`flex justify-center items-center bg-${theme_color} sm:h-[700px] lg:h-[924px]`}>
      <div className="relative max-w-[1440px] lg:mx-auto hero-component">
        {type === "mobile" ? (
          <MobileComponent
            data={props}
            image={mobile_image}
            image_width={220}
          />
        ) : (
          <CenterComponent data={props} image={laptop_image} />
        )}
      </div>
    </section>
  );
};

export default WhiteCameraOnly;
