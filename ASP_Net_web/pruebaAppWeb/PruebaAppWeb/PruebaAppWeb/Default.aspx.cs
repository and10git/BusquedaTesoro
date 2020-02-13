using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace PruebaAppWeb
{
    public partial class _Default : Page
    {
        private int contador = 1;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
                txtContador.Text = "0";
        }

        protected void btnContador_Click(object sender, EventArgs e)
        {
            if (ViewState["click"] != null)
                contador = (int) ViewState["click"] + 1;
     

            txtContador.Text = contador.ToString();

            ViewState["click"] = contador;

        }
    }
}