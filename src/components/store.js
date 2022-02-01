import create from 'zustand'

export const useStore = create((set, get) => ({
    users: [],
    user: null,
    updateUsers: newUsers => set({users: newUsers}),
    updateUser: newUser => set({user: newUser})
}))