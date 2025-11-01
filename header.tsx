import { Button } from "@/components/ui/button"
import { Hotel } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Hotel className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">ReservasMarcos</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Hotéis
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Destinos
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Ofertas
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Entrar
          </Button>
          <Button size="sm">Cadastrar</Button>
        </div>
      </div>
    </header>
  )
}
