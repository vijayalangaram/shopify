import axios from "axios";
import {
  domain
} from "../config";

export const axiosInstnace = axios.create({
  baseURL: domain,
});