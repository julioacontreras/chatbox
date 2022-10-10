const generateTrigger = (triggerKey) => {
    if (triggerKey === 'trigger-1') {
        return {
            options: [
                'opcion 1', 'opcion 2', 'opcion 3',
            ]
        }
    }
}

module.exports = { generateTrigger }