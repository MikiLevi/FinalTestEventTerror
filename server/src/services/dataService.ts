import Terror, { ITerror } from "../models/terror";
import { handleBadRequest } from "../../utils/ErrorHandle";
import { dateToSearchDTO } from "../interface/dateToSearchDTO";

export const getDeadliestTerrorism = async () => {
  try {
    const Terrorism = await Terror.aggregate([
      {
        $group: {
          _id: "$attacktype1_txt",
          total: { $sum: { $sum: ["$nkill", "$nwound"] } },
        },
      },
      {
        $sort: {
          total: -1,
        },
      },
    ]);

    return Terrorism;
  } catch (error: any) {
    return handleBadRequest("MongoDB", error);
  }
};

export const getHighCasualtyArea = async () => {
  try {
    const Terrorism = await Terror.aggregate([
      {
        $project: {
          region: "$region_txt",
          total_casualties: {
            $add: [{ $ifNull: ["$nwound", 0] }, { $ifNull: ["$nkill", 0] }],
          },
        },
      },
      {
        $group: {
          _id: "$region",
          average_casualties: { $avg: "$total_casualties" },
        },
      },

      {
        $project: {
          region: "$_id",
          average_casualties: 1,
        },
      },
      {
        $sort: { average_casualties: -1 },
      },
    ]);
    return Terrorism;
  } catch (error: any) {
    return handleBadRequest("MongoDB", error);
  }
};

export const getIncidentByDate = async (dateToSearch: dateToSearchDTO) => {
  try {
    const Terrorism = await Terror.aggregate([
      {
        $match: {
          iyear: { $gte: dateToSearch.yearStart, $lte: dateToSearch.yearEnd },
        },
      },
      {
        $group: {
          _id: "$iyear",
          eventCount: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);

    return Terrorism;
  } catch (error: any) {
    return handleBadRequest("MongoDB", error);
  }
};

export const getTerrorOrgByRegions = async (
  regionName: string,
  limit: number
): Promise<ITerror[] | null> => {
  try {
    return await Terror.aggregate([
      {
        $match: { region_txt: regionName },
      },
      {
        $group: {
          _id: "$gname",
          total: { $sum: { $sum: ["$nkill", "$nwound"] } },
        },
      },
      {
        $sort: { total: 1 },
      },
      {
        $limit: limit ? limit : 5,
      },
    ]);
  } catch (error) {
    throw new Error("Error fetching TerrorEvents");
  }
};

export const getTerrorOrgByYear = async (
  year: number
): Promise<ITerror[] | null> => {
  try {
    return await Terror.aggregate([
      {
        $match: { iyear: year },
      },
      {
        $group: {
          _id: "$gname",
          total: { $sum: { $sum: ["$nkill", "$nwound"] } },
        },
      },
      {
        $sort: { total: 1 },
      },
    ]);
  } catch (error) {
    throw new Error("Error fetching TerrorEvents");
  }
};

export const getDeadliestRegionsByGroup = async (nameGroup: string) => {
  try {
    const result = await Terror.aggregate([
      {
        $match: {
          gname: nameGroup,
        },
      },
      {
        $group: {
          _id: {
            country: "$country_txt",
            region: "$region_txt",
          },
          total: { $sum: { $add: ["$nkill", "$nwound"] } },
        },
      },
      {
        $sort: {
          total: -1,
        },
      },
      {
        $project: {
          _id: 0,
          region: "$_id.region",
          country: "$_id.country",
          total: 1,
        },
      },
    ]);

    return result;
  } catch (error) {
    console.error("Error during aggregation:", error);
    return [];
  }
};
