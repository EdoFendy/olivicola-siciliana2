export function TerritorySection() {
  return (
    <section id="territorio" className="py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium">
            I nostri appezzamenti
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-primary leading-tight text-balance">
            Tre territori, un'eccellenza
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="/Chiesa-SS-Trinita-2.png?key=diga-ss-trinita"
                alt="Appezzamento presso la Diga della SS Trinità"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-primary">Diga della SS Trinità</h3>
              <p className="text-muted-foreground leading-relaxed">
                Il nostro primo appezzamento si trova nelle vicinanze della storica Diga della Santissima Trinità, dove
                il microclima particolare conferisce alle olive un carattere distintivo e una maturazione ottimale.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="/efebo.png?key=museo-efebo"
                alt="Appezzamento presso il Museo dell'Efebo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-primary">Museo dell'Efebo</h3>
              <p className="text-muted-foreground leading-relaxed">
                Nei pressi del celebre Museo dell'Efebo, il secondo appezzamento beneficia di terreni ricchi di storia e
                minerali, che donano al nostro olio sfumature organolettiche uniche.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="aspect-[4/3] bg-muted overflow-hidden">
              <img
                src="/tempior.png?key=selinunte"
                alt="Appezzamento presso il Parco Archeologico di Selinunte"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-serif text-primary">Parco di Selinunte</h3>
              <p className="text-muted-foreground leading-relaxed">
                A soli 2km dal Parco Archeologico di Selinunte, il terzo appezzamento gode della brezza marina e dei
                terreni calcarei che esaltano l'intensità aromatica delle nostre olive Nocellara.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-12">
            <div className="text-center">
              <div className="text-4xl font-serif text-primary">3</div>
              <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground mt-1">Appezzamenti</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-4xl font-serif text-primary">DOP</div>
              <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground mt-1">Nocellara Belice</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-4xl font-serif text-primary">BIO</div>
              <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground mt-1">Certificato</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
