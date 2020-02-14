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
            <asp:MultiView ID="MultiViewGral" runat="server">
                <asp:View ID="ViewTextBox" runat="server">
                    <h1>TEXTBOX</h1>
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
                </asp:View>
                <asp:View ID="ViewRadioButton" runat="server">
                    <h1>RADIO BUTTON</h1>                 
                    <asp:RadioButton ID="RadioButton1" runat="server" GroupName="Seleccion" Text="Opcion 1" />
                    <asp:RadioButton ID="RadioButton2" runat="server" GroupName="Seleccion" Text="Opcion 2" />
                    <asp:RadioButton ID="RadioButton3" runat="server" GroupName="Seleccion" Text="Opcion 3" />
                    <br />
                    <br />
                    CheckBox<br />
                    <asp:CheckBox ID="CheckBox1" runat="server" AutoPostBack="True" OnCheckedChanged="CheckBox1_CheckedChanged" Text="Check 1" />
                    <asp:CheckBox ID="CheckBox2" runat="server" AutoPostBack="True" OnCheckedChanged="CheckBox2_CheckedChanged" Text="Check 2" />
                </asp:View>
                <asp:View ID="ViewLink" runat="server">
                    <h1>LINK</h1>                 
                    <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="http://www.google.com">Google</asp:HyperLink>
                    <br />
                    <br />
                    Link interno<br />
                    <asp:HyperLink ID="HyperLink2" runat="server" NavigateUrl="~/WebForm2.aspx">Link interno</asp:HyperLink>
                    <br />
                    <br />
                    Link otra pestaña<br />
                    <asp:HyperLink ID="HyperLink3" runat="server" NavigateUrl="~/WebForm2.aspx" Target="_blank">Link pestaña</asp:HyperLink>
                </asp:View>
                <asp:View ID="ViewOperacion" runat="server">
                   <h1>OPERACION</h1>
                    <asp:TextBox ID="txtNum1" runat="server"></asp:TextBox>
                    <br />
                    <asp:TextBox ID="txtNum2" runat="server"></asp:TextBox>
                    <br />
                    <asp:Button ID="btnSuma" runat="server" CommandName="sumar" OnCommand="Operaciones" Text="sumar" />
                    <asp:Button ID="btnResta" runat="server" CommandName="restar" OnCommand="Operaciones" Text="restar" />
                    <br />
                    Resultado:
                    <asp:Label ID="lblRes" runat="server"></asp:Label>
                </asp:View>
                <asp:View ID="ViewDropDown" runat="server">
                    <h1>DROPDOWN</h1>
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
                </asp:View>
                <asp:View ID="ViewUpload" runat="server">
                    <h1>UPLOAD</h1>
                    <asp:FileUpload ID="FileUpload" runat="server" />
                    <br />
                    <asp:Button ID="btnSubir" runat="server" OnClick="btnSubir_Click" Text="Subir" />
                </asp:View>
                <asp:View ID="ViewCalendario" runat="server">
                    <h1>CALENDARIO</h1>
                    Fecha<asp:TextBox ID="txtFecha" runat="server"></asp:TextBox>
                    <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Calendario" />
                    <asp:Calendar ID="Calendar1" runat="server" BackColor="White" BorderColor="Black" BorderStyle="Solid" CellSpacing="1" Font-Names="Verdana" Font-Size="9pt" ForeColor="Black" Height="250px" NextPrevFormat="ShortMonth" OnSelectionChanged="Calendar1_SelectionChanged" Width="330px">
                        <DayHeaderStyle Font-Bold="True" Font-Size="8pt" ForeColor="#333333" Height="8pt" />
                        <DayStyle BackColor="#CCCCCC" />
                        <NextPrevStyle Font-Bold="True" Font-Size="8pt" ForeColor="White" />
                        <OtherMonthDayStyle ForeColor="#999999" />
                        <SelectedDayStyle BackColor="#333399" ForeColor="White" />
                        <TitleStyle BackColor="#333399" BorderStyle="Solid" Font-Bold="True" Font-Size="12pt" ForeColor="White" Height="12pt" />
                        <TodayDayStyle BackColor="#999999" ForeColor="White" />
                    </asp:Calendar>
                    <br />
                </asp:View>
                <br />
            </asp:MultiView>
            <br />
            <br />
            <asp:Button ID="btnAtras" runat="server" OnClick="btnAtras_Click" Text="&lt;-" />
&nbsp;<asp:Button ID="btnAdelante" runat="server" OnClick="btnAdelante_Click" Text="-&gt;" />
            <br />
        </div>
    </form>
</body>
</html>
