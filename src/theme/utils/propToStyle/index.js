import { breakpointsMedia } from '../breakpointsMedia';

export function propToStyle(propName) {
  // closure
  return (props) => {
    // eslint-disable-next-line react/destructuring-assignment
    const propValue = props[propName]; // String ou objeto

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        [propName]: propValue,
      };
    }

    if (typeof propValue === 'object') {
      return breakpointsMedia({
        ...(propValue.xs && {
          xs: {
            [propName]: propValue.xs,
          },
        }),
        ...(propValue.sm && {
          sm: {
            [propName]: propValue.sm,
          },
        }),
        ...(propValue.md && {
          md: {
            [propName]: propValue.md,
          },
        }),
        ...(propValue.lg && {
          lg: {
            [propName]: propValue.lg,
          },
        }),
        ...(propValue.xl && {
          xl: {
            [propName]: propValue.xl,
          },
        }),
      });
    }
    // throw new Error('O valor especificado não é um tipo de argumento válido para a função');
    return null;
  };
}
