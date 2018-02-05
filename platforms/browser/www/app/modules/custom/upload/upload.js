
function upload_install() {
	drupalgap_add_css(drupalgap_get_path('module','upload')+'/css/upload.css');
}

/**
 * Implements hook_menu(),
 */

function upload_menu() {
  var items = {};
  items['upload'] = {
    title: 'Upload',
    page_callback: 'drupalgap_get_form',
    page_arguments: ['upload_custom_form'],
  };
  
  items['upload_form'] = {
		    title: 'Upload',
		    page_callback: 'drupalgap_get_form',
		    page_arguments: ['upload_form',2,3], //2=feldname,3=nr	
  };		  
  return items;
}

function upload_container_id(name,nr){
	 return 'upload-'+drupalgap_get_page_id()+'-' + name+'-'+nr;
}

function upload_form_pageshow(){
	alert("dready");
}

function upload_custom_form(form, form_state) {
	  try {
/*
		    form.elements['target1'] = {
			  	      type: 'textfield',
			  	      default_value:'0',
			  	      attributes:{
			  	    	  id:'target1',
			  	      }
			  	    };
		    form.elements['target2'] = {
			  	      type: 'textfield',
			  	      default_value:'0',
			  	      attributes:{
			  	    	  id:'target2',
			  	      }
			  	    };
		    form.elements['target3'] = {
			  	      type: 'textfield',
			  	      default_value:'0',
			  	      attributes:{
			  	    	  id:'target3',
			  	      }
			  	    };
			*/
		  form.elements[9] ={
				  markup:drupalgap_render(upload_form(form,form_state,'field_1','target1'))
		  };
			/*
		  form.elements[10] ={
				  markup:drupalgap_render(upload_form(form,form_state,'field_2','target2'))
		  };
			
		  form.elements[11] ={
				  markup:drupalgap_render(upload_form(form,form_state,'field_3','target3'))
		  };
*/
		  return form;
	  }
	  catch (error) { console.log('my_module_custom_form - ' + error); }
	}
function upload_form_submit(form, form_state) {}


function upload_custom_form_submit(form, form_state) {
	  try {
	  }
	  catch (error) { console.log('my_module_custom_form - ' + error); }
	}

function upload_form(form,form_state,name,cnt){

for(i=0;i<cnt;i++){
	form.elements=_createFormElements(form.elements,name,i);	
}

/*
form.elements[id+'_image']={
			markup:'<img id="'+upload_container_id(id,nr)+'_image"></img>',
	};
	
	
	form.elements[id+'_camera']={
			type:'button',
			text:'Camera',
			attributes:{
				id:upload_container_id(id,nr)+'_camera',
				onclick:'getPicture(\''+upload_container_id(id,nr)+'\',\''+nr+'\');return false;',		
				'data-icon':'camera',
			}
	};
	

	
	form.elements[id+'_browse']={
			type:'button',
			text:'Browse',
			attributes:{
				id:upload_container_id(id,nr)+'_browse',
				onclick:'$(\'#'+upload_container_id(id,nr)+'_file\').click();return false;',		
				'data-icon':'grid',
			}
	};
	

	form.elements[id+'_upload']={
			type:'button',
			text:'Upload',
			attributes:{
				id:upload_container_id(id,nr)+'_upload',
				onclick:'uploadFile(\''+upload_container_id(id,nr)+'\');return false;',
				style:'display:none;',
				'data-icon':'action',
			}
	};
	
	form.elements[id+'_delete']={
			type:'button',
			text:'Delete',
			attributes:{
				id:upload_container_id(id,nr)+'_delete',
				onclick:'deleteFile(\''+upload_container_id(id,nr)+'\');return false;',
				style:'display:none;',
				'data-icon':'delete',
			}
	};
	
	form.elements[id+'_select']={
			type:'file',
			attributes:{
				id:upload_container_id(id,nr)+'_file',
				onchange:'selectedFile(\''+upload_container_id(id,nr)+'\',this);return false;',
			    'data-icon':'grid',
			    'style':'display:none;',
			},
		//	prefix:'<label for="file-upload" class="custom-file-upload"><i class="fa fa-cloud-upload"></i> Custom Upload</label>'
	};
	
	
	form.elements[upload_container_id(id,nr)]={
			type:'textfield',
			attributes:{
				id:upload_container_id(id,nr)+'',
			},
		//	prefix:'<label for="file-upload" class="custom-file-upload"><i class="fa fa-cloud-upload"></i> Custom Upload</label>'
	};

	*/
	
	return form;
}

