export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Contenedor principal */}
      <header className="w-full max-w-6xl bg-white shadow-xl rounded-2xl p-6 mb-6 border border-gray-200">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-2">
          Centro de Gestión de Mercados, Logística y Tecnologías de la Información (CGMTLI)
        </h1>
        <p className="text-center text-gray-600 mb-4">
          SENA Bogotá – Formación para el trabajo y desarrollo tecnológico
        </p>
      </header>

      {/* Sección de Historia */}
      <section className="w-full max-w-6xl bg-white shadow-md rounded-2xl p-6 mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Historia</h2>
        <p className="text-gray-700 leading-relaxed">
          El CGMTLI del SENA Bogotá se ha destacado por su compromiso con la formación de
          profesionales en áreas de logística, tecnología de la información y mercados. Desde su
          creación, ha desarrollado programas innovadores que combinan la teoría con la práctica,
          promoviendo la competitividad y la empleabilidad de sus aprendices.
        </p>
      </section>

      {/* Sección de Ubicación */}
      <section className="w-full max-w-6xl bg-white shadow-md rounded-2xl p-6 mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Ubicación</h2>
        <p className="text-gray-700 mb-4">
          Calle 52 No. 13-65, Bogotá, Colombia
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.123456789!2d-74.080!3d4.624!2m3!1f0!2f0!3f0!3"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* Sección de Programas */}
      <section className="w-full max-w-6xl bg-white shadow-md rounded-2xl p-6 mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Programas Ofrecidos</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Logística Empresarial</li>
          <li>Gestión de Mercados</li>
          <li>Tecnologías de la Información</li>
          <li>Programas complementarios en áreas afines</li>
        </ul>
      </section>

      {/* Sección de Contacto */}
      <section className="w-full max-w-6xl bg-white shadow-md rounded-2xl p-6 mb-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Contacto</h2>
        <p className="text-gray-700 mb-4">
          Para más información o inscripciones, puedes comunicarte a través de los siguientes medios:
        </p>
        <ul className="list-none pl-0 text-gray-700">
          <li><strong>Teléfono:</strong> (1) 5461600 Ext. 17044-16938-16995</li>
          <li><strong>Correo electrónico:</strong> <a href="mailto:masaavedrar@sena.edu.co" className="text-blue-600">masaavedrar@sena.edu.co</a></li>
          <li><strong>Horario de atención:</strong> Lunes a viernes de 7:00 a.m. a 9:00 p.m.</li>
        </ul>
      </section>
    </div>
  );
}
