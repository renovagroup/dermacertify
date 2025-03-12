export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      certificate_requests: {
        Row: {
          email: string
          id: string
          keywords_used: Json | null
          name: string
          phone: string | null
          profession: string | null
          requested_at: string | null
          status: string | null
          wants_personalized_payment: boolean | null
        }
        Insert: {
          email: string
          id?: string
          keywords_used?: Json | null
          name: string
          phone?: string | null
          profession?: string | null
          requested_at?: string | null
          status?: string | null
          wants_personalized_payment?: boolean | null
        }
        Update: {
          email?: string
          id?: string
          keywords_used?: Json | null
          name?: string
          phone?: string | null
          profession?: string | null
          requested_at?: string | null
          status?: string | null
          wants_personalized_payment?: boolean | null
        }
        Relationships: []
      }
      certificates: {
        Row: {
          email: string
          generated_at: string
          id: string
          name: string
          personalized_payment: string | null
          phone: string | null
          profession: string | null
        }
        Insert: {
          email: string
          generated_at?: string
          id?: string
          name: string
          personalized_payment?: string | null
          phone?: string | null
          profession?: string | null
        }
        Update: {
          email?: string
          generated_at?: string
          id?: string
          name?: string
          personalized_payment?: string | null
          phone?: string | null
          profession?: string | null
        }
        Relationships: []
      }
      monthly_reports: {
        Row: {
          created_at: string | null
          financial_metrics: Json | null
          growth_metrics: Json | null
          id: string
          marketing_metrics: Json | null
          month_name: string
          month_number: number
          monthly_comparison: Json | null
          monthly_sales: Json | null
          sales_metrics: Json | null
          updated_at: string | null
          weekly_sales: Json | null
          year: number
        }
        Insert: {
          created_at?: string | null
          financial_metrics?: Json | null
          growth_metrics?: Json | null
          id?: string
          marketing_metrics?: Json | null
          month_name: string
          month_number: number
          monthly_comparison?: Json | null
          monthly_sales?: Json | null
          sales_metrics?: Json | null
          updated_at?: string | null
          weekly_sales?: Json | null
          year: number
        }
        Update: {
          created_at?: string | null
          financial_metrics?: Json | null
          growth_metrics?: Json | null
          id?: string
          marketing_metrics?: Json | null
          month_name?: string
          month_number?: number
          monthly_comparison?: Json | null
          monthly_sales?: Json | null
          sales_metrics?: Json | null
          updated_at?: string | null
          weekly_sales?: Json | null
          year?: number
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number
          created_at: string | null
          date: string
          details: string
          id: string
          origin: string
          payment_method: string | null
          type: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          date?: string
          details: string
          id?: string
          origin: string
          payment_method?: string | null
          type: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          date?: string
          details?: string
          id?: string
          origin?: string
          payment_method?: string | null
          type?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      verification_keywords: {
        Row: {
          created_at: string | null
          first_keyword: string
          id: string
          second_keyword: string
        }
        Insert: {
          created_at?: string | null
          first_keyword: string
          id?: string
          second_keyword: string
        }
        Update: {
          created_at?: string | null
          first_keyword?: string
          id?: string
          second_keyword?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
