ssd1306.init(128, 64)
ssd1306.writeStringNewLine("the quick brown fox jumped over the lazy dog?")
ssd1306.writeStringNewLine("THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG!")
basic.pause(1000)
ssd1306.clear()
ssd1306.writeString("Your magic number is ")
ssd1306.writeNum(23 * 3)
ssd1306.writeStringNewLine("!")
ssd1306.writeNumNewLine(1)
basic.pause(100)
ssd1306.writeNumNewLine(2)
basic.pause(100)
ssd1306.writeNumNewLine(3)
basic.pause(1000)
for (let i = 0; i < 100; i++) {
    ssd1306.drawLoading(i)
}
basic.pause(1000)
ssd1306.clear()
ssd1306.drawRectangle(10, 10, 60, 60)
ssd1306.drawLine(0, 0, 128, 64)
ssd1306.drawLine(0, 64, 128, 0)
