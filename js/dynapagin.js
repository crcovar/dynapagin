/**
 * @preserve Copyright (c) 2013 Charles Covar
 * Released under the MIT License 
 * https://raw.github.com/crcovar/dynapagin/master/LICENSE
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
                settings.page = parseInt(page);
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