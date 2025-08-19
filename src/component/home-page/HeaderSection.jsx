

const HeaderSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        {/* <source src="/background.mp4" type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Let FrenzoPay Solve Payments!
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We facilitate seamless transactions with a multitude of entrepreneurs
          and businesses, and aim to sustain and strengthen, develop and
          innovate digital payment services in India
        </p>
        <button className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-900 transition">
          Get In Touch
        </button>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div>
            <h3 className="text-3xl font-bold">99%+</h3>
            <p className="text-sm">Platform Uptime</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">95%+</h3>
            <p className="text-sm">Transaction Success Rates</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-sm">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
