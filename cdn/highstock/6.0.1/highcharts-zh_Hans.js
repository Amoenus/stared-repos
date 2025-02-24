﻿/**
 * Highcharts-zh_CN plugins v0.0.2 (2015-04-19)
 *
 * @copyright 2017 HCharts & https://www.gildata.com
 * @author xgqfrms
 * @private true
 * @license MIT
 */

(function (HC) {
    ABSOLUTE = HC.ABSOLUTE;
    RELATIVE = HC.RELATIVE;
    hasSVG = HC.hasSVG;
    isTouchDevice = HC.isTouchDevice;
    var defaultOptionsOject = {
        lang: {
            contextButtonTitle: "图表导出菜单",
            decimalPoint: ".",
            downloadJPEG: "下载JPEG图片",
            downloadPDF: "下载PDF文件",
            downloadPNG: "下载PNG文件",
            downloadSVG: "下载SVG文件",
            drillUpText: "返回 {series.name}",
            loading: "加载中...",
            months: [
                "一月",
                "二月",
                "三月",
                "四月",
                "五月",
                "六月",
                "七月",
                "八月",
                "九月",
                "十月",
                "十一月",
                "十二月",
            ],
            noData: "没有数据",
            numericSymbols: ["k", "M", "G", "T", "P", "E"],
            printChart: "打印图表",
            resetZoom: "重置缩放比例",
            resetZoomTitle: "重置为原始大小",
            shortMonths: [
                "一",
                "二",
                "三",
                "四",
                "五",
                "六",
                "七",
                "八",
                "九",
                "十",
                "十一",
                "十二",
            ],
            thousandsSep: ",",
            shortWeekdays: [
                "周天",
                "周一",
                "周二",
                "周三",
                "周四",
                "周五",
                "周六",
            ],
            weekdays: [
                "星期天",
                "星期一",
                "星期二",
                "星期三",
                "星期四",
                "星期五",
                "星期六",
            ],
        },
        global: {
            useUTC: false,
            //timezoneOffset: 8 * 60, // +8
            canvasToolsURL:
                "https://cdn.hcharts.cn/highcharts/modules/canvas-tools.js",
            VMLRadialGradientURL:
                "https://cdn.hcharts.cn/highcharts/gfx/vml-radial-gradient.png",
        },
        title: {
            text: "图表标题",
        },
        tooltip: {
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%b %e, %H:%M",
                day: "%Y-%m-%d",
                week: "Week from %A, %b %e, %Y",
                month: "%m-%Y",
                year: "%Y",
            },
            headerFormat:
                '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: "{series.name}: <b>{point.y}</b><br/>",
        },
        xAxis: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%Y-%m-%d",
                week: "%e. %b",
                month: "%m-%Y",
                year: "%Y",
            },
        },
    };
    HC.setOptions(defaultOptionsOject);
    /* 
        Highcharts lang 配置是全局配置
        针对所有图表有效，所有不能单独设置在某个图表中在，
        只能在图表初始化之前通过 Highcharts.setOptions 来设置生效。
    */
})(Highcharts);
// IIFE & this === Highcharts
