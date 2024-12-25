import './App.css';
import AstrologerCard from './components/AstrologerCard';
import Navbar from './components/Navbar';
import astrologers from './utils/astrologers';

function App() {
  return (
    <div className="bg-white min-h-screen w-full">
      <header className="p-6 bg-white shadow-custom">
        <Navbar />
      </header>
      <main className="w-full mx-auto " style={{ overflow: 'hidden' }}>
        <h2 className="text-center text-[2.10rem] font-normal text-gray-800 mb-5 mt-6">
          Chat with Astrologers
        </h2>
        <div className="flex justify-center">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 w-fit">
            {astrologers.map((astrologer, index) => (
              <AstrologerCard key={index} astrologer={astrologer} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