function _createFormElements(elems,name,nr){	
	var img=name+'-'+nr;

	
	elems[upload_container_id(name,nr)+'_start']={
			markup:'<div  id="'+upload_container_id(name,nr)+'_start" "style":"background-color:green;">',
	};
	
	
	elems[upload_container_id(name,nr)+'_image']={
			markup:'<div style="display:none;"><canvas id="'+upload_container_id(name,nr)+'_canvas"></canvas></div><img id="'+upload_container_id(name,nr)+'_image">',
			prefix:'<video style="display:none;" width="320" height="240" id="'+upload_container_id(name,nr)+'_video" style="background-color:green;" autoplay playsinline></video>'
	};
	
	elems[upload_container_id(name,nr)+'_snapshot']={
			type:'button',
			text:'Snapshot',
			attributes:{
				id:upload_container_id(name,nr)+'_snapshot',
				onclick:'getSnapshot(\''+upload_container_id(name,nr)+'\',\''+nr+'\');return false;',		
				'data-icon':'camera',
				'style':'display:none',
			}
	};
	
	elems[upload_container_id(name,nr)+'_camera']={
		type:'button',
		text:'Kamera',
		attributes:{
			id:upload_container_id(name,nr)+'_camera',
			onclick:'getPicture(\''+upload_container_id(name,nr)+'\',\''+nr+'\');return false;',		
			'data-icon':'camera',
		}
};
	
	
	elems[upload_container_id(name,nr)+'_browse']={
			type:'button',
			text:'Dateien',
			attributes:{
				id:upload_container_id(name,nr)+'_browse',
				onclick:'browsePictures(\''+upload_container_id(name,nr)+'\',\''+nr+'\');return false;',	
				'data-icon':'grid',
			}
	};
	
	elems[upload_container_id(name,nr)+'_upload']={
			type:'button',
			text:'Upload',
			attributes:{
				id:upload_container_id(name,nr)+'_upload',
				onclick:'uploadFile(\''+upload_container_id(name,nr)+'\',\''+name+'['+nr+']\');return false;',
				style:'display:none;',
				'data-icon':'action',
			}
	};
	
	elems[upload_container_id(name,nr)+'_delete']={
			type:'button',
			text:'Delete',
			attributes:{
				id:upload_container_id(name,nr)+'_delete',
				onclick:'deleteFile(\''+upload_container_id(name,nr)+'\',\''+name+'['+nr+']\');return false;',
				style:'display:none;',
				'data-icon':'delete',
			}
	};
	
	elems[upload_container_id(name,nr)+'_file']={
			type:'file',
			attributes:{
				id:upload_container_id(name,nr)+'_file',
				onchange:'selectedFile(\''+upload_container_id(name,nr)+'\',this);return false;',
			    'data-icon':'grid',
		//	    'style':'display:none;',
			},
			prefix:'<div style="display: none;">',
			suffix:'</div>'
		//	prefix:'<label for="file-upload" class="custom-file-upload"><i class="fa fa-cloud-upload"></i> Custom Upload</label>'
	};
	
	
	elems[upload_container_id(name,nr)]={
			type:'textfield',
			attributes:{
				id:name+'['+nr+']',
			//	 'style':'display:none;',
			},
			prefix:'<div style="display: none;">',
			suffix:'</div>'
		//	prefix:'<label for="file-upload" class="custom-file-upload"><i class="fa fa-cloud-upload"></i> Custom Upload</label>'
	};
	
elems[upload_container_id(name,nr)+'_end']={
			markup:'</div>',
		};
	
	console.log(elems);
		return elems;
	/*
	{name+'-'+nr+'_camera'}:{
			type:'button',
			text:'Camera',
			attributes:{
				id:upload_container_id(name,nr)+'_camera',
				onclick:'getPicture(\''+upload_container_id(name,nr)+'\',\''+nr+'\');return false;',		
				'data-icon':'camera',
			}
	}
	};
	*/

	/*
	elements[name+'-'+nr+'_browse']={
			type:'button',
			text:'Browse',
			attributes:{
				id:upload_container_id(name,nr)+'_browse',
				onclick:'$(\'#'+upload_container_id(name,nr)+'_file\').click();return false;',		
				'data-icon':'grid',
			}
	};
	

	elements[name+'-'+nr+'_upload']={
			type:'button',
			text:'Upload',
			attributes:{
				id:upload_container_id(name,nr)+'_upload',
				onclick:'uploadFile(\''+upload_container_id(name,nr)+'\');return false;',
				style:'display:none;',
				'data-icon':'action',
			}
	};
	
	elements[name+'-'+nr+'_delete']={
			type:'button',
			text:'Delete',
			attributes:{
				id:upload_container_id(name,nr)+'_delete',
				onclick:'deleteFile(\''+upload_container_id(name,nr)+'\');return false;',
				style:'display:none;',
				'data-icon':'delete',
			}
	};
	
	elements[name+'-'+nr+'_select']={
			type:'file',
			attributes:{
				id:upload_container_id(name,nr)+'_file',
				onchange:'selectedFile(\''+upload_container_id(name,nr)+'\',this);return false;',
			    'data-icon':'grid',
			    'style':'display:none;',
			},
		//	prefix:'<label for="file-upload" class="custom-file-upload"><i class="fa fa-cloud-upload"></i> Custom Upload</label>'
	};
	
	
	elements[upload_container_id(name,nr)]={
			type:'textfield',
			attributes:{
				id:upload_container_id(name,nr)+'',
			},
		//	prefix:'<label for="file-upload" class="custom-file-upload"><i class="fa fa-cloud-upload"></i> Custom Upload</label>'
	};
	*/
return elem;
}

