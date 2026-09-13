class RequestBuilder {
  private url: string = '';
  private method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET';
  private headers: Record<string, string=""> = {};
  private body: any = null;

  setUrl(url: string): RequestBuilder {
    this.url = url;
    return this;
  }

  setMethod(method: 'GET' | 'POST' | 'PUT' | 'DELETE'): RequestBuilder {
    this.method = method;
    return this;
  }

  setHeader(key: string, value: string): RequestBuilder {
    this.headers[key] = value;
    return this;
  }

  setBody(body: any): RequestBuilder {
    this.body = body;
    return this;
  }

  build() {
    return {
      url: this.url,
      method: this.method,
      headers: this.headers,
      body: this.body
    };
  }
}

// Uso
const request = new RequestBuilder()
  .setUrl('https://api.example.com/users')
  .setMethod('POST')
  .setHeader('Content-Type', 'application/json')
  .setBody({ name: 'João' })
  .build();

console.log(request);</string,>