/*
The MIT License (MIT)

Copyright (c) 2013 Charles Covar

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function ($) { 
    $.fn.dynapagin = function (options, content) {
        var settings = $(this).extend({
                pager: false,
                total: 1,
                page: 1,
                previous: '&laquo;',
                next: '&raquo;'
            }, options);

        return this.each(function () {
            var me = $(this);

            function setPage(page) {
                settings.page = page;
                me.find(".dynapagin-selector li").removeClass('active disabled');
                me.find(".dynapagin-selector li[data-page='"+settings.page+"']").addClass('active');
                
                if (settings.page == 1) {
                    me.find('.previous').addClass('disabled');
                }
                if (settings.page == settings.total) {
                    me.find('.next').addClass('disabled');
                }
                
                if(content) {
                    content(settings.page);
                }
                
                me.trigger('page', settings.page);
            }

            me.append('<ul class="dynapagin-selector"></ul>');
            me.find('.dynapagin-selector').addClass((settings.pager) ? 'pager' : 'pagination');

            me.find('.dynapagin-selector').append('<li class="previous"><a href="javascript:void(0)">'+settings.previous+'</a></li>');

            if (!settings.pager) {
                /* Add pagination */
                var i=0;
                for (i=1; i<=settings.total; i++) {
                    me.find('.pagination').append('<li data-page="'+i+'"><a href="javascript:void(0)">'+i+'</a></li>');
                }
            }

            me.find('.dynapagin-selector').append('<li class="next"><a href="javascript:void(0)">'+settings.next+'</a></li>');
            
            setPage(settings.page);

            me.find('.previous').click(function () {
                if(me.find('.previous').hasClass('disabled')) {
                    return false;
                }
                setPage(--settings.page);
            });
            me.find('.next').click(function () {
                if(me.find('.next').hasClass('disabled')) {
                    return false;
                }
                setPage(++settings.page);

            });
            
            me.find('li').click(function () {
                if ($(this).hasClass('next') || $(this).hasClass('previous') || $(this).hasClass('active')) {
                    return false;
                }
                setPage(this.dataset.page);
            });
        });
    }
}(jQuery));