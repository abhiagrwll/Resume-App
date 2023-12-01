const express=require('express');
const Student = require('../model/student');
const sendMail = require('../controllers/sendMail');
const router=express.Router();


router.get('/students',(req,res)=>{
    res.render('index');
})

router.get('/students/new',(req,res)=>{
    res.render('new');
})

router.post('/students',async (req,res)=>{
    let {name,college,degree,tenth,twelth,cpi,email}=req.body;
    college = college.toLowerCase();
    degree = degree.toLowerCase();
    await Student.create({name,college,degree,tenth,twelth,cpi,email});
    res.redirect('/students');
})
router.get('/students/find',(req,res)=>{
    res.render('find');
})
router.post('/students/show',async(req,res)=>{
    console.log(req.body)
    let {college,degree,cpi}=req.body;
    cpi=parseInt(cpi);
    

    let foundResume=await Student.find({college: college, degree: degree,cpi:{$gte:cpi}})
    
    res.render('show',{foundResume});
})
router.get('/students/show',(req,res)=>{
    res.render('show')
})

router.post('/send-mail', async (req, res) => {
    const { email } = req.query;

    try {
        // Call the sendMail function passing the email
        await sendMail(email);

        // Respond with success
        res.json({ success: true, message: 'Email sent successfully.' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Error sending email.' });
    }
    
});


module.exports=router;