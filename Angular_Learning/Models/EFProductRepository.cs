using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular_Learning.Models
{
    public class EFProductRepository : IProductRepository
    {

        private ApplicationDbContext context;

        public EFProductRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public IQueryable<Product> Products => context.Products;

        public Product DeleteProduct(int productId)
        {
            Product product;
            try
            {
                product = context.Products.FirstOrDefault(p => p.Id == productId);
                if(product != null)
                {
                   var b = context.Products.Remove(product);
                }
                else
                {
                    throw new Exception("DeleteProduct: There is no product in database with indicated productId");
                }
                context.SaveChanges();
            }
            catch(Exception ex)
            {
                throw ex;
            }
            return product;
        }

        public bool SaveProduct(Product product)
        {
            bool result = false;
            if(product.Id == 0)
            {
                try
                {
                    context.Products.Add(product);
                    context.SaveChanges();
                    result = true;
                }
                catch (Exception ex)
                {
                    result = false;
                    throw ex;
                }
            }
            else
            {
                Product dbProduct = context.Products.FirstOrDefault(p => p.Id == product.Id);
                if(dbProduct != null)
                {
                    dbProduct.Name = product.Name;
                    dbProduct.Description = product.Description;
                    context.SaveChanges();
                    result = true;
                }
                else
                {
                    throw new Exception("SaveProduct: There is no product in database with indicated productId");
                }
            }

            return result;
        }
    }
}
