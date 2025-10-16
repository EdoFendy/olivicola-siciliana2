export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-2">
              <div className="text-3xl font-serif tracking-tight">VALLE DEL BELICE</div>
              <div className="text-sm uppercase tracking-[0.2em] text-primary-foreground/60">Castelvetrano</div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Nel cuore della Valle del Belice, produciamo oli extravergini DOP Nocellara del Belice e IGP Sicilia con
              certificazione biologica e tiratura limitata.
            </p>
          </div>

          <div className="space-y-6">
            <div className="text-sm uppercase tracking-[0.2em] text-primary-foreground/60 font-medium">Navigazione</div>
            <div className="space-y-3">
              <a
                href="#storia"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                La nostra storia
              </a>
              <a
                href="#prodotti"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Oli certificati
              </a>
              <a
                href="#territorio"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                I tre appezzamenti
              </a>
              <a
                href="#contatti"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Contatti
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-sm uppercase tracking-[0.2em] text-primary-foreground/60 font-medium">
              Certificazioni
            </div>
            <div className="space-y-3 text-primary-foreground/80 text-sm">
              <div>DOP Nocellara del Belice</div>
              <div>IGP Sicilia Extravergine</div>
              <div>Certificazione Biologica</div>
              <div>Produzione Limitata</div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <p>&copy; 2025 Valle del Belice. Tutti i diritti riservati.</p>
          <p className="mt-4 md:mt-0">91022 Castelvetrano (TP), Sicilia</p>
        </div>
      </div>
    </footer>
  )
}
