import ban131 from "../assets/11-1.jpg"

const departments = [
  {
    name: 'Science Department',
    color: 'border-sci-green',
    headerBg: 'bg-sci-green',
    faculty: [
      { name: 'Prof. A. Sharma', subject: 'Physics', qual: 'M.Sc, B.Ed' },
      { name: 'Prof. B. Nair', subject: 'Chemistry', qual: 'M.Sc, B.Ed' },
      { name: 'Prof. C. Kumar', subject: 'Mathematics', qual: 'M.Sc, B.Ed' },
      { name: 'Prof. D. Patel', subject: 'Biology', qual: 'M.Sc, B.Ed' },
    ],
  },
  {
    name: 'Commerce Department',
    color: 'border-com-blue',
    headerBg: 'bg-com-blue',
    faculty: [
      { name: 'Prof. E. Menon', subject: 'Accountancy', qual: 'M.Com, B.Ed' },
      { name: 'Prof. F. Reddy', subject: 'Business Studies', qual: 'MBA, B.Ed' },
      { name: 'Prof. G. Iyer', subject: 'Economics', qual: 'M.A, B.Ed' },
      { name: 'Prof. H. Singh', subject: 'Computer Science', qual: 'MCA, B.Ed' },
    ],
  },
  {
    name: 'Arts Department',
    color: 'border-arts-brown',
    headerBg: 'bg-arts-brown',
    faculty: [
      { name: 'Prof. I. Pillai', subject: 'History', qual: 'M.A, B.Ed' },
      { name: 'Prof. J. Rao', subject: 'Geography', qual: 'M.A, B.Ed' },
      { name: 'Prof. K. Das', subject: 'Sociology', qual: 'M.A, B.Ed' },
      { name: 'Prof. L. Verma', subject: 'Political Science', qual: 'M.A, B.Ed' },
    ],
  },
  {
    name: 'Languages Department',
    color: 'border-maroon',
    headerBg: 'bg-maroon',
    faculty: [
      { name: 'Prof. M. D\'Souza', subject: 'English', qual: 'M.A, B.Ed' },
      { name: 'Prof. N. Gowda', subject: 'Kannada', qual: 'M.A, B.Ed' },
      { name: 'Prof. O. Sharma', subject: 'Hindi', qual: 'M.A, B.Ed' },
      { name: 'Prof. P. Thomas', subject: 'French', qual: 'M.A, B.Ed' },
    ],
  },
]

export default function Faculty() {
  return (
    <div>
         <div className=" text-center">
                    <img src={ban131} />
                     </div>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
            St. Anthony's Institutions is proud of its award-winning faculty drawn from the cream of bright professionals with high academic qualifications who have a genuine love for the teaching profession.
          </p>

          <div className="space-y-12">
            {departments.map((dept) => (
              <div key={dept.name}>
                <div className={`${dept.headerBg} text-white font-bold text-base py-3 px-6 rounded-t tracking-wider`}>
                  {dept.name}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-4 rounded-b shadow-md">
                  {dept.faculty.map((f) => (
                    <div key={f.name} className={`border-2 ${dept.color} rounded-lg overflow-hidden text-center hover:shadow-lg transition-shadow`}>
                      <div className="bg-gradient-to-br from-navy to-gray-700 h-24 flex items-center justify-center text-white text-4xl">👤</div>
                      <div className="p-3">
                        <h4 className="font-bold text-navy text-sm">{f.name}</h4>
                        <p className="text-teal-dark text-xs font-semibold mt-0.5">{f.subject}</p>
                        <p className="text-gray-500 text-xs">{f.qual}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
