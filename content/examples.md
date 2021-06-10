Title: Examples

<div class="container">
   <div class="row">
      <h1>Examples</h1>
      <p>Select a thumbnail above to view a larger image. Click larger image to open a page with additional information.</p>
   </div>
   <div class="row boing-tile-bar">
      <div class="col-xs-3 col-md-2">
         <div class="boing-tile">
            <img id="cvd-button" class="boing-button" src="images/CvdThumb.jpg">
            <div class="boing-title">
               <h4>UIMA&trade; CVD</h4>
            </div>
         </div>
      </div>
      <div class="col-xs-3 col-md-2">
         <div class="boing-tile">
            <img id="cpe-button" class="boing-button" src="images/CPEthumb.jpg">
            <div class="boing-title">
               <h4>UIMA&trade; CPE</h4>
            </div>
         </div>
      </div>
      <div class="col-xs-3 col-md-2">
         <div class="boing-tile">
            <img id="dictgui-button" class="boing-button" src="images/DictionaryCreatorThumb.png">
            <div class="boing-title">
               <h4>Dictionary Creator</h4>
            </div>
         </div>
      </div>
      <div class="col-xs-3 col-md-2">
         <div class="boing-tile">
            <img id="piperfab-button" class="boing-button" src="images/PiperFabberThumb.png">
            <div class="boing-title">
               <h4>Piper Fabricator</h4>
            </div>
         </div>
      </div>
      <div class="col-xs-3 col-md-2">
         <div class="boing-tile">
            <img id="webui-button" class="boing-button" src="images/ctakesguiThumb.jpg">
            <div class="boing-title">
               <h4>cTAKES&trade; GUI</h4>
            </div>
         </div>
      </div>
      <div class="col-xs-3 col-md-2">
         <div class="boing-tile">
            <img id="timelanes-button" class="boing-button" src="images/TimeLanesThumb.jpg">
            <div class="boing-title">
               <h4>TimeLanes</h4>
            </div>
         </div>
      </div>
      <!--  INFO and TITLE PANEL  -->
      <div class="col-md-4 col-xs-12">
         <div id="cvd-info" class="boing-info">
            <h4>Apache <abbr title="Unstructured Information Management applications">UIMA&trade;</abbr>
               Cas Visual Debugger (CVD)<br>
               <small>Process raw text and view <abbr title="Natural Language Processing">NLP</abbr> metadata</small>
            </h4>
         </div>
         <div id="cpe-info" class="boing-info">
            <h4>Apache <abbr title="Unstructured Information Management applications">UIMA&trade;</abbr>
               Collection Processing Engine configurator (CPE)<br>
               <small>Process a multiple document batch</small>
            </h4>
         </div>
         <div id="dictgui-info" class="boing-info">
            <h4>cTAKES Dictionary Creator GUI</abbr><br>
               <small>Create a cTAKES dictionary from the NLM UMLS</small>
            </h4>
         </div>
         <div id="piperfab-info" class="boing-info">
            <h4>Simple Piper Fabricator GUI</abbr><br>
               <small>Create a custom pipeline</small>
            </h4>
         </div>
         <div id="webui-info" class="boing-info">
            <h4>cTAKES <abbr title="Graphical User Interface">GUI</abbr><br>
               <small>Process raw text in a web browser</small>
            </h4>
         </div>
         <div id="timelanes-info" class="boing-info">
            <h4>TimeLanes<br>
               <small>View extracted UMLS and Temporal information</small>
            </h4>
         </div>
      </div>
   </div>
   <div class="row boing-main-image">
      <div class="col-xs-12">
         <div id="boing-cvd" class="boing">
            <a href="//uima.apache.org/downloads/releaseDocs/2.2.2-incubating/docs/html/tools/tools.html#cvd.mainDisplayArea">
               <img class="boing-image" src="images/CvdMain1.jpg">
            </a>
         </div>
         <div id="boing-cpe" class="boing">
            <a href="//uima.apache.org/downloads/releaseDocs/2.3.0-incubating/docs/html/tutorials_and_users_guides/tutorials_and_users_guides.html#ugr.tug.cpe.configurator_and_viewer">
               <img class="boing-image" src="images/CPEimage006.jpg">
            </a>
         </div>
         <div id="boing-dictgui" class="boing">
            <a href="//cwiki.apache.org/confluence/display/CTAKES/Dictionary+Creator+GUI">
               <img class="boing-image" src="images/DictionaryCreator2.png">
            </a>
         </div>
         <div id="boing-piperfab" class="boing">
            <a href="//cwiki.apache.org/confluence/display/CTAKES/Simple+Pipeline+Fabricator+GUI">
               <img class="boing-image" src="images/PiperFabber.png">
            </a>
         </div>
         <div id="boing-webui" class="boing">
            <a href="//community.i2b2.org/wiki/display/NLPCTAKES/Home">
               <img class="boing-image" src="images/ctakesguiJoin.jpg">
            </a>
         </div>
         <div id="boing-timelanes" class="boing">
            <a href="#">
               <img class="boing-image" src="images/TimeLanesBig.jpg">
            </a>
         </div>
      </div>
   </div>
