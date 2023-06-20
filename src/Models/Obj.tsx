import { IFile, F } from "./IFile";

export interface Obj{
    name: string,
    email: string,
    phone_number: string,
    address_1: string,
    address_2: string,
    city: string,
    state: string,
    pincode: number,
    country: string,
    geolocation: string,
    single_file: IFile,
    multi_ups1: IFile,
    multi_ups2: IFile,
    multi_ups3: IFile,
    multi_ups4: IFile,
    multi_ups5: IFile
}

export const initialState: Obj = {
    name: "",
    email: "",
    phone_number: "",
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    pincode: 0,
    country: "",
    geolocation: "",
    single_file: F,
    multi_ups1: F,
    multi_ups2: F,
    multi_ups3: F,
    multi_ups4: F,
    multi_ups5: F,
};