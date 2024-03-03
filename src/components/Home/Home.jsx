import React from 'react'
import { Link } from 'react-router-dom';
// import { useState } from 'react';

export default function Home() {
    return (


        <>
        <div className="relative w-full bg-white">
  <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
    <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
      <svg
        width={30}
        height={36}
        viewBox="0 0 50 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
          fill="black"
        />
      </svg>
      <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
        <div className="rounded-full bg-white p-1 px-2">
          <p className="text-sm font-medium">We' hiring</p>
        </div>
        <p className="text-sm font-medium">Join our team →</p>
      </div>
      <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
        People who care about your growth
      </h1>
      <p className="mt-8 text-lg text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        modi blanditiis dolores quasi eaque explicabo!
      </p>
      <form action="" className="mt-8 flex items-start space-x-2">
        <div>
          <input
            className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="email"
            placeholder="Enter your email"
            id="email"
          />
          <p className="mt-2 text-sm text-gray-500">
            We care about your privacy
          </p>
        </div>
        <div>
          <Link
            type="button"
            className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Subscribe
          </Link>
        </div>
      </form>
    </div>
    <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
      <img
        className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
        src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
    </div>
  </div>
</div>

<div className="mx-auto max-w-7xl px-2 md:px-4">
 
  <div>
    <div className="mx-auto flex max-w-5xl flex-col space-y-8 pb-10 pt-12 md:pt-24">
      <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
        PRICING PLAN
      </p>
      <p className="max-w-3xl text-base text-gray-600 md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        veritatis voluptates neque itaque repudiandae sint, explicabo assumenda
        quam ratione placeat?
      </p>
    </div>
    <div className="mt-8 space-y-4 md:mt-12">
      <div className="grid space-y-8 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3 lg:space-x-8">
        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="flex w-full flex-col justify-start space-y-4 px-8 pt-10">
            <p className="text-4xl font-bold leading-10">$10/mth</p>
            <div className="flex w-full flex-col items-start justify-start space-y-1">
              <p className="w-full text-xl font-semibold leading-loose text-gray-900">
                Basic plan
              </p>
              <p className="w-full text-base leading-normal text-gray-600">
                Billed annually.
              </p>
            </div>
          </div>
          <div className="flex w-full max-w-sm flex-col px-8 py-8">
            <div className="flex w-full flex-col items-start justify-start space-y-3">
              <button
                type="button"
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get Started
              </button>
              <button
                type="button"
                className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start px-8 pb-8">
            <div className="flex w-full flex-col space-y-4">
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full p-1 lg:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Access to all basic features{"{"}" "{"}"}
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full p-1 lg:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Basic reporting and analytics
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full p-1 lg:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Up to 10 individual users
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full p-1 lg:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  20GB individual data each user
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full p-1 lg:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Basic chat and email support
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="flex w-full flex-col justify-start space-y-4 px-8 pt-10">
            <p className="text-4xl font-bold leading-10">$20/mth</p>
            <div className="flex w-full flex-col items-start justify-start space-y-1">
              <p className="w-full text-xl font-semibold leading-loose text-gray-900">
                Business plan
              </p>
              <p className="w-full text-base leading-normal text-gray-600">
                Billed annually.
              </p>
            </div>
          </div>
          <div className="flex w-full max-w-sm flex-col px-8 py-8">
            <div className="flex w-full flex-col items-start justify-start space-y-3">
              <button
                type="button"
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get Started
              </button>
              <button
                type="button"
                className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start px-8 pb-8">
            <div className="flex w-full flex-col space-y-4">
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full p-1 lg:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  200+ integrations
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full p-1 lg:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Advanced reporting and analytics
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full p-1 lg:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Up to 20 individual users
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full p-1 lg:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  40GB individual data each user
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full p-1 lg:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Priority chat and email support
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white">
          <div className="flex w-full flex-col justify-start space-y-4 px-8 pt-10">
            <p className="text-4xl font-bold leading-10">$40/mth</p>
            <div className="flex w-full flex-col items-start justify-start space-y-1">
              <p className="w-full text-xl font-semibold leading-loose text-gray-900">
                Enterprise plan
              </p>
              <p className="w-full text-base leading-normal text-gray-600">
                Billed annually.
              </p>
            </div>
          </div>
          <div className="flex w-full max-w-sm flex-col px-8 py-8">
            <div className="flex w-full flex-col items-start justify-start space-y-3">
              <button
                type="button"
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get Started
              </button>
              <button
                type="button"
                className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-start px-8 pb-8">
            <div className="flex w-full flex-col space-y-4">
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full p-1 lg:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Advanced custom fields
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full p-1 lg:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Audit log and data history
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full p-1 lg:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Unlimited individual users
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full p-1 lg:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Unlimited individual data
                </p>
              </div>
              <div className="inline-flex w-full space-x-3">
                <div className="flex items-center justify-center rounded-full p-1 lg:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="w-full text-base leading-normal text-gray-600">
                  Personalized+priority service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-12 space-y-16 bg-gray-50 py-16">
      <div className="mx-auto  flex max-w-7xl items-center justify-center  px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6 md:w-3/4">
          <div className="space-y-4 justify-self-center">
            <p className="text-center text-3xl font-bold leading-10 text-gray-900">
              Frequently asked questions
            </p>
            <p className="text-center text-lg leading-loose text-gray-600">
              Everything you need to know about the product and billing.
            </p>
          </div>
          <div className="divide-y divide-gray-300">
            <div className="flex justify-between space-x-6 py-6">
              <div className="inline-flex flex-col items-start justify-start space-y-2">
                <p className="text-lg font-medium leading-7 text-gray-900">
                  Is there a free trial available?
                </p>
                <p className="text-base leading-normal text-gray-600">
                  Yes, you can try us for free for 30 days. If you want, we’ll
                  provide you with a free, personalized 30-minute onboarding
                  call to get you up and running as soon as possible.
                </p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-gray-600"
                >
                  <circle cx={12} cy={12} r={10} />
                  <line x1={8} y1={12} x2={16} y2={12} />
                </svg>
              </div>
            </div>
            <div className="flex justify-between space-x-6 py-6">
              <div className="inline-flex flex-col items-start justify-start space-y-2">
                <p className="text-lg font-medium leading-7 text-gray-900">
                  Can I change my plan later?
                </p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-gray-600"
                >
                  <circle cx={12} cy={12} r={10} />
                  <line x1={12} y1={8} x2={12} y2={16} />
                  <line x1={8} y1={12} x2={16} y2={12} />
                </svg>
              </div>
            </div>
            <div className="flex justify-between space-x-6 py-6">
              <div className="inline-flex flex-col items-start justify-start space-y-2">
                <p className="text-lg font-medium leading-7 text-gray-900">
                  What is your cancellation policy?
                </p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-gray-600"
                >
                  <circle cx={12} cy={12} r={10} />
                  <line x1={12} y1={8} x2={12} y2={16} />
                  <line x1={8} y1={12} x2={16} y2={12} />
                </svg>
              </div>
            </div>
            <div className="flex justify-between space-x-6 py-6">
              <div className="inline-flex flex-col items-start justify-start space-y-2">
                <p className="text-lg font-medium leading-7 text-gray-900">
                  Can other info be added to an invoice?
                </p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-gray-600"
                >
                  <circle cx={12} cy={12} r={10} />
                  <line x1={12} y1={8} x2={12} y2={16} />
                  <line x1={8} y1={12} x2={16} y2={12} />
                </svg>
              </div>
            </div>
            <div className="flex justify-between space-x-6 py-6">
              <div className="inline-flex flex-col items-start justify-start space-y-2">
                <p className="text-lg font-medium leading-7 text-gray-900">
                  How does billing work?
                </p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-gray-600"
                >
                  <circle cx={12} cy={12} r={10} />
                  <line x1={12} y1={8} x2={12} y2={16} />
                  <line x1={8} y1={12} x2={16} y2={12} />
                </svg>
              </div>
            </div>
            <div className="flex justify-between space-x-6 py-6">
              <div className="inline-flex flex-col items-start justify-start space-y-2">
                <p className="text-lg font-medium leading-7 text-gray-900">
                  How do I change my account email?
                </p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-gray-600"
                >
                  <circle cx={12} cy={12} r={10} />
                  <line x1={12} y1={8} x2={12} y2={16} />
                  <line x1={8} y1={12} x2={16} y2={12} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>

    
    </>



        // <div className="mx-auto w-full max-w-7xl">
        //     <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        //         <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
        //             <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
        //                 <h2 className="text-4xl font-bold sm:text-5xl">

                           
                                
        //                     Download Now
                         

        //                     <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
        //                 </h2>

        //                 <Link
        //                     className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
        //                     to="/"
        //                 >
        //                     <svg
        //                         fill="white"
        //                         width="24"
        //                         height="24"
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         fillRule="evenodd"
        //                         clipRule="evenodd"
        //                     >
        //                         <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
        //                     </svg>
        //                     &nbsp; Download now
        //                 </Link>
        //             </div>
        //         </div>

        //         <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
        //             <img className="w-96" src="shopify.jpg" alt="image1" />
        //         </div>
        //     </aside>

        //     <div className="grid  place-items-center sm:mt-20">
        //         <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
        //     </div>

        //     <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
        // </div>
    );
}