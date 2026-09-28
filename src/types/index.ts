// src/types/index.ts

export interface EventItem {
    id: string;
    title: string;
    category: 'Wedding' | 'Corporate' | 'Concert' | 'Exhibition';
    date: string;
    location: string;
    imageUrl: string;
    description: string;
  }
  
  export interface ClientInquiry {
    name: string;
    email: string;
    phone: string;
    eventType: string;
    eventDate: string;
    budget: string;
    message: string;
  }
  
  export interface ApiResponse<T = any> {
    success: boolean;
    message: string;
    data?: T;
    error?: string;
  }