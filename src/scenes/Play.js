/*
used chatgpt to help with beginning delay and checking time - https://chat.openai.com/share/6252911d-9561-49f7-87c7-93199ca71134

*/

class Play extends Phaser.Scene 
{
    constructor()
    {
        super('playScene')
        /*
        this.timeAlive = 0
        this.isJumping = false
        this.ground
        this.ninja
        this.mine
        this.speedIncrease = 20000
        */
    }

    preload()
    {
        this.load.image("play_background", "./assets/play_background.png")
    }

    create() 
    {
        this.tricks = 
        {
            "360_side_flip": ["D", "W", "A", "S"],
            "head_stand": ["F, R, E, T"],
            "sexy_move": ["Q", "Q", "Q", "Q"]
        }

        this.backgroundImage = this.add.tileSprite(0, 0, 800, 600, "play_background").setOrigin(0, 0)

        this.bike_stationary = this.add.sprite(75, 470, 'bike_ramp_anims')
        this.bike_stationary.setFrame('bike_ramp_1.png')

        
        this.start = 0
        this.startGame = 2000

        this.timeAlive = 0
        this.timeCheck = 3000


        /*
        //add background image to scene
        this.backgroundImage = this.add.tileSprite(0, 0, 800, 600, 'PlayBackground').setOrigin(0, 0)
        this.timeAlive = 0

        //set up ninja sprite
        this.ninja = this.physics.add.sprite(100, 355, 'runAnims').setOrigin(0, 0)
        this.ninja.setCollideWorldBounds(true)
        this.ninja.setOffset(this.ninja.width / 2, this.ninja.height / 2 + 30)
        this.ninja.anims.play('runAnims')
        this.ninja.on('animationcomplete', function(animation, frame)
        {
            if (animation.key === 'jumpAnims')
            {
                this.ninja.anims.play('runAnims')
                this.isJumping = false
            }
        }, this)

        this.mine = this.physics.add.sprite(Phaser.Math.Between(800, 1600), 407, 'mineAnims').setOrigin(0, 0)
        this.mine.setScale(1.5)
        this.mine.anims.play('mineAnims')
        this.mine.body.allowGravity = false
        this.mine.body.immovable = true
        this.mine.setCollideWorldBounds(false)
        this.mine.setOffset(this.mine.width / 2 - 16, this.mine.height / 2 - 20)
        this.mine.setSize(30, 12)
        this.mine.setOrigin(0, 0)
        this.mineSpeed = -700
        this.mine.setVelocityX(this.mineSpeed)
        
        //set up ground sprite
        this.ground = this.physics.add.sprite(400, 745, "groundCollision")
        this.ground.body.allowGravity = false
        this.ground.body.immovable = true

        //add collision and physics
        this.physics.add.collider(this.ninja, this.ground)
        this.physics.add.collider(this.ninja, this.mine, this.handleMineCollision, null, this);
        this.physics.world.gravity.y = 5000

        //add space for jump
        this.jumpKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        //display time alive clock
        this.displayClock = this.add.text(235, 50, 'Time Elapsed: 0', {fontSize: '40px', fontFamily: 'Monospace'})
        this.clock = this.time.addEvent
        ({
            delay: 1000,
            callback: this.updateClock,
            callbackScope: this,
            loop: true
        })

        this.time.addEvent
        ({
            delay: this.speedIncrease,
            callback: this.increaseMineSpeed,
            callbackScope: this,
            loop: true
        })

        this.mineSpeedText = this.add.text(75, 225, '      Mine speed will start \n   increasing every 20 seconds', {fontSize: '40px', fontFamily: 'Monospace', visible: false})
        this.mineSpeedText.setVisible(false)
        */
    }

    update()  
    {
        this.timeAlive += this.game.loop.delta
        this.start += this.game.loop.delta

        if (this.timeAlive >= this.timeCheck)
        {
            this.timeAlive -= this.timeCheck

            //anims
        }

        if (this.start >= this.startGame)
        {
            this.backgroundImage.tilePositionX += 2.5
        }


    }

}
