export class Course {
  id: string
  name: string
  start_date: string
  end_date: string

  constructor(
    id: string,
    name: string,
    start_date: string,
    end_date: string
  )
  {
    this.id = id
    this.name = name
    this.start_date = start_date
    this.end_date = end_date
  }
}
