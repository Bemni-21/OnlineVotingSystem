import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const stats = [
  { name: 'Years of Service', value: '10+' },
  { name: 'Active Members', value: '500+' },
  { name: 'National Recognition', value: 'Yes' },
  { name: 'Achievements', value: 'Numerous' },
];

export default function AboutUs() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="aboutus" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt="Wolkite University"
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 data-aos="fade-up" className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            About Us
          </h2>
          <h3 data-aos="fade-up" className="text-lg font-semibold text-white sm:text-5xl">
            Wolkite University Student Union
          </h3>
          <p data-aos="fade-up" className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
            The Wolkite University Student Union (WUSU) is the official representative body of students at Wolkite University.
            Established to ensure the welfare and rights of students, the union is known for its outstanding contributions to student life and its involvement in various national initiatives. With over 20 years of service, WUSU has earned national recognition for its leadership and success.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1" data-aos="fade-up">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
