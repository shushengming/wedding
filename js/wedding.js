var wedding_obj={
	wedding_init:function(){
		var musicPlayer;
		if(_wedding.MusicPath){
			musicPlayer=document.createElement('audio');
			musicPlayer.loop=true;
			musicPlayer.controls=false;
			musicPlayer.id='audio';
			musicPlayer.src=_wedding.MusicPath;
			musicPlayer.autoplay=true;
			musicPlayer.isLoadedmetadata=false;
			musicPlayer.touchstart=true;
			musicPlayer.audio=true;
			
			$('body').append(musicPlayer);
			$('#music_id').addClass('on');
			
			if(/i(Phone|P(o|a)d)/.test(navigator.userAgent)){
				musicPlayer.autoplay=true;
				musicPlayer.load();
                musicPlayer.play();
				$('#music_id').removeClass('on');
			}			
		}else{
			$('#music_id').hide();
			$('#music_id').remove();
		}
		
		$('#music_id').click(function(){
			if(musicPlayer) {
				$(this).toggleClass('on');
				if($(this).hasClass('on')){
					musicPlayer.play();
				}else{
					musicPlayer.pause();
				}
			}
		});
	},
	
	index_init:function(){
		
		if(_wedding.VideoPath){
			videoPlayer='<video id="video"><source src="'+_wedding.VideoPath+'" type="video/mp4" /></video>';
			$('#invitation .video').append(videoPlayer);
		}else{
			$('#invitation .video').remove();
		}
	},

	photo_init:function(){
		(function(window, $, PhotoSwipe){
			$('#invitation .photo a[rel]').photoSwipe({});
		}(window, window.jQuery, window.Code.PhotoSwipe));
	}
}