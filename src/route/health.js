const on_get = (request, response) => {
    return response
        .status(200)
        .send()
}

module.exports = {
    on_get
}
