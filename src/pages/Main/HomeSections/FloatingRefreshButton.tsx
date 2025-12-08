import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

const FloatingRefreshButton = ({ handleRefresh }: { handleRefresh: () => void }) => {
  return (
    <Button
      onClick={handleRefresh}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 text-white rounded-full p-4 shadow-2xl z-50 active:scale-95 transition-all"
    >
      <RefreshCw className="h-6 w-6" />
    </Button>
  );
};

export default FloatingRefreshButton;
