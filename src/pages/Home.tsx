import Typewriter from "typewriter-effect";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { IoDocumentAttachOutline } from "react-icons/io5";
import resume from "../assets/Aayush_Singh.pdf"

const Home = () => {
  return (
    <main>
      <div className="bg-black">
        <div className="py-10 sm:py-10 md:py-10 lg:py-20 xl:py-20">
          <div className="text-white text-center font-medium">
            <div className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl ">
              Hi, 👋🏽 I am a
            </div>
            <div className="text-yellow-300 text-3xl sm:text-3xl md:text-3xl lg:text-5xl my-5">
              <Typewriter
                options={{
                  strings: [
                    "Front-End Developer !",
                    "Back-End Developer !",
                    "MERN Stack Developer !",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                }}
              />
            </div>
          </div>
          {/* two buttons */}
          <div className="pt-8">
            <div className="flex items-center justify-evenly">
              <div>
                <a href="https://github.com/singh2034" target="_blank">
                  <Button className="bg-[#3B8FF3] py-6 hover:bg-[#fff] text-[#fff] hover:text-[#3B8FF3] flex items-center gap-3">
                    <FaGithub size={30} />
                    My Github
                  </Button>
                </a>
              </div>
              <div>
                <a
                  href={resume}
                  download={"Aayush_Singh_Profile"}
                >
                  <Button className="bg-[#FC6A03] py-6 hover:bg-[#fff] text-[#fff] hover:text-[#FC6A03] flex items-center gap-3">
                    <IoDocumentAttachOutline size={30} />
                    My Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
