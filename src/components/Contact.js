import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        {/* <div className="container my-24 px-6 mx-auto">
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
        </div> */}
        <section class="body-font relative text-gray-600">
          <div class="absolute inset-0 bg-gray-300">
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.7100331850015!2d120.90168719018311!3d14.38618145513054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd8e1da39b51159a!2zMTTCsDIzJzEwLjIiTiAxMjDCsDU0JzA3LjgiRQ!5e0!3m2!1sen!2sph!4v1669635122779!5m2!1sen!2sph"
            ></iframe>
          </div>
          <div class="container mx-auto flex px-5 py-24">
            <div class="relative z-10 mt-10 flex w-full flex-col rounded-lg bg-white p-8 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3">
              <h2 class="title-font mb-1 text-lg font-medium text-gray-900">
                Feedback
              </h2>
              <p class="mb-5 leading-relaxed text-gray-600">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <div class="relative mb-4">
                <label for="email" class="text-sm leading-7 text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
              </div>
              <div class="relative mb-4">
                <label for="message" class="text-sm leading-7 text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                ></textarea>
              </div>
              <button class="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                Button
              </button>
              <p class="mt-3 text-xs text-gray-500">
                Chicharrones blog helvetica normcore iceland tousled brook viral
                artisan.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
