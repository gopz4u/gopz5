document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
                var options = new ContactFindOptions();
                options.filter="";
                options.multiple=true; 
                var fields = ["*"];
                navigator.contacts.find(fields, onSuccess, onError, options);
            }

function onSuccess(contacts) {
                for (var i = 0; i < contacts.length; i++) {
                    $("#contactList").append("<li>             <h1>"+contacts[i].phoneNumber[0].value+"</h1></li>");
                    $("#contactList").listview("refresh");
                }
            }

function onError()
{
alert("Some Error Occured");