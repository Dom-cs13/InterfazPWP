import { useState } from 'react'
import heroBg from './assets/hero-bg.jpg'
import mapImage from './assets/map-image.png'
import logoImg from './assets/isologo-cercap.png'
import QuienesSomos from './pages/QuienesSomos'

// ─── Color tokens ────────────────────────────────────────────────
const C = {
  primary: '#2C509C',
  borderDark: '#1C2236',
  dark: '#111827',
  light: '#F9FAFB',
  coverage: '#EDEDEE',
}

// ─── Decorative SVG backgrounds ──────────────────────────────────
function MountainDecor({ top, height, viewH }: { top: string; height: string; viewH: number }) {
  return (
    <svg
      className="absolute left-0 w-full pointer-events-none z-0"
      style={{ top, height }}
      preserveAspectRatio="none"
      viewBox={`0 0 1440 ${viewH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="mountain-path mountain-back"  d="M -60,430 C 110,410 210,250 330,230 C 420,210 490,330 590,350 C 690,370 780,270 900,240 C 1000,210 1080,310 1210,290 C 1310,270 1420,180 1500,170 C 1540,165 1580,200 1620,230" />
      <path className="mountain-path mountain-contour" d="M 330,230 C 350,300 380,370 420,430" />
      <path className="mountain-path mountain-contour" d="M 900,240 C 890,310 860,370 820,440" />
      <path className="mountain-path mountain-mid"   d="M -60,510 C 80,490 200,360 310,350 C 410,340 500,420 610,400 C 720,380 800,320 920,300 C 1030,280 1110,380 1230,370 C 1340,360 1440,290 1540,280" />
      <path className="mountain-path mountain-front" d="M -60,600 C 160,590 290,470 450,460 C 600,450 720,530 870,500 C 1020,470 1170,530 1320,510 C 1440,490 1540,530 1650,540" />
    </svg>
  )
}

function SunDecor() {
  return (
    <svg
      className="absolute right-8 sm:right-16 md:right-28 w-24 h-24 sm:w-28 sm:h-28 z-0 pointer-events-none"
      style={{ top: '630px' }}
      viewBox="0 0 100 100"
      fill="none"
    >
      <circle cx="50" cy="50" r="18" className="mountain-path mountain-front" />
      <circle cx="50" cy="50" r="26" className="mountain-path mountain-contour" />
      <line x1="50" y1="10" x2="50" y2="22" className="mountain-path mountain-mid" />
      <line x1="50" y1="78" x2="50" y2="90" className="mountain-path mountain-mid" />
      <line x1="10" y1="50" x2="22" y2="50" className="mountain-path mountain-mid" />
      <line x1="78" y1="50" x2="90" y2="50" className="mountain-path mountain-mid" />
      <line x1="22" y1="22" x2="30" y2="30" className="mountain-path mountain-mid" />
      <line x1="70" y1="70" x2="78" y2="78" className="mountain-path mountain-mid" />
      <line x1="22" y1="78" x2="30" y2="70" className="mountain-path mountain-mid" />
      <line x1="70" y1="30" x2="78" y2="22" className="mountain-path mountain-mid" />
    </svg>
  )
}

// ─── Placeholder image box ────────────────────────────────────────
function ImgBox({
  label,
  className = '',
  border = 3,
}: {
  label: string
  className?: string
  border?: number
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl overflow-hidden ${className}`}
      style={{
        border: `${border}px solid ${C.borderDark}`,
        background: `${C.coverage}`,
        minHeight: 180,
      }}
    >
      <span className="text-xs text-gray-500 font-medium px-4 text-center">[{label}]</span>
    </div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────
const NAV_LINKS = [
  '¿Quiénes somos?',
  '¿Qué hacemos?',
  '¿Cómo ayudar?',
  'Servicios',
  'Publicaciones',
  'Eventos',
]

function Navbar({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [open, setOpen] = useState(false)

  const handleLink = (link: string) => {
    setOpen(false)
    if (link === '¿Quiénes somos?') onNavigate('quienes-somos')
  }

  return (
    <nav
      className="relative z-10 w-full max-w-7xl mx-auto px-6 py-5 flex justify-between items-center"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.20)' }}
    >
      {/* Brand */}
      <button onClick={() => onNavigate('home')} className="flex items-center gap-3">
        <img src={logoImg} alt="Cercap logo" className="h-10 w-auto object-contain flex-shrink-0" />
        <div className="text-sm font-medium leading-tight text-white text-left">
          Cercap – CDRO
          <br />
          <span className="text-xs font-light opacity-80">Centro Regional de Capacitación...</span>
        </div>
      </button>

      {/* Desktop links */}
      <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-white">
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => handleLink(link)}
            className="hover:opacity-75 transition whitespace-nowrap"
          >
            {link}
          </button>
        ))}
        <button
          className="border border-white px-5 py-2 rounded-2xl hover:bg-white transition text-sm font-medium ml-2"
          style={{ color: 'white' }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = C.primary)}
          onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = 'white')}
        >
          Contáctenos
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col gap-1 px-6 py-4 z-50"
          style={{ background: C.primary }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => handleLink(link)}
              className="text-white text-sm py-2 border-b text-left hover:opacity-75 transition"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            >
              {link}
            </button>
          ))}
          <button
            className="mt-2 border border-white rounded-2xl text-white text-center px-5 py-2 text-sm font-medium hover:bg-white transition"
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = C.primary)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = 'white')}
          >
            Contáctenos
          </button>
        </div>
      )}
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────
function Hero({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <header
      className="relative text-white flex flex-col"
      style={{ background: C.primary, minHeight: '90vh' }}
    >
      {/* Hero background image */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ opacity: 0.40, mixBlendMode: 'multiply' }}
      />

      <Navbar onNavigate={onNavigate} />

      <div className="relative z-10 flex-grow flex items-center justify-start max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
            style={{ background: 'rgba(44,80,156,0.10)', border: '1px solid rgba(44,80,156,0.20)', color: 'rgba(255,255,255,0.85)' }}
          >
            Centro Regional de Capacitación
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            Cercap-CDRO
          </h1>
          <p className="text-base md:text-xl font-light mb-8 leading-relaxed opacity-90 max-w-2xl">
            El Centro Regional de Capacitación para la Participación Comunitaria con sus siglas CERCAP
            es un sistema regional dedicado al impulso del modelo de desarrollo integral, equitativo y
            sustentable, basado en la filosofía y metodología de la participación comunitaria desarrollada
            por la Asociación CDRO.
          </p>
          <button
            className="px-8 py-3 rounded text-sm font-medium transition"
            style={{ background: C.dark, color: '#fff' }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#000')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = C.dark)}
          >
            Conoce más
          </button>
        </div>
      </div>
    </header>
  )
}

