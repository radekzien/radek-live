type status = 'Ongoing' | 'Complete'

export type Qualification = {
    title: string,
    school: string,
    status: status, //change
    location: string,
    started: Date,
    finished?: Date
}