import gsap from "https://esm.sh/gsap";
import SplitType from "https://esm.sh/split-type";
import { Pane } from "https://esm.sh/tweakpane";
const text = SplitType.create(".text", { type: "chars" });
const length = text.chars.length;
text.chars.forEach((char, index) => {
    char.style.setProperty("font-weight", (index + 1) * 0.1 * 400);
    char.addEventListener("mouseover", () => {
        animate(index);
    });
});
function calculate(index, length) {
    const positions = Array.from(Array(length).keys());
    const left = positions.slice(0, index - 1);
    const right = positions.slice(index);
    return { left, right };
}
function animate(index) {
    const { left, right } = calculate(index + 1, length);
    var tl = gsap.timeline().to(text.chars[index], {
        fontWeight: () => weightByIndex(0)
    }, "way");
    text.chars
        .slice(0, index - 1)
        .reverse()
        .forEach((char, index) => {
        tl.to(char, {
            fontWeight: () => weightByIndex(index)
        }, "way");
    });
    text.chars.slice(index).forEach((char, index) => {
        tl.to(char, {
            fontWeight: () => weightByIndex(index)
        }, "way");
    });
}
function weightByIndex(index) {
    return (index + 1) * 1 * 100;
}
const pane = new Pane();
pane
    .addButton({
    label: "Author",
    title: "@plsankar"
})
    .on("click", () => {
    window.open("https://github.com/plsankar/", "_blank");
});
