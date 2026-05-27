import { Building, MapPin, Trees, Shield } from "lucide-react"

const features = [
  {
    icon: Building,
    title: "2000 Units+",
    description: "Premium Residences"
  },
  {
    icon: Trees,
    title: "36 Acres",
    description: "Landscaped Development"
  },
  {
    icon: MapPin,
    title: "Metro Access",
    description: "Kalena Metro Station "
  },
  {
    icon: Shield,
    title: "100+",
    description: "World-Class Amenities"
  }
]

export function Overview() {
  return (
    <section id="overview" className="py-4 lg:py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">The City of Culture and Calm</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance max-w-4xl mx-auto">
            Skyline Shifts and The Exceptional Stands at Its Peak
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
           
  Spread across a serene 36-acre expanse off Bannerghatta Main Road, Godrej Vanantara is a thoughtfully designed residential landmark that blends luxury with nature. Featuring high-rise towers with 3 Basements + Ground + 30/32 floors, the project ensures low-density living with only around 4 residences per floor, offering enhanced privacy and exclusivity.

</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 lg:p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-24">
          <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm text-center">The Luxury of Space</p>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Project Overview
          </h3>
          <div className="bg-card border border-border rounded-lg p-8 lg:p-12">
            <p className="text-muted-foreground leading-relaxed text-lg text-center max-w-4xl mx-auto">
              Spread across a serene 36-acre expanse off Bannerghatta Main Road, this premium development by Godrej Properties is a thoughtfully designed residential landmark that blends luxury with nature. Featuring high-rise towers with 3 Basements + Ground + 30/32 floors, the project ensures low-density living with only around 4 residences per floor, offering enhanced privacy and exclusivity. Homes are crafted with spacious layouts, abundant natural light, excellent ventilation, and minimal wall sharing to create a peaceful and comfortable living experience. With expansive open spaces, lush greenery, and a 4-acre private forest within the community, this project perfectly balances modern living with tranquility.   </p>
          </div>
        </div>
      </div>
    </section>
  )
}
