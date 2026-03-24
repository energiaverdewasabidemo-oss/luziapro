import { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { eventName, userData } = JSON.parse(event.body || '{}');
  const token = process.env.META_CONVERSIONS_TOKEN;
  const pixelId = '2145914676207230';

  const payload = {
    data: [{
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      user_data: userData || {},
    }]
  };

  const response = await fetch(
    `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${token}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  );

  const result = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};

export { handler };
