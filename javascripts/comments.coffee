---
---
$(document).ready ->
    $('ul#comments-tabs li').not('.static').click ->
        addScript = (script, data = {} ) ->
            scr = document.createElement 'script'
            scr.type = 'text/javascript'
            scr.async = true
            scr.src = script
            for key, value of data
                scr.setAttribute "data-#{key}", value
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild scr

        tab_id = $(this).attr 'data-div'
        service = $(this).attr 'data-service'

        switch service
            when 'disqus'
                # load Disqus
                addScript("//#{disqus_shortname}.disqus.com/embed.js")
                $(this).removeAttr 'data-service'

            when 'spotim'
                # load spot.im
                addScript('//recirculation.spot.im/spot/sp_cNwZLN9Q')
                addScript('//launcher.spot.im/spot/sp_cNwZLN9Q', { "post-id": window.spotim_postid, "spotim-module": "spotim-launcher" } )
                $(this).removeAttr 'data-service'

        $('ul#comments-tabs li.hint').remove()

        $('ul#comments-tabs li').removeClass 'current'
        $('.comments-tab').removeClass 'current'

        $(this).addClass 'current'
        $("##{tab_id}").addClass 'current'
