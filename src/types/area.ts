// types/area.ts
export interface Area {
    id: number;
    name_en: string;
    name_ar: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface AreaResponse {
    data: Area[];
  }
  