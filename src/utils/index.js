const showFormattedDate = (date) => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
};

const menus = ["all", "active", "archive"].map((el, i) => ({
    id: i,
    name: el,
}));

const filterNotes = ({ notes, menu, query }) => {
    if (query) {
        return notes.filter(
            (el) =>
                el.title.toLowerCase().includes(query.toLowerCase()) ||
                el.body.toLowerCase().includes(query.toLowerCase()),
        );
    }
    if (menu.name === "active") return notes.filter((el) => !el.archived);
    if (menu.name === "archive") return notes.filter((el) => el.archived);
    return notes;
};

function highlight({ text, sentence }) {
    if (!text) return sentence;
    return sentence
        .toLowerCase()
        .replace(
            text?.toLowerCase(),
            `<span class='bg-yellow-300 m-0 p-0'>${text?.toLowerCase()}</span>`,
        );
}

export default { showFormattedDate, menus, filterNotes, highlight };
