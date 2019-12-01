import axios from 'axios';

const api_url = 'http://localhost:3030/api';

export function callApiLogin(body) {
    return axios({
        method: 'POST',
        url: `${api_url}/authentication`,
        data: {
            username: body.username,
            password: body.password,
            stratery: body.stratery
        }
    });
}


export function callApiRegister(body) {
    return axios({
        method: 'POST',
        url: `${api_url}/${body.stratery}`,
        data: {
            username: body.username,
            password: body.password,
            phone: body.phone,
            fullname: body.fullname,
            email: body.email,
            avatar: body.update,
            stratery: body.stratery
        }
    });
}
