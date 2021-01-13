import { Tracing } from "trace_events";

export interface User {
  email: string
  password: string
}

export interface NewTask {
  name: string
}
export interface Task {
  name: string
  asigned: string
  required: string
  priority: string
  deadline: string
  status: string
  estimate: string
  stertEnd: string
  progress: number
  schedule?: Date 
}