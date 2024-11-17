// types/unit.ts
export interface Upload {
    id: number;
    path: string;
    size: number | null;
    unit_id: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
  }
  
  export interface Unit {
    id: number;
    unit_reference: string;
    name: string;
    property_type: string | null;
    In_Compound: number;
    compound_Name: string;
    Address: string;
    building_number: number | null;
    unit_number: number | null;
    floor: number;
    Space: number;
    additional_features: string;
    roof_space: number | null;
    garden_space: number;
    Bedrooms_Number: number;
    Bathrooms_Number: number;
    Finishing: string;
    price: number;
    totalPriceWithCommission: number;
    commission: string;
    totalPrice: number | null;
    monthly_installments: number | null;
    paid_so_far: number | null;
    price_over: number | null;
    last_installment_date: string | null;
    Maintenance_payment: number;
    other_payment: number;
    other_paymentService: string;
    Receipt_appointment: string;
    payment_way: string;
    is_approved: number;
    is_request: number;
    note: string | null;
    sold: number;
    area_id: number;
    area3_id: number | null;
    area2_id: number | null;
    user_id: number;
    client_id: number;
    broker_id: number | null;
    PIN: number;
    created_at: string;
    updated_at: string;
    uploads: Upload[];
    features?: {
      id: number;
      name_en: string;
      name_ar: string;
      created_at: string;
      updated_at: string;
      pivot: {
        unit_id: number;
        unit_feature_id: number;
      };
    }[]; // Add this line to define features
  }
  
  export interface UnitResponse {
    data: Unit; // Change from `Unit[]` to `Unit` if data is a single object
    status: number;
    errors: {
      message: string | null;
    };
  }
  interface PaginationLinks {
    url: string | null;
    label: string;
    active: boolean;
  }
  
  

  export interface MyUnitResponse {
    data: {
      current_page: number;
      data: Unit[];
      first_page_url: string;
      from: number;
      last_page: number;
      last_page_url: string;
      next_page_url: string | null;
      path: string;
      per_page: number;
      prev_page_url: string | null;
      to: number;
      total: number;
      links: PaginationLinks[];
    };
    status: number;
    errors: {
      message: string | null;
    };
  }
  export interface SearchResults {
    data: Unit[];
  }

// types/filters.ts

export interface Filters {
  area?: string;
  unit_type?: string;
  compound_type?: number | null; // Allow null as a valid type
    Bedrooms_Number?: string;
  Bathrooms_Number?: string;
  floor?: string;
  Finishing?: string;
  total_Price_from?: number;
  total_Price_to?: number;
  monthly_installments_from?: number;
  monthly_installments_to?: number;
}


  