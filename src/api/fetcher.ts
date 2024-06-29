interface Fetcher {
  url: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: Record<string, string>;
  body?: Record<string, string>;
}

type FetchRequest = Omit<Fetcher, "method" | "body">;
type MutationRequest = Omit<Fetcher, "method">;

const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

const AUTH_HEADER = {
  Authorization: `Bearer ${ACCESS_TOKEN}`,
  accept: "application/json",
};

const fetcher = {
  async request({ url, method, headers, body }: Fetcher) {
    const response = await fetch(url, {
      method,
      headers: headers ? { ...headers, ...AUTH_HEADER } : AUTH_HEADER,
      body: body && JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("ERROR!");
    }

    return response;
  },
  async get({ url, headers }: FetchRequest) {
    return await this.request({ url, method: "GET", headers });
  },
  async post({ url, headers, body }: MutationRequest) {
    return await this.request({ url, method: "POST", headers, body });
  },
  async put({ url, headers, body }: MutationRequest) {
    return await this.request({ url, method: "PUT", headers, body });
  },
  async patch({ url, headers, body }: MutationRequest) {
    return await this.request({ url, method: "PATCH", headers, body });
  },
  async delete({ url, headers, body }: MutationRequest) {
    return await this.request({ url, method: "DELETE", headers, body });
  },
};

export default fetcher;
