const initialState = {
    currentUser: {
        id: null,
        profile: "",
        typePreference: "",
        ageRange: {
            min: 0,
            max: Infinity
        }
    },
    pets: [],
    activePetId: null,
    savedPets: [],
    activeTab: "search",
}