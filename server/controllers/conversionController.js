const puppeteer = require("puppeteer");
const convertHTMLToDesign = async (req,res) => {
    const {url,viewport} = req.body;
    const viewports= {
        desktop:{width:1920,height:1080},
        tablet:{width:768,height:1024},
        mobile:{width:375,height:667}
    }
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        page.setViewport(viewport[viewports])
        await page.goto(url,{waitUntil:"networkidle2"});
        // await browser.close();
        const html = await page.content();
        const css = await page.evaluate(()=>{
            let styles='';
            for(const styleSheet of document.styleSheets){
                try{
                    for(const rule of styleSheet.cssRules){
                        styles += rule.cssText;
                    }
                }catch(e){
                    console.log(e);
                }
            }
            return styles;
        });
        await browser.close();
        res.send({message:"conversion complete",html,css});
    }catch {
        res.status(500).send({message:"error in conversion"})
    };
};
module.exports = {
    convertHTMLToDesign,
}