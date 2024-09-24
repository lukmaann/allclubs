"use client"

import { QueryClient,QueryClientProvider } from "@tanstack/react-query"
import React from "react"


interface queryClientProviderProps
{
    children:React.ReactNode

}

const client= new QueryClient();

export const ReactQueryProvider = ({ children }: queryClientProviderProps)=>{
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>

}


