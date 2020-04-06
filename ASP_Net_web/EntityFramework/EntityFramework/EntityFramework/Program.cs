using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityFramework
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var db = new PruebaEF())
            {
                // Crear persona
                Console.Write("Ingresar el nombre de la nueva persona: ");
                var nombre = Console.ReadLine();

                Console.Write("Ingresar 'M' o 'F' segun el sexo: ");
                var sexo = Console.ReadLine();

                var persona = new persona { personaNombre = nombre, personaSexoId = ((sexo.Equals("M") ) ? 1 : 2) };
                db.persona.Add(persona);
                db.SaveChanges();

                // Mostrar personas
                var listaPersonas = from p in db.persona
                            orderby p.personaId           
                            select p;

                Console.WriteLine("Total de personas:");
                foreach (var p in listaPersonas)
                {
                    Console.WriteLine(p.personaNombre + " " + ((p.personaSexoId == 1) ? "Masculino" : "Femenino"));
                }

                Console.WriteLine("Presione una tecla para salir");
                Console.ReadKey();
            }
        }
    }
}

