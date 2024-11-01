/*--------------------------------------------------------------
 * TypeScript Scripts: Contact
 *----------------------------------------------------------------
 * Description: Aesthetic and test functions for contact form
 * 
 * Package: rgibsonmusic
*/

export function handleFormSubmitTest(form: HTMLFormElement) {
    form.onsubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        console.log({ name, email, message });
        window.location.replace(`/contact?success=true&name=${name}`);
    }
};
    
function cleanInput (str){
    if(!str) return null
    let temp = str.trim()
    return temp[0].toUpperCase() + temp.substring(1)
}

export function showThankYouMessage(message: Element) {
    const inputs = new URLSearchParams(window.location.search);

    if (inputs.get('success')) {
        message.classList.remove('contact-success-message__hidden');
        message.classList.add('contact-success-message__visible');
    
        const name = document.getElementById('contact-success-message__name');
    
        let newName = cleanInput(inputs.get('name'));
        name.textContent = newName;
    }

}

function getRandomNumber(max: number) {
    return Math.floor(Math.random() * max);
}

export function generateContactPlaceholders() {
    let contacts = [
        {
            name: 'Ludwig van Beethoven',
            email: 'luddy.b@hammerklavier.example'
        },{
            name: 'Dmitri Shostakovich',
            email: 'thenose@shostakovich.example'
        },{
            name: 'Éliane Radigue',
            email: 'elaineradigue32@adnos.example'
        },{
            name: 'Daphne Oram',
            email: 'oram.daphne@oramics.example',
        },{
            name: 'Liza Lim',
            email: 'liza_lim@crocodilestreet.example'
        }
    ];

    let messages = [
        'I would like to ask...',
        'What\'s your next project?',
        'Are you taking commissions?',
        'Would you like to work together?',
        'I wanted to know...',
        'I\'m a fan of your works!'
    ];

    let contact = contacts[getRandomNumber(contacts.length - 1)];
    let message = messages[getRandomNumber(messages.length - 1)];

    let nameInput = document.getElementById('contact-form__name-input') as HTMLInputElement;
    let emailInput = document.getElementById('contact-form__email-input') as HTMLInputElement;
    let messageInput = document.getElementById('contact-form__message-input') as HTMLTextAreaElement;

    nameInput.placeholder = contact.name;
    emailInput.placeholder = contact.email;
    messageInput.placeholder = message;
}

export function handleNameChange(e) {
    const redirect = document.getElementById('contact-form__redirect') as HTMLInputElement;
    redirect.value = `${redirect.value}${e.target.value}`;
}