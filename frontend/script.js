const pullImage = document.querySelector("#PullImage");
let ListImage = document.querySelector("#ListImage");
let imageHistory= document.querySelector("#ImageHistory");
let removeImage= document.querySelector("#RemoveImage");
let purneImage= document.querySelector("#PurneImage");
let inspectImage= document.querySelector("#InspectImage");
let listC= document.querySelector("#ListC");
let createC= document.querySelector("#CreateC");

pullImage.addEventListener('click', ()=>
{
  let iName= prompt("imageName:");
  let vName= prompt("VersionName:");
  console.log("docker pull -i "+iName +":"+vName);
    }
);