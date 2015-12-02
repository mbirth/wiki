---
---
$(document).ready ->
    $('ul#comments-tabs li').not('.static').click ->
        addScript = (script) ->
            scr = document.createElement 'script'
            scr.type = 'text/javascript'
            scr.async = true
            scr.src = script
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild scr

        tab_id = $(this).attr 'data-div'
        service = $(this).attr 'data-service'

        switch service
            when 'disqus'
                # load Disqus
                addScript("//#{disqus_shortname}.disqus.com/embed.js")
                $(this).removeAttr 'data-service'

            when 'google'
                # load Google+
                addScript('//apis.google.com/js/plusone.js')
                $(this).removeAttr 'data-service'

            when 'spotim'
                # load spot.im
                addScript('//www.spot.im/launcher/bundle.js')
                $(this).removeAttr 'data-service'

        $('ul#comments-tabs li.hint').remove()

        $('ul#comments-tabs li').removeClass 'current'
        $('.comments-tab').removeClass 'current'

        $(this).addClass 'current'
        $("##{tab_id}").addClass 'current'
