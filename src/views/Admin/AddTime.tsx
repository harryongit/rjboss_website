import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AddTime = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="bg-primary/10">
          <CardTitle className="text-primary">Add Time</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              Time management feature coming soon...
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddTime;
