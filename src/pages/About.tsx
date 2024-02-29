import myImage from "../assets/profile-img.webp"

const About = () => {
  return (
    <main>
      <div>
        <div className="py-10 sm:py-10 md:py-10 lg:py-20 container">
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-center justify-between gap-10">
            {/* left side */}
            <div className="w-full flex items-center justify-center lg:inline">
              <img
                height={280}
                width={280}
                className="rounded-2xl border shadow-xl text-center"
                src={myImage}
                alt="profile-image-aayush-singh-web developer"
              />
            </div>
            {/* right side */}
            <div className="md:w-full rounded-lg border shadow-2xl">
              <div className="p-5 md:p-10 space-y-3">
                <div className="text-center text-3xl underline underline-offset-4 italic">
                  About Me
                </div>
                <div className="text-lg text-justify font-medium">
                  <h1>
                    &quot;I am a seasoned full-stack web developer with over 6
                    projects under my belt, specializing in the MERN
                    &#40;MongoDB, Express.js, React, Node.js&#41; stack.
                    Proficient in both vanilla languages &#40;HTML, CSS,
                    JavaScript&#41; and the latest technologies, I bring a
                    wealth of experience in crafting robust and scalable web
                    applications. My skill set extends to incorporating
                    TypeScript, enhancing code quality and maintainability by
                    introducing static typing. I am passionate about staying
                    abreast of industry trends and continuously seeking
                    opportunities to optimize and innovate in the dynamic world
                    of web development.&quot;
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
