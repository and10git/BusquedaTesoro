using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ASP_WebSession
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            Response.Write("La cantidad de aplicaciones es: " + Application["Aplicaciones"] + "</br>");
            Response.Write("La cantidad de sesiones de usuario es: " + Application["SesionesUsuario"]);

        }
    }
}