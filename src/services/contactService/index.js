import { HttpClient } from '../HttpClient';

export const contactService = {
  async sendMessage({ name, email, message }, HttpClientModule = HttpClient) {
    return HttpClientModule.post('https://contact-form-api-jamstack.herokuapp.com/message', {
      method: 'POST',
      body: {
        name,
        email,
        message,
      },
    })
      .then((res) => {
        /* Manda um erro aleatoriamente */
        // if (!Math.round(Math.random())) {
        //   throw new Error();
        // }

        if (JSON.stringify(res) !== JSON.stringify({ name, email, message })) {
          throw new Error();
        }

        return res;
      });
  },
};
