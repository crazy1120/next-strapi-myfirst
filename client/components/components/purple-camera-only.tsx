import { useSelector } from "react-redux";

import { LeftComponent, MobileComponent } from "./heroContents";
import { Capa_1, Frame, Shield, Hd } from "@/public/images";
import Image from "next/image";

const PurpleCameraOnly = ({ data }: { data: Hero }) => {
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
            image_width={280}
          />
        ) : (
          <LeftComponent
            data={props}
            image={laptop_image}
            image_width={618}
            classname={
              "top-[300px] right-16 lg:top-[380px] lg:right-20 2xl:top-[268px] 2xl:right-[91px] w-[350px] lg:w-[500px] 2xl:w-[618px]"
            }
          />
        )}
      </div>
      {type !== "mobile" && (
        <div className="w-full flex justify-center">
          <div className="product-feature-list">
            <span>
              <span>
                <Image src={Capa_1} alt="Capa_1" />
              </span>
              <p>16 Megapixels</p>
            </span>
            <span>
              <span>
                <Image src={Hd} alt="Hd" />
              </span>
              <p>Full HD Camera</p>
            </span>
            <span>
              <span>
                <Image src={Frame} alt="Frame" />
              </span>
              <p>Preloaded Frame</p>
            </span>
            <span>
              <span>
                <Image src={Shield} alt="Shield" />
              </span>
              <p>Durable</p>
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default PurpleCameraOnly;
