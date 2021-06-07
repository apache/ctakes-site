Title: People

<div class="container main">
   <h2> List of Volunteers </h2>
   <p> Apache cTAKES is a community developed project. The list below is a partial list of contributors to the project,
      for a complete list you'd have to look at all contributors to our issue tracker, mailing list and version
      control.
   </p>
   <h3> Project Management Committee Members (sorted alphabetically)</h3>
   <div id="people-names"></div>
   <!--<ul id="people-names">-->
      <!--<li> Andy McMurry (andymc at apache.org)</li>-->
      <!--<li> Britt Fitch (brittfitch at apache.org)</li>-->
      <!--<li> Chris Mattmann (mattmann at apache.org)</li>-->
      <!--<li> Ding Cheng (leonleeldc at apache.org)</li>-->
      <!--<li> Dmitriy Dligach (dligach at apache.org)</li>-->
      <!--<li> Grant Ingersoll (gsingers at apache.org)</li>-->
      <!--<li> Guergana Savova (gsavova at apache.org)</li>-->
      <!--<li> Hongfang Liu (liuhongfang at apache.org)</li>-->
      <!--<li> Ira Goldstein</li>-->
      <!--<li> James Masanz (james-masanz at apache.org)</li>-->
      <!--<li> Jeff Ferraro</li>-->
      <!--<li> Jiaping Zheng</li>-->
      <!--<li> Jinho Choi</li>-->
      <!--<li> Jorn Kottmann (joern at apache.org)</li>-->
      <!--<li> Karthik Sarma (ksarma at apache.org)</li>-->
      <!--<li> Kim Ebert (kebert at apache.org)</li>-->
      <!--<li> Lee Becker</li>-->
      <!--<li> Matt Coarr (mattcoarr at apache.org)</li>-->
      <!--<li> Michelle Chen (michelle at apache.org)</li>-->
      <!--<li> Pei Chen (chenpei at apache.org)</li>-->
      <!--<li> Scott Halgrim</li>-->
      <!--<li> Sean Finan (seanfinan at apache.org)</li>-->
      <!--<li> Sean Patrick (spmurphy50 at apache.org)</li>-->
      <!--<li> Siddhartha Jonnalagadda (siddhartha at apache.org)</li>-->
      <!--<li> Stephen Wu (swu at apache.org)</li>-->
      <!--<li> Steven Bethard (stevenbethard at apache.org)</li>-->
      <!--<li> Sunghwan Sohn (ssohn at apache.org)</li>-->
      <!--<li> Tim Miller (tmill at apache.org)</li>-->
      <!--<li> Troy Bleeker (bleeker at apache.org)</li>-->
      <!--<li> Vinod Kaggal (vkaggal at apache.org)</li>-->
   <!--</ul>-->
</div>

<!-- show enlarged image -->
<script type="text/javascript">
$(document).ready( function() {
   var exturl = "https://projects-new.apache.org/json/foundation/committers.json";
   $.getJSON( exturl, function( data ) {
         var persons = $("<ul>");
         $.each( data.ctakes, function( index, person ) {
            persons.append( "<li>" + person + "</li>" );
         });
         persons.append( "</ul>" );
         $( "#people-names" ).append( persons );
         $( "#people-names" ).append( "<p>throwback " + data.ctakes[0] + "</p>" );
      }).error( function() {
         $( "#people-names" ).append( "<p>error getting json</p>" );
      });
});

$(document).ready( function() {
      var data = { "tools" : ["wrench","pliers"], "gubers" : ["bob","joe","sue"] };
         var persons = $("<ul>");
         $.each( data.tools, function( index, person ) {
            persons.append( "<li>" + person + "</li>" );
         });
         persons.append( "</ul>" );
         $( "#people-names" ).append( persons );
});

$(document).ready( function() {
      var data = ["bob","joe","sue"];
         var persons = $("<ul>");
         $.each( data, function( index, person ) {
            persons.append( "<li>" + person + "</li>" );
         });
         persons.append( "</ul>" );
         $( "#people-names" ).append( persons );
});

</script>
