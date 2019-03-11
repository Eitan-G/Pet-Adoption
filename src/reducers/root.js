const initialState = {
    currentUser: {
        id: null,
        profile: "",
        preferences: {
            type: "",
            age: { min: 0, max: Infinity },
        },
    },
    pets: [],
    activePetId: null,
    savedPets: [],
    activeTab: "search",
}