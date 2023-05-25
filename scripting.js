async function sendContact(ev) {
    ev.preventDefault();

    const formName = document.getElementById('form_name').value;
    const formDc = document.getElementById('form_dc').value;
    const formPaypal = document.getElementById('form_email').value;

    const webhookBody = {
        embeds: [{
            title: 'Új Kurzus Jelentkezés',
            color: '55E6A5',
            fields: [
                { name: 'Neve', value: formName },
                { name: 'Discord címe', value: formDc },
                { name: 'Paypal-cím', value: formPaypal },
            ]
        }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/1110645702045999144/uHbwLxvdTnkCLRSYwb9q43dlTIlFs3ZNAVwGwGbHpDfgJP0ojcHQN6Rh9YkzbmtyEVQx';

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
        window.location.replace('https://www.paypal.com/paypalme/bortnyakbalazs/9900huf',"_blank")
    } else {
        alert('Hiba a jelentkezésnél!')
      
    }
}