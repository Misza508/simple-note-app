export const fetchSingleNotes = async ({ id }: { id: string }) => {
  try {
    const res = await fetch(`/api/notes/${id}`);
    const test = await res.json();
    return test;
  } catch (error) {
    console.log(error);
  }
};
