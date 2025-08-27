import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const authClient = new google.auth.OAuth2(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET
        )
        authClient.setCredentials({
            refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
        });

        const gmail = google.gmail({ version: "v1", auth: authClient });
        const res = await gmail.users.messages.list({
            userId: "me",
            maxResults: 10
        });

        const messages = await Promise.all(
        (res.data.messages || [])
        .filter((msg): msg is { id: string } => !!msg && !!msg.id)
        .map(async (msg) => {
            const fullMsg = await gmail.users.messages.get({
            userId: "me",
            id: msg.id
            });
            
            


        const headers = fullMsg.data.payload?.headers || [];
        const subject = headers.find(h => h.name === 'Subject')?.value || '(No Subject)';
        const from = headers.find(h => h.name === 'From')?.value || '(Unknown Sender)';

        return {
            id: msg.id,
            subject,
            from,
            snippet: fullMsg.data.snippet || '',
        };
    })
        );

        return NextResponse.json({ messages });
    } catch (error) {
        console.error("Error fetching emails:", error);
        return NextResponse.json({ error: "Failed to fetch emails" }, { status: 500 });
    }
}