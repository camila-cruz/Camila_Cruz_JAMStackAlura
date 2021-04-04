import { contactService } from '.';

const messageMock = {
  name: 'Eugênia',
  email: 'eugenia@notmail.com',
  message: 'Olá, mundo!',
};

const HttpClientMock = {
  async post() {
    return messageMock;
  },
};

const HttpClientMockError = {
  async post() {
    return {
      data: {
        ok: false,
      },
      err: {
        message: 'Falha na conexão',
      },
    };
  },
};

describe('contactService', () => {
  describe('when a user tries to send a message', () => {
    describe('and succeeds', () => {
      test('it continues the execution', async () => {
        const contacServiceResponse = await contactService
          .sendMessage(messageMock, HttpClientMock);

        expect(contacServiceResponse).toEqual(messageMock);
      });
    });
    describe('and fails', () => {
      test('it throws an error', async () => {
        // Teste depende de algum caso de erro na API

        await expect(() => contactService
          .sendMessage(messageMock, HttpClientMockError))
          .rejects
          .toThrow();
      });
    });
  });
});
