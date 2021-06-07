// Script for generating ctakes download links
// No dependencies; pure javascript.
$(document).ready(function() {
  //initDownloads();
  initReleaseNotes();
});

releases = {};

function addRelease(version, releaseDate, packages, downloadable) {
  releases[version] = {released: releaseDate, packages: packages, downloadable: downloadable};
}

var sources = {pretty: "Source Code", tag: "sources"};
var hadoop1 = {pretty: "Pre-built for Hadoop 1.X", tag: "hadoop1"};
var cdh4 = {pretty: "Pre-built for CDH 4", tag: "cdh4"};
var hadoop2 = {pretty: "Pre-built for Hadoop 2.2", tag: "hadoop2"};
var hadoop2p3 = {pretty: "Pre-built for Hadoop 2.3", tag: "hadoop2.3"};
var hadoop2p4 = {pretty: "Pre-built for Hadoop 2.4", tag: "hadoop2.4"};
var mapr3 = {pretty: "Pre-built for MapR 3.X", tag: "mapr3"};
var mapr4 = {pretty: "Pre-built for MapR 4.X", tag: "mapr4"};

var sourcePackage = [sources];
// 0.7+
var packagesV1 = sourcePackage.concat([hadoop1, cdh4]);
// 0.8.1+
var packagesV2 = packagesV1.concat([hadoop2]);
// 1.0.1+
var packagesV3 = packagesV2.concat([mapr3, mapr4]);
// 1.1.0+
var packagesV4 = packagesV1.concat([hadoop2p3, hadoop2p4, mapr3, mapr4]);

addRelease("3.2.1", new Date("12/10/2014"), packagesV4, true);
addRelease("3.2.0", new Date("9/11/2014"), packagesV4, true);
addRelease("3.1.2", new Date("8/5/2014"), packagesV3, true);

function append(el, contents) {
  el.innerHTML = el.innerHTML + contents;
};

function empty(el) {
  el.innerHTML = "";
}

function getSelectedValue(selectEl) {
  return selectEl.options[selectEl.selectedIndex].value;
}

function versionShort(version) { return version.replace(/-incubating/, ""); }

function initDownloads() {
  var versionSelect = document.getElementById("ctakesVersionSelect");

  // Populate versions
  for (var version in releases) {
    var releaseDate = releases[version].released;
    var downloadable = releases[version].downloadable;

    if (!downloadable) { continue; }

    // Don't display incubation status here
    var title = versionShort(version) + " (" + releaseDate.toDateString().slice(4) + ")";
    append(versionSelect, "<option value=\"" + version + "\">" + title + "</option>");
  }

  // Populate packages and (transitively) releases
  onVersionSelect();
}

function initReleaseNotes() {
  var releaseNotes = document.getElementById("ctakesReleaseNotes");
  for (var version in releases) {
    var releaseDate = releases[version].released;
    var verShort = versionShort(version);
    var contents = "<li><a href='releases/ctakes-release-$verUrl.html'>ctakes $ver</a> ($date)</li>"
      .replace(/\$verUrl/, verShort.replace(/\./g, "-"))
      .replace(/\$ver/, verShort)
      .replace(/\$date/, releaseDate.toDateString().slice(4))
    append(releaseNotes, contents);
  }
}

function onVersionSelect() {
  var versionSelect = document.getElementById("ctakesVersionSelect");
  var packageSelect = document.getElementById("ctakesPackageSelect");
  var verifyLink = document.getElementById("ctakesDownloadVerify");

  empty(packageSelect);
  empty(verifyLink);

  var version = getSelectedValue(versionSelect);
  var packages = releases[version]["packages"];
  for (var idx in packages) {
    var option = "<option value=$tag> $pretty </option>"
      .replace(/\$tag/, packages[idx].tag)
      .replace(/\$pretty/, packages[idx].pretty);
    append(packageSelect, option);
  }

  var href = "http://www.apache.org/dist/ctakes/ctakes-" + version + "/";
  var link = "<a href=\"" + href + "\">" + versionShort(version) + " signatures and checksums</a>"
  append(verifyLink, link);

  // Populate releases
  onPackageSelect();
  updateDownloadLink();
}

function onPackageSelect() {
  var downloadSelect = document.getElementById("ctakesDownloadSelect");
  var packageSelect = document.getElementById("ctakesPackageSelect");

  empty(downloadSelect);

  var pkg = getSelectedValue(packageSelect);

  if (pkg.toLowerCase().indexOf("mapr") > -1) {
    var external = "External Download (MAY CONTAIN INCOMPATIBLE LICENSES)";
    append(downloadSelect, "<option value='external'>" + external + "</option>");
  } else {
    append(downloadSelect, "<option value='direct'>Direct Download</option>")
    append(downloadSelect, "<option value='apache'>Select Apache Mirror</option>")
  }
  updateDownloadLink();
}

function onDownloadSelect() {
  updateDownloadLink();
}

function updateDownloadLink() {
  var versionSelect = document.getElementById("ctakesVersionSelect");
  var packageSelect = document.getElementById("ctakesPackageSelect");
  var downloadSelect = document.getElementById("ctakesDownloadSelect");
  var downloadLink = document.getElementById("spanDownloadLink");

  empty(downloadLink);

  var version = getSelectedValue(versionSelect);
  var pkg = getSelectedValue(packageSelect);
  var download = getSelectedValue(downloadSelect);


  var artifactName = "ctakes-$ver-bin-$pkg.tgz"
    .replace(/\$ver/g, version)
    .replace(/\$pkg/g, pkg)
    .replace(/-bin-sources/, ""); // special case for source packages

  var link = "http://d3kbcqa49mib13.cloudfront.net/$artifact";
  if (version <= "0.7.3") {
    link = "http://ctakes-project.org/download/$artifact";
  }
  if (pkg.toLowerCase().indexOf("mapr") > -1) {
    link = "http://package.mapr.com/tools/apache-ctakes/$ver/$artifact"
  } else if (download == "apache") {
    if (version <= "1.0.0") {
      link = "http://archive.apache.org/dist/ctakes/ctakes-$ver/$artifact";
    } else {
      link = "http://www.apache.org/dyn/closer.cgi/ctakes/ctakes-$ver/$artifact";
    }
  }
  link = link
    .replace(/\$ver/, version)
    .replace(/\$artifact/, artifactName);
  var text = link.split("/").reverse()[0];

  var onClick = "trackOutboundLink(this, 'Release Download Links', " +
    "'$download_$artifact'); return false;"
      .replace(/\$download/, download)
      .replace(/\$artifact/, artifactName);

  var contents = "<a href=\"" + link + "\" onClick=\"" + onClick + "\">" + text + "</a>";
  append(downloadLink, contents);
}

$(".SelectMirror").click(function() {
  alert("Selected");
});