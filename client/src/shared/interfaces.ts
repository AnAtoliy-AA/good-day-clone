export interface User {
  email: string
  password: string
}

export interface NewTask {
  name: string
  assigned: string
  required: string
  priority: string
  deadline: string
  status: string
  estimate: string
  startEnd: string
  progress: number
  schedule?: Date
}
export interface Task {
  date: string
  list: Array<TaskFields>
  length: number
  task: number
  user: string
  _id: string
}

export interface TaskFields {
  _id: string
  name: string
  assigned: string
  required: string
  priority: string
  deadline: string
  status: string
  estimate: string
  startEnd: string
  progress: number
  schedule?: Date
}