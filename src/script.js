// Small client-side script so the site has JavaScript, as the assignment requires.
document.addEventListener('DOMContentLoaded', function () {
  var versionEl = document.querySelector('.version');
  if (versionEl) {
    console.log('Site loaded: ' + versionEl.textContent);
  }

  // If the build step did not replace the placeholder (running locally), show a fallback.
  var buildTime = document.getElementById('build-time');
  if (buildTime && buildTime.textContent.indexOf('__BUILD_TIME__') !== -1) {
    buildTime.textContent = 'local (not built)';
  }
});
