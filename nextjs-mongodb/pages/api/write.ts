

import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { db } = await connectToDatabase();

  
  const result = await db.collection("hey").insertOne({"id":2,"test":req.body.test.text}); 

  res.status(201).json({ message: "Data inserted successfully!" });
}