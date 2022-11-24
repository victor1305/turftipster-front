import axios from 'axios'

export default class BetService {

    constructor() {

        this.service = axios.create({

            //baseURL: 'http://localhost:3030/api', //PARA LOCAL
            //baseURL: process.env.REACT_APP_API_URL, //PARA DEPLOY, NO FUNCIONA
            baseURL: 'https://api-tt.onrender.com/api', //PARA DEPLOY OK
            withCredentials: true
        })
    }

    saveBet = bet => this.service.post(`/apuestas/crear-apuesta`, bet)
    getNumberBets = () => this.service.get('/apuestas/lista-apuestas/total')
    getAllBets = (limit, skip) => this.service.get(`/apuestas/lista-apuestas?limit=${limit}&skip=${skip}`)
    getRacecoursesList = () => this.service.get('/apuestas/lista-hipodromos')
    getHomeBets = () => this.service.get('/apuestas')
    getBetsYear = year => this.service.get(`/apuestas/stats/${year}`)
    getOneBet = id => this.service.get(`/apuestas/detalle-apuesta/${id}`)
    updateBetStatus = (id, status) => this.service.put(`/apuestas/detalle-apuesta/${id}/edit-status`, status)
    updateBet = (id, bet) => this.service.put(`/apuestas/detalle-apuesta/${id}/edit`, bet)
    deleteBet = id => this.service.delete(`/apuestas/detalle-apuesta/${id}/delete`)

}