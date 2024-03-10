class Product {
    constructor(id, name, price, categoryId, createdByUserId) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.categoryId = categoryId;
      this.createdByUserId = createdByUserId;
    }
  }
  
  class Category {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  }
  
  class User {
    constructor(id, username, email) {
      this.id = id;
      this.username = username;
      this.email = email;
    }
  }
  
  class ORM {
    static products = [];
    static categories = [];
    static users = [];
  
    static saveProduct(product) {
      ORM.products.push(product);
    }
  
    static saveCategory(category) {
      ORM.categories.push(category);
    }
  
    static saveUser(user) {
      ORM.users.push(user);
    }
  }
  
  const category1 = new Category(1, 'Electronics');
  const category2 = new Category(2, 'Clothing');
  
  const user1 = new User(1, 'Salman_Khan', 'salman@example.com');
  const user2 = new User(2, 'Shahrukh_khan', 'shahrukh@example.com');
  
  const product1 = new Product(1, 'Smartphone', 599.99, 1, 1);
  const product2 = new Product(2, 'Laptop', 1299.99, 1, 2);
  const product3 = new Product(3, 'T-shirt', 19.99, 2, 1);
  
  ORM.saveCategory(category1);
  ORM.saveCategory(category2);
  
  ORM.saveUser(user1);
  ORM.saveUser(user2);
  
  ORM.saveProduct(product1);
  ORM.saveProduct(product2);
  ORM.saveProduct(product3);
  
  console.log(ORM.categories);
  console.log(ORM.users);
  console.log(ORM.products);
  