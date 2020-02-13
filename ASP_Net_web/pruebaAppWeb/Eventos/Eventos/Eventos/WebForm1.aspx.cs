using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Eventos
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_PreInit(object sender, EventArgs e)
        {
            Response.Write("PreInit </br>");
        }

        protected void Page_Init(object sender, EventArgs e)
        {
            Response.Write("Init </br>");
        }

        protected void Page_InitComplete(object sender, EventArgs e)
        {
            Response.Write("InicComplete </br>");
        }


        protected void Page_PreLoad(object sender, EventArgs e)
        {
            Response.Write("PreLoad </br>");
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Write("Load </br>");
        }

        protected void Page_LoadComplete(object sender, EventArgs e)
        {
            Response.Write("LoadComplete </br>");
        }

        protected void Page_PreRender(object sender, EventArgs e)
        {
            Response.Write("PreRender </br>");
        }

        protected void Page_PreRenderComplete(object sender, EventArgs e)
        {
            Response.Write("PreRenderComplete </br>");
        }

        protected void Page_UnLoad(object sender, EventArgs e)
        {
            
        }
    }
}