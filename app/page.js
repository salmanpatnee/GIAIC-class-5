import Image from "next/image";

export default function Home() {
  return (
    <main className="py-10">
      <div className="flex justify-center items-center  bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="bg-blue-50 shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-blue-700 mb-2">HTML</h2>
            <p className="text-blue-600">
              HTML (Hypertext Markup Language) is the standard language for
              structuring and presenting content on the web.
            </p>
          </div>
          <div className="bg-green-50 shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-green-700 mb-2">CSS</h2>
            <p className="text-green-600">
              CSS (Cascading Style Sheets) is used to style HTML elements,
              controlling layout, colors, fonts, and overall visual
              presentation.
            </p>
          </div>
          <div className="bg-yellow-50 shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-yellow-700 mb-2">
              JavaScript
            </h2>
            <p className="text-yellow-600">
              JavaScript is a versatile programming language that enables
              dynamic interactions and functionality on web pages.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          <div className="bg-blue-50 shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-blue-700 mb-2">
              Tailwind CSS
            </h2>
            <p className="text-blue-600">
              Tailwind CSS is a utility-first CSS framework that provides a
              low-level API for building custom designs quickly.
            </p>
          </div>
          <div className="bg-green-50 shadow-md rounded-lg p-6">
            <h2 className="text-lg font-semibold text-green-700 mb-2">
              Next.js
            </h2>
            <p className="text-green-600">
              Next.js is a React-based framework for building fast, scalable web
              applications with server-side rendering and static site
              generation.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
