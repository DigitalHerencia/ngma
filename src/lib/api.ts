export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch data failed', error);
    throw error;
  }
};
