export default function LifestyleHighlights() {
  const highlights = [
    "2, 3 & 4.5 BHK",
    "1288 - 2900 Sq.Ft",
    "~55 Units / Acres",
    "89% Open Space",
  ];

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">
        
        <h2 className="text-2xl font-bold mb-6 text-center">
          Lifestyle Highlights
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white p-4 rounded-lg shadow"
            >
              <span className="text-green-600 text-xl">✔</span>
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}