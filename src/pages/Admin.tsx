
import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Layers, Package, Settings, Users } from 'lucide-react';
import { 
  Sidebar, 
  SidebarProvider, 
  SidebarContent, 
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter
} from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';

// This is a simple authentication check (would be replaced with proper auth)
const useAuth = () => {
  // For demo purposes, we're just using a placeholder admin check
  // In a real app, this would validate against a proper auth system
  const isAdmin = localStorage.getItem('mh-admin-auth') === 'true';
  return { isAdmin };
};

const AdminLayout: React.FC = () => {
  const { isAdmin } = useAuth();
  const isMobile = useIsMobile();
  
  // Redirect to home if not authenticated
  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }
  
  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center px-2">
              <div className="flex items-center gap-2 py-4">
                <Layers size={24} />
                <h1 className="font-playfair font-bold">Maryam Haya Admin</h1>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Dashboard">
                  <a href="/admin">
                    <Layers />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Products">
                  <a href="/admin/products">
                    <Package />
                    <span>Products</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Customers">
                  <a href="/admin/customers">
                    <Users />
                    <span>Customers</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Settings">
                  <a href="/admin/settings">
                    <Settings />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <div className="px-3 py-2">
              <span className="text-xs text-muted-foreground">
                Admin Portal v1.0
              </span>
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1 overflow-auto bg-gray-50">
          <div className="container p-4 md:p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