function selectedFile(id,input){
	if(input.files && input.files[0]) {
		var reader = new FileReader();        
        reader.onload = function (e) {
            $('#'+id+'_image').attr('src', e.target.result);
            $('#'+id+'_image_text').html('');
            $('#'+id+'_camera').hide();
            $('#'+id+'_browse').hide();
            $('#'+id+'_upload').show();
            $('#'+id+'_delete').show();
            
            //$('#'+$(input).attr('id')).hide();
        };        
        reader.readAsDataURL(input.files[0]);
    }
}

function uploadFile(id,name){
	var dataURI = $('#'+id+'_image').prop('src');
	dataURI=dataURI.substring(dataURI.indexOf(',')+1,dataURI.length);
	
	var filename = $('#'+id+'_file').val().replace(/.*(\/|\\)/, '');
if(empty(filename))filename='webcam-'+time()+'.jpg';
var ext=filename.split('.').pop();
var out={
				 "filesize":dataURI.length,
				 "filename": filename,
				 "filemime":"image/"+ext,
				  "filepath":'public://attachments/'+filename,
				  "status": 0,
			//	  "uid":Drupal.user.uid,
				  "file":dataURI 
				  };

Drupal.services.call({
    method: 'POST',
    path: 'file.json',
   // contentType:'application/x-www-form-urlencoded',
    data:JSON.stringify(out),
    success: function(result) {
    	console.log(result);
      var fid = result['fid'];
      variable_set(name,fid);
      variable_set(name+'-uri',result['uri']);
         
      $("input[id=\'"+name+"\']").val(fid);     
      $('#'+id+'_upload').hide();
      $('#'+id+'_browse').hide();
      $('#'+id+'_camera').hide();
      $('#'+id+'_snapshot').hide();
      $('#'+id+'_delete').show();
//      var msg = 'File uploaded ' + fid + ' !';
 //     drupalgap_alert(msg);
      pubsub.trigger('upload-clicked', { 'page':'upload','action':'Foto  hochgeladen','id':id,'fid':fid } )
    		  
    },error: function(result) {
        drupalgap_alert("Error uploading");
      }
});


}

