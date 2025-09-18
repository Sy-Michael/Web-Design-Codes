using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using EmployeeManagement.Models;
namespace EmployeeManagement.Controllers;
    

    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly EmployeeDbContext _context;

        public HomeController(ILogger<HomeController> logger, EmployeeDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }
        public IActionResult Employeelist()
        {
            var allEmployee = _context.Employeelist.ToList();
            

            return View(allEmployee);
        }

         public IActionResult CreateEditInfo(int? ListId)
        {
            if (ListId !=0)
            {
                // editing -> load an EmployeeInfo by id
                var EmployeeInDb = _context.Employeelist.SingleOrDefault(employee=> employee.ListId ==ListId);
            return View(EmployeeInDb);
            }
            return View();
        }
        public IActionResult DeleteInfo(int ListId)
        {
            var EmployeeInDb = _context.Employeelist.SingleOrDefault(employee => employee.ListId == ListId);
         _context.Employeelist.Remove(EmployeeInDb);
            _context.SaveChanges();
            return RedirectToAction("Employeelist");
        }

    
    public IActionResult CreateEditInfoForm(Employee model)
        {
            if (model.ListId == 0)
            {

                //create
                _context.Employeelist.Add(model);

            }else
        {
            //editing 
            _context.Employeelist.Update(model);
        }


            _context.SaveChanges();

            return RedirectToAction("Employeelist");
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }

