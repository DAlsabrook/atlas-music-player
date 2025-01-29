import Footer from "./Footer.tsx";
import MusicPlayer from "./MusicPlayer.tsx";

function App() {
  return (
    <div className="flex h-full flex-col justify-between p-8 min-h-screen dark:bg-black dark:text-white">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
