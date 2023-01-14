export type counterType = number

export interface userType {
    name: string
    age: number
    habbit: string
    isSingle: boolean
    course: string[]
    afterTenyear: tenyear
}

interface tenyear{
    job: string,
    wifeName: string,
    salary: number,
}