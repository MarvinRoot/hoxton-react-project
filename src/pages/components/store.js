import create from 'zustand'

export const useStore = create((set, get) => ({
    users: [],
    user: null,
    search: null,
    genres: [],
    updateUsers: newUsers => set({users: newUsers}),
    updateUser: newUser => set({user: newUser}),
    updateSearch: newSearch => set({search: newSearch}),
    updateGenres: newGenres => set({genres: newGenres})
}))