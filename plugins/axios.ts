// // plugins/axios.ts
// import axios from 'axios'

// export default defineNuxtPlugin(() => {
//   const config = useRuntimeConfig()

//   const instance = axios.create({
//     baseURL: config.public.apiBase, // pastikan .env memiliki NUXT_PUBLIC_API_BASE
//     timeout: 10000,
//   })

//   instance.interceptors.request.use(config => {
//     const token = useCookie('token')?.value
//     if (token)
//       config.headers.Authorization = `Bearer ${token}`

//     return config
//   })

//   return {
//     provide: {
//       axios: instance,
//     },
//   }
// })
