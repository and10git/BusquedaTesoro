<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="PruebaAppWeb._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    
    <p>
        <br />
        <h1>APP CONTADOR</h1>
        <asp:TextBox ID="txtContador" runat="server"></asp:TextBox>
        <asp:Button ID="btnContador" runat="server" OnClick="btnContador_Click" Text="Incrementar" />
    </p>

    
</asp:Content>
