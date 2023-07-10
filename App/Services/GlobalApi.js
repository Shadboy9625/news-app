import { create } from "apisauce";

const api = create({
    baseURL: 'https://newsapi.org/v2',
})

const apiKey = '?country=us&apiKey=8ebdfa2ab0894999a9f475d305369c21'

const getTopHeadline=api.get('/top-headlines'+apiKey)
const getByCategory=(category)=>api.get('/everything?q='+category+'&apiKey=8ebdfa2ab0894999a9f475d305369c21')

export default{
    getTopHeadline,
    getByCategory
}