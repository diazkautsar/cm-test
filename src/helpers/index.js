import axios from 'axios'

export const getDistance = (origin, destination) => {
  // https://cors-anywhere.herokuapp.com/ is for resolving cors problem
  return axios({
    method: 'get',
    url: `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=AIzaSyAwGI5LWjKbLQvFiX_N7Gp0kjlQxvUzlyE`
  })
}