import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, ChevronRight, Home, Monitor, PiggyBank, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col text-white">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Image
              src="/logo-staytv.svg?height=100&width=150"
              width={100}
              height={150}
              alt="StayTV logo"
              className="object-cover"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Características
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              Cómo funciona
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonios
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact" className="hidden md:block text-sm font-medium hover:text-primary">
              Contacto
            </Link>
            <Button asChild>
              <Link href="#demo">Solicitar demo</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-lg bg-muted px-[100px] py-2 text-sm mb-[10px] w-fit">
                  <Star className="mr-1 h-4 w-4 text-primary" />
                  <span>Mejora la experiencia de tus huéspedes</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transforma tu TV en un asistente virtual para tus huéspedes
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    StayTV convierte los televisores de tu alojamiento en una herramienta que mejora la experiencia de
                    tus huéspedes y te ayuda a generar ingresos adicionales.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#demo">
                      Solicitar una demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#how-it-works">
                      Cómo funciona
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl border shadow-xl">
                  <Image
                    src="/hero.png?height=500&width=800"
                    width={800}
                    height={500}
                    alt="StayTV en acción"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is StayTV */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                  <Monitor className="mr-1 h-4 w-4 text-primary" />
                  <span>¿Qué es StayTV?</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Tu aliado para una experiencia excepcional
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  StayTV es una aplicación para televisores que transforma la experiencia de tus huéspedes y te ayuda a
                  generar ingresos adicionales.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Información del alojamiento</h3>
                  <p className="text-muted-foreground mt-2">
                    Muestra información útil como Wi-Fi, reglas de la casa y recomendaciones locales directamente en la
                    TV.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <PiggyBank className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Ingresos adicionales</h3>
                  <p className="text-muted-foreground mt-2">
                    Permite a los huéspedes contratar excursiones, traslados y experiencias turísticas directamente
                    desde la TV.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Configuración sencilla</h3>
                  <p className="text-muted-foreground mt-2">
                    Configura fácilmente desde una web app donde cargas la información de tu propiedad y activas
                    experiencias.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-lg bg-background px-3 py-1 text-sm">
                  <CheckCircle className="mr-1 h-4 w-4 text-primary" />
                  <span>Beneficios para anfitriones</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Mejora tu alojamiento y aumenta tus ingresos
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  StayTV no solo mejora la experiencia de tus huéspedes, sino que también te ayuda a destacarte de la
                  competencia y generar ingresos adicionales.
                </p>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Menos preguntas repetitivas</h3>
                      <p className="text-muted-foreground">
                        Toda la información importante está disponible en la TV, reduciendo las consultas frecuentes.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Ingresos adicionales</h3>
                      <p className="text-muted-foreground">
                        Gana comisiones por cada experiencia o servicio que tus huéspedes contraten a través de StayTV.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Huéspedes más felices</h3>
                      <p className="text-muted-foreground">
                        Mejora la experiencia general y obtén mejores reseñas en plataformas como Airbnb.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Diferenciación de la competencia</h3>
                      <p className="text-muted-foreground">
                        Destaca tu alojamiento con una tecnología innovadora que pocos ofrecen.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl border shadow-xl">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    width={800}
                    height={500}
                    alt="Beneficios de StayTV"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
                  <ChevronRight className="mr-1 h-4 w-4 text-primary" />
                  <span>Cómo funciona</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">En solo tres pasos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Implementar StayTV en tu alojamiento es rápido y sencillo. Comienza a mejorar la experiencia de tus
                  huéspedes hoy mismo.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-3">
              <div className="group relative flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
                <div className="absolute top-8 left-[50%] hidden h-px w-full bg-white md:block"></div>
                <h3 className="text-xl font-bold">Regístrate</h3>
                <p className="text-center text-muted-foreground mt-2">
                  Crea tu cuenta en nuestra plataforma y configura los detalles de tu alojamiento.
                </p>
              </div>
              <div className="group relative flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
                <div className="absolute top-8 left-[50%] hidden h-px w-full bg-white md:block"></div>
                <h3 className="text-xl font-bold">Configura</h3>
                <p className="text-center text-muted-foreground mt-2">
                  Personaliza la información que quieres mostrar y las experiencias que deseas ofrecer.
                </p>
              </div>
              <div className="group relative flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">¡Listo!</h3>
                <p className="text-center text-muted-foreground mt-2">
                  Instala la aplicación en el televisor de tu alojamiento y comienza a ofrecer una experiencia única.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-lg bg-background px-3 py-1 text-sm">
                  <Star className="mr-1 h-4 w-4 text-primary" />
                  <span>Testimonios</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Lo que dicen nuestros usuarios</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Anfitriones como tú ya están mejorando la experiencia de sus huéspedes con StayTV.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex gap-0.5">
                        <Star className="h-5 w-5 fill-primary text-primary" />
                        <Star className="h-5 w-5 fill-primary text-primary" />
                        <Star className="h-5 w-5 fill-primary text-primary" />
                        <Star className="h-5 w-5 fill-primary text-primary" />
                        <Star className="h-5 w-5 fill-primary text-primary" />
                      </div>
                      <blockquote className="mt-3">
                        <p className="text-lg">
                          "Desde que implementé StayTV en mi apartamento, las preguntas repetitivas se redujeron en un
                          80%. Además, he generado ingresos adicionales con las experiencias que ofrezco."
                        </p>
                      </blockquote>
                      <div className="mt-4 flex items-center">
                        <div className="h-10 w-10 rounded-full bg-muted"></div>
                        <div className="ml-3">
                          <p className="font-medium">Carlos Rodríguez</p>
                          <p className="text-sm text-muted-foreground">Anfitrión en Barcelona</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex gap-0.5">
                        <Star className="h-5 w-5 fill-primary text-primary" />
                        <Star className="h-5 w-5 fill-primary text-primary" />
                        <Star className="h-5 w-5 fill-primary text-primary" />
                        <Star className="h-5 w-5 fill-primary text-primary" />
                        <Star className="h-5 w-5 fill-primary text-primary" />
                      </div>
                      <blockquote className="mt-3">
                        <p className="text-lg">
                          "Mis huéspedes adoran StayTV. La información está siempre disponible y les encanta poder
                          reservar experiencias locales directamente desde la TV. Mis valoraciones han mejorado
                          notablemente."
                        </p>
                      </blockquote>
                      <div className="mt-4 flex items-center">
                        <div className="h-10 w-10 rounded-full bg-muted"></div>
                        <div className="ml-3">
                          <p className="font-medium">Laura Martínez</p>
                          <p className="text-sm text-muted-foreground">Anfitriona en Madrid</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="demo" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comienza hoy mismo</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Solicita una demo gratuita y descubre cómo StayTV puede transformar la experiencia en tu alojamiento.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="grid gap-4">
                  <Input type="text" placeholder="Nombre" />
                  <Input type="email" placeholder="Email" />
                  <Input type="tel" placeholder="Teléfono" />
                  <Button type="submit" size="lg">
                    Solicitar demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  Al enviar este formulario, aceptas nuestra{" "}
                  <Link href="/politica-de-privacidad" className="underline underline-offset-2">
                    política de privacidad
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold">
            <Image
              src="/logo-staytv.svg?height=100&width=150"
              width={75}
              height={125}
              alt="StayTV logo"
              className="object-cover"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} StayTV. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="/terminos-y-condiciones" className="text-sm text-muted-foreground hover:text-foreground">
              Términos
            </Link>
            <Link href="/politica-de-privacidad" className="text-sm text-muted-foreground hover:text-foreground">
              Privacidad
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
