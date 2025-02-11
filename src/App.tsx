import React, { useState, useRef, useEffect } from 'react';
import { Heart } from 'lucide-react';

function App() {
  const [accepted, setAccepted] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const moveButton = () => {
    if (noButtonRef.current) {
      // Get the current position of the button container
      const container = noButtonRef.current.parentElement;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      
      // Move within a smaller range (150px in any direction)
      const moveRange = 150;
      const x = Math.max(0, Math.min(containerRect.width - 100, Math.random() * moveRange - moveRange/2 + containerRect.width/2));
      const y = Math.max(-50, Math.min(containerRect.height + 50, Math.random() * moveRange - moveRange/2 + containerRect.height/2));

      noButtonRef.current.style.position = 'absolute';
      noButtonRef.current.style.left = `${x}px`;
      noButtonRef.current.style.top = `${y}px`;
    }
  };

  if (accepted) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-xl max-w-md mx-4">
          <Heart className="w-20 h-20 text-red-500 mx-auto mb-4 animate-bounce" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">¡Gracias por aceptar! ❤️</h1>
          <p className="text-lg text-gray-600">
            Has hecho que este día sea aún más especial. ¡Seremos el mejor San Valentín!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 flex items-center justify-center">
      <div className="text-center bg-white p-8 rounded-lg shadow-xl max-w-md mx-4">
        <Heart className="w-20 h-20 text-red-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          ¿Quieres ser mi San Valentín?
        </h1>
        <div className="space-x-4 relative min-h-[100px]">
          <button
            onClick={() => setAccepted(true)}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
          >
            Sí
          </button>
          <button
            ref={noButtonRef}
            onMouseEnter={moveButton}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;