class BotMessage {
    constructor(name, content) {
        this.content = content
        var p = document.createElement('div')
        id('messages_container').appendChild(p)
        p.className = 'message'
        p.style.background = 'lightgrey'
        p.textContent = `${name} > ${content}`
        p.style.opacity = 0;
        var a = 0;
        var op = setInterval(function() {
            p.style.opacity = a
            a += 0.1
            if(p.style.opacity == 1) {
                clearInterval(op)
            }
        }, 20)
        this.e = p
    }
}

class Contact {
     constructor(name) {
          this.name = name
          this.elem = document.createElement('span')
          id('contacts').appendChild(this.elem)
          this.elem.className = "contact"
          this.elem.innerHTML = `<div class="contact-name">${name}</div>`
     }
     openDM() {
          current = this
          // anything else?
         
         
         // yes
     }
}

class Dialogue {
     constructor(text) {
          var p = document.createElement('div')
          id('messages_container').appendChild(p)
          p.style.background = '#eeeeee'
          p.innerHTML = text
          p.className = 'message'
          p.style.opacity = 0;
          var a = 0;
          var op = setInterval(function() {
            p.style.opacity = a
            a += 0.1
            if(p.style.opacity == 1) {
                clearInterval(op)
            }
        }, 20)
        this.e = p
     }
}

class UserMessage {
    constructor(content) {
        var p = document.createElement('div')
        id('messages_container').appendChild(p)
        p.className = 'message'
        p.textContent = `${user.name} > ${content}`
        p.style.opacity = 0;
        var a = 0;
        var op = setInterval(function() {
            p.style.opacity = a
            a += 0.1
            if(p.style.opacity == 1) {
                clearInterval(op)
            }
        }, 20)
        this.e = p
    }
}
