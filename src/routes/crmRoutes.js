import { addNewContact } from '../controllers/crmControllers'

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        //middleware
        console.log(`Request de: ${req.originalUrl}`)
        console.log(`Request type : ${req.method}`)
        next()
    }, (req, res, next) => {
            res.send('demande GET réussie')
    })

    .post(addNewContact)

    app.route('/contact/:contactId')
    .put((req, res) =>
        res.send('demande PUT réussie')
    )

    .delete((req, res) =>
        res.send('demande DELETE réussie')
    )
}

export default routes
