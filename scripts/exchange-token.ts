import dotenv from "dotenv";
import { google } from "googleapis";

dotenv.config();

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.REDIRECT_URI
);

async function main() {
  const code = "4/0AVMBsJjc6V7a3gywCuc4b-vs8kctgu0qxNGTpGu9gmiQCQJydPXFHFTddKAztcIqfkx-tw";

  const { tokens } = await oAuth2Client.getToken(code);
  console.log("Access Token:", tokens.access_token);
  console.log("Refresh Token:", tokens.refresh_token);
}

main();
