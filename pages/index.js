import { useCallback, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Property1DefaultProperty2 from "../components/property1-default-property2";
import Property1Variant2 from "../components/property1-variant2";

const LandingPage1 = () => {
  const router = useRouter();

  const onButton3Click = useCallback(() => {
    router.push("/departments1");
  }, [router]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onTseciveLowResolutionColorLImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div
      className="relative [background:linear-gradient(189.41deg,_#f3fffd,_#f6f6f6)] w-full h-[909px] overflow-hidden text-left text-[64px] text-black font-poppins [&.animate]:lg:animate-[1s_ease_0s_1_normal_forwards_fade-in] lg:opacity-[0]"
      data-animate-on-scroll
    >
      <img
        className="absolute top-[151px] left-[129px] w-[748px] h-[600px] object-cover"
        alt=""
        src="/young-man-with-laptop-computer-working-at-home-office@2x.png"
      />
      <h1 className="m-0 absolute top-[225px] left-[877px] text-inherit tracking-[-0.02em] leading-[130%] capitalize font-semibold font-inherit inline-block w-[517px]">
        <span>{`Make your `}</span>
        <span className="text-lightseagreen">work</span>
        <span>{` easier with us `}</span>
      </h1>
      <h2 className="m-0 absolute top-[406px] left-[883px] text-sm tracking-[0.02em] font-normal font-inter text-gray-200 inline-block w-[505px]">
        <p className="m-0 leading-[129.09%]">{`Discover TSECive, your go-to hub for organized, diverse educational resources. `}</p>
        <p className="m-0 leading-[129.09%]">&nbsp;</p>
        <p className="m-0 leading-[129.09%]">
          Break free from the search for quality content with our user-friendly
          platform, combining freemium access and collaborative contributions,
          transforming how students learn and share.
        </p>
      </h2>
      <Property1DefaultProperty2
        property1DefaultProperty21="Get started"
        property1DefaultProperty2Display="unset"
        property1DefaultProperty2FlexDirection="unset"
        property1DefaultProperty2AlignItems="unset"
        property1DefaultProperty2JustifyContent="unset"
        property1DefaultProperty2Position="absolute"
        property1DefaultProperty2Top="593px"
        property1DefaultProperty2Left="887px"
        property1DefaultProperty2Cursor="pointer"
        onButton3Click={onButton3Click}
      />
      <div className="absolute top-[0px] left-[0px] bg-white w-[1512px] h-[99px]" />
      <div className="absolute top-[30px] left-[calc(50%_-_196px)] w-[649px] h-[41px]">
        <div className="absolute top-[0px] left-[calc(50%_-_324.5px)] rounded-7xl box-border w-[649px] h-[41px] border-[1px] border-solid border-lightgray" />
        <input
          className="[border:none] font-poppins text-sm bg-[transparent] absolute top-[10px] left-[calc(50%_-_280.5px)] capitalize text-gray-100 text-left inline-block w-[566px] h-[21px] [outline:none]"
          placeholder="Search..."
          type="text"
        />
        <img
          className="absolute top-[8px] left-[calc(50%_-_314.5px)] w-6 h-6"
          alt=""
          src="/search-light.svg"
        />
      </div>
      <Property1Variant2
        property1Variant2Property1="POST"
        property1Variant2Display="unset"
        property1Variant2FlexDirection="unset"
        property1Variant2AlignItems="unset"
        property1Variant2JustifyContent="unset"
        property1Variant2Position="absolute"
        property1Variant2Top="27px"
        property1Variant2Left="1311px"
      />
      <img
        className="absolute w-[8%] top-[3px] right-[85.38%] left-[6.61%] max-w-full overflow-hidden h-[103px] object-cover cursor-pointer"
        alt=""
        src="/tsecivelowresolutioncolorlogoremovebgpreview-1@2x.png"
        onClick={onTseciveLowResolutionColorLImageClick}
      />
    </div>
  );
};

export default LandingPage1;
