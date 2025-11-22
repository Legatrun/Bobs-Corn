const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export interface ApiResponse {
  status: number;
  message?: string;
  data?: { corn: number };
}

export const apiBuyCorn = async (): Promise<ApiResponse> => {
  const endpoint = `${BACKEND_URL}/api/buy-corn`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
    });

    return {
      status: response.status,
    };
  } catch (error) {
    console.error('Error al conectar con la API:', error);
    return { status: 503, message: 'Network error conecction.' };
  }
};
