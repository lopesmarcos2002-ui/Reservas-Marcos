import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Wifi, Coffee, Dumbbell } from "lucide-react"

const hotels = [
  {
    id: 1,
    name: "Grand Hotel Lisboa",
    location: "Lisboa, Portugal",
    rating: 4.8,
    reviews: 342,
    price: 189,
    image: "/luxury-hotel-exterior-lisbon.jpg",
    amenities: ["Wifi", "Café da Manhã", "Academia"],
    featured: true,
  },
  {
    id: 2,
    name: "Resort Praia do Sol",
    location: "Rio de Janeiro, Brasil",
    rating: 4.9,
    reviews: 521,
    price: 245,
    image: "/beach-resort-hotel-rio.jpg",
    amenities: ["Wifi", "Café da Manhã", "Piscina"],
    featured: true,
  },
  {
    id: 3,
    name: "Hotel Boutique Porto",
    location: "Porto, Portugal",
    rating: 4.7,
    reviews: 289,
    price: 156,
    image: "/boutique-hotel-porto.jpg",
    amenities: ["Wifi", "Café da Manhã"],
    featured: false,
  },
  {
    id: 4,
    name: "Pousada Serra Verde",
    location: "Gramado, Brasil",
    rating: 4.6,
    reviews: 198,
    price: 134,
    image: "/mountain-hotel-gramado.jpg",
    amenities: ["Wifi", "Café da Manhã", "Academia"],
    featured: false,
  },
  {
    id: 5,
    name: "Hotel Moderno Barcelona",
    location: "Barcelona, Espanha",
    rating: 4.8,
    reviews: 456,
    price: 198,
    image: "/modern-hotel-barcelona.jpg",
    amenities: ["Wifi", "Café da Manhã", "Piscina"],
    featured: true,
  },
  {
    id: 6,
    name: "Pousada Histórica Salvador",
    location: "Salvador, Brasil",
    rating: 4.5,
    reviews: 167,
    price: 112,
    image: "/historic-hotel-salvador.jpg",
    amenities: ["Wifi", "Café da Manhã"],
    featured: false,
  },
]

const amenityIcons = {
  Wifi: Wifi,
  "Café da Manhã": Coffee,
  Academia: Dumbbell,
  Piscina: Coffee,
}

export function FeaturedHotels() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hotéis em Destaque</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecionamos os melhores hotéis com avaliações excepcionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={hotel.image || "/placeholder.svg"} alt={hotel.name} className="w-full h-56 object-cover" />
                {hotel.featured && (
                  <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">Destaque</Badge>
                )}
              </div>

              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{hotel.name}</h3>
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground px-2 py-1 rounded-md text-sm font-semibold">
                    <Star className="h-3 w-3 fill-current" />
                    {hotel.rating}
                  </div>
                </div>

                <div className="flex items-center gap-1 text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{hotel.location}</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  {hotel.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity as keyof typeof amenityIcons] || Wifi
                    return (
                      <div key={amenity} className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Icon className="h-3 w-3" />
                        <span>{amenity}</span>
                      </div>
                    )
                  })}
                </div>

                <div className="text-sm text-muted-foreground mb-4">{hotel.reviews} avaliações</div>

                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">A partir de</div>
                    <div className="text-2xl font-bold text-foreground">
                      €{hotel.price}
                      <span className="text-sm font-normal text-muted-foreground">/noite</span>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-5 pt-0">
                <Button className="w-full">Ver Disponibilidade</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Todos os Hotéis
          </Button>
        </div>
      </div>
    </section>
  )
}
