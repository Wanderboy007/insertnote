// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import initDB from "../../helper/initDB";
type Data = {
  name: string
}
initDB()
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200)
}
