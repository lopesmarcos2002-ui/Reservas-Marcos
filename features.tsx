import { Card, CardContent } from "@/components/ui/card"
import { Shield, CreditCard, Clock, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Reserva Segura",
    description: "Suas informações protegidas com criptografia de ponta",
  },
  {
    icon: CreditCard,
    title: "Melhor Preço Garantido",
    description: "Encontramos as melhores ofertas para você economizar",
  },
  {
    icon: Clock,
    title: "Cancelamento Flexível",
    description: "Cancele ou altere sua reserva sem complicações",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte 24/7",
    description: "Equipe disponível para ajudar a qualquer momento",
  },
]

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Por Que Escolher ReservasMarcos?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos a melhor experiência em reservas de hotéis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
