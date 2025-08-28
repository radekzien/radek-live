import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const authClient = new google.auth.OAuth2(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET
        )
        authClient.setCredentials({
            refresh_token: process.env.GMAIL_REFRESH_TOKEN,
        });

        const gmail = google.gmail({ version: "v1", auth: authClient });
        const res = await gmail.users.messages.list({
            userId: "me",
            maxResults: 5
        });

        const messages = await Promise.all(
        (res.data.messages || [])
        .filter((msg): msg is { id: string } => !!msg && !!msg.id)
        .map(async (msg) => {
            const fullMsg = await gmail.users.messages.get({
            userId: "me",
            id: msg.id,
            format: 'full',
            });
            
            


        const headers = fullMsg.data.payload?.headers || [];
        const subject = headers.find(h => h.name === 'Subject')?.value || '(No Subject)';
        const from = headers.find(h => h.name === 'From')?.value || '(Unknown Sender)';


        function decodeBody(data: string | undefined): string {
            if (!data) return '';
            let base64 = data.replace(/-/g, '+').replace(/_/g, '/');
            while (base64.length % 4) {
                base64 += '=';
            }
            try {
                return Buffer.from(base64, 'base64').toString('utf-8');
            } catch {
                return '';
            }
        }



        function findBody(payload: any): { content: string; mimeType: string } {
            if (!payload) return { content: '', mimeType: '' };

            if (payload.body?.data) {
                return { content: decodeBody(payload.body.data), mimeType: payload.mimeType || '' };
            }

            if (payload.parts && payload.parts.length) {
                for (const part of payload.parts) {
                    if (part.mimeType === 'text/html' && part.body?.data) {
                        return { content: decodeBody(part.body.data), mimeType: 'text/html' };
                    }
                }

                for (const part of payload.parts) {
                    if (part.mimeType === 'text/plain' && part.body?.data) {
                        return { content: decodeBody(part.body.data), mimeType: 'text/plain' };
                    }
                }

                for (const part of payload.parts) {
                    const body = findBody(part);
                    if (body.content) return body;
                }
            }

            return { content: '', mimeType: '' };
        }


        const { content: bodyContent, mimeType } = findBody(fullMsg.data.payload);

        return {
        id: msg.id,
        subject,
        from,
        snippet: fullMsg.data.snippet || '',
        body: bodyContent,
        bodyMimeType: mimeType,
        };
    })
        );

        return NextResponse.json({ messages });
    } catch (error) {
        console.error("Error fetching emails:", error);
        return NextResponse.json({ error: "Failed to fetch emails" }, { status: 500 });
    }
}