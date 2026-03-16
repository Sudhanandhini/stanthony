// src/pages/about/Patron.jsx
import PageHero from '../components/PageHero'

export default function Patron() {
  return (
    <div>
      <PageHero title="PATRON" breadcrumb={['Home', 'About Us', 'Patron']} />

      {/* Content section – purple background matching reference */}
      <section style={{ background: '#c77dbe', minHeight: 500 }} className="py-12">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">

          {/* Section heading */}
          <h2
            className="text-xl sm:text-2xl font-bold mb-6 italic"
            style={{ color: '#b5451b' }}
          >
            The Ideal of St. Anthony of Padua
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

            {/* Text content */}
            <div className="flex-1">
              <p className="text-gray-800 text-sm leading-7 mb-4 text-justify">
                St. Anthony of Padua is a Portuguese Catholic Saint, born in 1195. Born in a very rich
                family of nobility, He wanted to be a popular man, in the eyes of the world. Hence, his
                family arranged sound education for him at the local cathedral school. But God's wish was
                different. Against the wish of his family, Anthony entered the Augustinian Abbey of
                St. Vincent on the outskirt of Lisbon. He studied Scripture and Latin classics.
              </p>
              <p className="text-gray-800 text-sm leading-7 mb-4 text-justify">
                After his ordination to priesthood, Anthony was strongly attracted to the simple Gospel
                lifestyle of the Franciscan friars. In February 1220, news arrived that the five
                Franciscans had been martyred in Morocco. Anthony meditated on the heroism of these
                Franciscans. He wanted to obey God's call to leave everything and follow him.
              </p>
              <p className="text-gray-800 text-sm leading-7 mb-4 text-justify">
                In the Franciscan order, he became a popular preacher of the Gospel. At the Papal court,
                his preaching was hailed as a "Jewel case of the Bible". Saint Anthony died on 13 June
                1231 at the age of 36. When he passed away, it is said that the children cried in the
                streets and that all the bells of the churches rang on their own accord, rung by angels
                come to earth to honor the death of the Saint. He is known to have become the "quickest"
                saint in the history of the Catholic Church. St. Anthony of Padua is also known as
                'Miracle Worker'. People plead for his intercession in times of difficulty. May St.
                Anthony intercede for us and God bless our Institution.
              </p>

              {/* Quote */}
              <div className="mt-6 border-l-4 border-gray-600 pl-4">
                <p className="text-gray-700 text-sm leading-7 italic">
                  "We are living in an information driven society which bombards us indiscriminately with
                  data, all treated as being equal importance, and which leads to remarkable superficiality
                  in the area of moral discernment. In response, we need to provide an education which
                  teaches critical thinking and encourages the development of mature moral values"
                </p>
                <p className="text-gray-800 font-bold text-sm mt-3">- Pope Francis</p>
              </div>
            </div>

            {/* Saint image */}
            <div className="lg:w-64 flex-shrink-0">
              <div
                className="rounded-lg overflow-hidden shadow-lg bg-yellow-100 flex items-center justify-center"
                style={{ minHeight: 300 }}
              >
                {/* Replace src with your actual image */}
                <img
                  src="/images/st-anthony.jpg"
                  alt="St. Anthony of Padua"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentNode.innerHTML = `
                      <div style="padding:40px;text-align:center;color:#888">
                        <div style="font-size:64px">✝</div>
                        <p style="margin-top:8px;font-size:12px">St. Anthony of Padua</p>
                      </div>`
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}