import { useSelector } from "react-redux";

import { LeftComponent, MobileComponent } from "./heroContents";

const PurpleHandCamera = ({ data }: { data: Hero }) => {
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
            image_width={318}
            bottom={true}
          />
        ) : (
          <LeftComponent
            data={props}
            image={laptop_image}
            image_width={1282}
            classname={"top-[250px] lg:top-[200px] 2xl:top-[103px] right-0"}
          />
        )}
      </div>
    </section>
  );
};

export default PurpleHandCamera;
