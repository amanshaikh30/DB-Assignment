# Answer to Question No. 1 :-

Based on the image, the relationship between the "Product" and "Product_Category" entities is one-to-many.

A product can belong to only one product category. This is indicated by the foreign key relationship between the two tables. The "product" table has a column named "category_id" which is a foreign key referencing the primary key ("id") of the "product_category" table.

A product category can have many products. This is because a product category can group multiple products under it. There is no direct foreign key pointing back from "product_category" to "product", but the relationship is enforced through the "category_id" foreign key in the "product" table.

In essence, the "product_category" table categorizes products, and a product can only be assigned to a single category.

## Answer to Question No. 2 :-  

Based on the image, there are two ways to ensure that each product in the "Product" table has a valid category assigned to it:

 Foreign Key Constraint:-

A foreign key constraint can be established between the product_id column in the Product_Inventory table and the id column in the Product_Category table.
This constraint would enforce that any value stored in the product_id column of the Product_Inventory table must also exist as a valid primary key in the id column of the Product_Category table.
This would prevent orphaned entries in the Product_Inventory table, where a product references a non-existent category.

  Data Validation:-

You can implement data validation rules on the application side to ensure that only valid category IDs are assigned to products when creating or updating product entries.
