// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

console.log(`Function "email" up and running!`);

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (request: Request): Promise<Response> => {
  const { email, name, message, subject }: { email: string; message: string; name: string; subject: string;} =
      await request.json();

  try {
      const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
              from: email,
              to: "contactform@tasteofbaern.ch",
              subject: subject,
              message: message,
          }),
      });

      if (!res.ok) {
          return new Response(JSON.stringify({ error: "An error occurred" }), { status: 500 });
      }

      const data = await res.json();

      return new Response(JSON.stringify(data), {
          status: 200,
          headers: {
              "Content-Type": "application/json",
          },
      });
  } catch (error: any) {
      return new Response(JSON.stringify({ error: error?.message }), { status: 500 });
  }
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
