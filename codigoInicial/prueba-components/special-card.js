class SpecialCard extends HTMLElement{
    myCardAtributo=""
    cardAtributo= 'Nueva tarjeta'


    constructor(){
    super()
    this.attachShadow({mode:'open'})
    this.myCardAtributo=this.getAttribute('my-cardAtributo')

    }


    connectedCallback(){

        this.render ()
    }



    cardAtributoChangedCallback(name,oldCard,newCard){

        if(name==='myCardAtributo'){
            this.myCardAtributo=newCard
            this.myCardAtributo=oldCard
        }

    }

        


    render (){

        const {ShadowRoot} = this;
        ShadowRoot.innerHTML=''
        ShadowRoot.appendChild(this.htmlToElement().content)



    }

        htmlToElement() {
        const cardAtributo= this.card ? `my-cardAtributo="${this.card}"`:''
        const html = `
        card:default {
            display: grid
            grid-template-columns: 1fr
            grid-gap: 1rem
            width: 25%
            height: 1px
            padding: 2rem 1rem
            margin-right: auto
            box-sizing: border-box
            grid-template-columns: repeat(2, 1fr)
            background-color: var(--primary-darkest-color)
            color:var(--secondary-complement-color)
            border-color: var(--neutral-light-color)
            transition-duration: all 0.5s linear 0s

           }     
           card::before{
            content: ""
            display: inline
            width: 10%
            height: 1px
            margin-left: 1rem
            
           background-color: var(--secondary-color)
           opacity: 1
           box-sizing: content-box

            transition: 0.1s all  linear 0s




         }


           card::after{
            content: normal
            display: inline
            width: 3rem
            margin: auto
           background-color: var(--primary-color)
           opacity: 1
           box-sizing: content-box

            transition: 0.1s all  linear 0s



           }

          

         </style>





    }

    <card ${cardAtributo}>
    <slot  name ="card-text">${this.cardAtributo}

    `;

    const template =document.createElement('template')
    template.innerHTML=html.trimStart()
    return this.myCardAtributo
   


}
   

    }
    window.customElements.define('my-new', Card)