import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <h1 className="text-3xl text-center text-white md:text-4xl xl:text-5xl xl:leading-tight font-bold mb-8">
        Resume
      </h1>
      {/* <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          About Me
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
      </section> */}

      <section>
        <h1 className="text-2xl text-white md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Institute, Major, Location, Duration }) => (
            <Work
              position={Institute}
              company={Major}
              location={Location}
              duration={Duration}
            />
          ))
        )}
      </section>

      <section>
        <h1 className="text-2xl pt-10 text-white md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Sertifikasi
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
