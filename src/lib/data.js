import axios from 'axios';

export async function heroData() {
    return await axios.get("localhost:1338/api/heroes")
}