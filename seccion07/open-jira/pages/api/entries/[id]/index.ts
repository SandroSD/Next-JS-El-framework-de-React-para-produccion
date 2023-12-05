import { db } from "@/database";
import { Entry, IEntry } from "@/models";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "El id no es válido " + id });
  }

  switch (req.method) {
    case "PUT":
      return putEntry(req, res);

    case "GET":
      return getEntry(req, res);

    default:
      return res.status(400).json({ message: "Endpoint no existe" });
  }
}

const putEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();

  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();

    return res
      .status(400)
      .json({ message: "No hay entrada con ese ID: " + id });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { runValidators: true, new: true }
    );
    await db.disconnect();

    return res.status(200).json(updatedEntry!);
  } catch (error: any) {
    await db.disconnect();
    return res.status(400).json({ message: error.errors.status.message });
  }
};

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();

  const entryDB = await Entry.findById(id);

  if (!entryDB) {
    await db.disconnect();

    return res
      .status(400)
      .json({ message: "No hay entrada con ese ID: " + id });
  }

  return res.status(200).json(entryDB);
};
