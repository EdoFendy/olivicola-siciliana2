export function AboutSection() {
  return (
    <section id="chi-siamo" className="py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium">Chi siamo</div>
              <h2 className="text-5xl md:text-6xl font-serif text-primary leading-tight text-balance">
                Le Tre Terre di Salvatore Risalvato
              </h2>
            </div>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Le Tre Terre di Salvatore Risalvato prende vita a Castelvetrano, nel cuore della Valle del Belice, per mano
                di un giovane imprenditore agricolo che ha scelto di dedicarsi appieno alla valorizzazione del territorio.
              </p>

              <p>
                L’azienda si fonda su una tradizione familiare secolare: è al nonno che si deve l’amore per la natura, il
                rispetto delle tradizioni e la consapevolezza che la terra vada coltivata con devozione e sapienza.
              </p>

              <p>
                Le coltivazioni, condotte con metodo biologico, sono assoggettate DOP Nocellara de Belice e all’IGP Valle del
                Belice, emblemi di eccellenza che attestano la perfezione dei processi produttivi e il radicamento profondo
                nel patrimonio agroalimentare siciliano.
              </p>


            </div>
          </div>

          <div className="relative lg:mt-12">
            <div className="w-full h-full bg-muted/40 border border-dashed border-border/60 overflow-hidden flex items-center justify-center">
              <img
                src="/campagna.jpeg"
                alt="Le Tre Terre di Salvatore Risalvato"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
