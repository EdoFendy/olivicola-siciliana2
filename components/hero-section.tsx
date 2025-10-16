import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      <div className="absolute inset-0 bg-[url('/valle-del-belice-olive-groves-panoramic-view-minim.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium">
              Castelvetrano • Valle del Belice
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-6xl font-serif text-primary leading-[0.9] tracking-tight text-balance">
              Le Tre Terre
              <br />
              <span className="text-secondary">di Salvatore Risalvato</span>
            </h1>

            <p className="text-[1rem] text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              Una giovane impresa agricola che nasce per celebrare la Valle del Belice: tradizione familiare, rispetto
              della terra e un olio extravergine che unisce storia, territorio e ricerca sensoriale.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-sm tracking-[0.1em] uppercase font-medium"
              asChild
            >
              <Link href="#prodotti">Scopri l'olio</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-6 text-sm tracking-[0.1em] uppercase font-medium bg-transparent"
              asChild
            >
              <Link href="#storia">Conosci la storia</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-20 bg-primary/20"></div>
      </div>
    </section>
  )
}
