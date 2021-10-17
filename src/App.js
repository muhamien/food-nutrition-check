import { ListNutrition, FormCheckNutrition } from "./components";

function App() {
  return (
    <div style={{ padding: '30px' }}>
      <h1>Nutrition App</h1>
      <hr />
      <FormCheckNutrition />
      <ListNutrition />
    </div>
  );
}

export default App;
