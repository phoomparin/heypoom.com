import Head from 'next/head'

import tw from 'twin.macro'

import {Box} from '@ui/box'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div tw="bg-white pb-8 sm:pb-12 lg:pb-12">
          <div tw="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
            <div tw="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
              <div>
                <div>
                  <img
                    tw="h-11 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt="Workflow"
                  />
                </div>
                <div tw="mt-20">
                  <div>
                    <a href="#" tw="inline-flex space-x-4">
                      <span tw="rounded bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-600 tracking-wide uppercase">
                        What's new
                      </span>
                      <span tw="inline-flex items-center text-sm font-medium text-indigo-600 space-x-1">
                        <span>Just shipped version 0.1.0</span>

                        <svg
                          tw="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div tw="mt-6 sm:max-w-xl">
                    <h1 tw="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                      Server management for growing teams
                    </h1>
                    <p tw="mt-6 text-xl text-gray-500">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo.
                    </p>
                  </div>
                  <form action="#" tw="mt-12 sm:max-w-lg sm:w-full sm:flex">
                    <div tw="min-w-0 flex-1">
                      <label htmlFor="hero_email" tw="sr-only">
                        Email address
                      </label>
                      <input
                        id="hero_email"
                        type="email"
                        tw="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div tw="mt-4 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        tw="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10">
                        Notify me
                      </button>
                    </div>
                  </form>
                  <div tw="mt-6">
                    <div tw="inline-flex items-center divide-x divide-gray-300">
                      <div tw="flex-shrink-0 flex pr-5">
                        <svg
                          tw="h-5 w-5 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          tw="h-5 w-5 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          tw="h-5 w-5 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          tw="h-5 w-5 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>

                        <svg
                          tw="h-5 w-5 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div tw="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                        <span tw="font-medium text-gray-900">
                          Rated 5 stars
                        </span>{' '}
                        by over{' '}
                        <span tw="font-medium text-indigo-600">
                          500 beta users
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div tw="sm:mx-auto sm:max-w-3xl sm:px-6">
              <div tw="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div tw="hidden sm:block">
                  <div tw="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
                  <svg
                    tw="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                    width="404"
                    height="392"
                    fill="none"
                    viewBox="0 0 404 392">
                    <defs>
                      <pattern
                        id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse">
                        <rect
                          x="0"
                          y="0"
                          width="4"
                          height="4"
                          tw="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="404"
                      height="392"
                      fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                    />
                  </svg>
                </div>
                <div tw="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                  <img
                    tw="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
