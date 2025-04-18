import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, SearchCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MousePointerClick, Sparkles, ClipboardCopy } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

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
                            href={"/sign-up"}
                            className="flex gap-2 justify-center bg-primary text-white h-12 rounded-full px-6 py-3"
                        >
                            Try it Free <ArrowRight />
                        </Link>
                        <Link
                            href={"#how-it-works"}
                            className="flex gap-2 justify-center bg-transparent border border-primary text-primary h-12 rounded-full px-6 py-3"
                        >
                            See How It Works <SearchCheck />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto py-12">
                <div className="flex gap-10 justify-center items-center lg:flex-row flex-col-reverse">
                    <div className="space-y-8 lg:w-1/2 w-full">
                        <div className="space-y-3">
                            <h2 className="text-4xl/normal font-semibold">
                                QuickCopy AI helps you write better UI text — without the burnout.
                            </h2>
                            <h6 className="">
                                QuickCopy AI does it in seconds — just describe your feature, and
                                we&apos;ll generate polished, on-brand suggestions.
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
                        className="lg:w-1/2 w-full object-cover rounded-lg"
                        src="/app-mockup-2.png"
                        width={1000}
                        height={1000}
                        alt="mockup"
                    />
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto py-12" id="how-it-works">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-2">How It Works</h2>
                    <p className="text-black mb-6 text-lg">
                        From idea to interface – generate smarter copy in seconds.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <Card className="bg-white shadow-md rounded-xl">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <MousePointerClick className="text-primary w-6 h-6" />
                                <h3 className="text-xl font-semibold">1. Describe Your UI</h3>
                            </div>
                            <p className="text-gray-900 text-sm">
                                Choose the UI element, pick a tone, and describe its purpose or
                                situation. The more context, the better!
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white shadow-md rounded-xl">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Sparkles className="text-primary w-6 h-6" />
                                <h3 className="text-xl font-semibold">2. Get Tailored Microcopy</h3>
                            </div>
                            <p className="text-gray-900 text-sm">
                                Our AI generates five polished microcopy suggestions based on your
                                input – clear, concise, and on brand.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white shadow-md rounded-xl">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <ClipboardCopy className="text-primary w-6 h-6" />
                                <h3 className="text-xl font-semibold">3. Copy and Use</h3>
                            </div>
                            <p className="text-gray-900 text-sm">
                                Instantly copy your favorite result and paste it right into your
                                app, design file, or component.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="max-w-screen-sm mx-auto py-12">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground text-lg">
                        Everything you need to know before using the AI Microcopy Generator.
                    </p>
                </div>
                <div className="shadow-md p-3 rounded">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How many generations can I use?</AccordionTrigger>
                            <AccordionContent>
                                You can generate up to{" "}
                                <strong>10 microcopy suggestions per day</strong> on the free plan.
                                Enough for quick UI polish!
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it really free?</AccordionTrigger>
                            <AccordionContent>
                                Yes — our base plan is <strong>completely free</strong> with no
                                credit card required. Premium plans may be added later as we grow.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger>What kind of copy can it generate?</AccordionTrigger>
                            <AccordionContent>
                                It can generate short, helpful text for UI elements like buttons,
                                tooltips, modals, labels, onboarding messages, and more — all
                                tailored to your tone and context.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
