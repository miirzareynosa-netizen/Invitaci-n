import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Send, ExternalLink } from 'lucide-react';

const App = () => {
  const [activeTeam, setActiveTeam] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleRSVP = () => {
    const phone = "50255792140";
    const message = `¡Hola! Confirmo mi asistencia al Baby Shower. ¡Soy Team ${activeTeam || '...'}! 🙏✨`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const wazeUrl = "https://www.waze.com/es/live-map/directions/gt/guatemala/guate/finca-el-tigre?to=place.ChIJo9AItG-9iYURSIw8rz-7hHQ";

  // Componente de Nube para mayor densidad
  const Cloud = ({ style, duration }) => (
    <div className="absolute pointer-events-none opacity-90 animate-cloud" style={{ ...style, animationDuration: duration }}>
      <div className="relative w-28 h-10 bg-white rounded-full shadow-sm">
        <div className="absolute -top-5 left-4 w-12 h-12 bg-white rounded-full" />
        <div className="absolute -top-7 left-12 w-14 h-14 bg-white rounded-full" />
        <div className="absolute -top-4 left-20 w-10 h-10 bg-white rounded-full" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDF9F6] flex items-center justify-center p-0 md:p-6 font-sans overflow-x-hidden relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Quicksand:wght@300;400;600;700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-25px) rotate(1deg); }
        }
        @keyframes cloudDrift {
          0% { transform: translateX(-200px); }
          100% { transform: translateX(110vw); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-cloud { animation: cloudDrift linear infinite; }
        .font-dancing { font-family: 'Dancing Script', cursive; }
        .font-quicksand { font-family: 'Quicksand', sans-serif; }
        .gold-text {
          color: #D4AF37;
          text-shadow: 0px 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>

      {/* Cielo lleno de Nubes Blancas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <Cloud style={{ top: '5%' }} duration="30s" />
        <Cloud style={{ top: '15%', left: '20%' }} duration="45s" />
        <Cloud style={{ top: '25%', left: '-10%' }} duration="35s" />
        <Cloud style={{ top: '40%', left: '50%' }} duration="50s" />
        <Cloud style={{ top: '60%', left: '10%' }} duration="40s" />
        <Cloud style={{ top: '80%', left: '30%' }} duration="55s" />
        <Cloud style={{ top: '90%', left: '-5%' }} duration="38s" />
        
        {/* Blobs de color */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 -right-10 w-80 h-80 bg-pink-50/50 rounded-full blur-[100px]" />
      </div>

      {/* Tarjeta de Invitación */}
      <div 
        className={`max-w-md w-full bg-white/95 rounded-[3.5rem] shadow-[0_30px_60px_rgba(165,123,91,0.15)] overflow-hidden relative transition-all duration-1000 transform border-[14px] border-white z-10 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
      >
        {/* Cabecera Animada con Muchísimos Globos y Oso Tierno */}
        <div className="h-[550px] bg-gradient-to-b from-[#F2F9FF] to-white relative flex justify-center items-center overflow-hidden">
          
          <div className="relative z-10 animate-float flex flex-col items-center mt-10">
            
            {/* Ramo de Globos muy denso (Cluster de 25 globos) */}
            <div className="relative w-80 h-64 mb-[-60px]">
              <svg viewBox="0 0 200 160" className="w-full h-full drop-shadow-md">
                {[
                  // Fondo del ramo
                  { x: 100, y: 30, r: 35, c: '#F5C7D3' }, { x: 70, y: 40, r: 30, c: '#E8D0B5' },
                  { x: 130, y: 40, r: 32, c: '#B4D9EF' }, { x: 50, y: 60, r: 28, c: '#F5C7D3' },
                  { x: 150, y: 65, r: 26, c: '#E8D0B5' }, { x: 100, y: 60, r: 40, c: '#F5C7D3' },
                  // Centro del ramo
                  { x: 80, y: 75, r: 32, c: '#B4D9EF' }, { x: 120, y: 75, r: 32, c: '#F5C7D3' },
                  { x: 60, y: 90, r: 28, c: '#E8D0B5' }, { x: 140, y: 90, r: 28, c: '#B4D9EF' },
                  { x: 100, y: 95, r: 35, c: '#F5C7D3' }, { x: 40, y: 110, r: 22, c: '#E8D0B5' },
                  { x: 160, y: 110, r: 22, c: '#B4D9EF' },
                  // Frente del ramo (globos más pequeños)
                  { x: 85, y: 125, r: 18, c: '#B4D9EF' }, { x: 115, y: 125, r: 18, c: '#E8D0B5' },
                  { x: 65, y: 130, r: 15, c: '#F5C7D3' }, { x: 135, y: 130, r: 15, c: '#B4D9EF' },
                  { x: 100, y: 135, r: 20, c: '#F5C7D3' }
                ].map((b, i) => (
                  <g key={i}>
                    <circle cx={b.x} cy={b.y} r={b.r} fill={b.c} fillOpacity="0.95" />
                    <circle cx={b.x - b.r/3} cy={b.y - b.r/3} r={b.r/4.5} fill="white" fillOpacity="0.45" />
                  </g>
                ))}
              </svg>
            </div>

            {/* Cuerdas */}
            <div className="h-14 w-[1px] bg-[#8B5E3C]/30" />

            {/* Composición del Oso y la Cesta */}
            <div className="relative scale-110">
              {/* Cesta de Mimbre Grande */}
              <div className="w-40 h-32 bg-[#9E7356] rounded-b-[2rem] border-t-[12px] border-[#7D5333] relative shadow-lg overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 1px, transparent 1px, transparent 12px), repeating-linear-gradient(-45deg, #000, #000 1px, transparent 1px, transparent 12px)' }} />
                <span className="text-4xl font-bold font-quicksand gold-text tracking-widest z-10 drop-shadow-md">OR</span>
              </div>

              {/* El Osito (CARA COMPLETA, SIN NADA CELESTE) */}
              <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-32 h-32">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                  {/* Orejas */}
                  <circle cx="26" cy="35" r="14" fill="#B38B61" stroke="#8B5E3C" strokeWidth="1.5" />
                  <circle cx="26" cy="35" r="8" fill="#D2B48C" opacity="0.6" />
                  <circle cx="74" cy="35" r="14" fill="#B38B61" stroke="#8B5E3C" strokeWidth="1.5" />
                  <circle cx="74" cy="35" r="8" fill="#D2B48C" opacity="0.6" />
                  
                  {/* Cabeza */}
                  <ellipse cx="50" cy="55" rx="42" ry="38" fill="#B38B61" stroke="#8B5E3C" strokeWidth="1.5" />
                  
                  {/* Ojos */}
                  <circle cx="36" cy="52" r="4.5" fill="#1a1a1a" />
                  <circle cx="38" cy="50" r="1.5" fill="white" />
                  <circle cx="64" cy="52" r="4.5" fill="#1a1a1a" />
                  <circle cx="66" cy="50" r="1.5" fill="white" />
                  
                  {/* Mejillas */}
                  <circle cx="28" cy="62" r="8" fill="#F5C7D3" opacity="0.4" filter="blur(2px)" />
                  <circle cx="72" cy="62" r="8" fill="#F5C7D3" opacity="0.4" filter="blur(2px)" />
                  
                  {/* Hocico */}
                  <ellipse cx="50" cy="74" rx="18" ry="14" fill="#FDF1E6" />
                  
                  {/* Nariz negra en forma de corazón (Como la imagen original) */}
                  <path d="M46 72 Q50 67 54 72 Q54 75 50 76 Q46 75 46 72" fill="#2D1B0C" />
                  
                  {/* Sonrisa tierna */}
                  <path d="M50 76 v2 M45 80 Q50 84 55 80" fill="none" stroke="#2D1B0C" strokeWidth="1.2" strokeLinecap="round" />
                  
                  {/* Patitas apoyadas */}
                  <circle cx="18" cy="92" r="12" fill="#B38B61" stroke="#8B5E3C" strokeWidth="1.5" />
                  <circle cx="82" cy="92" r="12" fill="#B38B61" stroke="#8B5E3C" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Contenido de la Invitación */}
        <div className="px-8 pb-14 pt-2 text-center">
          <h1 className="text-6xl font-dancing text-[#7D3C3C] mb-1">
            Baby Shower
          </h1>
          <p className="text-xl font-bold tracking-[0.4em] text-[#A06D6D] uppercase mb-8 font-quicksand">
            Bebé, en camino
          </p>

          <p className="text-[#8B5E3C] italic text-xl mb-10 leading-relaxed font-quicksand px-4">
            Bebé está por llegar y queremos celebrarlo contigo. Acompáñanos y descubre si será niño o niña.
          </p>

          {/* Selección de Team */}
          <div className="grid grid-cols-2 gap-5 mb-10">
            <button 
              onClick={() => setActiveTeam('Niño')}
              className={`p-6 rounded-[2.5rem] transition-all duration-300 border-2 flex flex-col items-center ${activeTeam === 'Niño' ? 'bg-[#D1E9F8] border-blue-300 shadow-xl scale-105' : 'bg-white border-blue-50 hover:border-blue-100'}`}
            >
              <Heart className={`w-8 h-8 mb-2 ${activeTeam === 'Niño' ? 'fill-blue-500 text-blue-500' : 'text-blue-200'}`} />
              <span className="text-sm font-bold text-blue-800 uppercase tracking-widest font-quicksand">Team Niño</span>
              <p className="text-xs mt-1 text-blue-600 font-bold italic">Toallitas húmedas</p>
            </button>

            <button 
              onClick={() => setActiveTeam('Niña')}
              className={`p-6 rounded-[2.5rem] transition-all duration-300 border-2 flex flex-col items-center ${activeTeam === 'Niña' ? 'bg-[#FCE4EC] border-pink-300 shadow-xl scale-105' : 'bg-white border-pink-50 hover:border-pink-100'}`}
            >
              <Heart className={`w-8 h-8 mb-2 ${activeTeam === 'Niña' ? 'fill-pink-500 text-pink-500' : 'text-pink-200'}`} />
              <span className="text-sm font-bold text-pink-800 uppercase tracking-widest font-quicksand">Team Niña</span>
              <p className="text-xs mt-1 text-pink-600 font-bold italic">Pañalitos</p>
            </button>
          </div>

          {/* Información Logística */}
          <div className="bg-[#FFFDFB] rounded-[2.5rem] p-8 mb-10 border border-[#F2E8DF] shadow-inner">
            <div className="flex items-center justify-around mb-8">
              <div className="text-center">
                <p className="text-xs font-bold text-[#A06D6D] mb-1 uppercase tracking-widest font-quicksand">Marzo</p>
                <span className="text-5xl font-dancing text-[#7D3C3C]">22</span>
              </div>
              <div className="w-[1px] h-12 bg-[#D7C4B2]/40"></div>
              <div className="text-center">
                <p className="text-xs font-bold text-[#A06D6D] mb-1 uppercase tracking-widest font-quicksand">Hora</p>
                <span className="text-3xl font-bold text-[#7D3C3C] font-quicksand uppercase">9:00 AM</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col items-center">
                <div className="flex items-center space-x-2 mb-1">
                  <MapPin className="w-4 h-4 text-[#A06D6D]" />
                  <span className="font-bold text-[#8B5E3C] text-lg font-quicksand">Finca el Tigre</span>
                </div>
                <p className="text-sm text-[#A06D6D] font-medium italic text-center font-quicksand">Las canoas zona 25, Ciudad Capital</p>
              </div>
              
              <a 
                href={wazeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-3 bg-[#7D3C3C] text-white rounded-full text-xs font-bold hover:bg-[#A06D6D] transition-all shadow-md transform hover:-translate-y-1"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                ABRIR EN WAZE
              </a>
            </div>
          </div>

          <button 
            onClick={handleRSVP}
            className="w-full bg-[#25D366] text-white py-5 rounded-[2rem] font-bold shadow-xl hover:bg-[#128C7E] transition-all flex items-center justify-center space-x-3 transform active:scale-95"
          >
            <Send className="w-5 h-5" />
            <span className="tracking-widest uppercase text-sm font-black">Confirmar por WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;