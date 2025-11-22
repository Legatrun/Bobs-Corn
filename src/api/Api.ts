const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export interface ApiResponse {
  status: number;
  message?: string;
  data?: { corn: number };
}

export const apiBuyCorn = async (): Promise<ApiResponse> => {
  const endpoint = `${BACKEND_URL}/buy-corn`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      // Puedes añadir headers si tu API lo requiere (ej: 'Authorization' o 'Content-Type')
      // headers: {
      //     'Content-Type': 'application/json',
      // },
      // body: JSON.stringify({ userId: 123 }) // Si el endpoint requiere un cuerpo
    });

    // La API real debe manejar el Rate Limiting (429) y devolver el código de estado.
    // No necesitamos procesar el JSON si solo nos interesa el status.

    return {
      status: response.status,
      // Opcional: Si el backend devuelve un cuerpo JSON útil en caso de éxito:
      // data: response.ok ? await response.json() : undefined
    };
  } catch (error) {
    // Esto captura errores de red (DNS, CORS, etc.)
    console.error('Error al conectar con la API:', error);
    return { status: 503, message: 'Network error conecction.' };
  }
};
