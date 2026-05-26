import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const amenities = [
  { title: "Swimming Pool", icon: "🏊" },
  { title: "State-of-the-art Gym", icon: "🏋️" },
  { title: "Badminton & Tennis Courts", icon: "🎾" },
  { title: "Landscaped Gardens", icon: "🌿" },
  { title: "Children's Play Area", icon: "🧒" },
  { title: "Co-working Spaces", icon: "💼" },
  { title: "24/7 Security", icon: "🔒" },
  { title: "Rooftop Clubhouse", icon: "🏠" },
  { title: "Yoga Deck", icon: "🧘" },
  { title: "Mini Theatre", icon: "🎥" },
  { title: "Cycling Track", icon: "🚴" },
  { title: "Visitor Parking", icon: "🚗" },
]
export function Amenities() {
  return (
    <section id="amenities" className="py-8 lg:py-16 bg-background">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            World-Class Living
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Amenities
          </h2>

          <div className="w-16 h-1 bg-primary mx-auto mb-6" />

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience unmatched luxury with thoughtfully designed facilities crafted for comfort, convenience, and elevated living.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {amenities.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* ICON */}
              <div className="text-4xl mb-4">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-base font-semibold text-foreground">
                {item.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
