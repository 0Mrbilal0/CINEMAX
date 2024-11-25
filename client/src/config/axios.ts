import axios from "axios";


class Requests {
    static async get<T>(url: string): Promise<T> {
        axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
        axios.defaults.headers.get['Content-Type'] = 'application/json';

        const result: T = await axios.get<T>(url).then(res => {
            const result: string = JSON.stringify(res.data)
            const resultParse: T = JSON.parse(result)
            return resultParse
        })
        return result
    }

    static async post<R,T>(url: string, data: T): Promise<R> {
        axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
        axios.defaults.headers.post['Content-Type'] = 'application/json';

        const result: R = await axios.post<T, R>(url, data)
        return result

    }
}

export default Requests
