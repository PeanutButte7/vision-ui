import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_API_SERVER,
});

export async function POST(request) {
    const { email } = await request.json();

    if (!email) {
        return new Response('Email is required', { status: 400 });
    }

    try {
        await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
            email_address: email,
            status: 'subscribed',
        });

        return new Response('Subscriber created', {
            status: 201,
        });
    } catch (error) {
        return new Response(error.message || error.toString(), {
            status: 500,
        });
    }
}
