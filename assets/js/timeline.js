const COLORS = [
    "#FE9D01",
    "#C5DA01",
    "#008678",
    "#99CF15",
    "#CAB2D6"
];

class Task {
    constructor(date, text_bottom, text_top, color) {
        this.date = date;
        this.text_bottom = text_bottom;
        this.text_top = text_top;
        this.color = color;
    }
}
class Timeline {
    constructor(ele) {
        this.timeline = $(ele);
    }

    setTasks(tasks) {
        var n = 0;
        var i = 0;
        for (let task of tasks) {
            if (i > 4) {
                i = 0;
            }
            let width = parseInt(task.date / 100);
            let lineContent = $("<div class='lineContent'/>");
            let lineColmun = $("<div class='lineColmun'/>");
            let lineText = $("<div class='lineText'/>");
            lineColmun.css("width", width + "px");
            if (n == 0) {
                lineColmun.addClass("lineColmun-left");
            }
            if (n == tasks.length - 1) {
                lineColmun.addClass("lineColmun-right");
            }
            if (task.color != undefined) {
                lineColmun.css("background-color", task.color);
            } else {
                lineColmun.css("background-color", COLORS[i]);
                lineText.css("color", COLORS[i]);
            }
            lineColmun.attr("data-toggle", "tooltip");
            if (task.text_bottom.length*14 < width) {
                lineText.text(task.text_bottom);
                lineText.css("color", task.color);
                lineColmun.attr("title", task.text_top);
            } else {
                lineColmun.attr("title", task.text_top + "（" + task.text_bottom + "）");
            }
            lineColmun.appendTo(lineContent);
            lineText.appendTo(lineContent);
            lineContent.appendTo(this.timeline);
            n++;
            i++;
        }
    }
}