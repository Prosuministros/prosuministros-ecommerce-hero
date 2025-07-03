import React from 'react'

const Logitech = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-2xl font-bold mb-4 text-[#00C8CF]">¡Hola!</h1>
        <p className="mb-2">Este es tu código único de acceso. Consérvalo para futura referencia.</p>
        <div className="font-mono text-lg bg-gray-100 rounded px-4 py-2 mb-4">0d27eeea7b564</div>
        <ol className="list-decimal list-inside mb-4 text-gray-700">
          <li className="mb-2">En tu Sitio Web crea una nueva página para contener la Landing Page. Se sugiere que sea un directorio con el nombre <b>"Logitech"</b> como en el siguiente ejemplo:<br /><span className="font-mono">www.prosuministros.com/logitech</span></li>
          <li className="mb-2">Dentro de la etiqueta <b>&lt;body&gt;</b> de la nueva página inserta el siguiente código:</li>
        </ol>
        <pre className="bg-gray-100 rounded p-4 text-xs overflow-x-auto mb-4">
{`<iframe src="https://www.logitech-forbusiness.com/es?token=0d27eeea7b564" frameborder="0" style="width: 100%; height: calc(100vh); border: none; margin: 0; position: relative; top: 0; left: 0; bottom: 0; right: 0; background: #ffffff; overflow:hidden; z-index:999999;"></iframe>`}
        </pre>
        <p className="text-sm text-gray-500">Importante: la URL con tu código único de acceso <b>NO funcionará</b> si no se encuentra incrustado en una etiqueta &lt;iframe&gt;.</p>
      </div>
      <div className="w-full" style={{height: '80vh', maxWidth: 1200}}>
        <iframe
          src="https://www.logitech-forbusiness.com/es?token=0d27eeea7b564"
          frameBorder="0"
          style={{ width: '100%', height: '100%', border: 'none', background: '#fff', overflow: 'hidden', zIndex: 999999 }}
          title="Logitech For Business"
        />
      </div>
    </div>
  )
}

export default Logitech 