import React from 'react'

const Services = () => {
  const serviceData = [
    {
      id: 1,
      title: "Web Development",
      description: "Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience"
    },
    {
      id: 2,
      title: "Digital Marketing",
      description: "Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication."
    },
    {
      id: 3,
      title: "App Devlopment",
      description: "Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication."
    },
    {
      id: 4,
      title: "Software Development",
      description: "Software developers design, program, build, deploy and maintain software using many different skills and tools. They also help build software systems that power networks and devices and ensure that those systems remain functional"
    },]
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <p></p>
        </div>

        <div className="row">
          {serviceData.map((curElem) => {
            return (
              <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100" key={curElem.id}>
                <div className="icon-box">
                  <div className="icon"><i className="bx bxl-dribbble"></i></div>
                  <h4><a href="">{curElem.title}</a></h4>
                  <p>{curElem.description}</p>
                </div>
              </div>
            )
          })}






        </div>

      </div>
    </section>
  )
}

export default Services