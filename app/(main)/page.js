import { Button } from "@/components/ui/button";
import { ArrowRight, SearchCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    return (
        <div className="w-full bg-white px-4 md:px-10">
            <div className="max-w-screen-xl mx-auto py-32">
                <div className="flex justify-center items-center h-full gap-6 flex-col w-full text-center">
                    <h1 className="text-4xl/relaxed md:text-6xl/relaxed font-semibold">
                        Write Better{" "}
                        <span className="py-2 md:px-3 px-1 font-bold bg-primary-50 text-primary rounded md:rounded-xl whitespace-nowrap">
                            UI Copy
                        </span>{" "}
                        in Seconds
                    </h1>
                    <h6 className="text-xl md:w-2/3">
                        QuickCopy AI helps developers, designers, and founders instantly generate
                        smart, friendly microcopy using AI.
                    </h6>
                    <div className="flex flex-col md:flex-row justify-center gap-4 mt-2 ">
                        <Link
                            href={""}
                            className="flex gap-2 justify-center bg-primary text-white h-12 rounded-full px-6 py-3"
                        >
                            Try it Free <ArrowRight />
                        </Link>
                        <Link
                            href={""}
                            className="flex gap-2 justify-center bg-transparent border border-primary text-primary h-12 rounded-full px-6 py-3"
                        >
                            See How It Works <SearchCheck />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto py-12">
                <div className="flex gap-10 justify-center items-center">
                    <div className="space-y-8 w-1/2">
                        <div className="space-y-3">
                            <h2 className="text-4xl/normal font-semibold">
                                QuickCopy AI helps you write better UI text — without the burnout.
                            </h2>
                            <h6 className="">
                                QuickCopy AI does it in seconds — just describe your feature, and
                                we'll generate polished, on-brand suggestions.
                            </h6>
                        </div>

                        <ul className="space-y-6">
                            <li>✅ Instantly generate high-quality UI text with AI</li>
                            <li>
                                ✅ Get multiple tone-appropriate options for tooltips, buttons,
                                alerts, and more
                            </li>
                            <li>✅ Ensure consistent, user-friendly copy across your product</li>
                            <li>✅ Skip the blank screen — start with smart suggestions</li>
                            <li>✅ Save time and energy for design, dev, or business logic</li>
                            <li>✅ Keep your app feeling polished without hiring a copywriter</li>
                            <li>✅ Great for side projects, MVPs, and production-ready apps</li>
                        </ul>
                    </div>
                    <Image
                        className="w-1/2  object-cover rounded-lg"
                        src="/app-mockup-2.png"
                        width={1000}
                        height={1000}
                        alt="mockup"
                    />
                </div>
            </div>
        </div>
    );
}
