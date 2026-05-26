import { MapPin, Train, Plane, School, Building2 } from "lucide-react"

const landmarks = [
  { icon: Train, title: "Greenwood High International School", distance: "1 min" },
  { icon: Plane, title: "IIM Bangalore", distance: "15 mins" },
  { icon: School, title: "Royal Meenakshi Mall", distance: "15 mins" },
  { icon: Building2, title: "Electronic City", distance: "20 mins" },
]

export function Location() {
  return (
    <section id="location" className="py-4 lg:py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Location
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Seamlessly connected to prime landmarks, ensuring convenience and accessibility for modern living.
          </p>
        </div>
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0621932400813!2d77.5994370250742!3d12.839257637464115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b004f4f4d05%3A0xe205789980c4134a!2sGodrej%20Vanantara%2C%20Bannerghatta%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1779792023074!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0621932400813!2d77.5994370250742!3d12.839257637464115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b004f4f4d05%3A0xe205789980c4134a!2sGodrej%20Vanantara%2C%20Bannerghatta%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1779792023074!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="font-serif text-xl font-semibold text-foreground">
                Bannerghatta, North Bengaluru
              </h3>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Experience unmatched luxury with thoughtfully designed facilities crafted for comfort, convenience, and elevated living. Every space is curated to enhance lifestyle quality and elevate your daily living experience.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {landmarks.map((landmark, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <landmark.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{landmark.title}</p>
                    <p className="text-muted-foreground text-xs">{landmark.distance}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
