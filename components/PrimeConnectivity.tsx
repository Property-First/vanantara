export default function PrimeConnectivity() {
  const connectivity = [
    "Off Bannerghatta Main Road · 5–10 mins to Kalena Agrahara Metro Station · Easy access to NICE Road & key city routes",
    "1 min to Greenwood High International School · 10–15 mins to DPS South & BGS National Public School · 15 mins to IIM Bangalore",
    "5–10 mins to Apollo Hospital · 10–15 mins to Fortis Hospital · 15–20 mins to Jayadeva & Sagar Hospitals",
    "10–15 mins to Royal Meenakshi Mall · 20 mins to Vega City Mall · 25–30 mins to Forum Mall & Garuda Mall",
    // "5 mins to Proposed Peripheral Ring Road (PRR)*",
  ];

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Prime Connectivity
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {connectivity.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white p-4 rounded-lg shadow"
            >
              <span className="text-blue-600 text-xl">📍</span>
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}