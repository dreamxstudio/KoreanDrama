
		ie = new ActiveXObject("InternetExplorer.Application");
		ie.visible = true; 
		ie.navigate("http://pan.baidu.com/s/1pJnzmMR");
		while(ie.busy){ WScript.sleep(2000);}
		var document = ie.document;
		var window = document.parentWindow;
		var form = document.forms[0];

		if(form)
		{
		  document.getElementsByName("accessCode")[0].value="1sis"; 
		  document.accessForm.target = "_self";
		  document.getElementById("submitBtn").click();
		}
		  
		WScript.sleep(4000);
		for(var i=0;i<document.all.length;++i)
		{ 
			if(document.all[i].className == "chk-ico")
			{
				document.all[i].click();
				break;
			}
		}  
		document.getElementById("downFileButton").click(); 
        