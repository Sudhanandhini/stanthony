// src/pages/about/StAnthonyInstitutions.jsx
// Matches the WordPress reference screenshot exactly

import ban12 from '../assets/banner-stantho.jpg'
import img1 from '../assets/campus1.jpg'

// Replace these with real imported photos from src/assets/
import photoPresident from '../assets/president.webp'
import photoDirector  from '../assets/director-scaled.webp'
import photoPrincipal from '../assets/principal2-scaled.webp'
import photoPrincipal2 from '../assets/principal-scaled.webp'

const leadership = [
  {
    name: "Rev. Fr. Robin Victor D'Souza",
    qual: 'B.Ed, M.ph(France), MBA',
    role: "President, St. Anthony's Institutions",
    photo: photoPresident, // replace with: photoPresident
  },
  {
    name: 'Rev. Fr. Charles J R Furtado',
    qual: 'Executive Secretary – Capuchin Education Board',
    role: "Director, St. Anthony's Institutions",
    photo: photoDirector,
  },
  {
    name: 'Rev. Fr. Roshan Rosario',
    qual: 'B.Ph., B.Th., M.A. (Eco)',
    role: "Principal, St. Anthony's PU College",
    photo: photoPrincipal,
  },
  {
    name: "Rev. Fr. Joy Wilson D'Souza",
    qual: 'M.Com, MBA',
    role: "Principal, St. Anthony's College",
    photo: photoPrincipal2,
  },
]

