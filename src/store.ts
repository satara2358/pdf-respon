import { writable } from 'svelte/store'

export const APP_STATUS = {
  INIT: 0,
  LOADING: 1,
  CHAT_MODE: 2,
  ERROR: -1
}

export const appStatus = writable(APP_STATUS.INIT)
export const appStatusInfo = writable({
  id: '907fc982732cea3bad7d7d3ccaa01cc4',
  url: 'https://res.cloudinary.com/midudev/image/upload/v1706810969/pdf/907fc982732cea3bad7d7d3ccaa01cc4.pdf',
  pages: 4
})

export const setAppStatusLoading = () => {
  appStatus.set(APP_STATUS.LOADING)
}

export const setAppStatusError = () => {
  appStatus.set(APP_STATUS.ERROR)
}

export const setAppStatusChatMode = (
  { id, url, pages } :
  { id: string, url: string, pages: number }) => {
  appStatus.set(APP_STATUS.CHAT_MODE)
  appStatusInfo.set({ id, url, pages })
}