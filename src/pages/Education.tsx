const Education = () => {
  return (
    <main>
      <div id="certificates-and-education" className="bg-slate-300">
        <div className="container py-10 md:py-20">
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-between gap-10">
            {/* left side */}
            <div className="space-y-5 w-full">
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold">
                  Certificates
                </h1>
              </div>
              <div>
                <div className="grid grid-cols-1 w-full h-full gap-5">
                  {/* 1st */}
                  <div className="rounded-md shadow-lg p-5 bg-white">
                    <h2 className="text-2xl font-medium">
                      Web Development Training
                    </h2>
                    <h1>
                      Successfully completed a 8 weeks online certified training
                      on Web Development. The training consisted of HTML, CSS,
                      Bootstrap, DBMS, PHP, JS, React, and Final Project
                      modules. I scored 95% in the final assessment and was a
                      top performer in the training.
                    </h1>
                    <h3 className="text-lg font-medium">
                      Provider :- Internshala Trainings
                    </h3>
                  </div>
                  {/* 2nd */}
                  <div className="rounded-md shadow-lg p-5 bg-white">
                    <h2 className="text-2xl font-medium">
                      Full Stack Web Development Bootcamp 2023
                    </h2>
                    <h1>
                      Successfully completed a 65 hours online certified
                      training on Full Stack Web Development. The training
                      consisted of HTML, CSS, Bootstrap, JS, React, NodeJS,
                      ExpressJS, MongoDB, Mongoose and Final Project modules.
                    </h1>
                    <h3 className="text-lg font-medium">Provider :- Udemy</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* right side */}
            <div className="space-y-5 w-full">
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold">
                  Education
                </h1>
              </div>
              <div>
                <div className="grid grid-cols-1 w-full h-full gap-5">
                  {/* 1st */}
                  <div className="rounded-md shadow-lg p-5 bg-white">
                    <h2 className="text-2xl font-medium">
                      Bachelor of Commerce &#40;B.Com&#41;, Commerce With Maths
                    </h2>
                    <h1>School Of Open Learning, University Of Delhi</h1>
                    <h3 className="text-lg font-medium">2020 - 2023</h3>
                  </div>
                  {/* 2nd */}
                  <div className="rounded-md shadow-lg p-5 bg-white">
                    <h2 className="text-2xl font-medium">
                      Senior Secondary &#40;XII&#41;, Commerce With Maths
                    </h2>
                    <h1>Vidya Bhawan Mahavidyalaya Senior Secondary School</h1>
                    <h4>&#40;CBSE Board&#41;</h4>
                    <h3 className="text-lg font-medium">
                      Year of completion: 2020
                    </h3>
                  </div>
                  {/* 3rd */}
                  <div className="rounded-md shadow-lg p-5 bg-white">
                    <h2 className="text-2xl font-medium">
                      Secondary &#40;X&#41;
                    </h2>
                    <h1>Vidya Bhawan Mahavidyalaya Senior Secondary School</h1>
                    <h4>&#40;CBSE Board&#41;</h4>
                    <h3 className="text-lg font-medium">
                      Year of completion: 2018
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Education;
