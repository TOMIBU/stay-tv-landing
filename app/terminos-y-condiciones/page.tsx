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
                        Términos y condiciones
                    </h2>
                    <div className="w-[90%] mx-auto  leading-relaxed py-8 space-y-6">
                        <p>Bienvenido a <strong>StayTV.app</strong>. Al acceder y utilizar nuestros servicios, aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo con alguna parte de estos términos, por favor no uses nuestro servicio.</p>

                        <h3>1. Uso del servicio</h3>
                        <ul>
                            <li>El acceso y uso de StayTV.app es responsabilidad del usuario y debe hacerse conforme a la ley vigente y a estos términos.</li>
                            <li>Nos reservamos el derecho de modificar, suspender o discontinuar el servicio total o parcialmente en cualquier momento sin previo aviso.</li>
                        </ul>

                        <h3>2. Registro y cuenta</h3>
                        <ul>
                            <li>Para acceder a ciertas funciones, puede ser necesario registrarse y proporcionar información veraz y completa.</li>
                            <li>El usuario es responsable de mantener la confidencialidad de sus credenciales y de toda actividad realizada a través de su cuenta.</li>
                        </ul>

                        <h3>3. Propiedad intelectual</h3>
                        <p>Todos los contenidos, marcas, logos, diseños, software y demás elementos de StayTV.app son propiedad exclusiva y están protegidos por leyes de propiedad intelectual. Queda prohibida la reproducción, distribución o uso no autorizado de cualquier contenido sin permiso expreso.</p>

                        <h3>4. Responsabilidad</h3>
                        <p>StayTV.app no se hace responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso o imposibilidad de uso del servicio. No garantizamos que el servicio esté libre de errores o interrupciones.</p>

                        <h3>5. Contenidos de terceros</h3>
                        <p>El servicio puede contener enlaces o accesos a sitios externos. No nos hacemos responsables del contenido ni de las prácticas de privacidad de dichos sitios.</p>

                        <h3>6. Modificaciones de los términos</h3>
                        <p>Podemos actualizar estos términos y condiciones en cualquier momento. La versión actualizada será publicada en nuestra plataforma y entrará en vigor inmediatamente.</p>

                        <h3>7. Ley aplicable y jurisdicción</h3>
                        <p>Estos términos se rigen por las leyes de la República Argentina. Cualquier conflicto relacionado con estos términos será resuelto ante los tribunales competentes de la Ciudad Autónoma de Buenos Aires.</p>

                        <h3>8. Contacto</h3>
                        <p>Para consultas sobre estos términos y condiciones, podés contactarnos en: <a href="mailto:info@staytv.app">info@staytv.app</a></p>
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
                        <Link href="/privacidad" className="text-sm text-muted-foreground hover:text-foreground">
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