function deleteFile(id,name){
var fid=$("input[id=\'"+name+"\']").val();
	  $('#'+id+'_image').removeAttr('src');	
	  $('#'+id+'_browse').show();
	  $('#'+id+'_camera').show();
	//  $('#'+id+'_upload').hide();
	  $('#'+id+'_delete').hide();
	  $('#'+id+'_snapshot').hide();
	  $('#'+id+'_upload').hide();
	  $('#'+id+'_image_text').html('Datei hochladen');
	  $('#'+id).val('');
	  out=JSON.stringify({'fid':fid});
	  if(fid>0)Drupal.services.call({
		    method: 'DELETE',
		    path: 'file/'+fid+'.json',
		    data:out,
		    success: function(result) {
		    	console.log(result);
		      $("input[id=\'"+name+"\']").val('');
		      $('#'+id+'_upload').hide();
		      $('#'+id+'_camera').show();
		      
//		      var msg = 'File uploaded ' + fid + ' !';
		 //     drupalgap_alert(msg);
		    },error: function(result) {
		        drupalgap_alert("Error uploading");
		      }
		});
}
var contraints = window.constraints = {
		   audio: false,
		   video: true,
		   width: 320,
		   height: 240
		 };


var	video;
var ctx;


function browsePictures(id,nr){
	if(drupalgap.settings.mode=='phonegap'){
		cordova_photos_click(id,nr);
		return;
	}
	$('#'+id+'_file').click();
}

function getSnapshot(id,nr){
 	ctx = document.querySelector('canvas#'+id+'_canvas');
    console.log(ctx);
	   ctx = ctx.getContext('2d'); 
		  ctx.drawImage(video,0,0,constraints.width,constraints.height);
		  var dataURI = document.querySelector('canvas#'+id+'_canvas').toDataURL('image/jpeg'); 
		  console.log(dataURI);
		   $(image).attr('src',dataURI).trigger('create');
		   $('#'+id+'_upload').show();
		   $('#'+id+'_delete').show();
}


