import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

export default function Dashboard() {
    return (
        <div className="w-3/4 mx-auto">
            <div className="flex justify-center items-start gap-3">
                <div className="w-2/4">
                    <Card className="bg-dashboard-card rounded-xl border-none">
                        <CardHeader>
                            <CardTitle className="text-xl">Generate Microcopy 🔥</CardTitle>
                            <h6 className="text-primary-200 text-sm">
                                Develop precise, helpful text snippets that enhance usability.
                            </h6>
                        </CardHeader>
                        <CardContent>
                            <div className="form-group my-2">
                                <Label className="block my-4">Element Type</Label>
                                <Select className="text-white outline-none">
                                    <SelectTrigger className="w-full py-5 outline-none border border-primary">
                                        <SelectValue placeholder="Select a Element Type" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#221d45] mt-2 border text-white ">
                                        <SelectGroup>
                                            <SelectLabel>Fruits</SelectLabel>
                                            <SelectItem value="button">Button</SelectItem>
                                            <SelectItem value="error message">
                                                Error Message
                                            </SelectItem>
                                            <SelectItem value="tooltip">Tooltip</SelectItem>
                                            <SelectItem value="form label">Form Label</SelectItem>
                                            <SelectItem value="modal/dialog">
                                                Modal/Dialog
                                            </SelectItem>
                                            <SelectItem value="notification">
                                                Notification
                                            </SelectItem>
                                            <SelectItem value="onboarding message">
                                                Onboarding Message
                                            </SelectItem>
                                            <SelectItem value="custom element">
                                                Custom Element
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group my-2">
                                <Label className="block my-4">Tone</Label>
                                <Select className="text-white outline-none ">
                                    <SelectTrigger className="w-full py-5 outline-none border border-primary">
                                        <SelectValue placeholder="Select a Tone" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#221d45] mt-2 border border-primary text-white">
                                        <SelectGroup>
                                            <SelectLabel>Tones</SelectLabel>
                                            <SelectItem value="apple">Professional</SelectItem>
                                            <SelectItem value="banana">Friendly</SelectItem>
                                            <SelectItem value="blueberry">Technical</SelectItem>
                                            <SelectItem value="grapes">Casual</SelectItem>
                                            <SelectItem value="pineapple">Formal</SelectItem>
                                            <SelectItem value="pineapple">Playful</SelectItem>
                                            <SelectItem value="pineapple">Empathic</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="form-group my-2">
                                <Label className="block my-4">Context</Label>
                                <Textarea
                                    className="border-primary"
                                    placeholder="Describe the context and purpose of this element"
                                ></Textarea>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" size={"xl"}>
                                Generate Microcopy <ArrowRight />
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="w-2/4">
                    <Card className="bg-dashboard-card rounded-xl border-none text-white">
                        <CardHeader>
                            <CardTitle className="text-xl">Result ⚡</CardTitle>
                            <h6 className="text-primary-200 text-sm">Your Generated Microcopy</h6>
                        </CardHeader>
                        <CardContent className="text-white">
                            <CardDescription className="text-white">
                                Here are 10 microcopy options for your "Result 🔥" header:
                                <br />
                                <br />
                                1. "Your Generated Microcopy"
                                <br />
                                <br />
                                2. "Ready-to-Use Text" "Polished Microcopy"
                                <br />
                                <br />
                                3. "Polished Microcopy"
                                <br />
                                <br />
                                4. "Copy & Implement"
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
