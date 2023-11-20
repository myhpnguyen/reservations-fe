import axios from 'axios';
// Change the API_URL to the correct location of the backend API before deploying the app
const API_URL = 'http://127.0.0.1:8000/'; /* 'http://localhost:8000' http://127.0.0.1:8000/ or  'http://yourPythonAnywhereName.pythonanywhere.com/'*/

export class APIService {
  constructor() {
  }
  getCustomer(param_pk) {
    const url = `${API_URL}/api/customers/${param_pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.get(url, { headers: headers });
  }

  getCustomerList() {
    const url = `${API_URL}/api/customers/`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.get(url, { headers: headers });
  }

  getReviews() {
    const url = `${API_URL}/api/reviews/`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.get(url, { headers: headers });
  }

  addReview(reviews) {
    const url = `${API_URL}/api/reviews/`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.post(url, review, { headers: headers });
  }

  updateReview(reviews) {
    const url = `${API_URL}/api/reviews/${review.pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.put(url, review, { headers: headers });
  }
  getMenuItems() {
    const url = `${API_URL}/api/menu/`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.get(url, { headers: headers });
  }
  addNewReservation(reservation) {
    const url = `${API_URL}/api/reservations/`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.post(url, reservation, { headers: headers });
  }

  updateReservation(reservation) {
    const url = `${API_URL}/api/reservations/${reservation.pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.put(url, reservation, { headers: headers });
  }

  deleteReservation(reservationPk) {
    const url = `${API_URL}/api/reservations/${reservationPk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = { Authorization: `JWT ${jwtToken}` };
    return axios.delete(url, { headers: headers });
  }
  authenticateLogin(credentials) {
    const url = `${API_URL}/api/`;
    return axios.post(url, credentials);
  }

  registerUser(credentials) {
    const url = `${API_URL}/register/`;
    credentials.customusername = credentials.username
    return axios.post(url, credentials);
  }

}

