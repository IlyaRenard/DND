export const DND_CONFIG = {
  BASE_URL: "https://www.dnd5eapi.co/",
  headers: {
    accept: "application/json",
  },
};

export const fetchSpells = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${DND_CONFIG.BASE_URL}api/2014/spells?level=${encodeURIComponent(query)}`
    : `${DND_CONFIG.BASE_URL}api/2014/spells/`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: DND_CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch spells");
  }

  const data = await response.json();

  return data.results;
};

export const fetchSkills = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${DND_CONFIG.BASE_URL}api/2014/skills/${encodeURIComponent(query)}`
    : `${DND_CONFIG.BASE_URL}api/2014/skills/`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: DND_CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch skills");
  }

  const data = await response.json();

  return data.results;
};

// const myHeaders = new Headers();
// myHeaders.append("Accept", "application/json");

// const requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow"
// };

// fetch("https://www.dnd5eapi.co/api/2014/spells/:index", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));
