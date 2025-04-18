"use server";

import { openai } from "@/lib/openai";

export async function generateMicrocopy({ elementType, tone, context }) {
    const prompt = `Generate 3 short microcopy suggestions for a UI ${elementType}.
                    Tone: ${tone}.
                    Context: ${context}.
                    Keep each suggestion concise and user-friendly.
                    Return only the suggestions in plain text list format.
                    `;

    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: "You are an expert UI/UX microcopy writer." },
            { role: "user", content: prompt.trim() },
        ],
        model: "gpt-4o-mini",
    });

    const text = completion.choices[0]?.message.content ?? "";
    return text
        .split("\n")
        .map((line) =>
            line
                .replace(/^\d+[\.\)]\s*/, "")
                .replace(/"/g, "")
                .trim()
        )
        .filter(Boolean);
}
