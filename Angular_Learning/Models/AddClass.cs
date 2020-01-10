using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular_Learning.Models
{
    public class AddClass
    {

        public static void AddProducts(IServiceProvider services)
        {
            ApplicationDbContext context = services.GetRequiredService<ApplicationDbContext>();
            if (!context.Products.Any())
            {
                context.Products.AddRange
                (
                    new Product { Name = "Kajak", Description = "Łódka przeznaczona dla jednej osoby", Category = "Sporty Wodne", Price = 275 },
                    new Product { Name = "Kamizelka Ratunkowa", Description = "Chroni i dodaje uroku", Category = "Sporty Wodne", Price = 48.95M },
                    new Product { Name = "Pilka", Description = "Zatwierdzone przez FIFA rozmiar i waga", Category = "Pilka Nozna", Price = 19.50M },
                    new Product { Name = "Flagi Narozne", Description = "Nadadzą twojemu boisku profesjonalny wygląd", Category = "Pilka Nozna", Price = 34.95M },
                    new Product { Name = "Stadion", Description = "Składany stadion na 35 000 osób", Category = "Pilka Nozna", Price = 79500 },
                    new Product { Name = "Czapka", Description = "Zwiększa efektywność mózgu o 75%", Category = "Szachy", Price = 16 },
                    new Product { Name = "Niestabilne Krzeslo", Description = "Zmniejsza szanse przeciwnika", Category = "Szachy", Price = 29.95M },
                    new Product { Name = "Ludzka Szachownica", Description = "Przyjemna gra dla całej rodziny", Category = "Szachy", Price = 75},
                    new Product { Name = "Blyszczacy Krol", Description = "Figura pokryta złotem i wysadzana diamentami", Category = "Szachy", Price = 1200 }    
                );
                context.SaveChanges();
            }
        }
    }
}
