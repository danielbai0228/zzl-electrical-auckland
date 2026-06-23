"use server";

import { site } from "@/lib/site";

export type CallbackFormState = {
  ok: boolean;
  message: string;
};

const initialError =
  "Sorry, the form could not be sent. Please call or email us directly.";

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function requestCallback(
  _previousState: CallbackFormState,
  formData: FormData,
): Promise<CallbackFormState> {
  const name = clean(formData.get("name"));
  const phone = clean(formData.get("phone"));
  const email = clean(formData.get("email"));
  const address = clean(formData.get("address"));
  const message = clean(formData.get("message"));
  const website = clean(formData.get("website"));

  if (website) {
    return {
      ok: true,
      message: "Thanks, we will call you back shortly.",
    };
  }

  if (!name || !phone) {
    return {
      ok: false,
      message: "Please leave your name and phone number.",
    };
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      ok: false,
      message:
        "The callback form is not configured yet. Please call or email us directly.",
    };
  }

  try {
    const payload: Record<string, string | number> = {
      access_key: accessKey,
      subject: `New callback request - ${site.businessName}`,
      from_name: site.businessName,
      name,
      phone,
      address: address || "Not provided",
      message: message || "No message provided",
    };

    if (email) {
      payload.email = email;
      payload.replyto = email;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = (await response.json()) as {
      success?: boolean;
      message?: string;
    };

    if (!response.ok) {
      return {
        ok: false,
        message: result.message || initialError,
      };
    }

    if (!result.success) {
      return {
        ok: false,
        message: result.message || initialError,
      };
    }

    return {
      ok: true,
      message: "Thanks, we will call you back shortly.",
    };
  } catch {
    return {
      ok: false,
      message: initialError,
    };
  }
}
