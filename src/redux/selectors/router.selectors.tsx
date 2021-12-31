import { TState } from "../state"

export const selectPathname = (state: TState) => state.router.location.pathname || '/'