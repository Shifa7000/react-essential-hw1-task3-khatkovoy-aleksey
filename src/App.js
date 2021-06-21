import "./App.css";
import CarArticle from "./CarArticle";

function App() {
  return (
    <div className="App">
      <CarArticle
        header="Apple car"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iste doloribus pariatur consectetur iure accusantium velit nulla ducimus. Distinctio optio eaque magnam, sequi quos nihil eius atque pariatur. Quas, amet."
        imgPath="../img/car1.jpg"
      />
    </div>
  );
}

export default App;