// ─── Project section (alternating layout) ────────────────────────
function ProjectSection({
  title,
  description,
  imgLabel,
  reversed = false,
}: {
  title: string
  description: string
  imgLabel: string
  reversed?: boolean
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center`}>
        <div className={`relative z-10 bg-white p-6 sm:p-8 rounded-2xl shadow-sm ${reversed ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}
          style={{ border: `1px solid ${C.borderDark}` }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: C.dark }}>
            {title}
          </h2>
          <p className="mb-8 text-lg leading-relaxed" style={{ color: '#4B5563' }}>
            {description}
          </p>
          <button
            className="px-6 py-2 rounded text-sm font-medium text-white transition"
            style={{ background: C.dark }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#000')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = C.dark)}
          >
            Leer más
          </button>
        </div>
        <div className={`relative z-10 ${reversed ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}>
          <ImgBox
            label={imgLabel}
            className="w-full shadow-lg aspect-video"
            border={3}
          />
        </div>
      </div>
    </section>
  )
}

// ─── Participants section ─────────────────────────────────────────
function ParticipantsSection() {
  return (
    <section className="py-24 relative z-10" style={{ backgroundColor: C.coverage }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: C.dark }}>
          Participantes de nuestros proyectos
        </h2>
        <div className="flex justify-center">
          <ImgBox
            label="Infografía de participantes — reemplazar con imagen"
            className="w-full max-w-5xl shadow-md"
            border={3}
          />
        </div>
      </div>
    </section>
  )
}

// ─── Stories section ──────────────────────────────────────────────
function StoriesSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: C.light }}>
      {/* Decorative mountain silhouettes */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ height: 320, opacity: 1 }}
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className="mountain-path mountain-back"  d="M -60,200 C 110,185 210,100 330,90 C 420,80 490,140 590,150 C 690,160 780,100 900,80 C 1000,60 1080,130 1210,110 C 1310,90 1420,40 1500,30 L 1500,320 L -60,320 Z" style={{ opacity: 0.08, fill: '#374151', stroke: '#374151' }} />
        <path className="mountain-path mountain-back"  d="M -60,200 C 110,185 210,100 330,90 C 420,80 490,140 590,150 C 690,160 780,100 900,80 C 1000,60 1080,130 1210,110 C 1310,90 1420,40 1500,30" />
        <path className="mountain-path mountain-contour" d="M 330,90 C 350,130 375,165 410,200" />
        <path className="mountain-path mountain-contour" d="M 900,80 C 888,120 862,158 828,200" />
        <path className="mountain-path mountain-mid"   d="M -60,220 C 80,208 200,140 310,130 C 410,120 500,175 610,160 C 720,145 800,110 920,92 C 1030,74 1110,155 1230,145 C 1340,135 1440,95 1540,85" />
        <path className="mountain-path mountain-front" d="M -60,265 C 160,255 290,185 450,175 C 600,165 720,225 870,200 C 1020,175 1170,220 1320,200 C 1440,183 1540,215 1650,220" />
      </svg>

      {/* Decorative sun — top right */}
      <svg
        className="absolute pointer-events-none"
        style={{ top: 32, right: 48, width: 80, height: 80, opacity: 0.55 }}
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="18" className="mountain-path mountain-front" />
        <circle cx="50" cy="50" r="26" className="mountain-path mountain-contour" />
        <line x1="50" y1="10" x2="50" y2="22" className="mountain-path mountain-mid" />
        <line x1="50" y1="78" x2="50" y2="90" className="mountain-path mountain-mid" />
        <line x1="10" y1="50" x2="22" y2="50" className="mountain-path mountain-mid" />
        <line x1="78" y1="50" x2="90" y2="50" className="mountain-path mountain-mid" />
        <line x1="22" y1="22" x2="30" y2="30" className="mountain-path mountain-mid" />
        <line x1="70" y1="70" x2="78" y2="78" className="mountain-path mountain-mid" />
        <line x1="22" y1="78" x2="30" y2="70" className="mountain-path mountain-mid" />
        <line x1="70" y1="30" x2="78" y2="22" className="mountain-path mountain-mid" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12" style={{ color: C.dark }}>
          Historias relevantes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Featured */}
          <div
            className="md:col-span-7 flex flex-col bg-white p-6 rounded-2xl shadow-sm"
            style={{ border: `1px solid ${C.borderDark}` }}
          >
            <ImgBox
              label="Historia destacada — reemplazar imagen"
              className="w-full mb-4 shadow-sm"
              border={3}
            />
            <h3 className="text-xl font-bold mb-1" style={{ color: C.dark }}>Historia empresarial</h3>
            <p className="text-sm" style={{ color: '#4B5563' }}>Descripción del proyecto destacado.</p>
          </div>

          {/* Side cards */}
          <div className="md:col-span-5 flex flex-col gap-8">
            {[
              { label: 'Historia secundaria 1', title: 'Proyecto', desc: 'Descripción del proyecto principal.', price: 'Q10.99' },
              { label: 'Historia secundaria 2', title: 'Proyecto', desc: 'Descripción del proyecto de menor categoría.', price: 'Q10.99' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white p-5 rounded-2xl shadow-sm"
                style={{ border: `1px solid ${C.borderDark}` }}
              >
                <ImgBox
                  label={item.label + ' — reemplazar imagen'}
                  className="w-full h-44 md:h-48 mb-4 shadow-sm"
                  border={2}
                />
                <h3 className="text-lg font-bold mb-1" style={{ color: C.dark }}>{item.title}</h3>
                <p className="text-sm mb-1" style={{ color: '#4B5563' }}>{item.desc}</p>
                <p className="font-semibold" style={{ color: C.dark }}>{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Interactive Map section ───────────────────────────────────────
const MAP_MARKERS = [
  { x: '25%', y: '40%', label: 'San Marcos' },
  { x: '42%', y: '55%', label: 'Quetzaltenango' },
  { x: '60%', y: '35%', label: 'Alta Verapaz' },
  { x: '70%', y: '60%', label: 'Chiquimula' },
  { x: '35%', y: '70%', label: 'Suchitepéquez' },
]

function MapSection() {
  const [active, setActive] = useState<string | null>(null)
  return (
    <section className="py-24 relative z-10" style={{ background: '#fff' }}>
      <div
        className="max-w-7xl mx-auto px-6 py-8"
      >
        <div className="mb-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
            style={{
              background: 'rgba(44,80,156,0.10)',
              border: '1px solid rgba(44,80,156,0.20)',
              color: C.primary,
            }}
          >
            Cobertura geográfica
          </div>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: C.dark }}>
            Nuestra cobertura en Guatemala
          </h2>
          <p className="mt-3 text-base leading-relaxed max-w-2xl" style={{ color: '#4B5563' }}>
            El programa Cercap-CDRO opera en múltiples departamentos del país, fortaleciendo comunidades
            a través de la capacitación y el desarrollo comunitario.
          </p>
        </div>

        {/* Map container */}
        <div
          className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center"
          style={{
            background: '#EDEDEF',
            minHeight: 420,
          }}
        >
          <img
            src={mapImage}
            alt="Cobertura geográfica Cercap-CDRO"
            className="w-full h-full object-contain"
            style={{ maxHeight: 500 }}
          />
        </div>
      </div>
    </section>
  )
}

// ─── Features grid ────────────────────────────────────────────────
const FEATURES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707m12.728 0-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7z" />
      </svg>
    ),
    title: 'Desarrollo comunitario',
    desc: 'Impulsamos el crecimiento integral de las comunidades a través de programas participativos y sostenibles.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: 'Participación inclusiva',
    desc: 'Fomentamos la participación de todos los sectores de la comunidad en los procesos de toma de decisiones.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: 'Sostenibilidad',
    desc: 'Cada proyecto está diseñado para ser sostenible en el tiempo y respetando el medio ambiente.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
    title: 'Planificación estratégica',
    desc: 'Trabajamos con calendarios y planificación detallada para maximizar el impacto de cada intervención.',
  },
]

function FeaturesSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24" style={{ background: '#fff' }}>
      {/* Decorative mountain silhouettes */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ height: 280 }}
        preserveAspectRatio="none"
        viewBox="0 0 1440 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path className="mountain-path mountain-back"  d="M -60,160 C 100,145 200,70 330,55 C 430,42 510,110 620,118 C 730,126 820,65 950,48 C 1060,33 1150,105 1280,88 C 1380,74 1450,28 1540,18" />
        <path className="mountain-path mountain-contour" d="M 330,55 C 348,100 368,148 395,180" />
        <path className="mountain-path mountain-contour" d="M 950,48 C 935,92 908,138 872,180" />
        <path className="mountain-path mountain-mid"   d="M -60,190 C 85,175 195,110 315,100 C 415,90 510,148 625,132 C 740,116 820,82 945,65 C 1055,50 1140,125 1260,112 C 1365,100 1450,62 1540,52" />
        <path className="mountain-path mountain-front" d="M -60,240 C 155,228 285,158 455,148 C 610,138 725,208 880,182 C 1030,156 1185,208 1335,188 C 1450,172 1545,200 1650,206" />
      </svg>

      {/* Decorative sun — top left */}
      <svg
        className="absolute pointer-events-none"
        style={{ top: 40, left: 56, width: 72, height: 72, opacity: 0.50 }}
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="18" className="mountain-path mountain-front" />
        <circle cx="50" cy="50" r="26" className="mountain-path mountain-contour" />
        <line x1="50" y1="10" x2="50" y2="22" className="mountain-path mountain-mid" />
        <line x1="50" y1="78" x2="50" y2="90" className="mountain-path mountain-mid" />
        <line x1="10" y1="50" x2="22" y2="50" className="mountain-path mountain-mid" />
        <line x1="78" y1="50" x2="90" y2="50" className="mountain-path mountain-mid" />
        <line x1="22" y1="22" x2="30" y2="30" className="mountain-path mountain-mid" />
        <line x1="70" y1="70" x2="78" y2="78" className="mountain-path mountain-mid" />
        <line x1="22" y1="78" x2="30" y2="70" className="mountain-path mountain-mid" />
        <line x1="70" y1="30" x2="78" y2="22" className="mountain-path mountain-mid" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto">
      <h2
        className="text-3xl md:text-4xl font-bold mb-16 pb-4"
        style={{ color: C.dark, borderBottom: `1px solid #E5E7EB` }}
      >
        ¿Por qué Cercap-CDRO?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="relative bg-white p-6 rounded-2xl shadow-sm"
            style={{ border: `3px solid ${C.borderDark}` }}
          >

            <div
              className="w-10 h-10 flex items-center justify-center rounded-lg mb-4"
              style={{ background: 'rgba(44,80,156,0.10)', color: C.primary }}
            >
              {f.icon}
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: C.dark }}>
              {f.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>
              {f.desc}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────
const FOOTER_COLS = [
  { heading: 'Organización', links: ['¿Quiénes somos?', '¿Qué hacemos?', 'Historia'] },
  { heading: 'Programas', links: ['Servicios', 'Proyectos', '¿Cómo ayudar?'] },
  { heading: 'Recursos', links: ['Publicaciones', 'Eventos', 'Noticias'] },
]

function Footer() {
  return (
    <footer className="mt-12 bg-white relative z-10" style={{ borderTop: '1px solid #E5E7EB' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 w-full md:w-1/3">
            <h4 className="font-bold text-lg" style={{ color: C.dark }}>Cercap – CDRO</h4>
            <p className="text-xs leading-relaxed" style={{ color: '#4B5563' }}>
              Centro Regional de Capacitación para la Participación Comunitaria. Asociación CDRO.
            </p>
            {/* Social icons */}
            <div className="flex gap-4" style={{ color: '#6B7280' }}>
              {[
                { label: 'Instagram', path: 'M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.5A4 4 0 0 0 3.5 7.5v9A4 4 0 0 0 7.5 20.5h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4h-9Zm4.5 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm4.75-2.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z' },
                { label: 'LinkedIn', path: 'M6.5 8A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3ZM5 10h3v9H5v-9Zm5 0h2.8v1.3h.04C13.2 10.5 14.2 10 15.5 10c3 0 3.5 1.8 3.5 4.2V19h-3v-4.1c0-1 0-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2V19H10v-9Z' },
                { label: 'YouTube', path: 'M21.6 7.2a2.8 2.8 0 0 0-1.97-1.98C18 4.8 12 4.8 12 4.8s-6 0-7.63.42A2.8 2.8 0 0 0 2.4 7.2 29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 1.97 1.98C6 19.2 12 19.2 12 19.2s6 0 7.63-.42a2.8 2.8 0 0 0 1.97-1.98A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z' },
                { label: 'Twitter/X', path: 'M4 4h16M4 4l7 7m0 0 7-7M11 11v9m-7-9 7 9 7-9' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="transition"
                  style={{ color: '#6B7280' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = C.primary)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#6B7280')}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="w-full md:w-2/3 grid grid-cols-3 gap-4">
            {FOOTER_COLS.map((col) => (
              <div key={col.heading} className="flex flex-col gap-3">
                <h5 className="font-semibold text-sm mb-1" style={{ color: C.dark }}>{col.heading}</h5>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-xs transition"
                    style={{ color: '#4B5563' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = C.primary)}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#4B5563')}
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs" style={{ borderTop: '1px solid #E5E7EB', color: '#9CA3AF' }}>
          <span>© {new Date().getFullYear()} Cercap – CDRO. Todos los derechos reservados.</span>
          <span>Asociación CDRO · Guatemala</span>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState('home')

  const navigate = (p: string) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (page === 'quienes-somos') {
    return (
      <>
        {/* Sticky top bar with nav on sub-pages */}
        <div className="sticky top-0 z-50" style={{ background: C.primary }}>
          <Navbar onNavigate={navigate} />
        </div>
        <QuienesSomos onNavigate={navigate} />
        <Footer />
      </>
    )
  }

  return (
    <div className="relative min-h-screen" style={{ background: '#fff', color: C.dark }}>
      {/* Decorative mountain layers */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <SunDecor />
        <MountainDecor top="650px" height="750px" viewH={750} />
        <MountainDecor top="2800px" height="850px" viewH={850} />
      </div>

      <Hero onNavigate={navigate} />

      <main className="relative z-10">
        <ProjectSection
          title="Juega Conmigo"
          description="Proyecto orientado al desarrollo infantil temprano a través del juego comunitario, promoviendo la creatividad y el bienestar de los niños en las comunidades rurales."
          imgLabel="Imagen del proyecto Juega Conmigo"
        />
        <ProjectSection
          title="Promoviendo el desarrollo infantil y su transición a la juventud"
          description="Proyecto enfocado en acompañar a niños y jóvenes en las transiciones clave de su vida, fortaleciendo sus capacidades y oportunidades de desarrollo."
          imgLabel="Imagen del proyecto infantil y juventud"
          reversed
        />
        <ParticipantsSection />
        <StoriesSection />
        <MapSection />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  )
}
