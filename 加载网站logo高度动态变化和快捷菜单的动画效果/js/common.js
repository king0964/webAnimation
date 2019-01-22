$(function() {
    function animateHeader() {
        $('.header-box .logo').animate({ // logo动画效果
            'left': 0,
            'margin-left': 0
        }, 1500);
        $('.header-box .title').animate({ // 标题动画效果
            'left': '90px',
            'margin-left': 0,
            'top': '18px'
        }, 1500);
        $('.header-box .header-search').animate({ // 搜索框动画效果
            'right': 0,
            'margin-right': 0,
            'top': '24px'
        }, 1500);
        $('.header').animate({ // 底图动画效果
        	'height': '160px'
        }, 1500);
    }
    setTimeout(animateHeader, 2000); // 2s后执行函数
});