import { NextRequest, NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
});

export async function POST(request: NextRequest) {
    const { email } = await request.json();

    if (!email) {
        return new Response('Email is required', { status: 400 });
    }

    try {
        if (!process.env.MAILCHIMP_AUDIENCE_ID) {
            return NextResponse.json(
                { error: 'Internal Server Error' },
                { status: 500 }
            );
        }

        await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
            email_address: email,
            status: 'subscribed',
        });

        return NextResponse.json(
            { message: 'Subscriber created' },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
