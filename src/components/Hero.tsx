import bannerStack from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
          Build Your Ideal{" "}
          <span className="text-gradient">Development Stack</span>
        </h1>
        <p className="mt-6 text-gray-500 text-lg max-w-md">
          Explore modern frontend, backend, database, and DevOps technologies,
          then curate the exact combination you want to use on your next
          project.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#technologies"
            className="px-6 py-3 rounded-full text-white font-semibold bg-brand-gradient hover:opacity-90 transition-opacity"
          >
            Explore Technologies
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-full font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={bannerStack}
          alt="Dev stack illustration"
          className="w-full max-w-md object-contain"
        />
      </div>
    </section>
  );
}
