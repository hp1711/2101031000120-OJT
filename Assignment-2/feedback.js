var $FNameLNameRegEx = /^([a-zA-Z]{2,20})$/;
			var $FullNameRegEx = /^([a-zA-Z ]{2,40})$/;
			var $BankAccountNameRegEx = /^([a-zA-Z ]{2,60})$/;
			var $PasswordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,12}$/;

			var $EmailIdRegEx = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,8}\b$/i;
			var $ConNoRegEx = /^([0-9]{10})$/;
			
			
			$(document).ready(function(){

				$("#TxtName").blur(function(){
					$("#TxtNameValidation").empty();
					if($(this).val()=="" || $(this).val()==null){
						$("#TxtNameValidation").html("*Name required.!!");
					}
					else{
						if(!$(this).val().match($FullNameRegEx)){
							$("#TxtNameValidation").html("*Invalid name.!!");
						}
					}
				});

				$("#TxtName").keypress(function(e){
					$("#TxtNameValidation").empty();
					var Flag=((e.which>=65 && e.which<=90) || (e.which>=97 && e.which<=121));
					if(Flag==false){
						$("#TxtNameValidation").html("Invalid Input.!!");
					}
					return Flag;
				});

				$("#TxtContactNo").blur(function(){
					$("#TxtContactNoValidation").empty();
					if($(this).val()=="" || $(this).val()==null){
						$("#TxtContactNoValidation").html("*Contact no. required.!!");
					}
					else{
						if(!$(this).val().match($ConNoRegEx)){
							$("#TxtContactNoValidation").html("*Invalid contact no.!!");
						}
					}
				});

				$("#TxtContactNo").keypress(function(e){
					$("#TxtContactNoValidation").empty();
					var Flag=(e.which>=48 && e.which<=57);
					if(Flag==false){
						$("#TxtContactNoValidation").html("*Invalid Input..!!");
					}
					return Flag;
				});


				$("#TxtEmailId").blur(function(){
					$("#TxtEmailIdValidation").empty();
					if($(this).val()=="" || $(this).val()==null){
						$("#TxtEmailIdValidation").html("*Email id required.!!");
					}
					else{
						if(!$(this).val().match($EmailIdRegEx)){
							$("#TxtEmailIdValidation").html("*Invalid email id.!!");
						}
					}
				});

				$("#TxtContactMsg").blur(function(){
					$("#TxtContactMsgValidation").empty();
					if($(this).val()=="" || $(this).val()==null){
						$("#TxtContactMsgValidation").html("*Few words feedback required.!!");
					}
					else{
						if($("#TxtContactMsg").val().length>300){
							$("#TxtContactMsgValidation").html("*Few words feedback required.!!");
						}
					}
				});

				var TxtNameFlag=false,TxtContactNoFlag=false,TxtEmailIdFlag=false,TxtContactMsgFlag=false;

				$("#BtnSubmit").click(function(){
					$("#TxtNameValidation").empty();
					if($("#TxtName").val()=="" || $("#TxtName").val()==null){
						$("#TxtNameValidation").html("(*) Name required..!!");
						TxtNameFlag=false;
					}
					else{
						if(!$("#TxtName").val().match($FullNameRegEx)){
							$("#TxtNameValidation").html("(*) Invalid name..!!");
							TxtNameFlag=false;
						}
						else{
							TxtNameFlag=true;
						}
					}
					$("#TxtContactNoValidation").empty();
					if($("#TxtContactNo").val()=="" || $("#TxtContactNo").val()==null){
						$("#TxtContactNoValidation").html("(*) Contact no. required..!!");
						TxtContactNoFlag=false;
					}
					else{
						if(!$("#TxtContactNo").val().match($ConNoRegEx)){
							$("#TxtContactNoValidation").html("(*) Invalid contact no..!!");
							TxtContactNoFlag=false;
						}
						else{
							TxtContactNoFlag=true;
						}
					}
					$("#TxtEmailIdValidation").empty();
					if($("#TxtEmailId").val()=="" || $("#TxtEmailId").val()==null){
						$("#TxtEmailIdValidation").html("(*) Email id required..!!");
						TxtEmailIdFlag=false;
					}
					else{
						if(!$("#TxtEmailId").val().match($EmailIdRegEx)){
							$("#TxtEmailIdValidation").html("(*) Invalid email id..!!");
							TxtEmailIdFlag=false;
						}
						else{
							TxtEmailIdFlag=true;
						}
					}

          $("#TxtContactMsgValidation").empty();
          if($("#TxtContactMsg").val()=="" || $("#TxtContactMsg").val()==null){
            $("#TxtContactMsgValidation").html("(*) Few words feedback required..!!");
            TxtContactMsgFlag=false;
          }
          else{
            if($("#TxtContactMsg").val().length>300){
              $("#TxtContactMsgValidation").html("(*) Few words feedback required..!!");
              TxtContactMsgFlag=false;
            }
            else{
              TxtContactMsgFlag=true;
            }
          }

          if(TxtNameFlag==true && TxtContactNoFlag==true && TxtEmailIdFlag==true && TxtContactMsgFlag==true){
            alert("Feedback submitted successfully..!!");
            $("#TxtName").val("");
            $("#TxtContactNo").val("");
            $("#TxtEmailId").val("");
            $("#TxtContactMsg").val("");
            $("#TxtNameValidation").empty();
            $("#TxtContactNoValidation").empty();
            $("#TxtEmailIdValidation").empty();
            $("#TxtContactMsgValidation").empty();
          }
          else{
            alert("Please fill all the required fields..!!");
          }
			
				});

			});
			