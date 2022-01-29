import axios from 'axios'

export default class AuthService {

    constructor() {

        this.service = axios.create({

          //baseURL: 'http://localhost:3030/api', //PARA LOCAL
          //baseURL: process.env.REACT_APP_API_URL, //PARA DEPLOY, NO FUNCIONA
          baseURL: 'https://turftipsterserver.herokuapp.com/api', //PARA DEPLOY OK
          withCredentials: true,
        });
    }

    login = credentials => this.service.post('/iniciar-sesion-turftipster', credentials)
    getUser = (id) => this.service.get(`/perfil/${id}/edit`)
    signUp = credentials => this.service.post('/registro', credentials)
    logout = () => this.service.post('/cerrar-sesion')
    isLoggedIn = () => this.service.get('/loggedin')
    

}