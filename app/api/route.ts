import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();

  if (!email || !subject || !message) {
    return new Response(JSON.stringify({ success: false, error: "Todos os campos são obrigatórios" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

 const transporter = nodemailer.createTransport({
  host: "yanferreira985@gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

try {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    email,
    subject,
    text: message,
  });
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
} catch (error: unknown) {
  let errorMessage = "Erro ao enviar email";
  if (error instanceof Error) errorMessage = error.message;
  console.error(errorMessage);
  return new Response(JSON.stringify({ success: false, error: errorMessage }), {
    status: 500,
    headers: { "Content-Type": "application/json" },
  });
}
}