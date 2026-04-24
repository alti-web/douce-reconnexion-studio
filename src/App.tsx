import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import MassagesPage from "./pages/MassagesPage.tsx";
import DeroulementPage from "./pages/DeroulementPage.tsx";
import MentionsLegalesPage from "./pages/MentionsLegalesPage.tsx";
import CGVPage from "./pages/CGVPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import BlogArticlePage from "./pages/BlogArticlePage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/massages" element={<MassagesPage />} />
          <Route path="/deroulement" element={<DeroulementPage />} />
          <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          <Route path="/cgv" element={<CGVPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
