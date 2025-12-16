export class ApiUrls {
  //Auth
  public static LOGIN: string = "/login";
  public static REGISTER: string = "/register";
  public static LOGOUT = "/logout";
  public static LOGOUT_BY_ID = (id: string) => `${this.LOGOUT}/${id}`;

  //User api's
  public static USER: string = "/user";
  public static GETUSER: string = `${this.USER}/get`;
  public static GETONEUSER: "/getOne";
  public static UPDATE: "/edit";
  public static DELETE: "/delete";

  //Product api's
  public static PRODUCT: string = "/product";
  public static CREATE_PRODUCT: string = `${this.PRODUCT}/createProduct`;
  public static GET_ONE_PRODUCT: string = `${this.PRODUCT}/getProduct`;
  public static GET_ONE_PRODUCT_BY_ID = (id: string) => `${this.GET_ONE_PRODUCT}/${id}`;
  public static ALL_PRODUCT: string = `${this.PRODUCT}/allProduct`;
  public static EDIT_PRODUCT: string = `${this.PRODUCT}/editProduct`;
  public static EDIT_PRODUCT_BY_ID = (id: string) => `${this.EDIT_PRODUCT}/${id}`;
  public static DELETE_PRODUCT: string = `${this.PRODUCT}/deleteProduct`;
  public static DELETE_PRODUCT_BY_ID = (id: string) => `${this.DELETE_PRODUCT}/${id}`;

  //Category api's
  public static CATEGORY: string = "/category";
  public static CREATE_CATEGORY: string = `${this.CATEGORY}/createCategory`;
  public static GET_ONE_CATEGORY: string = `${this.CATEGORY}/getOneCategory`;
  public static GET_ONE_CATEGORY_BY_ID = (id: string) => `${this.GET_ONE_CATEGORY}/${id}`;
  public static CATEGORY_EDIT: string = `${this.CATEGORY}/edit`;
  public static CATEGORY_EDIT_BY_ID = (id: string) => `${this.CATEGORY_EDIT}/${id}`;
  public static CATEGORY_DELETE: string = `${this.CATEGORY}/delete`;
  public static CATEGORY_DELETE_BY_ID = (id: string) => `${this.CATEGORY_DELETE}/${id}`;

  //Brend api's
  public static BREND: string = "/brands"; 
  public static CREATE_BREND: string = `${this.BREND}/create`;
  public static GET_ONE_BREND: string = `${this.BREND}/getOne`;
  public static GET_ONE_BREND_BY_ID = (id: string) => `${this.GET_ONE_BREND}/${id}`
  public static BREND_EDIT: string = `${this.BREND}/edit`;
  public static BREND_EDIT_BY_ID = (id: string) => `${this.BREND_EDIT}/${id}`;  
  
  //Order api's
  public static ORDER: string = "/orders";
  public static CREATE_ORDER: string = `${this.ORDER}/createOrder`  ;
  
  public static ORDER_EDIT: string = `${this.ORDER}/edit`;
  public static ORDER_EDIT_BY_ID = (id: string) => `${this.ORDER_EDIT}/${id}`;

  //Wishlist api's
  public static WISHLIST: string = "/wishlist";
  public static CREATE_WISHLIST: string = `${this.WISHLIST}/create`;          
  public static WISHLIST_GET_ONE_BY_ID = (id: string) => `${this.WISHLIST}/getOne/${id}`;
  public static WISHLIST_GET_ALL: string = `${this.WISHLIST}/getAll`;
  public static WISHLIST_EDIT: string = `${this.WISHLIST}/edit`;
  public static WISHLIST_EDIT_BY_ID = (id: string) => `${this.WISHLIST_EDIT}/${id}`;


  //Cart api's  
  public static CART: string = "/cart";
  public static CREATE_CART: string = `${this.CART}/createCart`;          
  public static CART_GET_ONE_BY_ID = (id: string) => `${this.CART}/getOneCart/${id}`;
  public static CART_GET_ALL: string = `${this.CART}/getCarts`;
  public static CART_EDIT: string = `${this.CART}/editCart`;
  public static CART_EDIT_BY_ID = (id: string) => `${this.CART_EDIT}/${id}`;
  public static CART_DELETE: string = `${this.CART}/delete`;
  public static CART_DELETE_BY_ID = (id: string) => `${this.CART_DELETE}/${id}`;

  //Contact api's
  public static CONTACT: string = "/contact";
  public static CREATE_CONTACT: string = `${this.CONTACT}/createContact`;
  // public static CONTACT_GET_ALL: string = `${this.CONTACT}/getAllContacts`;   
  public static GET_ONE_CONTACT: string = `${this.CONTACT}/getOneContact`;
  public static GET_ONE_CONTACT_BY_ID = (id: string) => `${this.GET_ONE_CONTACT}/${id}`;     
  public static CONTACT_EDIT: string = `${this.CONTACT}/edit`;
  public static CONTACT_EDIT_BY_ID = (id: string) => `${this.CONTACT_EDIT}/${id}`;
  public static CONTACT_DELETE: string = `${this.CONTACT}/delete`;  
  public static CONTACT_DELETE_BY_ID = (id: string) => `${this.CONTACT_DELETE}/${id}`;
}
