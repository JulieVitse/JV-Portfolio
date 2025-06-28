/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

const BASE_URL = 'http://localhost:1337/api/projects'

export async function getProject(): Promise<any> {
  try {
    const {
      data: { data },
    } = await axios.get(BASE_URL)
    return data
  } catch (error) {
    console.log(error)
  }
}
