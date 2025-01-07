using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Variables_3
{
    class Program
    {
        static int myVariable1 = 20;//This is a global variable that is accessible by every method() in this program
        static void Main(string[] args)
        {
            int myVariable2 = 10;//
            Console.WriteLine($"In Main(),these ar the values of the available variables\n " +
                $"myVariable1 = {myVariable1}\nmyVariable2 = {myVariable2}");

            //Call the tester() method

            tester();
            Console.ReadKey();
        }
        static void tester()
        {
            int myVariable3; //This is a local variable accessible from the tester() method only.
            myVariable1 = 30;
            myVariable3 = 5;
            int myVariable2 = 17; //This also is a local variable accessible from the tester() method only.
                                  //int myVariable1=8; //I can create more variables inside this method, they will all be accessible only by the tester() method

            myVariable3 = myVariable1 + myVariable2;
            Console.WriteLine($"In tester(), here are the values\nmyVariable = {myVariable1}\n" +
                $"myVariable2={myVariable2}\nmyVariable3= {myVariable3}");
        }




    }
}
