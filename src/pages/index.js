import Image from 'next/image'
import IntroCard from '../components/cards/IntroCard';

function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center mb-10">MVP sobre React.js</h1>
      <div className="relative">
        
        {/* Decoración */}
        <Image src="/fondos/animal_chara_fukurou_hakase.png"
          alt="Decoración" width={370} height={370} className="absolute -right-80 bottom-0 w-22 h-auto opacity-90 pointer-events-none"/>
          
          {/* Card */}
          <IntroCard />
          
      </div>
    </main>
  );
}

export default HomePage;