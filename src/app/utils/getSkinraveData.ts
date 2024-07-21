export async function getSkinraveData() {
  try {
    const currentDate = new Date();
    const sevenDaysAgo = new Date();

    sevenDaysAgo.setDate(currentDate.getDate() - 7);

    const from = sevenDaysAgo.toISOString();
    const to = currentDate.toISOString();

    const res = await fetch(
      `https://api.skinrave.gg/affiliates/applicants?skip=0&take=10&sort=earnings&order=DESC&userId=55919&from=${from}&to=${to}`,
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          origin: "https://skinrave.gg",
          referer: "https://skinrave.gg",
        },
      }
    );

    if (!res.ok) {
      const error: any = new Error("Failed to fetch.");
      error.response = res;
      throw error;
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error(error);
  }
}
