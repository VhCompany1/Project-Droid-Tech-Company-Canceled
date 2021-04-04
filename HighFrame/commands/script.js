let commands = [
    //config
    'autorole',
    'byebye',
    'cmdblock',
    'contador',
    'lang',
    'logs',
    'notification',
    'prefix',
    'serverstats',
    'welcome',
    //Economy
    'coins',
    'daily',
    'deposit',
    'factory',
    'withdraw',
    'work',
    //Information   
    'avatar',
    'botinfo',
    'help',
    'ping',
    'rank',
    'serverinfo',
    'userinfo',
    'xp',
    //Minecraft
    'mcbody',
    'mcbust',
    'mchead',
    'mchelm',
    'mcplayer',
    'mcserver',
    'mcskin',
    //Miscellaneous
    'about',
    'inventory',
    'profile',
    'rep',
    'reps',
    'ship',
    'shop',
    //Moderation
    'ban',
    'kick',
    //Registrador
    'registrador',
    'registrar',
    //Utils
    'reminder'
]

let desc = {
    autorole: 'Comando para configurar o sistema de autorole', //autorole
    byebye: 'Comando para configurar o sistema de mensagens de saída', //byebye
    cmdblock: 'Comando para configurar o sistema de bloqueador comandos do Bot.', //cmdblock
    contador: 'Comando para configurar o sistema de contador em chat', //contador
    lang: 'Comando para alterar a linguagem do bot no servidor.', //lang
    logs: 'Comando para configurar o canal de logs do servidor', //logs
    notification: 'Comando para auterar sistema de Notificação do Bot', //Notification
    prefix: 'Comando para configurar o prefixo do bot no servidor', //Prefix
    serverstats: 'Comando para configurar o sistema de Status do Servidor em Canais', //ServerStats
    welcome: 'Comando para configurar o sistema de mensagens de entrada', //Welcome
    coins: 'Comando para olhar seus coins/do usuário', //Coins
    daily: 'Comando para pegar seus coins diário', //Daily
    deposit: 'Comando para depositar seu dinheiro', //Deposit
    factory: 'Comando do sistema de Fábrica do Bot', //Factory
    withdraw: 'Comando para sacar seu dinheiro', //Withdraw
    work: 'Comando para trabalhar', //Work
    avatar: 'Comando para olhar o avatar do membro', //Avatar
    botinfo: 'Comando para olhar as informações do Bot', //Botinfo
    help: 'Comando para ver informações dos comandos do bot', //Help
    ping: 'Comando para olhar o ping da host do bot', //Ping
    rank: 'Comando para olhar o rank de xp', //Rank
    serverinfo: 'Comando para ver informações sobre o servidor', //Serverinfo
    userinfo: 'Comando para ver informações de algum usuário', //Userinfo
    xp: 'Comando para olhar seu xp', //Xp
    mcbody: 'Comando para pegar o Body de uma Skin de Minecraft.', //McBody
    mcbust: 'Comando para pegar o Body de uma Skin de Minecraft.', //McBust
    mchead: 'Comando para pegar o Head de uma Skin de Minecraft.', //McHead
    mchelm: 'Comando para pegar o Helm de uma Skin de Minecraft.', //McHelm
    mcplayer: 'Comando para pegar a Skin de uma Skin de Minecraft.', //McPlayer
    mcserver: 'Comando para pegar informações de um servidor de Minecraft.', //McServer
    mcskin: 'Comando para pegar o Skin de uma Skin de Minecraft.', //McSkin
    about: 'Troque o sobre do seu perfil', //About
    inventory: 'Breve', //Inventory
    profile: 'Veja seu perfil com este comando', //Profile
    rep: 'Dê rep para seus amigos.', //Rep
    reps: 'Dê rep para seus amigos.', //Reps
    ship: 'Breve', //Ship
    shop: 'Breve', //Shop
    ban: 'Comando para banir membros do seu servidor', //Ban
    kick: 'Comando para kickar membros do seu servidor', //Kick
    registrador: 'Comando para registrar membros em seu servidor.', //Registrador
    registrar: 'Comando para registrar membros em seu servidor.', //Registrar
    reminder: 'Comando para adicionar um lembrete.', //Reminder   
}

let box = window.document.getElementById('box')

for (let c = 0; c < commands.length; c++) {


    let name = commands[c]

    if (name == 'autorole') {
        box.innerHTML += `<h1>Config</h1>`
    } else if (name == 'coins') {
        box.innerHTML += `<h1>Economy</h1>`
    } else if (name == 'avatar') {
        box.innerHTML += `<h1>Information</h1>`
    } else if (name == 'mcbody') {
        box.innerHTML += `<h1>Minecraft</h1>`
    } else if (name == 'about') {
        box.innerHTML += `<h1>Miscellaneous</h1>`
    } else if (name == 'ban') {
        box.innerHTML += `<h1>Moderation</h1>`
    } else if (name == 'registrador') {
        box.innerHTML += `<h1>Registrador</h1>`
    } else if (name == 'reminder') {
        box.innerHTML += `<h1>Utils</h1>`
    }

    box.innerHTML += `<p> <number>${c + 1} </number>  !${name} : ${desc[name]} </p> <br>    `
}