var shown =false;
function showhideEmail()
{
	if (shown)
	{
		document.getElementById('email').innerHTML = "show my email";
		shown = false;
	}
	else
	{
		var myemail = "<a href= 'mailto:gandivr"+ "@" + "mail.uc.edu' > gandivr" + "@" + "mail.uc.edu</a>";
		document.getElementById('email').innerHTML = myemail;
		shown = true;
	}
}