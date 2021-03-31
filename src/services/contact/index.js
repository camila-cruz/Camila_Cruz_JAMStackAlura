async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((res) => res.json())
    .then(() => {
      /* Manda um erro aleatoriamente */
      if (!Math.round(Math.random())) {
        throw new Error();
      }
    });
}

export const contactService = {
  async sendMessage({ name, email, message }, HttpClientModule = HttpClient) {
    return HttpClientModule('https://contact-form-api-jamstack.herokuapp.com/message', {
      method: 'POST',
      body: {
        name,
        email,
        message,
      },
    });
  },
};
