import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import Property1Variant2 from "../components/property1-variant2";
import Property1Default25 from "../components/property1-default25";
import Property1Default24 from "../components/property1-default24";
import Property1Default23 from "../components/property1-default23";
import Property1Default22 from "../components/property1-default22";
import Property1Default21 from "../components/property1-default21";

const Departments1 = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/semesters1");
  }, [router]);

  const onGroupContainer1Click = useCallback(() => {
    router.push("/semesters1");
  }, [router]);

  const onGroupContainer2Click = useCallback(() => {
    router.push("/semesters1");
  }, [router]);

  const onGroupContainer3Click = useCallback(() => {
    router.push("/semesters1");
  }, [router]);

  const onGroupContainer4Click = useCallback(() => {
    router.push("/semesters1");
  }, [router]);

  const onForwardIconClick = useCallback(() => {
    router.push("/semesters1");
  }, [router]);

  const onForwardIcon1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onTseciveLowResolutionColorLImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="relative [background:linear-gradient(189.41deg,_#f3fffd,_#f6f6f6)] w-full h-[909px] overflow-hidden text-left text-xl text-gray-100 font-poppins">
      <section className="absolute top-[0px] left-[0px] bg-white w-[1512px] h-[99px]" />
      <div className="absolute w-[9.79%] top-[42px] left-[21.83%] capitalize flex items-center h-[21px]">
        Department
      </div>
      <div className="absolute top-[31px] left-[560px] w-[649px] h-[41px]">
        <div className="absolute top-[0px] left-[calc(50%_-_324.5px)] rounded-7xl box-border w-[649px] h-[41px] border-[1px] border-solid border-lightgray" />
        <input
          className="[border:none] font-poppins text-sm bg-[transparent] absolute top-[10px] left-[calc(50%_-_268.5px)] capitalize text-gray-100 text-left inline-block w-[579px] h-[21px] [outline:none]"
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
        property1Variant2Top="28px"
        property1Variant2Left="1311px"
      />
      <div className="absolute top-[41px] left-[250px] w-[64.48px] h-[22px]">
        <img
          className="absolute w-[32.94%] top-[0px] right-[0%] left-[67.06%] max-w-full overflow-hidden h-[22px] object-cover cursor-pointer"
          alt=""
          src="/forward@2x.png"
          onClick={onForwardIconClick}
        />
        <img
          className="absolute w-[34.12%] top-[0px] right-[65.88%] left-[0%] max-w-full overflow-hidden h-[22px] object-cover cursor-pointer"
          alt=""
          src="/forward1@2x.png"
          onClick={onForwardIcon1Click}
        />
      </div>
      <img
        className="absolute w-[8%] top-[4px] right-[85.38%] left-[6.61%] max-w-full overflow-hidden h-[103px] object-cover cursor-pointer"
        alt=""
        src="/tsecivelowresolutioncolorlogoremovebgpreview-1@2x.png"
        onClick={onTseciveLowResolutionColorLImageClick}
      />
      <Property1Default25
        desktop="/desktop2.svg"
        showMortarboardAltIcon={false}
        property1DefaultWidth="16.07%"
        property1DefaultHeight="29.38%"
        property1DefaultPosition="absolute"
        property1DefaultTop="18.86%"
        property1DefaultRight="65.28%"
        property1DefaultBottom="51.75%"
        property1DefaultLeft="18.65%"
        property1DefaultCursor="pointer"
        onGroupContainerClick={onGroupContainerClick}
      />
      <Property1Default24
        informatics="/informatics1@2x.png"
        property1DefaultWidth="16.14%"
        property1DefaultHeight="29.38%"
        property1DefaultPosition="absolute"
        property1DefaultTop="18.86%"
        property1DefaultRight="41.93%"
        property1DefaultBottom="51.75%"
        property1DefaultLeft="41.93%"
        property1DefaultCursor="pointer"
        onGroupContainer1Click={onGroupContainer1Click}
      />
      <Property1Default23
        artificialIntelligence="/artificial-intelligence1@2x.png"
        property1DefaultWidth="16.07%"
        property1DefaultHeight="29.38%"
        property1DefaultPosition="absolute"
        property1DefaultTop="18.86%"
        property1DefaultRight="18.65%"
        property1DefaultBottom="51.75%"
        property1DefaultLeft="65.28%"
        property1DefaultCursor="pointer"
        onGroupContainer2Click={onGroupContainer2Click}
      />
      <Property1Default22
        labItems="/lab-items1@2x.png"
        property1DefaultWidth="16.27%"
        property1DefaultHeight="29.38%"
        property1DefaultPosition="absolute"
        property1DefaultTop="54.77%"
        property1DefaultRight="53.64%"
        property1DefaultBottom="15.85%"
        property1DefaultLeft="30.09%"
        property1DefaultCursor="pointer"
        onGroupContainer3Click={onGroupContainer3Click}
      />
      <Property1Default21
        electronics="/electronics1@2x.png"
        property1DefaultWidth="16.2%"
        property1DefaultHeight="29.38%"
        property1DefaultPosition="absolute"
        property1DefaultTop="54.77%"
        property1DefaultRight="30.16%"
        property1DefaultBottom="15.85%"
        property1DefaultLeft="53.64%"
        property1DefaultCursor="pointer"
        onGroupContainer4Click={onGroupContainer4Click}
      />
    </div>
  );
};

export default Departments1;
