using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Angular_Learning.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Angular_Learning.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private IProductRepository repository;
        public ProductController(IProductRepository repository) 
        {
            this.repository = repository;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            //List<Product> products = repository.Products.ToList();
            //string result;
            //result = JsonConvert.SerializeObject(products);
            //return result;
            List<Product> products = repository.Products.ToList();
            return products;
        }

        [HttpDelete]
        public string deleteProduct(int id)
        {
            Product p = null;
            try
            {
                p = repository.DeleteProduct(id);
            }
            catch(Exception ex)
            {

            }
            return JsonConvert.SerializeObject(p);
        }
    }
}