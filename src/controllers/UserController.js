class UsersController {
    async create(req, res) {
        const { name, email, password, telefone } = req.body;

        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (regexEmail.test(email)) {
        }

        res.json({ name, email, password, telefone });
    }
}

module.exports = UsersController();
