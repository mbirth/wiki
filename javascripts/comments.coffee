---
---
$(document).ready ->
    $('ul#comments-tabs li').not('.static').click ->
        tab_id = $(this).attr 'data-div'

        $('ul#comments-tabs li').removeClass 'current'
        $('.comments-tab').removeClass 'current'

        $(this).addClass 'current'
        $("##{tab_id}").addClass 'current'
