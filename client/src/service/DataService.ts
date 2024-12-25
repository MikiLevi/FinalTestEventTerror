import axios from "axios";
import { IEvent } from "../interface/Eevent";

export const getData = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const addEvent = async (
  event: Partial<IEvent>
): Promise<Partial<IEvent> | null> => {
  try {
    console.log(event);

    const response = await axios.post<Partial<IEvent>>(
      `http://localhost:8181/addEvent`,
      event
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
