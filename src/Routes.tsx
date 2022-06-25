import { useState } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PokemonPage from "./pages/PokemonPage";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import RoutePathEnum from "./lib/enums/RoutePathEnum";

function AppRoutes() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />
        <GlobalStyle />
        <Routes>
          <Route path={RoutePathEnum.ROOT} element={<HomePage />} />
          <Route path={RoutePathEnum.POKEMON_PAGE} element={<PokemonPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
