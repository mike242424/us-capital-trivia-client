import Highscores from "./pages/Highscores";
import NotFound from "./pages/NotFound";
import Quiz from "./pages/Quiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/highscores" element={<Highscores />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
