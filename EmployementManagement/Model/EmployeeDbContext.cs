using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace EmployeeManagement.Models
{
    public class EmployeeDbContext(DbContextOptions<EmployeeDbContext> options) : DbContext(options)
    {
        public DbSet<Employee> Employeelist { get; set; }
    }
}


