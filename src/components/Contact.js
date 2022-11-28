import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="container my-24 px-6 mx-auto">
          <div className="block rounded-lg shadow-lg bg-gray-500">
            <div className="flex flex-wrap items-center">
              <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                <div className="w-full" style={{ height: "36rem" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.7100331850015!2d120.90168719018311!3d14.38618145513054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd8e1da39b51159a!2zMTTCsDIzJzEwLjIiTiAxMjDCsDU0JzA3LjgiRQ!5e0!3m2!1sen!2sph!4v1669635122779!5m2!1sen!2sph"
                    className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    frameborder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                <div className="p-4 mb-36">
                  <p className="text-4xl font-bold border-b-4 border-gray-800 p-2 inline">
                    Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
