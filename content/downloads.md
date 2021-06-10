Title: Download

<div class="container">
   <div class="row">
      <h1>Download cTAKES&trade;</h1>
      <p>
         <strong>Current Version:</strong> 4.0.0.1 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <strong>Released:</strong> January 20, 2021 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         ( <a href="//s.apache.org/ctakes-4.0.0-release-notes">Release Notes</a> /
         <a href="//svn.apache.org/repos/asf/ctakes/tags/ctakes-4.0.0.1">SVN Tag</a> )
      </p>
   </div>
   <div class="col-xs-12 col-sm-12">
      <div class="row" id="preq-container">
         <h4>System Requirements:</h4>
         <ul>
            <li><strong>All Users:</strong>
               <ul>
                  <li>64 bit hardware</li>
                  <li>Any major 64 bit operating system</li>
                  <li>1 GB Disk Space</li>
                  <li><a href="//www.oracle.com/java/index.html">Oracle <sup>&reg;</sup> Java</a>&trade; 1.8 or
                     higher
                  </li>
               </ul>
            </li>
            <li><strong>Dictionary Users:</strong>
               <ul>
                  <li><a href="//uts.nlm.nih.gov/license.html">UMLS<sup>&reg;</sup> license</a></li>
                  <li><a href="//cwiki.apache.org/confluence/display/CTAKES/cTAKES+4.0.0.1">
                     Specification of license</a> with <code>UMLS API Key</code>
                     parameter
                     <a href="//cwiki.apache.org/confluence/display/CTAKES/Piper+Files">Piper specification
                     or cli parameter</a>.
                  </li>
                  <li>Network Connection for license verification or custom dictionary.</li>
               </ul>
            </li>
            <li><strong>Developers:</strong>
               <ul>
                  <li><a href="//subversion.apache.org/">Apache Subversion&trade; (SVN)</a> Client or equivalent
                     <abbr title="Integrated Development Environment">IDE</abbr> plugin
                  </li>
                  <li><a href="//maven.apache.org/">Apache Maven&trade;</a> or equivalent
                     <abbr title="Integrated Development Environment">IDE</abbr> plugin
                  </li>
                  <li><a href="//www.oracle.com/java/index.html">Oracle <sup>&reg;</sup> Java</a>&trade; 1.8 or
                     higher
                  </li>
                  <li>6 GB disk space</li>
               </ul>
            </li>
         </ul>
      </div>
   </div>
   <div class="row">
      <!--  Binary Download  -->
      <div class="col-xs-12 col-sm-6">
         <div class="download-container">
            <h2 style="text-align: center;">User Installation</h2>
            <p>Zipped Installation with everything but the
               <abbr title="Unified Medical Language System">UMLS</abbr><sup>&reg;</sup> dictionary.<br>
               Please refer to the
               <a href="//cwiki.apache.org/confluence/display/CTAKES/cTAKES+4.0+User+Install+Guide">
                  User Install Guide</a> for assistance.</p>
            <a href="[preferred]/ctakes/ctakes-4.0.0.1/apache-ctakes-4.0.0.1-bin.zip"
               class="btn btn-download btn-primary btn-lg">Windows</a>
            <a href="[preferred]/ctakes/ctakes-4.0.0.1/apache-ctakes-4.0.0.1-bin.tar.gz"
               class="btn btn-download btn-primary btn-lg">Mac/Linux</a>
         </div>
      </div>
      <!--  Source Download  -->
      <div class="col-xs-12 col-sm-6">
         <div class="download-container">
            <h2 style="text-align: center;">Source Code</h2>
            <p>Zipped Source code with everything but the
               <abbr title="Unified Medical Language System">UMLS</abbr><sup>&reg;</sup> dictionary.<br>
               Please refer to the
               <a href="//cwiki.apache.org/confluence/display/CTAKES/cTAKES+4.0+Developer+Install+Guide">
                  Developer Install Guide</a> for assistance.</p>
            <a href="[preferred]/ctakes/ctakes-4.0.0.1/apache-ctakes-4.0.0.1-src.zip"
               class="btn btn-download btn-primary btn-lg">Windows</a>
            <a href="[preferred]/ctakes/ctakes-4.0.0.1/apache-ctakes-4.0.0.1-src.tar.gz"
               class="btn btn-download btn-primary btn-lg">Mac/Linux</a>
         </div>
      </div>
      <!--  UMLS Download  -->
      <div class="col-xs-12 col-sm-6">
         <div class="download-container">
            <h2 style="text-align: center;">UMLS<sup>&reg;</sup> Dictionary</h2>
            <p>Zipped copy of the cTAKES&trade;
               <abbr title="Unified Medical Language System">UMLS</abbr><sup>&reg;</sup> dictionary.
               Please refer to the
               <!-- TODO : Should write a separate page that outlines what the dictionaries are, licensing,
                and where/how to get them on the net, where to install them locally, and how to configure user/pass -->
               <a href="//cwiki.apache.org/confluence/display/CTAKES/cTAKES+4.0+-+Dictionary+Lookup">
                  Dictionary Install Guide</a> for assistance. Install fast version if only running ctakes-fast. </p>
            <a href="//sourceforge.net/projects/ctakesresources/files/ctakes-resources-4.0-bin.zip/download"
               class="btn btn-download btn-primary btn-lg">All Versions</a>
            <a href="//sourceforge.net/projects/ctakesresources/files/sno_rx_16ab.zip/download"
               class="btn btn-download btn-primary btn-lg">Fast Version</a>
         </div>
      </div>
      <!--  Developer SVN Help  -->
      <div class="col-xs-12 col-sm-6">
         <div class="download-container">
            <h2 style="text-align: center;">Developer SVN</h2>
            <p>The latest version of source code, currently under development.<br>
               Please refer to the
               <a href="//cwiki.apache.org/confluence/display/CTAKES/cTAKES+4.0+Developer+Install+Guide">
                  Developer Install Guide</a> for assistance.</p>
            <pre><code>svn co https://svn.apache.org/repos/asf/ctakes/trunk/</code></pre>
         </div>
      </div>
   </div>
   <div class="col-xs-12 col-sm-12">
      <div class="row" id="mirror-container">
         <h4>Current Download Mirror:</h4>
         <ul>
            <li>If the current mirror <b>[preferred]</b> returns an error, select another:
               <form action="./downloads.cgi" method="get" id="SelectMirror">
                  <select name="preferred">
                     <option value="http://mirrors.sonic.net/apache/">http://mirrors.sonic.net/apache/</option>
                     <option value="http://apache.mesi.com.ar/">http://apache.mesi.com.ar/</option>
                     <option value="http://apache.claz.org/">http://apache.claz.org/</option>
                     <option value="http://www.trieuvan.com/apache/">http://www.trieuvan.com/apache/</option>
                     <option value="http://apache.tradebit.com/pub/">http://apache.tradebit.com/pub/</option>
                     <option value="http://www.linuxtourist.com/apache/">http://www.linuxtourist.com/apache/</option>
                     <option value="http://mirror.nexcess.net/apache/">http://mirror.nexcess.net/apache/</option>
                     <option value="http://mirror.sdunix.com/apache/">http://mirror.sdunix.com/apache/</option>
                     <option value="http://www.gtlib.gatech.edu/pub/apache/">http://www.gtlib.gatech.edu/pub/apache/
                     </option>
                     <option value="http://apache.mirrors.lucidnetworks.net/">http://apache.mirrors.lucidnetworks.net/
                     </option>
                     <option value="http://mirror.quintex.com/apache/">http://mirror.quintex.com/apache/</option>
                     <option value="http://mirrors.ibiblio.org/apache/">http://mirrors.ibiblio.org/apache/</option>
                     <option value="http://download.nextag.com/apache/">http://download.nextag.com/apache/</option>
                     <option value="http://apache.cs.utah.edu/">http://apache.cs.utah.edu/</option>
                     <option value="http://apache.osuosl.org/">http://apache.osuosl.org/</option>
                     <option value="http://apache.mirrors.tds.net/">http://apache.mirrors.tds.net/</option>
                     <option value="http://www.eng.lsu.edu/mirrors/apache/">http://www.eng.lsu.edu/mirrors/apache/
                     </option>
                     <option value="http://mirror.cogentco.com/pub/apache/">http://mirror.cogentco.com/pub/apache/
                     </option>
                     <option value="http://apache.petsads.us/">http://apache.petsads.us/</option>
                     <option value="http://mirror.reverse.net/pub/apache/">http://mirror.reverse.net/pub/apache/
                     </option>
                     <option value="http://mirror.cc.columbia.edu/pub/software/apache/">
                        http://mirror.cc.columbia.edu/pub/software/apache/
                     </option>
                     <option value="http://www.motorlogy.com/apache/">http://www.motorlogy.com/apache/</option>
                     <option value="http://www.alliedquotes.com/mirrors/apache/">
                        http://www.alliedquotes.com/mirrors/apache/
                     </option>
                     <option value="http://mirrors.gigenet.com/apache/">http://mirrors.gigenet.com/apache/</option>
                     <option value="http://mirror.symnds.com/software/Apache/">
                        http://mirror.symnds.com/software/Apache/
                     </option>
                     <option value="http://www.bizdirusa.com/mirrors/apache/">http://www.bizdirusa.com/mirrors/apache/
                     </option>
                     <option value="http://mirror.metrocast.net/apache/">http://mirror.metrocast.net/apache/</option>
                     <option value="http://apache.spinellicreations.com/">http://apache.spinellicreations.com/</option>
                     <option value="http://www.fightrice.com/mirrors/apache/">http://www.fightrice.com/mirrors/apache/
                     </option>
                     <option value="http://apache.mirrors.pair.com/">http://apache.mirrors.pair.com/</option>
                     <option value="http://www.carfab.com/apachesoftware/">http://www.carfab.com/apachesoftware/
                     </option>
                     <option value="http://mirror.olnevhost.net/pub/apache/">http://mirror.olnevhost.net/pub/apache/
                     </option>
                     <option value="http://www.poolsaboveground.com/apache/">http://www.poolsaboveground.com/apache/
                     </option>
                     <option value="http://apache.mirrors.hoobly.com/">http://apache.mirrors.hoobly.com/</option>
                     <option value="http://www.globalish.com/am/">http://www.globalish.com/am/</option>
                     <option value="ftp://mirror.reverse.net/pub/apache/">ftp://mirror.reverse.net/pub/apache/</option>
                     <option value="ftp://linux-files.com/apache/">ftp://linux-files.com/apache/</option>
                     <option value="ftp://apache.mirrors.tds.net/pub/apache.org/">
                        ftp://apache.mirrors.tds.net/pub/apache.org/
                     </option>
                     <option value="ftp://ftp.osuosl.org/pub/apache/">ftp://ftp.osuosl.org/pub/apache/</option>
                     <option value="ftp://apache.cs.utah.edu/apache.org/">ftp://apache.cs.utah.edu/apache.org/</option>
                     <option value="ftp://apache.mirrors.pair.com/">ftp://apache.mirrors.pair.com/</option>
                     <option value="http://www.eu.apache.org/dist/">http://www.eu.apache.org/dist/ (backup)</option>
                     <option value="http://www.us.apache.org/dist/">http://www.us.apache.org/dist/ (backup)</option>
                  </select>
                  <input type="submit" value="Change"/>
                  You may also consult the <a href="http://www.apache.org/mirrors/">complete list of mirrors</a>.
               </form>
            </li>
         </ul>
      </div>
   </div>
</div>