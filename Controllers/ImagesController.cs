using System.Diagnostics;
using System.IO;
using System.Threading;
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
        //[RequestFormLimits(ValueLengthLimit = int.MaxValue, MultipartBodyLengthLimit = int.MaxValue)]
        public async Task<string> Upload(string id)
        {
            try
            {
                foreach (var file in Request.Form.Files)
                {
                    var name = file.FileName;
                    using (var stream = System.IO.File.Create(@"./ClientApp/src/assets/image/"+file.FileName))
                    {
                        await file.CopyToAsync(stream);
                    }
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
