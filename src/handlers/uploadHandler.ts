import multer from "multer";
import { PATHS } from "../config/paths.js"


export const uploadHandler = async (path: string) => {
  const uploadDir = PATHS.uploads;
  const upload = multer({ dest: `${uploadDir}/${path}` })
  return upload;
}

