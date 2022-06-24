import { FC } from "react";
import { useContext } from "react";
import { ContainerHeader } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

interface HeaderProps {
  toggleTheme(): void;
}

const Header: FC<HeaderProps> = (props) => {
  const { toggleTheme } = props;

  const { colors, title } = useContext(ThemeContext);

  return (
    <ContainerHeader>
      <h1>Header</h1>
      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        uncheckedIcon={false}
        checkedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={colors.secondary}
        offColor={colors.thirdary}
      />
    </ContainerHeader>
  );
};

export default Header;
