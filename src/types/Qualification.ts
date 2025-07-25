type status = 'Ongoing' | 'Complete'

export type Qualification = {
    title: string,
    school: string,
    status: status,
    location?: string,
    started: Date,
    finished?: Date,
    info?: String,
    link?: string
}