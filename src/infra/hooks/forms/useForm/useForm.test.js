import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from '.';

// const valuesMock = {
//   name: 'Pafuncia',
//   email: 'pafunci@notmail.com',
//   message: 'Aleatoriedades',
// };

const valuesMock = {
  name: '',
};

class ValidationErrorMock extends Error {
  constructor() {
    super();
    this.inner = [{
      path: 'email',
      message: 'E-mail inválido',
    }];
  }
}

describe('useForm()', () => {
  describe('when the user types', () => {
    test('the value changes', () => {
      const { result } = renderHook(() => useForm({
        initialValues: valuesMock,
      }));

      expect(result.current.values).toEqual(valuesMock);

      const newValueMock = 'Pafuncia';
      const event = {
        target: {
          getAttribute: () => 'name',
          value: newValueMock,
        },
      };

      act(() => result.current.handleChange(event));
      expect(result.current.values).toEqual({ name: newValueMock });
    });

    describe('if the value is valid', () => {
      test('it should not have any errors', async () => {
        const { result } = renderHook(() => useForm({
          initialValues: {
            email: '',
          },
          validateSchema: async () => {},
        }));

        expect(result.current.errors).toEqual({});

        const newValueMock = 'email@valido.com';
        const event = {
          target: {
            getAttribute: () => 'email',
            value: newValueMock,
          },
        };

        await act(async () => result.current.handleChange(event));
        expect(result.current.values).toEqual({ email: newValueMock });

        expect(result.current.errors).toEqual({});
      });
    });

    describe('if the value is invalid', () => {
      test('it should have an error', async () => {
        const { result } = renderHook(() => useForm({
          initialValues: {
            email: '',
          },
          // validateSchema: async (values) => validateMock(values),
          validateSchema: async () => {
            throw new ValidationErrorMock();
          },
        }));

        expect(result.current.errors).toEqual({});

        const newValueMock = 'email-invalido';
        const event = {
          target: {
            getAttribute: () => 'email',
            value: newValueMock,
          },
        };

        await act(async () => result.current.handleChange(event));
        expect(result.current.values).toEqual({ email: newValueMock });

        expect(result.current.errors).not.toEqual({});
      });
    });
  });

  describe('when an input is blurred', () => {
    test('it becomes touched', () => {
      const { result } = renderHook(() => useForm({
        initialValues: valuesMock,
      }));

      expect(result.current.isTouched).toEqual({});

      const event = {
        target: {
          getAttribute: () => 'name',
        },
      };

      act(() => result.current.handleBlur(event));

      expect(result.current.isTouched).toEqual({ name: true });
    });
  });
});
