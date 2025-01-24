import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="flex h-full flex-col justify-between p-8 min-h-screen">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
