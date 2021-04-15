import { css } from 'styled-components';
import { defaultTheme } from '..';

const { breakpoints } = defaultTheme;

export function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);

  return breakpointsNames.map((breakpointsName) => css`
    @media screen and (min-width: ${breakpoints[breakpointsName]}px) {
      ${cssByBreakpoints[breakpointsName]}
    }
  `);
}
