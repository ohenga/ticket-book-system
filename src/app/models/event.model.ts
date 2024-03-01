export interface Event {
  id: number;
  name: string;
  date: Date;
  description: string;
  maxAttendees: number;
  tickets: {
    vip: {
      price: number;
      available: number;
    };
    regular: {
      price: number;
      available: number;
    };
  };
}




