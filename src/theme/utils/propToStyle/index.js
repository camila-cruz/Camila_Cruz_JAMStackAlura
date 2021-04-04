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
        ...('xs' in propValue && {
          xs: {
            [propName]: propValue.xs,
          },
        }),
        ...('sm' in propValue && {
          sm: {
            [propName]: propValue.sm,
          },
        }),
        ...('md' in propValue && {
          md: {
            [propName]: propValue.md,
          },
        }),
        ...('lg' in propValue && {
          lg: {
            [propName]: propValue.lg,
          },
        }),
        ...('xl' in propValue && {
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
