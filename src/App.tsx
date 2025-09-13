import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useCursorBubble } from "./hooks/use-cursor-bubble";

const queryClient = new QueryClient();

const App = () => {
  const bubbleRef = useCursorBubble();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        {/* Cursor Bubble */}
        <div ref={bubbleRef} className="cursor-bubble" />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
