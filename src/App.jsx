export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-6 border border-gray-200">
        <h1 className="text-center text-2xl font-bold text-green-700 mb-6">
          Servicio Nacional de Aprendizaje
        </h1>

        <section className="mb-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Formación para el trabajo</h2>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition">
            Conocer más
          </button>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-center mb-4">Programas y formación</h3>
          <div className="flex justify-center gap-3 flex-wrap">
            <div className="bg-green-100 px-4 py-2 rounded-lg font-medium">ADSO</div>
            <div className="bg-green-100 px-4 py-2 rounded-lg font-medium">Animación 3D</div>
            <div className="bg-green-100 px-4 py-2 rounded-lg font-medium">Redes de datos</div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-center mb-4">Contacto</h3>
          <form className="flex flex-col gap-3">
            <input type="text" placeholder="Nombre" className="border border-gray-300 p-2 rounded-lg" />
            <input type="email" placeholder="Correo" className="border border-gray-300 p-2 rounded-lg" />
            <textarea placeholder="Mensaje" rows="3" className="border border-gray-300 p-2 rounded-lg"></textarea>
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition">
              Contactar
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}

