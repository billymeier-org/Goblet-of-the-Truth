// 3rd party libs
window.Prism = require('prismjs')

// All the others
function requireAll(r) {
    r.keys().forEach(r)
}

requireAll(require.context('./initializers/', true, /\.js$/));
requireAll(require.context('./behaviors/', true, /\.js$/));

$(function() {
    var commentsArray = [
        {
            "id": 1,
            "parent": null,
            "created": "2015-01-01",
            "modified": "2015-01-01",
            "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu.",
            "pings": [],
            "creator": 6,
            "fullname": "Simon Powell",
            "profile_picture_url": baseUrl + "/assets/user-icon.png",
            "created_by_admin": false,
            "created_by_current_user": false,
            "upvote_count": 3,
            "user_has_upvoted": false,
            "is_new": false
        },
        {
            "id": 2,
            "parent": null,
            "created": "2015-01-02",
            "modified": "2015-01-02",
            "content": "Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu.",
            "pings": [],
            "creator": 5,
            "fullname": "Administrator",
            "profile_picture_url": baseUrl + "/assets/user-icon.png",
            "created_by_admin": true,
            "created_by_current_user": false,
            "upvote_count": 2,
            "user_has_upvoted": false,
            "is_new": false
        },
        {
            "id": 3,
            "parent": null,
            "created": "2015-01-03",
            "modified": "2015-01-03",
            "content": "@Hank Smith sed posuere interdum sem.\nQuisque ligula eros ullamcorper https://www.google.com/ quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget #velit.",
            "pings": [3],
            "creator": 1,
            "fullname": "You",
            "profile_picture_url": baseUrl + "/assets/user-icon.png",
            "created_by_admin": false,
            "created_by_current_user": true,
            "upvote_count": 2,
            "user_has_upvoted": true,
            "is_new": false
        },
        {
            "id": 4,
            "parent": 3,
            "created": "2015-01-04",
            "modified": "2015-01-04",
            "file_url": "//www.w3schools.com/html/mov_bbb.mp4",
            "file_mime_type": "video/mp4",
            "creator": 4,
            "fullname": "Todd Brown",
            "profile_picture_url": baseUrl + "/assets/user-icon.png",
            "created_by_admin": false,
            "created_by_current_user": false,
            "upvote_count": 0,
            "user_has_upvoted": false,
            "is_new": true
        },
        {
            "id": 5,
            "parent": 4,
            "created": "2015-01-05",
            "modified": "2015-01-05",
            "content": "Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit.",
            "pings": [],
            "creator": 3,
            "fullname": "Hank Smith",
            "profile_picture_url": baseUrl + "/assets/user-icon.png",
            "created_by_admin": false,
            "created_by_current_user": false,
            "upvote_count": 0,
            "user_has_upvoted": false,
            "is_new": true
        },
        {
            "id": 6,
            "parent": 1,
            "created": "2015-01-06",
            "modified": "2015-01-06",
            "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu.",
            "pings": [],
            "creator": 2,
            "fullname": "Jack Hemsworth",
            "profile_picture_url": baseUrl + "/assets/user-icon.png",
            "created_by_admin": false,
            "created_by_current_user": false,
            "upvote_count": 1,
            "user_has_upvoted": false,
            "is_new": false
        },
        {
            "id": 7,
            "parent": 1,
            "created": "2015-01-07",
            "modified": "2015-01-07",
            "content": "Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit.",
            "pings": [],
            "creator": 5,
            "fullname": "Administrator",
            "profile_picture_url": baseUrl + "/assets/admin-user-icon.png",
            "created_by_admin": true,
            "created_by_current_user": false,
            "upvote_count": 0,
            "user_has_upvoted": false,
            "is_new": false
        },
        {
            "id": 8,
            "parent": 6,
            "created": "2015-01-08",
            "modified": "2015-01-08",
            "content": "Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu.",
            "pings": [],
            "creator": 1,
            "fullname": "You",
            "profile_picture_url": baseUrl + "/assets/user-icon.png",
            "created_by_admin": false,
            "created_by_current_user": true,
            "upvote_count": 0,
            "user_has_upvoted": false,
            "is_new": false
        },
        {
            "id": 9,
            "parent": 8,
            "created": "2015-01-09",
            "modified": "2015-01-10",
            "content": "Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit.",
            "pings": [],
            "creator": 7,
            "fullname": "Bryan Connery",
            "profile_picture_url": baseUrl + "/assets/user-icon.png",
            "created_by_admin": false,
            "created_by_current_user": false,
            "upvote_count": 0,
            "user_has_upvoted": false,
            "is_new": false
        },
        {
            "id": 10,
            "parent": 9,
            "created": "2015-01-10",
            "modified": "2015-01-10",
            "content": "Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit.",
            "pings": [],
            "creator": 1,
            "fullname": "You",
            "profile_picture_url": baseUrl + "/assets/user-icon.png",
            "created_by_admin": false,
            "created_by_current_user": true,
            "upvote_count": 0,
            "user_has_upvoted": false,
            "is_new": false
        }
    ];
    
    var usersArray = [
        {
            id: 1,
            fullname: "Current User",
            email: "current.user@viima.com",
            profile_picture_url: baseUrl + "/assets/user-icon.png"
        },
        {
            id: 2,
            fullname: "Jack Hemsworth",
            email: "jack.hemsworth@viima.com",
            profile_picture_url: baseUrl + "/assets/user-icon.png"
        },
        {
            id: 3,
            fullname: "Hank Smith",
            email: "hank.smith@viima.com",
            profile_picture_url: baseUrl + "/assets/user-icon.png"
        },
        {
            id: 4,
            fullname: "Todd Brown",
            email: "todd.brown@viima.com",
            profile_picture_url: baseUrl + "/assets/user-icon.png"
        },
        {
            id: 5,
            fullname: "Administrator",
            email: "administrator@viima.com",
            profile_picture_url: baseUrl + "/assets/user-icon.png"
        },
        {
            id: 6,
            fullname: "Simon Powell",
            email: "simon.powell@viima.com",
            profile_picture_url: baseUrl + "/assets/user-icon.png"
        },
        {
            id: 7,
            fullname: "Bryan Connery",
            email: "bryan.connery@viima.com",
            profile_picture_url: baseUrl + "/assets/user-icon.png"
        }
    ];
    var saveComment = function(data) {
        // Convert pings to human readable format
        $(data.pings).each(function(index, id) {
            var user = usersArray.filter(function(user) {
                return user.id == id
            })[0];
            data.content = data.content.replace('@' + id, '@' + user.fullname);
        });
        
        return data;
    };
    
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
        
        $('#comments-container').comments({
            profilePictureURL: baseUrl + '/assets/user-icon.png',
            currentUserId: 1,
            roundProfilePictures: true,
            textareaRows: 1,
            enableAttachments: true,
            enableHashtags: true,
            enablePinging: true,
            getUsers: function(success, error) {
                setTimeout(function() {
                    success(usersArray);
                }, 500);
            },
            getComments: function(success, error) {
                setTimeout(function() {
                    success(commentsArray);
                }, 500);
            },
            postComment: function(data, success, error) {
                setTimeout(function() {
                    success(saveComment(data));
                }, 500);
            },
            putComment: function(data, success, error) {
                setTimeout(function() {
                    success(saveComment(data));
                }, 500);
            },
            deleteComment: function(data, success, error) {
                setTimeout(function() {
                    success();
                }, 500);
            },
            upvoteComment: function(data, success, error) {
                setTimeout(function() {
                    success(data);
                }, 500);
            },
            uploadAttachments: function(dataArray, success, error) {
                setTimeout(function() {
                    success(dataArray);
                }, 500);
            },
        });
        $.colorbox({
            inline: true,
            href: '#comments-container',
            height: 600,
            width: 800,
            onClosed: function() {
                box.hide();
            }
        });
        // $.colorbox({html: "<div class='inline-content'>" + text + "</div>"});
    });
    
});
