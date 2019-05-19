// 3rd party libs
window.Prism = require('prismjs');

// All the others
function requireAll(r) {
    r.keys().forEach(r)
}

requireAll(require.context('./initializers/', true, /\.js$/));
requireAll(require.context('./behaviors/', true, /\.js$/));

$(function() {
    
    var path = location.pathname.split("/");
    console.log(path[path.length -1]);
    var isLocal = document.domain == 'localhost';
    
   // alert(isLocal);
    
    const gitalk = new Gitalk({
        clientID:isLocal ? 'b5dcaf31d35fd93ba76e' : 'd07e704299ad43d92ba3',
        clientSecret: isLocal ? '229104e353bda551c19b3f22548d11d28d9335b0' : 'dccb7ae650fa929296b0f7be0b7f2dd7fa2d2c3a',
        repo: 'Goblet-of-the-Truth',
        owner: 'billymeier-org',
        admin: ['MindSalome'],
        id: path[path.length -1].replace(".html",""), // location.pathname,      // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
    });
    
    gitalk.render('gitalk-container');
    
    
    $(".h3-section .body > p").click(function() {
        var text = $(this).text();
        var h3 = $(this).parents('.h3-section').find('h3').attr('id').split("-chapter-");
        var number = h3[0], chapter = h3[1];
        console.log({number: number, chapter: chapter});
        var box = $('#colorbox');
        var comment = "#"+number+"\n"+text;
        console.log(comment);
        $('.gt-header-textarea').val(comment);

        jQuery('.gt-header-textarea').trigger(jQuery.Event("keypress", { keyCode: 13}));
        $.colorbox({
            inline: true,
            href: '#gitalk-container',
            height: 600,
            width: 800,
            onClosed: function() {
                // box.hide();
            }
        });
        // $.colorbox({html: "<div class='inline-content'>" + text + "</div>"});
    });
    
});
