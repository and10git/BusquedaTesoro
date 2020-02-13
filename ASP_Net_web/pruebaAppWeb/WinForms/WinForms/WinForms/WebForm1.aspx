<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WinForms.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>PRUEBA TEXT BOX</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            SingleLine<br />
            <asp:TextBox ID="txtSingleLine" runat="server" MaxLength="10"></asp:TextBox>
            <br />
            <br />
            MultiLine<br />
            <asp:TextBox ID="txtSingleLine0" runat="server" TextMode="MultiLine"></asp:TextBox>
            <br />
            <br />
            Password<br />
            <asp:TextBox ID="txtSingleLine1" runat="server" TextMode="Password"></asp:TextBox>
            <br />
            <br />
            ReadOnly<br />
            <asp:TextBox ID="txtSingleLine2" runat="server" ReadOnly="True">Contenido de solo lectura</asp:TextBox>
            <br />
            <br />
            RadioButton<br />
            <asp:RadioButton ID="RadioButton1" runat="server" GroupName="Seleccion" Text="Opcion 1" />
            <asp:RadioButton ID="RadioButton2" runat="server" GroupName="Seleccion" Text="Opcion 2" />
            <asp:RadioButton ID="RadioButton3" runat="server" GroupName="Seleccion" Text="Opcion 3" />
            <br />
            <br />
            CheckBox<br />
            <asp:CheckBox ID="CheckBox1" runat="server" AutoPostBack="True" OnCheckedChanged="CheckBox1_CheckedChanged" Text="Check 1" />
            <asp:CheckBox ID="CheckBox2" runat="server" AutoPostBack="True" OnCheckedChanged="CheckBox2_CheckedChanged" Text="Check 2" />
            <br />
            <br />
            Link<br />
            <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="http://www.google.com">Google</asp:HyperLink>
            <br />
            <br />
            Link interno<br />
            <asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="~/WebForm2.aspx">Link interno</asp:HyperLink>
            <br />
            <br />
            Link otra pestaña<br />
            <asp:HyperLink ID="HyperLink3" runat="server" NavigateUrl="~/WebForm2.aspx" Target="_blank">Link pestaña</asp:HyperLink>
            <br />
            <br />
            **OPERACIONES**<br />
            <asp:TextBox ID="txtNum1" runat="server"></asp:TextBox>
            <br />
            <asp:TextBox ID="txtNum2" runat="server"></asp:TextBox>
            <br />
            <asp:Button ID="btnSuma" runat="server" Text="sumar" CommandName="sumar" OnCommand="Operaciones" />
            <asp:Button ID="btnResta" runat="server" Text="restar" CommandName="restar" OnCommand="Operaciones" />
            <br />
            Resultado: <asp:Label ID="lblRes" runat="server"></asp:Label>
            <br />
            <br />
            DropDownList<br />
            <asp:DropDownList ID="ddlF" runat="server">
                <asp:ListItem Value="F1">F1</asp:ListItem>
                <asp:ListItem>F2</asp:ListItem>
            </asp:DropDownList>
            <br />
            <br />
            DropDownList desde XML<br />
            <asp:DropDownList ID="ddlFrutas" runat="server">
            </asp:DropDownList>
            <br />
            <br />
            DropDownList desde MySQL<br />
            <asp:DropDownList ID="ddMySQL" runat="server">
            </asp:DropDownList>
            <br />
            <br />
            Subir archivo<br />
            <asp:FileUpload ID="FileUpload" runat="server" />
            <br />
            <asp:Button ID="btnSubir" runat="server" OnClick="btnSubir_Click" Text="Subir" />
            <br />
            <br />
            <br />
        </div>
    </form>
</body>
</html>
