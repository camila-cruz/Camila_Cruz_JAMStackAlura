export const HttpClient = {
  get(url, { headers, ...options }) {
    return fetch(url, {
      headers: {
        ...headers,
      },
      ...options,
    })
      .then((res) => res.json());
  },
  post(url, { headers, body, ...options }) {
    return fetch(url, {
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      ...options,
    })
      .then((res) => res.json());
  },
};
