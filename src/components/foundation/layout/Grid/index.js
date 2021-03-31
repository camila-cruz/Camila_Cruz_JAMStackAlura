import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../../theme/utils/propToStyle';

const Container = styled.div`
  width: 100%;
  padding-right: ${({ theme }) => theme.spacing[3]}px;
  padding-left: ${({ theme }) => theme.spacing[3]}px;
  margin-right: auto;
  margin-left: auto;
  
  ${breakpointsMedia({
    xs: css`
      max-width: initial;
      padding-right: 28px;
      padding-left: 28px;
    `,
    md: css`
      min-width: 768px;
      max-width: 1200px;
      padding-right: 9px;
      padding-left: 9px; 
    `,
  })}

  ${propToStyle('minWidth')}
  ${propToStyle('maxWidth')}
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
  ${propToStyle('padding')}
`;

const Col = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${({ value }) => {
    if (typeof value === 'number') {
      return css`
        flex: 0 0 ${(100 * value) / 12}%;
        max-width: ${(100 * value) / 12}%;
      `;
    }

    return breakpointsMedia({
      ...(value.xs && {
        xs: css`
          flex: 0 0 ${(100 * value.xs) / 12}%;
          max-width: ${(100 * value.xs) / 12}%;
        `,
      }),
      ...(value.md && {
        md: css`
          flex: 0 0 ${(100 * value.md) / 12}%;
          max-width: ${(100 * value.md) / 12}%;
        `,
      }),
      ...(value.lg && {
        lg: css`
          flex: 0 0 ${(100 * value.lg) / 12}%;
          max-width: ${(100 * value.lg) / 12}%;
        `,
      }),
    });
  }}

  ${({ offset }) => {
    if (typeof offset === 'number') {
      return css`
        margin-left: ${(100 * offset) / 12}%;
      `;
    }

    return breakpointsMedia({
      ...(offset.xs && {
        xs: css`
          margin-left: ${(100 * offset.xs) / 12}%;
        `,
      }),
      ...(offset.md && {
        md: css`
          margin-left: ${(100 * offset.md) / 12}%;
        `,
      }),
    });
  }}

  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('alignItems')}
  ${propToStyle('justifyContent')}
  ${propToStyle('alignSelf')}
  ${propToStyle('padding')}
`;

Col.defaultProps = {
  value: {},
  offset: {},
};

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;
  width: 100%;

  ${propToStyle('width')}
  ${propToStyle('maxWidth')}
  ${propToStyle('order')}
  ${propToStyle('flex')}
  ${propToStyle('justifyContent')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginRight')}
`;

export const Grid = {
  Container,
  Row,
  Col,
};
