let gifIndex = 1;

function switchGifs() {
    const initialGif = document.querySelector('.initial-gif');
    initialGif.style.width = '80%';
    const yesButton = document.querySelector('.yes-btn');
    const noButton = document.querySelector('.no-btn');

    if (gifIndex === 1) {
        initialGif.src = "howmuch.GIF";
        gifIndex = 2;
        yesButton.remove();
        noButton.remove();

        const beyondBtn = createButton('To beyond this universe and back', 'beyond-btn');
        const littleToNoneBtn = createButton('Little to none', 'no-btn');

        document.querySelector('.container').appendChild(beyondBtn);
        document.querySelector('.container').appendChild(littleToNoneBtn);

        littleToNoneBtn.addEventListener('click', function(event) {
            event.preventDefault();
            shakeNo();
        });

        beyondBtn.addEventListener('click', function(event) {
            event.preventDefault();
            initialGif.src = "iknew.GIF";
            initialGif.style.width = '70%';
            document.querySelector('.beyond-btn').remove();
            document.querySelector('.no-btn').remove();

            const surpriseBtn = createButton('Surprise me now', 'surprise-btn');
            const fuckYouBtn = createButton('Fuck you', 'no-btn');

            document.querySelector('.container').appendChild(surpriseBtn);
            document.querySelector('.container').appendChild(fuckYouBtn);

            fuckYouBtn.addEventListener('click', function(event) {
                event.preventDefault();
                shakeNo();
            });

            surpriseBtn.addEventListener('click', function(event) {
                event.preventDefault();
                initialGif.src = "iloveyoumore.HEIC";
                document.querySelector('.surprise-btn').remove();
                document.querySelector('.no-btn').remove();

                const loveText = document.createElement('p');
                loveText.textContent = "I love you more ♥️";
                document.querySelector('.container').appendChild(loveText);

                const awwCuteBtn = createButton('Aww cute', 'aww-cute-btn');
                const butIDontBtn = createButton("BUT I DON'T!!!", 'no-btn');

                document.querySelector('.container').appendChild(awwCuteBtn);
                document.querySelector('.container').appendChild(butIDontBtn);

                awwCuteBtn.addEventListener('click', function(event) {
                    event.preventDefault();
                    initialGif.src = "cute.GIF";
                    initialGif.style.width = '75%';
                    document.querySelector('.container').appendChild(initialGif);

                    const blushingText = document.createElement('p');
                    blushingText.textContent = "*blushes*";
                    document.querySelector('.container').appendChild(blushingText);

                    const saadCuteGif = document.createElement('img');
                    saadCuteGif.src = "saadcute.gif";
                    saadCuteGif.style.width = '75%';
                    document.querySelector('.container').appendChild(saadCuteGif);

                    document.querySelector('.aww-cute-btn').remove();
                    document.querySelector('.no-btn').remove();

                    const ayChalBtn = createButton('Ay Chal', 'ay-chal-btn');
                    const basTeraHoGyaBtn = createButton('Bas Tera Ho Gya', 'no-btn');

                    document.querySelector('.container').appendChild(ayChalBtn);
                    document.querySelector('.container').appendChild(basTeraHoGyaBtn);

                    basTeraHoGyaBtn.addEventListener('click', function(event) {
                        event.preventDefault();
                        shakeNo(); // Acting as "No" button
                    });
                    ayChalBtn.addEventListener('click', function(event) {
                        event.preventDefault();
                        // Add any logic for "Ay Chal" Button
                        document.querySelector('.ay-chal-btn').remove();
                        document.querySelector('.no-btn').remove();
                        document.querySelector('.container').innerHTML = ''; // Clear existing content
                        const afshaText = document.createElement('p');
                        afshaText.textContent = "You after witnessing my cuteness:";
                        document.querySelector('.container').appendChild(afshaText);
                        initialGif.src = "chakkar.gif";
                        initialGif.style.width = '90%';
                        document.querySelector('.container').appendChild(initialGif);

                        const riyalBtn = createButton('Riyal', 'riyal-btn');
                        const hellNoBtn = createButton('Hell No', 'no-btn');

                        document.querySelector('.container').appendChild(riyalBtn);
                        document.querySelector('.container').appendChild(hellNoBtn);

                        hellNoBtn.addEventListener('click', function(event) {
                            event.preventDefault();
                            shakeNo(); // Acting as "No" button
                        });

                        riyalBtn.addEventListener('click', function(event) {
                            event.preventDefault();
                            // Add logic to switch to "afshacute.gif"
                            document.querySelector('.container').innerHTML = ''; // Clear existing content

                            const factText = document.createElement('p');
                            factText.textContent = "Fact: Nothing compares to the cuteness of my baby";
                            document.querySelector('.container').appendChild(factText);

                            const afshacuteGif = document.createElement('img');
                            afshacuteGif.src = "afshacute.gif";
                            afshacuteGif.style.width = '75%';
                            document.querySelector('.container').appendChild(afshacuteGif);

                            // Add any additional logic or buttons as needed
                            const loveYouTooBtn = createButton('I Love You Too', 'love-you-too-btn');
                            const basKrBasBtn = createButton('Bas Kr Bas', 'no-btn');

                            document.querySelector('.container').appendChild(loveYouTooBtn);
                            document.querySelector('.container').appendChild(basKrBasBtn);

                            basKrBasBtn.addEventListener('click', function(event) {
                                event.preventDefault();
                                shakeNo(); // Acting as "No" button
                            });

                            loveYouTooBtn.addEventListener('click', function(event) {
                                event.preventDefault();
                                document.querySelector('.container').innerHTML = ''; // Clear existing content

                                const afsha1Image = document.createElement('img');
                                afsha1Image.src = "Afsha1.heic";
                                afsha1Image.style.width = '50%';
                                document.querySelector('.container').appendChild(afsha1Image);

                                const afsha2Image = document.createElement('img');
                                afsha2Image.src = "Afsha2.heic";
                                afsha2Image.style.width = '50%';
                                document.querySelector('.container').appendChild(afsha2Image);
                                const afsha3Image = document.createElement('img');
                                afsha3Image.src = "Afsha3.heic";
                                afsha3Image.style.width = '50%';
                                document.querySelector('.container').appendChild(afsha3Image);
                                const afsha4Image = document.createElement('img');
                                afsha4Image.src = "Afsha4.heic";
                                afsha4Image.style.width = '50%';
                                document.querySelector('.container').appendChild(afsha4Image);

                                const luckiestText = document.createElement('p');
                                luckiestText.textContent = "I feel the luckiest and the most blessed person to have you Afsha!";
                                document.querySelector('.container').appendChild(luckiestText);

                                const cryingBtn = createButton('crying', 'crying-btn');
                                const nautankiBtn = createButton('nautanki sala', 'no-btn');

                                document.querySelector('.container').appendChild(cryingBtn);
                                document.querySelector('.container').appendChild(nautankiBtn);
                                nautankiBtn.addEventListener('click', function(event) {
                                    event.preventDefault();
                                    shakeNo(); // Acting as "No" button
                                });

                                cryingBtn.addEventListener('click', function(event) {
                                    event.preventDefault();
                                    document.querySelector('.container').innerHTML = ''; // Clear existing content

                                    const afshaAndSaad1Image = document.createElement('img');
                                    afshaAndSaad1Image.src = "afshaAndSaad1.heic";
                                    afshaAndSaad1Image.style.width = '50%';
                                    document.querySelector('.container').appendChild(afshaAndSaad1Image);

                                    const afshaAndSaad2Image = document.createElement('img');
                                    afshaAndSaad2Image.src = "afshaAndSaad2.heic";
                                    afshaAndSaad2Image.style.width = '50%';
                                    document.querySelector('.container').appendChild(afshaAndSaad2Image);

                                    const afshaAndSaad3Image = document.createElement('img');
                                    afshaAndSaad3Image.src = "afshaAndSaad3.heic";
                                    afshaAndSaad3Image.style.width = '50%';
                                    document.querySelector('.container').appendChild(afshaAndSaad3Image);
                                    const afshaAndSaad4Image = document.createElement('img');
                                    afshaAndSaad4Image.src = "afshaAndSaad4.JPG";
                                    afshaAndSaad4Image.style.width = '50%';
                                    document.querySelector('.container').appendChild(afshaAndSaad4Image);

                                    const importantText = document.createElement('p');
                                    importantText.textContent = "You changed me. You changed me for good. You brought me peace, comfort, happiness, and fun along with all your love and care.";
                                    document.querySelector('.container').appendChild(importantText);

                                    // Add any additional logic or buttons as needed
                                    // Add any logic for "I Love You Too" Button
                                    // Replace the following line with your logic or leave it empty

                                    const tearsBtn = createButton('tears rolling down', 'tears-btn');
                                    const howmuchmoreBtn = createButton('or kitna baaqi hai?', 'no-btn');

                                    document.querySelector('.container').appendChild(tearsBtn);
                                    document.querySelector('.container').appendChild(howmuchmoreBtn);
                                    howmuchmoreBtn.addEventListener('click', function(event) {
                                        event.preventDefault();
                                        shakeNo(); // Acting as "No" button
                                    });
                                    tearsBtn.addEventListener('click', function(event) {
                                        event.preventDefault();
                                        document.querySelector('.container').innerHTML = ''; // Clear existing content
                                        const smileText = document.createElement('p');
                                        smileText.textContent = "SMILE PLEASEEEEEE!!!";
                                        document.querySelector('.container').appendChild(smileText);
                                        const romantic1Image = document.createElement('img');
                                        romantic1Image.src = "romantic1.HEIC";
                                        romantic1Image.style.width = '50%';
                                        document.querySelector('.container').appendChild(romantic1Image);

                                        const romantic2Image = document.createElement('img');
                                        romantic2Image.src = "romantic2.HEIC";
                                        romantic2Image.style.width = '50%';
                                        document.querySelector('.container').appendChild(romantic2Image);

                                        const romantic3Image = document.createElement('img');
                                        romantic3Image.src = "romantic3.HEIC";
                                        romantic3Image.style.width = '50%';
                                        document.querySelector('.container').appendChild(romantic3Image);
                                        const romantic4Image = document.createElement('img');
                                        romantic4Image.src = "romantic4.HEIC";
                                        romantic4Image.style.width = '50%';
                                        document.querySelector('.container').appendChild(romantic4Image);
                                        const momentText = document.createElement('p');
                                        momentText.textContent = "Every single moment spent with you felt like eternity. Every single journey I've been with you on felt endless. Every single place I've been with you to smelt like heaven. And heaven, I can see in your eyes.";
                                        document.querySelector('.container').appendChild(momentText);
                                        const sobbingBtn = createButton('sobbing', 'sob-btn');
                                        const basyahiBtn = createButton('bas yahi reh gya tha', 'no-btn');

                                        document.querySelector('.container').appendChild(sobbingBtn);
                                        document.querySelector('.container').appendChild(basyahiBtn);
                                        basyahiBtn.addEventListener('click', function(event) {
                                            event.preventDefault();
                                            shakeNo(); // Acting as "No" button
                                        });
                                        sobbingBtn.addEventListener('click', function(event) {
                                            event.preventDefault();
                                            document.querySelector('.container').innerHTML = ''; // Clear existing content
                                            const myWorldGif = document.createElement('img');
                                            myWorldGif.src = "myWorld.gif";
                                            myWorldGif.style.width = '75%';
                                            document.querySelector('.container').appendChild(myWorldGif);
                                            const myWorldText = document.createElement('p');
                                            myWorldText.textContent = "You are the world to me baby. I mean it. You are everything I never thought I'd ever get. And without knowing, you became essential part of my life. I can't imagine my life without you yet alone my days. You are the prettiest girl, inside and out. And everything about you, makes me wonder how did I get her. You are perfect. As a friend, bestfriend and girlfriend. Someone I can share my problems with. Someone I can share my dreams with. And someone I can share my life with. Forever stay the same lovely, fun, emotional, and beautiful baby. Forever stay mine. 🥰";
                                            document.querySelector('.container').appendChild(myWorldText);
                                            const kissBtn = createButton('kiss Saad', 'kiss-btn');
                                            const hitBtn = createButton('hit Saad', 'no-btn');

                                            document.querySelector('.container').appendChild(kissBtn);
                                            document.querySelector('.container').appendChild(hitBtn);
                                            hitBtn.addEventListener('click', function(event) {
                                                event.preventDefault();
                                                shakeNo(); // Acting as "No" button
                                            });
                                            kissBtn.addEventListener('click', function(event) {
                                                event.preventDefault();
                                                document.querySelector('.container').innerHTML = ''; // Clear existing content
                                                const kissText = document.createElement('p');
                                                kissText.textContent = "Kissyyyy incoming...";
                                                document.querySelector('.container').appendChild(kissText);
                                                const kissGif = document.createElement('img');
                                                kissGif.src = "kiss.gif";
                                                kissGif.style.width = '75%';
                                                document.querySelector('.container').appendChild(kissGif);
                                                const endText = document.createElement('p');
                                                endText.textContent = "Received successfully. (Please don't leave me)";
                                                document.querySelector('.container').appendChild(endText);
                                                const cryAgainBtn = createButton('cry again', 'cryAgain-btn');
                                                document.querySelector('.container').appendChild(cryAgainBtn);
                                                cryAgainBtn.addEventListener('click', function(event) {
                                                    event.preventDefault();
                                                    window.location.href = window.location.origin + window.location.pathname;
                                                });

                                            });
                                        });


                                    });

                                });


                            });


                        });


                    });
                    //document.querySelector('p').remove();
                });



                butIDontBtn.addEventListener('click', function(event) {
                    event.preventDefault();
                    shakeNo();
                });
            });
        });
    }
}

function shakeNo() {
    const noButton = document.querySelector('.no-btn');
    noButton.classList.add('shake-on-click');
    setTimeout(() => {
        noButton.classList.remove('shake-on-click');
    }, 500);
}

function createButton(text, className) {
    const button = document.createElement('button');
    button.textContent = text;
    button.classList.add(className, 'shake-on-click');
    return button;
}