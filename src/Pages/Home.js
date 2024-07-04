import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, about, img } = personalDetails;

  const handleDownload = () => {
    const url = `https://drive.google.com/uc?export=download&id=1BLIToH9o3My7d4hMDk-Tln3oXPwPFl9p`;
    window.open(url, "_blank");
  };
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <div className="container mx-auto max-width section flex justify-between mb-14 flex-col-reverse md:flex-row">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-white md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hey All<br></br>My Name is{" "}
          <span className="text-teal-400">{name}</span>
          <br></br>
        </h1>
        <p
          ref={h12}
          className="py-8 mr-8 md:max-w-sm lg:max-w-3xl text-justify font-bold text-white"
        >
          {about}
        </p>
        <button
          ref={h13}
          className="rounded-md bg-teal-500 p-3 text-white font-bold"
          onClick={handleDownload}
        >
          Download CV
        </button>
      </div>
      <div className="md:mt-0 md:ml-4">
        <img
          ref={myimageref}
          className="md:ml-auto md:mr-auto mb-4 md:mb-0"
          src={img}
          alt="Profile"
        />
      </div>
    </div>
  );
}

export default Home;
