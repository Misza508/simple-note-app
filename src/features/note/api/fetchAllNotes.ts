export const fetchAllNotes = async () => {
  try {
    const res = await fetch(`/api/notes`);
    const test = await res.json();
    return test;
  } catch (error) {
    console.log(error);
  }
};
