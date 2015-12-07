<?php require_once("./include/Header.php"); ?>
<?php require_once('./include/TopBar.php'); ?>
<?php //require_once('./include/Slider.php'); ?>
<div class="row">
	<div class="col-lg-12 col-md-12 col-xs-12" id="Visibility" style="display: none;">
		I am here;
	</div>
</div>
<div class="row">
	<div class="col-lg-9 col-md-9 col-xs-12 MainArea">
		<h1 class="Nepali TitleText">नेपालको सार्वभौमसत्ता नेपालीमा निहित भएको अौपचारिक घोषणा</h1>
		<br />
		<div class="fb-share-button pull-right" data-href="http://pgautam.com.np/" data-layout="button_count"></div>
		<div>
			<img align="center" src="img/Untitled.png" width="100%"/>
		</div>
		<p class="Nepali ContentText" style="text-align: justify;">
		<?php for($i=0;$i<15;$i++){ ?>
			सदिअौँ देखि नै एउटाा स्वतन्त्र राष्ट्र भए पनि अाजसम्म नेपालीले कहिले यसमा केही मनगडन्ते कुरा पनि थप्नु पर्छ पनि सार्वभौभभएको अनुभव गरेका थिएनन् तर अाजका मितिबाट हामी सबै नेपाली अब सार्वभौमसत्ता सम्पन्न भएका छौँ यो सार्वभौमसत्त हामी अब पकाएर खान सक्छौँ अिन हाीले दुःख गर्नु पर्दैन
		<?php }?>
		</p>
	</div> <!-- MainArea div close-->
	<div class="col-lg-3 col-md-3 col-xs-12 Sidebar">
		This is somethign else;
		<?php require_once("include/Sidebar.php"); ?>

	</div> <!---Sidebar div close-->
</div> <!--row close-->
<script>
  var Script = new TestScript();
  Script.AddParagraph("This is a new and here is a new paragraph");
</script>
<?php require_once('./include/TopBarClose.php'); ?>
<?php require_once("./include/Footer.php"); ?>
