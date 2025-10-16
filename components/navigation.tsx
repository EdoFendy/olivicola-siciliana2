"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative h-18 w-18">
                <Image src="/logo_toti.png" alt="Logo Le Tre Terre" fill sizes="64px" className="object-contain" />
              </div>
              <div className="space-y-0">
                <div className="text-xl font-serif text-primary tracking-tight">LE TRE TERRE</div>
                <div className="text-[8px] uppercase tracking-[0.15em] text-muted-foreground">di Salvatore Risalvato</div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              <a
                href="#storia"
                className="text-foreground/70 hover:text-primary transition-colors text-sm tracking-[0.1em] uppercase font-medium"
              >
                Storia
              </a>
              <a
                href="#prodotti"
                className="text-foreground/70 hover:text-primary transition-colors text-sm tracking-[0.1em] uppercase font-medium"
              >
                Prodotti
              </a>
              <a
                href="#territorio"
                className="text-foreground/70 hover:text-primary transition-colors text-sm tracking-[0.1em] uppercase font-medium"
              >
                Territorio
              </a>
              <a
                href="#contatti"
                className="text-foreground/70 hover:text-primary transition-colors text-sm tracking-[0.1em] uppercase font-medium"
              >
                Contatti
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-1 bg-background/95 border-t border-border/30">
              <a
                href="#storia"
                className="block px-4 py-3 text-foreground/70 hover:text-primary transition-colors text-sm tracking-[0.1em] uppercase font-medium"
                onClick={() => setIsOpen(false)}
              >
                Storia
              </a>
              <a
                href="#prodotti"
                className="block px-4 py-3 text-foreground/70 hover:text-primary transition-colors text-sm tracking-[0.1em] uppercase font-medium"
                onClick={() => setIsOpen(false)}
              >
                Prodotti
              </a>
              <a
                href="#territorio"
                className="block px-4 py-3 text-foreground/70 hover:text-primary transition-colors text-sm tracking-[0.1em] uppercase font-medium"
                onClick={() => setIsOpen(false)}
              >
                Territorio
              </a>
              <a
                href="#contatti"
                className="block px-4 py-3 text-foreground/70 hover:text-primary transition-colors text-sm tracking-[0.1em] uppercase font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contatti
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
