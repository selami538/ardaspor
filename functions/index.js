export function onRequest(context) {
  const eskiURL = new URL(context.request.url);

  const yeniURL = new URL(
    eskiURL.pathname + eskiURL.search,
    "https://taraftarium24canlimac.click/"
  );

  return Response.redirect(yeniURL.toString(), 301);
}
