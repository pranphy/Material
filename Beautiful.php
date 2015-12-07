<?php require_once("./include/Header.php"); ?>
<?php require_once('./include/TopBar.php'); ?>
<?php require_once('./include/Slider.php'); ?>


<div class="row">
	<div class="col-lg-12 col-md-12 col-xs-12" id="Visibility" style="display: none; ">
		I am here;
	</div>
</div>

<div class="row">
	<div class="col-lg-9 col-md-12 col-xs-12" id="Visibility" style="text-align: justify;">
		<?php for($i = 0; $i < 25; $i++){ echo 'I am here and we are there';} ?>
	</div>
	<div class="col-lg-3 col-md-12 col-xs-12">
		<?php echo('Thi sis in the sidebar'); ?>
	</div> 
</div>
 
<script>
	var MyScript = new TestScript();
	MyScript.StartAnimate();
</script>

<?php require_once('./include/TopBarClose.php'); ?>
<?php require_once("./include/Footer.php"); ?>
