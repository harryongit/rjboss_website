

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const UserUploadResult = () => {
  const markets = [
    { id: 1, name: "BANGALORE DAY" },
    { id: 2, name: "BANGALORE NIGHT" },
    { id: 3, name: "BANGALORE MIDDAY" },
  ];

  const [values, setValues] = useState<{ [key: number]: string }>({});

  const handleChange = (id: number, value: string) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleUpload = (id: number) => {
    if (!values[id]) {
      toast.error("Please enter a result number!");
      return;
    }
    toast.success(`Result for ${markets.find((m) => m.id === id)?.name} uploaded: ${values[id]}`);
    setValues((prev) => ({ ...prev, [id]: "" }));
  };

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {markets.map((market) => (
        <Card key={market.id} className="border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">{market.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Input
              placeholder="Enter result number"
              value={values[market.id] || ""}
              onChange={(e) => handleChange(market.id, e.target.value)}
            />
            <Button
              className="bg-green-600 hover:bg-green-700 text-white w-full"
              onClick={() => handleUpload(market.id)}
            >
              Upload Result
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UserUploadResult;
