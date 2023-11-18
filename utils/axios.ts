import axios, { AxiosInstance } from "axios";

export type AxiosError = 'server' | 'timeout' | null;

export const createAxiosInstance = (
    api = '',
    context?: string
):AxiosInstance => 
axios.create({
    baseURL: `${api}${context ?? ''}`,
    headers: { 'Content-type': 'application/json' },
});