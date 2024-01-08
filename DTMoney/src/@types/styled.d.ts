import "styled-components";
import { defaultTheme } from "../styles/theme/default";


type ThemeType = typeof defaultTheme

declare module 'stled-components' {
    export interface defaultTheme extends ThemeType {}
}



