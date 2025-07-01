export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    const targetDomain = 'https://dl.node-webkit.org';

    if (
      pathname !== '/' &&
      !pathname.endsWith('/') &&
      !pathname.startsWith('/icons')
    ) {
      const redirectUrl = new URL(pathname, targetDomain);
      return Response.redirect(redirectUrl.toString(), 302);
    }

    return env.ASSETS.fetch(request);
  }
};
