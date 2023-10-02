export interface IProfileManager {
    id: String
    name: String
    surname: String
    userImage?: String
    hobies?: String[]
}

export const IProfileManager = Symbol.for("IProfileManager");