import {
  ColorConverterPage,
  ExplainCodePage,
  GenerateVariableNamePage,
  HomePage,
} from "@/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/generateVariableName"
          element={<GenerateVariableNamePage />}
        />
        <Route path="/colorConverter" element={<ColorConverterPage />} />
        <Route path="/explainCode" element={<ExplainCodePage />} />
      </Routes>
    </BrowserRouter>
  );
};
