export function ProductsSection() {
  const products = [
    {
      name: "DOP Nocellara del Belice",
      description: "Il nostro olio di punta, certificazione DOP con tiratura limitata",
      features: ["100% Nocellara del Belice", "Certificazione DOP", "Acidità < 0.2%", "Produzione biologica"],
    },
    {
      name: "IGP Sicilia Extravergine",
      description: "Olio IGP EVO di eccellenza dalla Valle del Belice",
      features: ["Certificazione IGP", "Blend siciliano", "Spremitura a freddo", "Gusto intenso"],
    },
  ]

  return (
    <section id="prodotti" className="py-32 lg:py-40 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-6 mb-20">
          <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium">
            Le nostre eccellenze
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-primary leading-tight text-balance">
            Oli certificati di qualità superiore
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="bg-background border border-border/50 overflow-hidden hover:border-primary/20 transition-colors duration-300">
                <div className="aspect-[4/5] bg-muted/50">
                  <img
                    src={index === 0 ? "/olive.png" : "/bott.jpg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-serif text-primary">{product.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                  </div>

                  <div className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-4"></div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
