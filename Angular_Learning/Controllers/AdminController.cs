using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular_Learning.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Angular_Learning.Controllers
{
    public class PostData
    {
        public string name;
        public string password;
    }

    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        [HttpPost]
        public string Login([FromBody]object postData)
        {
            var loginData = JsonConvert.DeserializeAnonymousType(postData.ToString(),new { name = "", password = "" });
            string name = loginData.name;
            string password = loginData.password;

            Token token = new Token();
            if (name.ToLower() == "admin" && password == "pass")
            {
                string chars = "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuwxyz1234567890";
                Random random = new Random();
                token.success = true;
                for (int i = 0; i < 20; i++)
                {
                    token.token += chars[random.Next(chars.Length)];
                }
            }
            else
            {
                token.success = false;
            }
            return JsonConvert.SerializeObject(token);
        }
    }
}