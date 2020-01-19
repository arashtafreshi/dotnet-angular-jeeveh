using System.Diagnostics;
using System.IO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_angular_jeeveh.Controllers
{
    [Route("api/[controller]")]
    public class ImagesController : Controller
    {


        //[HttpGet("[action]")]
        [HttpPost]
        [Route("[action]/{id}")]
        public string Upload(string id)
        {
            try
            {
                foreach(var file in Request.Form.Files){
                    var name = file.FileName;
                }
                return "success";
            }
            catch (Exception e)
            {
                return "error";
            }
        }

        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
