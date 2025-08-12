import axios from "axios";

const BASE_URL = "https://api.spacexdata.com/v5";

export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  success: boolean | null;
  upcoming: boolean;
  links: {
    patch: {
      small: string | null;
    };
  };
  launchpad: string;
}

export interface Launchpad {
  id: string;
  name: string;
  full_name: string;
  locality: string;
  region: string;
  details: string;
  latitude: number;
  longitude: number;
}

export const fetchLaunches = async (
  page = 1,
  limit = 10
): Promise<Launch[]> => {
  try {
    const response = await axios.post(`${BASE_URL}/launches/query`, {
      query: {},
      options: {
        page,
        limit,
        sort: {
          date_utc: "desc",
        },
      },
    });
    return response.data.docs;
  } catch (error) {
    throw new Error("Failed to fetch launches");
  }
};

export const fetchLaunchpad = async (id: string): Promise<Launchpad> => {
  try {
    const response = await axios.get(
      `https://api.spacexdata.com/v4/launchpads/${id}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch launchpad details");
  }
};
