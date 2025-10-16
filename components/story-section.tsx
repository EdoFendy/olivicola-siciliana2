export function StorySection() {
  return (
    <section id="storia" className="py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium">
                La nostra storia
              </div>
              <h2 className="text-5xl md:text-6xl font-serif text-primary leading-tight text-balance">
                Nel cuore della Valle del Belice
              </h2>
            </div>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                La nostra azienda nasce nel cuore della Valle del Belice, a Castelvetrano, dove la tradizione olivicola
                siciliana si tramanda da generazioni.
              </p>

              <p>
                Produciamo olio extravergine di oliva di altissima qualità con tiratura limitata, utilizzando
                esclusivamente olive <strong className="text-foreground">Nocellara DOP</strong>e certificazioni di
                produzione biologica per il nostro <strong className="text-foreground">olio IGP EVO</strong>.
              </p>

              <p>
                La nostra produzione si ramifica in tre appezzamenti strategicamente situati in località diverse dello
                stesso comune, ognuno con caratteristiche uniche che conferiscono al nostro olio sfumature
                organolettiche distintive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div>
                <div className="text-3xl font-serif text-primary">DOP</div>
                <div className="text-sm text-muted-foreground mt-1">Nocellara del Belice</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-primary">IGP</div>
                <div className="text-sm text-muted-foreground mt-1">Sicilia Extravergine</div>
              </div>
            </div>
          </div>

          <div className="relative lg:mt-20">
            <div className="aspect-[3/4] bg-muted overflow-hidden">
              <img
                src="/albero.png"
                alt="Produzione tradizionale olio Valle del Belice"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
