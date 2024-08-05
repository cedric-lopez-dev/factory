import { Card, CardContent } from "@/components/ui/card"
const index = ({ children }) => {
    return (
        <Card className="bg-transparent flex-1 ">
            <CardContent className="p-10 flex items-center flex-col">
                {children}
            </CardContent>
        </Card>
    );
};

export default index;