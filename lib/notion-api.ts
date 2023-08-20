import { NotionAPI } from 'notion-client'

export const notion = new NotionAPI({
  apiBaseUrl: process.env.NOTION_API_BASE_URL,
  authToken:
    process.env.NODE_ENV === 'development'
      ? process.env.NOTION_AUTH_TOKEN
      : null
})
