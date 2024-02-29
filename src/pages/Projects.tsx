import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <main>
      <div className="bg-slate-200">
        <div className="container py-10 md:py-20">
          <div className="text-center space-y-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium underline underline-offset-4">
              My Projects
            </h1>
            <h2 className="text-lg font-medium text-center">
              This Includes all my personal and live projects.
            </h2>
          </div>
          <div className="mt-5">
            {/* project tech stack lists */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full h-full">
              {/* 1st */}
              <div className="bg-white p-5 rounded-md space-y-5">
                <div>
                  <img
                    className="rounded-lg"
                    src="/src/assets/moreslides.png"
                    alt="moreslides-website-project-work"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 w-full rounded-full">
                  <Button className="text-[1.01rem]">HTML</Button>
                  <Button className="text-[1.01rem]">CSS</Button>
                  <Button className="text-[1.01rem]">BootStrap</Button>
                  <Button className="text-[1.01rem]">JavaScript</Button>
                </div>
                <div>
                  <h2 className="text-center text-xl font-medium">
                    MoreSlides.com
                  </h2>
                </div>
                <div className="text-center">
                  <a href="https://moreslides.com/" target="_blank">
                    <Button className="bg-[#3B8FF3] text-[1.01rem]">
                      View
                    </Button>
                  </a>
                </div>
              </div>
              {/* 2nd */}
              <div className="bg-white p-5 rounded-md space-y-5">
                <div>
                  <img
                    className="rounded-lg"
                    src="/src/assets/morestudios.png"
                    alt="moreslides-website-project-work"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 w-full rounded-full">
                  <Button className="text-[1.01rem]">HTML</Button>
                  <Button className="text-[1.01rem]">CSS</Button>
                  <Button className="text-[1.01rem]">BootStrap</Button>
                  <Button className="text-[1.01rem]">JavaScript</Button>
                  <Button className="text-[1.01rem]">PHP</Button>
                </div>
                <div>
                  <h2 className="text-center text-xl font-medium">
                    MoreStudios.in
                  </h2>
                </div>
                <div className="text-center">
                  <a href="https://morestudios.in/" target="_blank">
                    <Button className="bg-[#3B8FF3] text-[1.01rem]">
                      View
                    </Button>
                  </a>
                </div>
              </div>
              {/* 3rd */}
              <div className="bg-white p-5 rounded-md space-y-5">
                <div>
                  <img
                    className="rounded-lg"
                    src="/src/assets/diipl.png"
                    alt="moreslides-website-project-work"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 w-full rounded-full">
                  <Button className="text-[1.01rem]">HTML</Button>
                  <Button className="text-[1.01rem]">CSS</Button>
                  <Button className="text-[1.01rem]">PHP</Button>
                  <Button className="text-[1.01rem]">JavaScript</Button>
                </div>
                <div>
                  <h2 className="text-center text-xl font-medium">
                    Digital International Intermesh Pvt. Ltd.
                  </h2>
                </div>
                <div className="text-center">
                  <a
                    href="https://digitalinternationalintermesh.com/"
                    target="_blank"
                  >
                    <Button className="bg-[#3B8FF3] text-[1.01rem]">
                      View
                    </Button>
                  </a>
                </div>
              </div>
              {/* 4th */}
              <div className="bg-white p-5 rounded-md space-y-5">
                <div>
                  <img
                    className="rounded-lg"
                    src="/src/assets/we-digital-india.png"
                    alt="moreslides-website-project-work"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 w-full rounded-full">
                  <Button className="text-[1.01rem]">HTML</Button>
                  <Button className="text-[1.01rem]">CSS</Button>
                  <Button className="text-[1.01rem]">BootStrap</Button>
                  <Button className="text-[1.01rem]">JavaScript</Button>
                  <Button className="text-[1.01rem]">PHP</Button>
                </div>
                <div>
                  <h2 className="text-center text-xl font-medium">
                    We Digital India Pvt. Ltd.
                  </h2>
                </div>
                <div className="text-center">
                  <a href="https://wedigitalindia.com/" target="_blank">
                    <Button className="bg-[#3B8FF3] text-[1.01rem]">
                      View
                    </Button>
                  </a>
                </div>
              </div>
              {/* 5th */}
              <div className="bg-white p-5 rounded-md space-y-5">
                <div>
                  <img
                    className="rounded-lg"
                    src="/src/assets/coursry.png"
                    alt="moreslides-website-project-work"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 w-full rounded-full">
                  <Button className="text-[1.01rem]">HTML</Button>
                  <Button className="text-[1.01rem]">CSS</Button>
                  <Button className="text-[1.01rem]">BootStrap</Button>
                  <Button className="text-[1.01rem]">JavaScript</Button>
                  <Button className="text-[1.01rem]">PHP</Button>
                </div>
                <div>
                  <h2 className="text-center text-xl font-medium">Coursry</h2>
                </div>
                <div className="text-center">
                  <a href="https://coursry.com/" target="_blank">
                    <Button className="bg-[#3B8FF3] text-[1.01rem]">
                      View
                    </Button>
                  </a>
                </div>
              </div>
              {/* 6th */}
              <div className="bg-white p-5 rounded-md space-y-5">
                <div>
                  <img
                    className="rounded-lg"
                    src="/src/assets/growthkul.png"
                    alt="moreslides-website-project-work"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 w-full rounded-full">
                  <Button className="text-[1.01rem]">NextJS</Button>
                  <Button className="text-[1.01rem]">mySQL</Button>
                  <Button className="text-[1.01rem]">TailwindCSS</Button>
                  <Button className="text-[1.01rem]">MongoDB</Button>
                </div>
                <div>
                  <h2 className="text-center text-xl font-medium">
                    Growthkul Pvt. Ltd.
                  </h2>
                </div>
                <div className="text-center">
                  <a href="https://growthkul.com/" target="_blank">
                    <Button className="bg-[#3B8FF3] text-[1.01rem]">
                      View
                    </Button>
                  </a>
                </div>
              </div>
              {/* 7th */}
              <div className="bg-white p-5 rounded-md space-y-5">
                <div>
                  <img
                    className="rounded-lg"
                    src="/src/assets/birthday-planet.png"
                    alt="moreslides-website-project-work"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 w-full rounded-full">
                  <Button className="text-[1.01rem]">HTML</Button>
                  <Button className="text-[1.01rem]">CSS</Button>
                  <Button className="text-[1.01rem]">BootStrap</Button>
                  <Button className="text-[1.01rem]">JavaScript</Button>
                  <Button className="text-[1.01rem]">PHP</Button>
                </div>
                <div>
                  <h2 className="text-center text-xl font-medium">
                    Birthday Planet Pvt. Ltd.
                  </h2>
                </div>
                <div className="text-center">
                  <a href="https://www.birthdayplanet.in/" target="_blank">
                    <Button className="bg-[#3B8FF3] text-[1.01rem]">
                      View
                    </Button>
                  </a>
                </div>
              </div>
              {/* 8th */}
              <div className="bg-white p-5 rounded-md space-y-5">
                <div>
                  <img
                    className="rounded-lg"
                    src="/src/assets/cosmicade-media.png"
                    alt="moreslides-website-project-work"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 w-full rounded-full">
                  <Button className="text-[1.01rem]">React</Button>
                  <Button className="text-[1.01rem]">Vite</Button>
                  <Button className="text-[1.01rem]">TailwindCSS</Button>
                  <Button className="text-[1.01rem]">FormSpree</Button>
                </div>
                <div>
                  <h2 className="text-center text-xl font-medium">
                    Cosmicade Media
                  </h2>
                </div>
                <div className="text-center">
                  <a href="https://cosmicade.netlify.app/" target="_blank">
                    <Button className="bg-[#3B8FF3] text-[1.01rem]">
                      View
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
