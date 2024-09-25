/** @type {import('./$types').Actions}**/

export const actions  = {
    login: async ({request}) => {
        const data = await request.formData();
        console.log(data)
        const email = data.get('email');
        const password = data.get('password');

        console.log(email, "--------", password)
    }
}