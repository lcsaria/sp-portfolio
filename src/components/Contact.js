import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen "
    >
      <div className="max-w-screen-lg flex flex-col justify-center w-full h-full text-white">
        <iframe
          className="p-4"
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.7100331850015!2d120.90168719018311!3d14.38618145513054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbd8e1da39b51159a!2zMTTCsDIzJzEwLjIiTiAxMjDCsDU0JzA3LjgiRQ!5e0!3m2!1sen!2sph!4v1669635122779!5m2!1sen!2sph"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
