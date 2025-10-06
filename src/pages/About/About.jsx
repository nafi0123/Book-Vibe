import React from "react";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto p-8 mt-12 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-extrabold text-green-600 mb-6">
        About BookVibe
      </h1>

      <p className="text-gray-700 text-lg mb-4 leading-relaxed">
        Welcome to <span className="font-semibold text-green-600">BookVibe</span>, your
        ultimate destination for refreshing your bookshelf with the best
        collection of books. We are passionate about connecting readers with
        captivating stories and insightful knowledge.
      </p>

      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
        Our mission is to inspire lifelong learning and a love for reading by
        curating lists of books across genres that cater to every kind of
        reader. Whether you're seeking thrilling fiction, insightful
        non-fiction, or inspirational self-help, we've got you covered.
      </p>

      <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 shadow transition duration-300">
        Explore Our Collection
      </button>
    </section>
  );
};

export default About;
