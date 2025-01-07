using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Schema;

namespace ExcerciseVAT
    ///<summary>
    ///Title: VAT Calculator
    ///Author: Alan R
    ///Date: 11/12/2024
    ///Description: Calculate the VAT for 3 different values
    ///</summary>
{
    class Program
    {


        static void Main(string[] args)
        {
            priceCalculator();
        
        }


        const double VAT = 0.2;



        static void priceCalculator()
        {
            
            double price1;
            double price2;
            double price3;
            Console.Write("Enter first price: £");
            price1 = Convert.ToDouble(Console.ReadLine());

            Console.Write("Enter second price: £");
            price2 = Convert.ToDouble(Console.ReadLine());

            Console.Write("Enter third price: £");
            price3 = Convert.ToDouble(Console.ReadLine());

            double totalPrice1, totalPrice2, totalPrice3;
            totalPrice1 = price1 + (price1 * VAT);
            totalPrice2 = price2 + (price2 * VAT);
            totalPrice3 = price3 + (price3 * VAT);

            printResults(price1, price2, price3, totalPrice1, totalPrice2, totalPrice3);
            
        }

        static void printResults(double price1, double price2, double price3, double totalPrice1, double totalPrice2, double totalPrice3)
        {
            


            Console.WriteLine("\nHere are the details for all values...");

            Console.WriteLine($"\nDetails for first price:\n\tPrice excluding VAT: {price1:C}," + $" VAT: {price1*VAT:C}, Total Price: {totalPrice1:C}");

            Console.WriteLine($"\nDetails for second price:\n\tPrice excluding VAT: {price2:C}," + $" VAT: {price2 * VAT:C}, Total Price: {totalPrice2:C}");

            Console.WriteLine($"\nDetails for third price:\n\tPrice excluding VAT: {price3:C}," + $" VAT: {price3 * VAT:C}, Total Price: {totalPrice3:C}");
            
            Console.ReadKey();
        }

    }
}