function getPicture(id, nr){
	if(drupalgap.settings.mode=='phonegap'){
		cordova_camera_click(id,nr);
		return;		
	}
	
	video=document.querySelector('video#'+id+'_video');
    $('#'+id+'_video').show();
	ctx = document.querySelector('canvas#'+id+'_canvas');
    image = document.querySelector('img#'+id+'_image');

	 video.addEventListener('loadedmetadata',function()
	      {
		  ratio=video.videoWidth/video.videoHeight;
		  w=video.videoWidth
		  h=parseInt(w/ratio,10);
	      ctx.height=constraints.height;
	      ctx.width=constraints.width;	
	      image.height=constraints.height;
	      image.width=constraints.width;	
//	      ctx = ctx.getContext('2d'); 
//		  ctx.drawImage(video,0,0,constraints.width,constraints.height);				
	
	      	        	      	        
	      },false);

  
  //('#edit_node_edit_field_image_und_0_value_imagefield_source');
  
	 function handleSuccess(stream) {
	   var videoTracks = stream.getVideoTracks();
	   console.log('Got stream with constraints:', constraints);
	   console.log('Using video device: ' + videoTracks[0].label);
	   stream.oninactive = function() {
	     console.log('Stream inactive');
	   };

	   console.log(stream,'STREAM');
	   window.stream = stream; // make variable available to browser console
	   video.srcObject = stream;
	   video.pause();		
		  $('#'+id+'_browse').hide();
		  $('#'+id+'_camera').hide();
		  $('#'+id+'_snapshot').show();
	   return;
	 	 var dataURI = ctx.toDataURL('image/jpeg'); 
		  $('#'+id+'_image').attr('src',dataURI).trigger('create');
			 
		
	   	  ctx.height=constraints.height;
	      ctx.width=constraints.width;	
	      ctx = ctx.getContext('2d'); 
		  ctx.drawImage(video,0,0,constraints.width,constraints.height);
		   video.stop();
		//  var dataURI = ctx.toDataURL('image/jpeg'); 
	  	
		  

	   
	  // ctx = ctx.getContext('2d'); 
	   //ctx.drawImage(video,0,0,constraints.width,constraints.height);
		 
	   var dataURI = ctx.toDataURL('image/jpeg'); 
			console.log(dataURI);
		   $('#upload-hello-field_image-0_image').attr('src',dataURI).trigger('create');
		   $('#upload-hello-field_image-0_image').show();
	
		   
//	   stream.stop();
	//	context=document.querySelector('img#upload-hello-field_image-0_image');
	  //    context.fillRect(0,0,w,h);
		//context = context.getContext('2d'); 
	  //context.drawImage(video,0,0,constraints.width,constraints.height);
	  
	  //ctx = ctx.getContext('2d'); 
	  //ctx.drawImage(video,0,0,constraints.width,constraints.height);
	
	  var dataURI = ctx.toDataURL('image/jpeg'); 
		console.log(dataURI);
	   $('#upload-hello-field_image-0_image').attr('src',dataURI).trigger('create');
	   $('#upload-hello-field_image-0_image').show();
	   //	  canvas.fillRect(0,0,w,h);
	//	  context.drawImage(video,0,0,w,h);
		
//		canvas=document.querySelector('canvas#mycanv');
//		  var dataURI = canvas.toDataURL('image/jpeg'); 
	//		console.log(dataURI);
//		   console.log(dataURI,'STREAM');	
//			snap();
	 }

	 function handleError(error) {
	   if (error.name === 'ConstraintNotSatisfiedError') {
	     errorMsg('The resolution ' + constraints.video.width.exact + 'x' +
	         constraints.video.width.exact + ' px is not supported by your device.');
	   } else if (error.name === 'PermissionDeniedError') {
	     errorMsg('Permissions have not been granted to use your camera and ' +
	       'microphone, you need to allow the page access to your devices in ' +
	       'order for the demo to work.');
	   }
	   errorMsg('getUserMedia error: ' + error.name, error);
	 }		 
		function errorMsg(err,error){
		//	dpm(err+' '+error);
			  $('#'+id+'_video').hide();
				
		drupalgap_alert(err+' '+error);
		}
		
	 navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);	
}

function cordova_camera_click(id,nr) {
	  try {
	    navigator.camera.getPicture(

	      // Success
	      function(imageURI) {
	    //	  $('#'+id+'_image').attr('src','data:image/jpeg;base64,' + imageURI).trigger('create');
	    	 $('#'+id+'_file').val('camera_'+time()+'.jpg');
	    	  $('#'+id+'_upload').show();
//	    	  drupalgap_toast(t('Picture saved!'));
	      },

	      // Error
	      function(message) { console.log(message); },

	      // Settings
	      {
	        quality: drupalgap.settings.camera.quality,
	        destinationType: Camera.DestinationType.DATA_URL
	      }

	    );
	  }
	  catch (error) {
	    console.log('cordova_camera_click - ' + error);
	    };
	};

function cordova_photos_click(id,nr) {
	  try {
	    navigator.camera.getPicture(

	      // Success
	      function(imageURI) { 
	     	  $('#'+id+'_image').attr('src','data:image/jpeg;base64,' + imageURI).trigger('create');	     			    	  
	     	 //$('#'+id+'_file').val('camera_'+time()+'.jpg');
	     	  $('#'+id+'_upload').show();
	      },

	      // Error
	      function(message) { console.log(message); },

	      // Settings
	      {
	        quality: drupalgap.settings.camera.quality,
	        destinationType: Camera.DestinationType.DATA_URL,
	        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
	      }

	    );
	  }
	  catch (error) {
	    console.log('cordova_photos_click - ' + error);
	  };
	};
