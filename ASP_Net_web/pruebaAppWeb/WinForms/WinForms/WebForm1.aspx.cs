using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using MySql.Data.MySqlClient;

namespace WinForms
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            SetFocus(txtSingleLine);

            string connectionStr = "datasource=127.0.0.1;port=3306;username=root;password=hasar123;database=prueba_aspnet;";

            using (var dbCon = new MySqlConnection(connectionStr))
            {
                dbCon.Open();
                using (var cmd = new MySqlCommand("SELECT * FROM prueba_aspnet.frutas", dbCon))
                {
                    using (var reader = cmd.ExecuteReader())
                    {
                        ddMySQL.DataSource = reader;
                        ddMySQL.DataValueField = "id";
                        ddMySQL.DataTextField = "name";
                        ddMySQL.DataBind();
                    }
                }
            }

            if (!Page.IsPostBack) //si es la primera vez que se muestra
            {
                MultiViewGral.ActiveViewIndex = 0;
                btnAtras.Visible = false;
                btnAdelante.Visible = true;

                DataSet DS = new DataSet();
                DS.ReadXml(Server.MapPath("~/Frutas.xml"));
                ddlFrutas.DataSource = DS;
                ddlFrutas.DataValueField = "FrutaId";
                ddlFrutas.DataTextField = "FrutaNombre";
                ddlFrutas.DataBind();

                Calendar1.Visible = false;
            }



        }

        protected void CheckBox1_CheckedChanged(object sender, EventArgs e)
        {
            Response.Write("Seleccion check 1");
        }

        protected void CheckBox2_CheckedChanged(object sender, EventArgs e)
        {
            Response.Write("Seleccion check 2");
        }

        protected void Operaciones(object sender, CommandEventArgs e)
        {
            int res = 0;
            if (e.CommandName == "sumar")
                res = Convert.ToInt32(txtNum1.Text) + Convert.ToInt32(txtNum2.Text);
            else
                res = Convert.ToInt32(txtNum1.Text) - Convert.ToInt32(txtNum2.Text);

            lblRes.Text = res.ToString();

        }

        protected void btnSubir_Click(object sender, EventArgs e)
        {
            if (FileUpload.HasFile) //si se selecciono un archivo
            {
                //Obtengo extension
                string ext = System.IO.Path.GetExtension(FileUpload.FileName).ToLower();

                //Obtengo tamaño
                int tam = FileUpload.PostedFile.ContentLength;

                if (ext == ".txt" && tam <= 1048576)
                {
                    FileUpload.SaveAs(Server.MapPath("~/Upload/" + FileUpload.FileName));
                    Response.Write("Se subio el archivo correctamente");
                }
            }
            else
                Response.Write("DEBE SELECCIONAR UN ARCHVO.");

        }

        protected void Calendar1_SelectionChanged(object sender, EventArgs e)
        {
            txtFecha.Text = Calendar1.SelectedDate.ToShortDateString();
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            Calendar1.Visible = !Calendar1.Visible;
        }

        protected void btnAtras_Click(object sender, EventArgs e)
        {
            MultiViewGral.ActiveViewIndex--;
            btnAtras.Visible = MultiViewGral.ActiveViewIndex > 0;
            btnAdelante.Visible = MultiViewGral.ActiveViewIndex <= 5;
        }

        protected void btnAdelante_Click(object sender, EventArgs e)
        {
            MultiViewGral.ActiveViewIndex++;
            btnAtras.Visible = MultiViewGral.ActiveViewIndex > 0;
            btnAdelante.Visible = MultiViewGral.ActiveViewIndex <= 5;
        }
    }
}