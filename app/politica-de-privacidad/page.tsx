import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

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
          <nav className="md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Volver
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-10 bg-background">
          <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-5xl">
            Política de privacidad
          </h2>
          <div className="w-[90%] mx-auto  leading-relaxed py-8 space-y-6">
            <p>En <strong>StayTV.app</strong> valoramos y respetamos la privacidad de nuestros usuarios. Por eso, queremos informarte sobre cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando utilizas nuestros servicios.</p>

            <h3>1. Información que recopilamos</h3>
            <ul>
              <li>Información que nos proporcionas directamente, como nombre, correo electrónico, contraseña y cualquier otro dato necesario para el registro y uso del servicio.</li>
              <li>Datos técnicos sobre el dispositivo y conexión, como dirección IP, tipo de navegador, sistema operativo y datos de uso.</li>
              <li>Información obtenida a través de cookies y tecnologías similares.</li>
            </ul>

            <h3>2. Uso de la información</h3>
            <ul>
              <li>Proveer y mejorar nuestros servicios.</li>
              <li>Gestionar tu cuenta y facilitar tu acceso.</li>
              <li>Comunicarnos contigo, responder tus consultas y enviarte notificaciones importantes.</li>
              <li>Personalizar tu experiencia de usuario.</li>
              <li>Cumplir con obligaciones legales y de seguridad.</li>
            </ul>

            <h3>3. Cookies y tecnologías similares</h3>
            <p>Utilizamos cookies y otras tecnologías para mejorar la funcionalidad y experiencia en nuestra plataforma, así como para análisis estadísticos. Puedes configurar tu navegador para aceptar o rechazar cookies, aunque esto podría afectar el funcionamiento del servicio.</p>

            <h3>4. Protección de la información</h3>
            <p>Implementamos medidas técnicas y organizativas adecuadas para proteger tus datos contra acceso no autorizado, pérdida, alteración o divulgación.</p>

            <h3>5. Compartir información con terceros</h3>
            <p>No compartimos tus datos personales con terceros, salvo en los casos en que sea necesario para prestar el servicio, cumplir con obligaciones legales o con tu consentimiento previo.</p>

            <h3>6. Derechos del usuario</h3>
            <p>Tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales, así como a solicitar la limitación o portabilidad de los mismos. Para ejercer estos derechos, puedes contactarnos a través de <a href="mailto:info@staytv.app">info@staytv.app</a>.</p>

            <h3>7. Conservación de datos</h3>
            <p>Tus datos serán conservados durante el tiempo necesario para cumplir con las finalidades indicadas, o mientras no solicites su eliminación.</p>

            <h3>8. Cambios en la política</h3>
            <p>Nos reservamos el derecho de modificar esta política en cualquier momento. Te informaremos sobre cambios relevantes mediante notificaciones o en nuestra plataforma.</p>

            <h3>9. Contacto</h3>
            <p>Si tienes dudas o consultas sobre esta política de privacidad, puedes comunicarte con nosotros en: <a href="mailto:info@staytv.app">info@staytv.app</a></p>
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