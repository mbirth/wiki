---
---
$(document).ready ->
    $('ul#comments-tabs li').not('.static').click ->
        tab_id = $(this).attr 'data-div'
        service = $(this).attr 'data-service'

        switch service
            when 'disqus'
                # load Disqus
                dsq = document.createElement 'script'
                dsq.type = 'text/javascript'
                dsq.async = true
                dsq.src = "//#{disqus_shortname}.disqus.com/embed.js"
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild dsq
                $(this).removeAttr 'data-service'

            when 'google'
                # load Google+
                gog = document.createElement 'script'
                gog.type = 'text/javascript'
                gog.async = true
                gog.src = '//apis.google.com/js/plusone.js'
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild gog
                $(this).removeAttr 'data-service'

        $('ul#comments-tabs li.hint').remove()

        $('ul#comments-tabs li').removeClass 'current'
        $('.comments-tab').removeClass 'current'

        $(this).addClass 'current'
        $("##{tab_id}").addClass 'current'
