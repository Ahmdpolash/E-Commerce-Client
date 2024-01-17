import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto my-8 px-2">
        <div className="flex justify-center text-2xl md:text-3xl font-bold mb-4">
          Recent Blogs
        </div>
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
          <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
            <a className="relative" href="/tool/writey-ai">
              <div className="relative w-full aspect-video">
                <img
                  className="rounded w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxrZXlib2FyZHxlbnwwfDB8fHwxNjk5NTI1MDAzfDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Writey A.I"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                  <h2 className="text-xl font-semibold">Writey A.I</h2>
                  <p className="font-medium text-sm">
                    Most advanced language A.I
                  </p>
                </div>
              </div>
            </a>
            <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
              <p className="text-gray-600 two-lines">
                Writey A.I is an AI tool that generates original, researched
                blog posts in minutes, provides content optimization advice, and
                works with a plagiarism-free rule.
              </p>
              <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                <li
                  title="Pricing type"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Freemium</span>
                </li>
              </ul>
              <ul className="flex flex-wrap text-sm gap-2 my-1">
                <li className="flex items-center gap-2">
                  <span>Content Generation,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Marketing,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>SEO,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Writing</span>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
            <a className="relative" href="/tool/writemeai">
              <div className="relative w-full aspect-video">
                <img
                  className="rounded w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxrZXlib2FyZHxlbnwwfDB8fHwxNjk5NTI1MDAzfDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="WriteMe.ai"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                  <h2 className="text-xl font-semibold">WriteMe.ai</h2>
                  <p className="font-medium text-sm">
                    AI Writer - Content Writing Assistant &amp; Creator
                  </p>
                </div>
              </div>
            </a>
            <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
              <p className="text-gray-600 two-lines">
                WriteMe.ai is your #1 AI-powered content writing assistant that
                crafts high-quality content at a fraction of the cost. This
                advanced solution eliminates the need for manual writing and
                allows users to effortlessly generate content in a few clicks.
              </p>
              <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                <li
                  title="Pricing type"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Freemium</span>
                </li>
              </ul>
              <ul className="flex flex-wrap text-sm gap-2 my-1">
                <li className="flex items-center gap-2">
                  <span>Chatbot,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Content Generation,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>General Writing,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Social Media Assistant,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Writing</span>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
            <a className="relative" href="/tool/publer">
              <div className="relative w-full aspect-video">
                <img
                  className="rounded w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1586776977607-310e9c725c37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8a2V5Ym9hcmR8ZW58MHwwfHx8MTY5OTUyNTAwM3ww&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Publer"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                  <h2 className="text-xl font-semibold">Publer</h2>
                  <p className="font-medium text-sm">
                    Your Social Media Superhero
                  </p>
                </div>
              </div>
            </a>
            <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
              <p className="text-gray-600 two-lines">
                Publer is a robust social media management platform offering a
                range of features including post scheduling, collaboration
                tools, analytics, and AI assistance to supercharge your social
                media strategy across multiple platforms.
              </p>
              <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                <li
                  title="Pricing type"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Freemium</span>
                </li>
                <li
                  title="Support for API"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M17 9V12C17 14.7614 14.7614 17 12 17M7 9V12C7 14.7614 9.23858 17 12 17M12 17V21M8 3V6M16 3V6M5 9H19"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>API</span>
                </li>
              </ul>
              <ul className="flex flex-wrap text-sm gap-2 my-1">
                <li className="flex items-center gap-2">
                  <span>Marketing,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Productivity,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Social Media</span>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
            <a className="relative" href="/tool/anyword">
              <div className="relative w-full aspect-video">
                <img
                  className="rounded w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1574012716378-0ca6f4c18c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxrZXlib2FyZHxlbnwwfDB8fHwxNjk5NTI1MDAzfDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Anyword"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                  <h2 className="text-xl font-semibold">Anyword</h2>
                  <p className="font-medium text-sm">
                    Advanced AI Writing Built for Marketing Results
                  </p>
                </div>
              </div>
            </a>
            <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
              <p className="text-gray-600 two-lines">
                Anyword is an AI-powered platform trusted by marketing teams
                across the globe to generate, score, and rank content based on
                predicted performance. With features like Custom Scoring AI
                models, Brand Messaging Management, and a Performance Boost
                Chrome Extension, Anyword provides highly personalized and
                effective content for every channel.
              </p>
              <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                <li
                  title="Pricing type"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Free Trial</span>
                </li>
                <li
                  title="Support for API"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M17 9V12C17 14.7614 14.7614 17 12 17M7 9V12C7 14.7614 9.23858 17 12 17M12 17V21M8 3V6M16 3V6M5 9H19"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>API</span>
                </li>
              </ul>
              <ul className="flex flex-wrap text-sm gap-2 my-1">
                <li className="flex items-center gap-2">
                  <span>Copywriting,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Marketing</span>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
            <a className="relative" href="/tool/blogseo-ai">
              <div className="relative w-full aspect-video">
                <img
                  className="rounded w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxrZXlib2FyZHxlbnwwfDB8fHwxNjk5NTI1MDAzfDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="BlogSEO AI"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                  <h2 className="text-xl font-semibold">BlogSEO AI</h2>
                  <p className="font-medium text-sm">
                    AI Writer for SEO‍ That Follows Best Practices
                  </p>
                </div>
              </div>
            </a>
            <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
              <p className="text-gray-600 two-lines">
                BlogSEO AI revolutionizes SEO writing. Stay at the top of your
                SEO game with this automated writing tool that generates
                high-performing blog content. It also offers keyword research,
                internal linking strategy, schema generation, and more.
              </p>
              <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                <li
                  title="Pricing type"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Free Trial</span>
                </li>
                <li
                  title="Support for API"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M17 9V12C17 14.7614 14.7614 17 12 17M7 9V12C7 14.7614 9.23858 17 12 17M12 17V21M8 3V6M16 3V6M5 9H19"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>API</span>
                </li>
              </ul>
              <ul className="flex flex-wrap text-sm gap-2 my-1">
                <li className="flex items-center gap-2">
                  <span>Marketing,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>SEO,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Content Generation</span>
                </li>
              </ul>
            </div>
          </li>
          <li className="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">
            <a className="relative" href="/tool/typewise">
              <div className="relative w-full aspect-video">
                <img
                  className="rounded w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxrZXlib2FyZHxlbnwwfDB8fHwxNjk5NTI1MDAzfDA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Typewise"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-800 to-gray-500 text-white">
                  <h2 className="text-xl font-semibold">Typewise</h2>
                  <p className="font-medium text-sm">
                    AI Communication Assistant
                  </p>
                </div>
              </div>
            </a>
            <div className="flex flex-col justify-beetween gap-3 px-4 py-2">
              <p className="text-gray-600 two-lines">
                Typewise is an AI Communication Assistant that helps customer
                service and sales teams communicate faster and more effectively.
              </p>
              <ul className="flex flex-wrap items-center justify-start text-sm gap-2">
                <li
                  title="Pricing type"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Contact for Pricing</span>
                </li>
                <li
                  title="Support for API"
                  className="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M17 9V12C17 14.7614 14.7614 17 12 17M7 9V12C7 14.7614 9.23858 17 12 17M12 17V21M8 3V6M16 3V6M5 9H19"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>API</span>
                </li>
              </ul>
              <ul className="flex flex-wrap text-sm gap-2 my-1">
                <li className="flex items-center gap-2">
                  <span>Business,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Communication,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Customer Support,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Email,</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Sales</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
