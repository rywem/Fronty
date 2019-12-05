﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using AjaxSolution.Models;

namespace AjaxSolution.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }


        public IActionResult PopulatePicklist()
        {
            return View();
        }
        [HttpGet]
        public IActionResult GetCountries(string continent)
        {
            string result = string.Empty;

            List<string> countries = Countries.GetCountries(continent);

            foreach (var item in countries)
            {
                result += $" <option value='{item}'>{item}</option>";
            }

            return Content(result);
            //return Json(new { data = "0" });
        }

        /*          
        [HttpGet]
        public IActionResult GetAll()
        {
            return Json(new { data = _unitOfWork.Category.GetAll(includeProperties: "SiteImage") });
        }
        */
        public IActionResult Privacy()
        {
            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
