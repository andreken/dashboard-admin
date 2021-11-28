const initialUserState: TUserState = null

export type TUserState = {
  email: string,
  firstName: string,
  lastName: string,
} | null

export default initialUserState