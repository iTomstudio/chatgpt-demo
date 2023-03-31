import type { APIRoute } from 'astro'

const realPassword = import.meta.env.SITE_PASSWORD

export const post: APIRoute = async(context) => {
  const body = await context.request.json()
  const today = new Date()
  const dateString = `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}19961024`
  const base64encoded = btoa(dateString);

  
  const { pass } = body
  return new Response(JSON.stringify({
    code: (!base64encoded || pass === base64encoded) ? 0 : -1,
  }))
}
