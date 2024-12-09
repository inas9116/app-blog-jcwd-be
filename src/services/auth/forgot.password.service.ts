import { User } from "@prisma/client";
import { prisma } from "../../lib/prisma";
import { BASE_URL_FE, JWT_SECRET_FORGOT_PASSWORD } from "../../config";
import { sign } from "jsonwebtoken";
import { transporter } from "../../lib/nodemailer";
import { link } from "fs";

export const forgotPasswordService = async (body: Pick<User, "email">) => {
  try {
    const { email } = body;

    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      throw new Error("invalid email addres");
    }

    const token = sign({ id: user.id }, JWT_SECRET_FORGOT_PASSWORD!, {
      expiresIn: "15m",
    });
    const link = `${BASE_URL_FE}/reset-password/${token}`;

    transporter.sendMail({
      to: email,
      subject: "Link Reset Password",
      html: `<a href="${link}" target="blank"> Reset password here </a>`,
    });

    return { message: "send email success" };
  } catch (error) {
    throw error;
  }
};
