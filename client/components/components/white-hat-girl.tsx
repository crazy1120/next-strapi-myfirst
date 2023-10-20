import { useSelector } from "react-redux";

import { LeftComponent, MobileComponent } from "./heroContents";

const WhiteHatGirl = ({ data }: { data: Hero }) => {
  const { type }: { type: string } = useSelector(
    (state: { device: { type: string } }) => state.device
  );

  const { title, desc, link, theme_color, laptop_image, mobile_image } = data;
  const props = { title, desc, link, theme_color };

  return (
    <section className={`bg-${theme_color} sm:h-[700px] lg:h-[924px]`}>
      <div className="max-w-[1440px] lg:mx-auto hero-component">
        {type === "mobile" ? (
          <MobileComponent
            data={props}
            image={mobile_image}
            image_width={372}
          />
        ) : (
          <LeftComponent
            data={props}
            image={laptop_image}
            image_width={668}
            classname={
              "top-[250px] right-9 lg:top-[300px] lg:right-11 2xl:top-[232px] 2xl:right-[63px] w-[400px] lg:w-[550px] 2xl:w-[668px]"
            }
          />
        )}
      </div>
    </section>
  );
};

export default WhiteHatGirl;