function PersonCard({ person }) {
  return (
    <div className="text-center">
      {/* Photo */}
      <div
        className="w-full overflow-hidden rounded-sm mb-2"
        style={{ aspectRatio: '4/3', background: '#c8c8c8' }}
      >
        {person.photo ? (
          <img
            src={person.photo}
            alt={person.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <svg viewBox="0 0 80 80" className="w-16 h-16 opacity-40">
              <circle cx="40" cy="28" r="18" fill="#666" />
              <ellipse cx="40" cy="72" rx="28" ry="22" fill="#666" />
            </svg>
          </div>
        )}
      </div>
      {/* Role badge on photo (DIRECTOR style) */}
      {person.role.includes('Director') && (
        <div
          className="inline-block text-white text-[9px] font-bold px-2 py-0.5 rounded mb-1"
          style={{ background: '#e67e22' }}
        >
          DIRECTOR
        </div>
      )}
      {/* Text */}
      <p className="font-bold text-[12px] text-gray-800 leading-snug">{person.name}</p>
      <p className="text-[11px] text-gray-500 leading-snug">{person.qual}</p>
      <p className="text-[11px] text-gray-600 leading-snug mt-0.5">{person.role}</p>
    </div>
  )
}

export default function StAnthonyInstitutions() {
  return (
    <div>

      {/* ── Full-width campus banner ── */}
      <div className="w-full overflow-hidden" style={{ maxHeight: 300 }}>
        <img
          src={ban12}
          alt="St. Anthony's Institutions Campus"
          className="w-full h-full object-cover object-center"
          style={{ display: 'block' }}
        />
      </div>

      {/* ── Blue italic title bar ── */}
      {/* <div
        className="w-full text-white text-center py-3"
        style={{ background: '#1565c0' }}
      >
        <span
          className="font-bold text-lg sm:text-xl tracking-[0.2em] italic"
          style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.2em' }}
        >
          ST ANTHONY'S INSTITUTIONS
        </span>
      </div> */}

      {/* ── Main content section ── */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 max-w-5xl">

          {/* Heading */}
          <h2
            className="font-bold text-base sm:text-lg mb-1 uppercase"
            style={{ color: '#0288d1' }}
          >
            ABOUT ST ANTHONY'S INSTITUTIONS
          </h2>
          <p className="italic text-gray-500 text-[13px] mb-5">
            "A Unique Campus for Quality Education &amp; Academic Excellence"
          </p>

          {/* 2-col: text left, image right */}
          <div className="flex flex-col lg:flex-row gap-8 mb-8">

            {/* Left: paragraphs */}
            <div className="w-full lg:w-1/2 text-[13px] text-gray-700 leading-7 space-y-3 text-justify">
              <p>
                St Anthony's Institutions, Bangalore is run by the Capuchin Franciscan Fathers of the Holy
                Trinity Province of Karnataka. It was established in 2009 to provide the best in academics
                for students in Science, Commerce, Computers, Business Management, and Administration by
                preparing them to qualify and succeed in various highly competitive career streams. It
                includes St. Anthony's Pre-University College, Darshan Degree College, Darshan College Hostel.
                It's a home away from home, with excellent hostel facilities, infrastructure, and dedicated
                teaching staff who mould, mend and form the future of the Nation and of the Globe.
              </p>
             
            </div>

            {/* Right: college building image */}
            <div className="w-full lg:w-1/2 flex-shrink-0">
              <div className="overflow-hidden rounded shadow" style={{ aspectRatio: '4/3', background: '#ddd' }}>
                {/* Replace src with actual college building image */}
                <img
                  src={img1}
                  alt="St. Anthony's College Building"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentNode.style.background = '#c8d0d8'
                    e.target.parentNode.innerHTML =
                      '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#888;font-size:12px">College Image</div>'
                  }}
                />
              </div>
            </div>
          </div>
 
             <div className="flex flex-row lg:flex-row  text-gray-700 mb-8 text-[13px] leading-7 space-y-3 text-justify">
              <div>  <p>
                It has a learning environment and a fraternal ambiance where one feels welcomed and
                comfortable. It's an institution which treats everyone equally with respect and honor
                regardless of gender, religion, ethnic origin, and nationality. The Education imparted in
                this institute is an ongoing process and continuous commitment to the emancipation of
                humankind. Hence it nurtures, invests, cultivates and develops young minds and their
                talents so that the future generation remains always creative, innovative and responsible
                for the economic and social growth of the Nation and of the Globe.
              </p>
              <p className="italic text-gray-500 my-4">
                "An abode of wisdom that ensures HOLISTIC DEVELOPMENT to the Leaders of Tomorrow…"
              </p>
              </div>
             </div>

          {/* ── Motto ── */}
          <div className="mb-5">
            <h3 className="text-[15px] font-bold text-gray-800 mb-1">Motto</h3>
            <p className="text-[13px] font-semibold text-gray-700">Jnanenalva Vimukthi</p>
            <p className="text-[13px] text-gray-600">Liberation through Enlightenment</p>
          </div>

          {/* ── Vision ── */}
          <div className="mb-5">
            <h3 className="text-[15px] font-bold text-gray-800 mb-1">Vision</h3>
            <p className="text-[13px] text-gray-600">
              Empowering youth towards Excellence through Holistic Education.
            </p>
          </div>

          {/* ── Mission ── */}
          <div className="mb-5">
            <h3 className="text-[15px] font-bold text-gray-800 mb-1">Mission</h3>
            <p className="text-[13px] text-gray-600">
              To enable the students to become responsible global citizens with their dynamic
              personality, intrinsic reverence for life and a passionate love for learning.
            </p>
          </div>

          {/* ── Core Values ── */}
          <div className="mb-5">
            <h3 className="text-[15px] font-bold text-gray-800 mb-2">Core Values</h3>
            <ul className="list-disc list-inside space-y-0.5 text-[13px] text-gray-600 ml-1">
              {['Faith in God','Respect for Life','Moral Uprightness','Social Responsibility','Pursuit of Excellence'].map(v => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>

          {/* ── Academic Excellence ── */}
          <div className="mb-5">
            <h3 className="text-[15px] font-bold text-gray-800 mb-2">Academic Excellence</h3>
            <p className="text-[13px] text-gray-600 leading-7 text-justify">
              The main objectives of the College are to promote the pursuit of intellectual growth,
              for understanding the natural and social environments as well as developing the moral
              and spiritual values so to enable them to face life situations. Our effort to provide
              an education that combines intellectual growth with the development of social, personal,
              and moral values. The college has a Reading Room, E-Learning Resource Centre, and a
              Good Library. It is at the disposal of the Student to make the best use of the
              facilities we impart and keep oneself abreast with the happenings in the country and
              the world. By the time one graduates, one should attain the aim of developing the art
              of critical thinking.
            </p>
          </div>

          {/* ── Character Formation ── */}
          <div className="mb-6">
            <h3 className="text-[15px] font-bold text-gray-800 mb-2">Character Formation</h3>
            <p className="text-[13px] text-gray-600 leading-7 text-justify">
              Character Development is the essential aspect of education. A person is what his/her
              values are. Your behavior, your values and attitudes to life, and others and the way
              you face life define your personality. The time in college is the period when you have
              to build up your character, hard work, perseverance, honesty, integrity, sensitivity
              to others, and universal love that embraces all people cutting across barriers of
              language, religion, and caste. Essential to any character formation is self-discipline.
              Lack of discipline results in chaos and disorder. So, self-discipline will play a vital
              role in forming your person and your personality to be the best with the best of the
              future.
            </p>
            <p className="text-[13px] text-gray-500 mt-3">• • •</p>
          </div>

          {/* ── Dr Kalam quote ── */}
          <div className="mb-8">
            <p className="text-[13px] text-gray-700 italic mb-1">
              "Great dreams of great dreamers are always transcended"
            </p>
            <p className="text-[13px] font-semibold text-gray-800">- Dr. Abdul Kalam</p>
          </div>

          {/* ── Leadership photos grid ── */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {leadership.map((p) => (
              <PersonCard key={p.name} person={p} />
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}