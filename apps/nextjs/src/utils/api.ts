export const request = async <T>(
  url: string
): Promise<{ data?: T; error?: string }> => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_APP_URL + "/api" + url,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      }
    );

    return await response.json();
  } catch (error: any) {
    console.error(
      `"${url}" API call error:`,
      `${error.name}: ${error.message}`
    );
    return { error: `"${url}" API call error: ${error.message}` };
  }
};
