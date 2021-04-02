import { propToStyle } from '.';

describe('propToStyle()', () => {
  describe('when it receives a single argument', () => {
    describe('it should return a style object', () => {
      test('if the argument is a string', () => {
        const cssProp = 'display';
        const componentProps = { [cssProp]: 'flex' };

        const resultingFunction = propToStyle(cssProp);
        const resultingStyle = resultingFunction(componentProps);

        expect(resultingStyle).toEqual(componentProps);
      });

      test('and if the argument is a number', () => {
        const cssProp = 'flex';
        const componentProps = { [cssProp]: 1 };

        const resultingFunction = propToStyle(cssProp);
        const resultingStyle = resultingFunction(componentProps);

        expect(resultingStyle).toEqual(componentProps);
      });
    });
  });

  describe('when it receives an object with breakpoints', () => {
    describe('it should return a breakpoints object with', () => {
      test('the one specified breakpoint', () => {
        const cssProp = 'color';
        const componentProps = {
          [cssProp]: {
            lg: 'acqua',
          },
        };

        const resultingFunction = propToStyle(cssProp);
        const resultingStyle = resultingFunction(componentProps);

        expect(resultingStyle).toMatchSnapshot();
      });
      test('two or more of the specified breakpoints', () => {
        const cssProp = 'width';
        const componentProps = {
          [cssProp]: {
            xs: '200px',
            md: '600px',
          },
        };

        const resultingFunction = propToStyle(cssProp);
        const resultingStyle = resultingFunction(componentProps);

        expect(resultingStyle).toMatchSnapshot();
      });
    });
  });

  describe('when it receives an invalid argument', () => {
    test('it should throw an error', () => {
      const cssProp = 'margin';
      const componentProps = 'top: 10px';

      const resultingFunction = propToStyle(cssProp);

      expect(() => resultingFunction(componentProps)).toThrowError();
    });
  });
});
