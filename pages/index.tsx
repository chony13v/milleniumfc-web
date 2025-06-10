export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Bienvenidos a Millenium FC
        </h1>
        <p className="text-gray-600 mb-6">
          Formación de Campeones. Tu camino al fútbol profesional empieza aquí.
        </p>
        <a
          href="/registro"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Registrar Jugador
        </a>
      </div>
    </div>
  );
}