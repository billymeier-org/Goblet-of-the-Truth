// 3rd party libs
window.Prism = require('prismjs')

// All the others
function requireAll(r) {
    r.keys().forEach(r)
}

requireAll(require.context('./initializers/', true, /\.js$/));
requireAll(require.context('./behaviors/', true, /\.js$/));

$(function() {
    
    var path = location.pathname.split("/");
    console.log(path[path.length -1]);
    
    const gitalk = new Gitalk({
        clientID: 'd07e704299ad43d92ba3',
        clientSecret: 'dccb7ae650fa929296b0f7be0b7f2dd7fa2d2c3a',
        repo: 'Goblet-of-the-Truth',
        owner: 'billymeier-org',
        admin: ['MindSalome'],
        id: path[path.length -1], // location.pathname,      // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
    });
    
    gitalk.render('gitalk-container');
    
    $(".h3-section .body > p").click(function() {
        var text = $(this).text();
        var h3 = $(this).parents('.h3-section').find('h3').attr('id').split("-chapter-");
        var number = h3[0], chapter = h3[1];
        console.log({number: number, chapter: chapter});
        var box = $('#colorbox');
        
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