</div>
<!-- show enlarged image -->
<script type="text/javascript">
var boingCvd = $( "#boing-cvd" );
var boingCpe = $( "#boing-cpe" );
var boingDictgui = $( "#boing-dictgui" );
var boingPiperfab = $( "#boing-piperfab" );
var boingWebui = $( "#boing-webui" );
var boingTimeLanes = $( "#boing-timelanes" );
var infoCvd = $( "#cvd-info" );
var infoCpe = $( "#cpe-info" );
var infoDictgui = $( "#dictgui-info" );
var infoPiperfab = $( "#piperfab-info" );
var infoWebui = $( "#webui-info" );
var infoTimeLanes = $( "#timelanes-info" );
var boingSpeed = 500;
infoCvd.show();
boingCvd.show();
$('#cvd-button').mouseover(function() {
   infoCpe.hide();
   infoDictgui.hide();
   infoPiperfab.hide();
   infoWebui.hide();
   infoTimeLanes.hide();
   infoCvd.show();
});
$('#cpe-button').mouseover(function() {
   infoCvd.hide();
   infoDictgui.hide();
   infoPiperfab.hide();
   infoWebui.hide();
   infoTimeLanes.hide();
   infoCpe.show();
});
$('#dictgui-button').mouseover(function() {
   infoCvd.hide();
   infoCpe.hide();
   infoPiperfab.hide();
   infoWebui.hide();
   infoTimeLanes.hide();
   infoDictgui.show();
});
$('#piperfab-button').mouseover(function() {
   infoCvd.hide();
   infoCpe.hide();
   infoDictgui.hide();
   infoWebui.hide();
   infoTimeLanes.hide();
   infoPiperfab.show();
});
$('#webui-button').mouseover(function() {
   infoCvd.hide();
   infoCpe.hide();
   infoDictgui.hide();
   infoPiperfab.hide();
   infoTimeLanes.hide();
   infoWebui.show();
});
$('#timelanes-button').mouseover(function() {
   infoCvd.hide();
   infoCpe.hide();
   infoDictgui.hide();
   infoPiperfab.hide();
   infoWebui.hide();
   infoTimeLanes.show();
});
$( "#cvd-button" ).on( "click", function( event ) {
   boingCpe.hide( boingSpeed );
   boingDictgui.hide( boingSpeed );
   boingPiperfab.hide( boingSpeed );
   boingWebui.hide( boingSpeed );
   boingTimeLanes.hide( boingSpeed );
   boingCvd.show( boingSpeed );
});
$( "#cpe-button" ).on( "click", function( event ) {
   boingCvd.hide( boingSpeed );
   boingDictgui.hide( boingSpeed );
   boingPiperfab.hide( boingSpeed );
   boingWebui.hide( boingSpeed );
   boingTimeLanes.hide( boingSpeed );
   boingCpe.show( boingSpeed );
});
$( "#dictgui-button" ).on( "click", function( event ) {
   boingCvd.hide( boingSpeed );
   boingCpe.hide( boingSpeed );
   boingWebui.hide( boingSpeed );
   boingPiperfab.hide( boingSpeed );
   boingTimeLanes.hide( boingSpeed );
   boingDictgui.show( boingSpeed );
});
$( "#piperfab-button" ).on( "click", function( event ) {
   boingCvd.hide( boingSpeed );
   boingCpe.hide( boingSpeed );
   boingDictgui.hide( boingSpeed );
   boingWebui.hide( boingSpeed );
   boingTimeLanes.hide( boingSpeed );
   boingPiperfab.show( boingSpeed );
});
$( "#webui-button" ).on( "click", function( event ) {
   boingCvd.hide( boingSpeed );
   boingCpe.hide( boingSpeed );
   boingDictgui.hide( boingSpeed );
   boingPiperfab.hide( boingSpeed );
   boingTimeLanes.hide( boingSpeed );
   boingWebui.show( boingSpeed );
});
$( "#timelanes-button" ).on( "click", function( event ) {
   boingCvd.hide( boingSpeed );
   boingCpe.hide( boingSpeed );
   boingDictgui.hide( boingSpeed );
   boingPiperfab.hide( boingSpeed );
   boingWebui.hide( boingSpeed );
   boingTimeLanes.show( boingSpeed );
});
</script>
