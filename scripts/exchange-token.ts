import dotenv from "dotenv";
import { google } from "googleapis";

dotenv.config();

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.REDIRECT_URI
);

async function main() {
  const code = process.argv[2];

  if (!code) {
    console.error("Usage: ts-node exchangeToken.ts <auth_code>");
    process.exit(1);
  }

  const { tokens } = await oAuth2Client.getToken(code);
  console.log("Access Token:", tokens.access_token);
  console.log("Refresh Token:", tokens.refresh_token);
}

main();
