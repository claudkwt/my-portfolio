import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/app/ui/card"

export default function Projects() {
    return (
        <div className="flex flex-col">
            <div className="font-bold text-2xl py-6 hidden md:block">Projects </div>
            <div className="md:grid flex">
                <Card  className="w-1/3 m-3 border-0 bg-popover rounded-lg">
                <CardHeader>
                    <CardTitle>Project Title</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>

                </CardContent>
                </Card>
            </div>
        </div>
    )
}