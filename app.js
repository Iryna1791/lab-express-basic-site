const express = require('express')
const app = express()
const port = 3001;

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Homepage</h1>
        <h2>Welcome to the page of president of Ukraine Volodymyr Zelenskyy</h2>
        <p><a href ="https://www.instagram.com/zelenskiy_official/">Instagram of Volodymyr Zelenskyy</a></p>
        <img src="/images/presidente3.jpg"/>
        <h2 class="about">About</h2>
          <p>Born to a Ukrainian Jewish family, Zelenskyy grew up as a native Russian speaker in Kryvyi Rih, a major city of Dnipropetrovsk Oblast in central Ukraine.
            Is a Ukrainian politician and former comedian and actor who has served as the sixth and current president of Ukraine since 2019.
            He then pursued a career in comedy and created the production company Kvartal 95, which produced films, cartoons, and TV shows including the TV series Servant of the People, in which Zelenskyy played the role of the Ukrainian president. The series aired from 2015 to 2019 and was immensely popular. A political party bearing the same name as the television show was created in March 2018 by employees of Kvartal 95.
            Zelenskyy was inaugurated on 20 May 2019. Zelenskyy is the first Jewish president.
            On the morning of 24 February 2022, Putin announced that Russia was initiating a "special military operation" in the Donbas. Russian missiles struck a number of military targets in Ukraine, and Zelenskyy declared martial law. Zelenskyy also announced that diplomatic relations with Russia were being severed, effective immediately. Later in the day, he announced general mobilisation.
            On 25 February, Zelenskyy said that despite Russia's claim that it was targeting only military sites, civilian sites were also being hit. In an early morning address that day, Zelenskyy said that his intelligence services had identified him as Russia's top target, but that he is staying in Kyiv and his family will remain in the country. "They want to destroy Ukraine politically by destroying the head of state", he said.
            The Ukrainian president receives a lot of respect from the Ukrainian citizens, because in the most difficult time he does not abandon the country, it has helped in fact to listen to the whole world about the war in his country showing the utmost respect to democracy. To this day he is fighting for Ukrainian freedom and having many talks to get help from all democratic countries to save Ukraine from Russian aggression.
            </p>
    </body>
    </html>`)
})
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
