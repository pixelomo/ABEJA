<template>
  <md-card-header>
      <footer class="site-footer" id="colophon" role="contentinfo">
      		<div class="footer-widgets clear">
      			<div class="widget-areas">
      				<div class="widget-area">
      					<section class="widget widget_text" id="text-2">
      						<div class="textwidget">
      							<h3><font><font>ABEJA.INC</font></font></h3>
      							<p><font><font>Tanakayama Building 10F</font></font><br>
      							<font><font>4-1-20, Toranomon, Minato-ku, Tokyo</font></font><br>
      							<font><font>105-0001, Japan</font></font><br>
      							<font><font>TEL: + 81-3-6452-8848 / FAX: + 81-3-6452-8849</font></font></p>
                    <md-button class="md-background md-raised has-ripple">
                      <a target="_blank" href="https://www.abeja.asia/contact/">Contact</a>
                    </md-button>
                    <md-button class="md-background md-raised has-ripple">
                      <a target="_blank" href="https://www.facebook.com/abejainc/">Facebook</a>
                    </md-button>
      						</div>
      					</section>
      				</div>
      			</div>
      		</div>
      		<small><font><font>Copyright © 2017 ABEJA, Inc. All rights reserved.</font></font></small>
      	</footer>
  </md-card-header>
</template>

<script>

export default {
  name: 'logo'
}

</script>

<style scoped>

.md-card .md-card-header:last-child {
    margin-bottom: 0; 
}

.md-card .md-card-header footer .footer-widgets .md-button{
  display: block;
  margin: 15px auto;
  width: 110px;
}

</style>
