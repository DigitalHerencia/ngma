export const authenticateUser = async (credentials: {
  email: string;
  password: string;
}) => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error('Authentication failed');
    }
    return await response.json();
  } catch (error) {
    console.error('Authentication failed', error);
    throw error;
  }
};
