// pages/api/verify-captcha.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ success: false, message: "Missing token" });
  }

  try {
    const response = await axios.post(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/assessments?key=${process.env.RECAPTCHA_ENTERPRISE_API_KEY}`,
      {
        event: {
          token,
          siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          expectedAction: "RESERVA",
        },
      }
    );

    const { tokenProperties } = response.data;

    if (tokenProperties?.valid) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({
        success: false,
        message: "Invalid token",
        reason: tokenProperties?.invalidReason,
      });
    }
  } catch (error: any) {
    console.error("❌ Error verifying token:", error.response?.data || error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
