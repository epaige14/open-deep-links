// Function to open the deep link
function openDeepLink() {
    // Replace 'yourapp://path/to/content' with your actual deep link
    var deepLink = 'bizx://?urlType=deeplink&deeplinkType=learning';

    // Try to open the deep link
    window.location.href = deepLink;

    // If the app is not installed, redirect to the app store
    setTimeout(function() {
        window.location.href = 'https://hcm41preview.sapsf.com/sf/learning';
    }, 500);
}

openDeepLink();
