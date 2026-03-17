// src/pages/about/PresidentsMessage.jsx
import ban14 from '../assets/04-1-2.jpg'
import prin  from '../assets/president.webp'

export default function PresidentsMessage() {
  return (
    <div>

      {/* ── Banner ── */}
      <div className="w-full overflow-hidden" style={{ maxHeight: 300 }}>
        <img
          src={ban14}
          alt="St. Anthony's Institutions"
          className="w-full object-cover object-center"
          style={{ display: 'block' }}
        />
      </div>

     

      {/* ── Content ── */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 max-w-4xl">

          {/* Heading */}
          <h2 className="font-bold text-[15px] text-gray-900 mb-5 uppercase tracking-wide">
            PRESIDENT'S MESSAGE
          </h2>

          {/* First block: italic paragraph + float-right photo */}
          <div className="mb-6 clearfix">

            {/* Photo — floats right on desktop, stacks on mobile */}
            <div
              className="float-none w-full mb-4 sm:float-right sm:w-80 sm:ml-8 sm:mb-4 overflow-hidden shadow"
            >
              <img
                src={prin}
                alt="Rev. Fr. Robin Victor D'souza"
                className="w-full h-full object-cover"
                style={{ maxHeight: 340, display: 'block' }}
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.parentNode.style.background = '#ddd'
                  e.target.parentNode.innerHTML =
                    '<div style="height:280px;display:flex;align-items:center;justify-content:center;color:#999;font-size:12px">Photo</div>'
                }}
              />
            </div>

            {/* First italic paragraph (sits beside photo) */}
            <p
              className="text-[13.5px] text-gray-700 leading-7 text-justify italic"
            >
              Welcome to St. Anthony's Institutions run by the Capuchin Franciscan
              Fathers. Hope you will find all that you seek in pursuit of higher learning
              in the abode of St. Anthony's PU College and Darshan College. As you glance
              through this prospectus it will open up new horizons of your dreams and
              visions. As you cross the threshold, may the new portals of our College offer
              you an experience which goes beyond mere learning. We are sure that you will
              push the boundaries and explore the possibilities so that you tell in a
              determined manner to yourself that you are born to win and born to excel as
              the future leader of our Nation and of the Globe. The Education and holistic
              formation imparted in St. Anthony's PU College and Darshan College will
              mold you to achieve your goal on the right path persevering in faith.
            </p>
          </div>

          {/* Second paragraph — full width, below float */}
          <div style={{ clear: 'both' }}>
            <p className="text-[13.5px] text-gray-700 leading-7 text-justify italic mb-8">
              As you choose to walk your journey of life in our institution, which has a
              dynamic ambiance and a healthy environment, be constructive, be creative and
              be committed, for you will see yourself transformed with a new learning
              experience and develop your progressive skills. Our highly educated,
              experienced and motivated staff along with committed team of management will
              implement the most validated methods and means of Teaching-Learning Process
              to provide the quality education and academic excellence to be at par with
              our motto:{' '}
              <strong className="not-italic">
                "to educate, to empower, to explore and to excel."
              </strong>{' '}
              Be inspired, be imaginative, be innovative at St. Anthony's PU College and
              Darshan College. With best wishes &amp; warm welcome!
            </p>

            {/* Spacer */}
            <div className="mb-6" />

            {/* Signature */}
            <div>
              <p className="font-bold text-[14px] text-gray-900 leading-snug">
                Rev. Fr. Robin Victor D'souza, OFM Cap
              </p>
              <p className="font-bold text-[14px] text-gray-900 leading-snug">
                President, CEB
              </p>
              <p className="font-bold text-[14px] text-gray-900 leading-snug">
                St. Anthony's Institutions
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}