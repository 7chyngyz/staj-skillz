namespace DATA {
  type GetCoursesResponse = {
    id: number;
    name: string;
    author: string;
    price: number;
    image: string;
    description: string;
    city: string;
    created_date: string;
    updated_date: string;
  }[];
  type GetCoursesRequest = void;

  type GetWorkshopResponse = {
    id: number;
    name: string;
    description: string;
    created_date: string;
  }[];
  type GetWorkshopRequest = void;

  type GetArticlesResponse = {
    id: number;
    course_name: string;
    course_id: string;
    name: string;
    author: string;
    image: string;
    created_date: string;
    updated_date: string;
  }[];
  type GetArticlesRequest = void;
}
