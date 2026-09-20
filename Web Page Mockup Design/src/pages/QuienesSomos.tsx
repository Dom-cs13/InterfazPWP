import logoImg from '../assets/isologo-cercap.png'

const C = {
  primary: '#2C509C',
  borderDark: '#1C2236',
  dark: '#111827',
  light: '#F9FAFB',
  coverage: '#EDEDEE',
}

function ImgBox({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl overflow-hidden ${className}`}
      style={{ border: `3px solid ${C.borderDark}`, background: C.coverage, minHeight: 200 }}
    >
      <span className="text-xs text-gray-500 font-medium px-4 text-center">[{label}]</span>
    </div>
  )
}

// Reusable mountain SVG inline
function MountainsBg({ bottom = true }: { bottom?: boolean }) {
  return (
    <svg
      className="absolute left-0 w-full pointer-events-none"
      style={{ [bottom ? 'bottom' : 'top']: 0, height: 200 }}
      preserveAspectRatio="none"
      viewBox="0 0 1440 200"
      fill="none"
    >
      <path className="mountain-path mountain-back" d="M -60,120 C 110,108 210,55 330,44 C 420,36 490,80 590,85 C 690,90 780,50 900,38 C 1000,28 1080,72 1210,58 C 1310,46 1420,18 1500,12" />
      <path className="mountain-path mountain-mid"  d="M -60,140 C 80,130 200,82 310,76 C 410,70 500,108 625,96 C 740,84 820,58 945,44 C 1055,32 1140,90 1260,78 C 1365,68 1450,40 1540,34" />
      <path className="mountain-path mountain-front" d="M -60,170 C 155,162 285,112 455,104 C 610,96 725,142 880,124 C 1030,106 1185,138 1335,122 C 1450,108 1545,128 1650,132" />
    </svg>
  )
}

const PRINCIPIOS = [
  'Participación total de la comunidad',
  'Unidad',
  'Visión global',
  'Visión micro regional',
  'Visión regional',
  'Horizontalidad',
  'Equilibrio',
  'La propiedad comunal',
  'Apoyo mutuo',
  'Marco cultural',
  'Complementariedad',
]

const COBERTURA = ['Quiché', 'Sololá', 'San Marcos', 'Huehuetenango', 'Quetzaltenango', 'Totonicapán']

const OBJETIVOS = [
  'Brindar acompañamiento y asistencia técnica a las organizaciones para que implementen su modelo de desarrollo local.',
  'Desarrollar capacidades en gobernabilidad, técnica y gerencial en las Organizaciones Comunitarias que permita contar con recurso humano propio para la implementación de su modelo de trabajo.',
  'Facilitar a las organizaciones conocimiento e información estudiada y organizada en la temática relacionada al desarrollo rural y la participación total de la comunidad, permitiéndoles fortalecer sus programas o crear nuevos programas de trabajo.',
]

export default function QuienesSomos({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative min-h-screen" style={{ background: '#fff', color: C.dark }}>

      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section
        className="relative flex flex-col justify-end"
        style={{ background: C.primary, minHeight: 320 }}
      >
        {/* Subtle bg tint */}
        <div className="absolute inset-0" style={{ background: 'rgba(28,34,54,0.25)' }} />

        {/* Mountains bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: 120 }}>
          <svg className="w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1440 120" fill="none">
            <path className="mountain-path mountain-back"  d="M -60,60 C 120,50 220,20 360,16 C 480,12 560,44 680,48 C 800,52 900,24 1040,18 C 1160,12 1280,40 1440,36" />
            <path className="mountain-path mountain-front" d="M -60,95 C 180,88 330,58 520,52 C 700,46 840,80 1020,68 C 1200,56 1340,76 1540,80" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-12">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-sm font-medium mb-6 opacity-75 hover:opacity-100 transition text-white"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Inicio
          </button>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
            style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', color: 'white' }}
          >
            Nuestra organización
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">¿Quiénes somos?</h1>
        </div>
      </section>

      {/* ── Definición institucional ─────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div
            className="bg-white p-8 rounded-2xl shadow-sm"
            style={{ border: `1px solid ${C.borderDark}` }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
              style={{ background: `rgba(44,80,156,0.10)`, border: `1px solid rgba(44,80,156,0.20)`, color: C.primary }}
            >
              Definición institucional
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: C.dark }}>
              Centro Regional de Capacitación
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: '#4B5563' }}>
              El Centro Regional de Capacitación para la Participación Comunitaria con sus siglas CERCAP
              es un sistema regional dedicado al impulso del modelo de desarrollo integral, equitativo y
              sustentable, basado en la filosofía y metodología de la participación comunitaria desarrollada
              por la Asociación CDRO.
            </p>
            <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
              Su trabajo se fundamenta en la creación de capacidades humanas, sociales, físicas, financieras
              y naturales a nivel local que permitan el desarrollo integral, desarrollando a través de la
              organización comunitaria, proyectos, programas e instituciones que atiendan las necesidades y
              problemáticas y mejoren las condiciones sociales, económicas, políticas, ambientales y
              culturales de familias, mujeres, jóvenes, niños y comunidades rurales en general.
            </p>
          </div>
          <ImgBox label="Imagen institucional — reemplazar" className="w-full aspect-video shadow-lg" />
        </div>
      </section>

      {/* ── Objetivo General ─────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: C.light }}>
        <MountainsBg />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ImgBox label="Imagen objetivo general — reemplazar" className="w-full aspect-video shadow-lg" />
            <div
              className="bg-white p-8 rounded-2xl shadow-sm"
              style={{ border: `1px solid ${C.borderDark}` }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
                style={{ background: `rgba(44,80,156,0.10)`, border: `1px solid rgba(44,80,156,0.20)`, color: C.primary }}
              >
                Propósito
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: C.dark }}>
                Objetivo General
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#4B5563' }}>
                Mejorar las condiciones de vida de las y los habitantes de las comunidades rurales de la
                Región Occidental de Guatemala, de manera integral, equitativa y sostenible, estableciendo
                el modelo de la participación total de la comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Objetivos Específicos ────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 pb-4"
          style={{ color: C.dark, borderBottom: `1px solid #E5E7EB` }}
        >
          Objetivos Específicos
        </h2>
        <p className="text-base mb-12" style={{ color: '#4B5563' }}>
          Líneas estratégicas que guían la acción de Cercap-CDRO en las comunidades.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {OBJETIVOS.map((obj, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm flex flex-col gap-4"
              style={{ border: `1px solid ${C.borderDark}` }}
            >
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                style={{ background: C.primary }}
              >
                {i + 1}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>{obj}</p>
            </div>
          ))}
        </div>
        <ImgBox label="Imagen objetivos específicos — reemplazar" className="w-full aspect-video max-w-3xl mx-auto shadow-md" />
      </section>

      {/* ── Misión ──────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden" style={{ background: C.primary }}>
        {/* Mountain decor */}
        <svg
          className="absolute bottom-0 left-0 w-full pointer-events-none opacity-20"
          style={{ height: 160 }}
          preserveAspectRatio="none"
          viewBox="0 0 1440 160"
          fill="none"
        >
          <path className="mountain-path mountain-mid"  d="M -60,100 C 120,88 240,44 400,38 C 560,32 680,78 860,62 C 1040,46 1200,80 1440,68" />
          <path className="mountain-path mountain-front" d="M -60,138 C 200,128 380,84 600,76 C 820,68 1020,110 1260,96 C 1380,90 1450,106 1540,110" />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
            style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', color: 'white' }}
          >
            Nuestra razón de ser
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Misión</h2>
          <div
            className="bg-white p-8 rounded-2xl shadow-lg text-left"
            style={{ border: `2px solid ${C.borderDark}` }}
          >
            <div className="flex items-start gap-4">
              <img src={logoImg} alt="" className="h-12 w-auto object-contain flex-shrink-0 mt-1" />
              <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
                Impulsamos el desarrollo integral en la región a través del fortalecimiento organizativo,
                formación de recursos humanos, investigación y sistematización y compartimiento de
                experiencias, facilitando la participación comunitaria en los procesos de desarrollo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Principios y Valores ─────────────────────────────── */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#fff' }}>
        {/* Sun decor */}
        <svg
          className="absolute pointer-events-none"
          style={{ top: 32, right: 64, width: 72, height: 72, opacity: 0.45 }}
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

        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 pb-4"
            style={{ color: C.dark, borderBottom: `1px solid #E5E7EB` }}
          >
            Principios y Valores
          </h2>
          <p className="text-base mb-12" style={{ color: '#4B5563' }}>
            Fundamentos que orientan nuestra filosofía y metodología de trabajo.
          </p>
          <div className="flex flex-wrap gap-3">
            {PRINCIPIOS.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium"
                style={{
                  background: i % 3 === 0
                    ? `rgba(44,80,156,0.10)`
                    : i % 3 === 1
                    ? `rgba(28,34,54,0.07)`
                    : `rgba(44,80,156,0.05)`,
                  border: `1px solid rgba(44,80,156,0.20)`,
                  color: C.primary,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: C.primary }}
                />
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cobertura ────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden" style={{ background: C.coverage }}>
        <MountainsBg bottom={false} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4"
            style={{ background: `rgba(44,80,156,0.10)`, border: `1px solid rgba(44,80,156,0.20)`, color: C.primary }}
          >
            Área de trabajo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: C.dark }}>
            Cobertura
          </h2>
          <p className="text-base mb-12 max-w-2xl" style={{ color: '#4B5563' }}>
            Cercap-CDRO opera en seis departamentos de la Región Occidental de Guatemala.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
            {COBERTURA.map((dep) => (
              <div
                key={dep}
                className="bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center gap-2 text-center"
                style={{ border: `1px solid ${C.borderDark}` }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{ background: `rgba(44,80,156,0.10)` }}
                >
                  <svg className="w-4 h-4" fill="none" stroke={C.primary} strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold" style={{ color: C.dark }}>{dep}</span>
              </div>
            ))}
          </div>
          <ImgBox label="Imagen de cobertura — reemplazar" className="w-full aspect-video max-w-3xl mx-auto shadow-md" />
        </div>
      </section>
    </div>
  )
}
