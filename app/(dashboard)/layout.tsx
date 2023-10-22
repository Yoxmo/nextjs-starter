// import Navbar from "@/components/navbar";
// import { Sidebar } from "@/components/sidebar";
// import { checkSubscription } from "@/lib/subscription";
// import { getApiLimitCount } from "@/lib/api-limit";

import React from "react";

const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  // const apiLimitCount = await getApiLimitCount();
  // const isPro = await checkSubscription();

  return ( 
    <main className="w-full h-full overflow-hidden" >
      <style>
        {`
            *::-webkit-scrollbar {
              display: none !important;
              -ms-overflow-style: none !important;   
              scrollbar-width: none !important; 
            } 
            * {
              -ms-overflow-style: none !important; 
              scrollbar-width: none !important; 
            }
            .ck-powered-by__label{
              display:none !important;
            }
            .ck-powered-by{
              display:none !important;
            }
            .ck-editor{
              margin-top: 10px !important;
              margin-bottom: 0px !important;
            }
            .ck-content{
              min-height: 350px !important;
            }
            .tox-statusbar__branding{
              display: none !important;
            }
            body{
              overflow: hidden !important;
            }
          `}
      </style>
      {/* <Navbar /> */}
      {children}
    </main>
   );
}
 
export default DashboardLayout;
