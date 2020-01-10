using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular_Learning.Models
{
    public interface IProductRepository
    {
        IQueryable<Product> Products { get;}

        bool SaveProduct(Product product);
        Product DeleteProduct(int productId);
    }
}
