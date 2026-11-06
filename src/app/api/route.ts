
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "入力内容を確認してください。" },
        { status: 400 }
      );
    }

    const gasUrl = process.env.GAS_CONTACT_URL;

    if (!gasUrl) {
      console.error("GAS_CONTACT_URL is not configured");

      return NextResponse.json(
        { error: "送信設定に問題があります。" },
        { status: 500 }
      );
    }

    const response = await fetch(gasUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      }),
      redirect: "follow",
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) {
      console.error("GAS response status:", response.status);

      return NextResponse.json(
        { error: "送信に失敗しました。" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "送信処理でエラーが発生しました。" },
      { status: 500 }
    );
  }
}
