"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function ContactSection() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState<null | "ok" | "err" >(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(null)
    if (!firstName || !lastName || !email) {
      setSubmitted("err")
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ first_name: firstName, last_name: lastName, email, phone, message })
      })
      if (!res.ok) throw new Error("failed")
      setSubmitted("ok")
      setFirstName("")
      setLastName("")
      setEmail("")
      setPhone("")
      setMessage("")
    } catch {
      setSubmitted("err")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contatti" className="py-32 lg:py-40 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-medium">Contatti</div>
              <h2 className="text-5xl md:text-6xl font-serif text-primary leading-tight text-balance">
                Scopri la nostra eccellenza
              </h2>
            </div>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Siamo orgogliosi di condividere la tradizione della Valle del Belice e la qualità dei nostri oli DOP e
                IGP certificati.
              </p>

              <div className="space-y-6">
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-foreground font-medium mb-2">Sede</div>
                  <div className="text-foreground">
                    Valle del Belice
                    <br />
                    91022 Castelvetrano (TP), Sicilia
                  </div>
                </div>

                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-foreground font-medium mb-2">Telefono</div>
                  <div className="text-foreground">+39 320 845 9292</div>
                </div>

                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-foreground font-medium mb-2">Email</div>
                  <div className="text-foreground">info@valledelbelice.it</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background border border-border/50 p-10">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm uppercase tracking-[0.2em] text-foreground font-medium block mb-3">
                    Nome
                  </label>
                  <Input placeholder="Il tuo nome" className="h-12" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                  <label className="text-sm uppercase tracking-[0.2em] text-foreground font-medium block mb-3">
                    Cognome
                  </label>
                  <Input placeholder="Il tuo cognome" className="h-12" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
              </div>

              <div>
                <label className="text-sm uppercase tracking-[0.2em] text-foreground font-medium block mb-3">
                  Email
                </label>
                <Input type="email" placeholder="la-tua-email@esempio.it" className="h-12" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <div>
                <label className="text-sm uppercase tracking-[0.2em] text-foreground font-medium block mb-3">
                  Telefono
                </label>
                <Input type="tel" placeholder="Il tuo numero" className="h-12" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>

              <div>
                <label className="text-sm uppercase tracking-[0.2em] text-foreground font-medium block mb-3">
                  Messaggio
                </label>
                <Textarea placeholder="Raccontaci del tuo interesse per i nostri oli..." rows={6} value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-sm tracking-[0.1em] uppercase font-medium"
                disabled={submitting}
              >
                {submitting ? "Invio..." : "Invia richiesta"}
              </Button>

              {submitted === "ok" && (
                <div className="text-green-600 text-sm">Richiesta inviata con successo.</div>
              )}
              {submitted === "err" && (
                <div className="text-red-600 text-sm">Errore nell'invio. Controlla i campi e riprova.</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
