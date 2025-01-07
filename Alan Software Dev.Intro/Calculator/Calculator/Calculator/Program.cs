using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            int num1;
            int num2;
            char sign;
            try
            {
                Console.Write("Enter a number: ");
                num1 = Convert.ToInt16(Console.ReadLine());
                Console.Write("Enter another number: ");
                num2 = Convert.ToInt16(Console.ReadLine());

                Console.Write("Enter a symbol [+, -, * or /] ");
                sign = Convert.ToChar(Console.ReadLine());

                if (sign == '+')
                {
                    Console.WriteLine($"{num1} + {num2} = {num1 + num2}");
                }
                else if (sign == '-')
                {
                    Console.WriteLine($"{num1} - {num2} = {num1 - num2}");
                }
                else if (sign == '*')
                {
                    Console.WriteLine($"{num1} * {num2} = {num1 * num2}");
                }
                else if (sign == '/')
                {
                    Console.WriteLine($"{num1} / {num2} = {num1 / num2}");
                }
                else
                {
                    Console.Write("I don't know what you mean!!");
                }
                comparison(num1, num2);

            }

            catch (Exception e)
            {
                Console.WriteLine("You must enter integers");
            }
            Console.ReadKey();
        }

        static void comparison(int num1, int num2)
        {
            if (num1 == num2)
            {
                Console.WriteLine($"\n{num1} = {num2}");
            }
            else if (num1 < num2)
            {
                Console.WriteLine($"\n{num1} is smaller than {num2}");
            }
            else if (num1 > num2)
            {
                Console.WriteLine($"\n{num1} is greater than {num2}");
            }
            else
            {
                Console.WriteLine("\nI don't know what you mean!!");
            }
        }
    }
}
