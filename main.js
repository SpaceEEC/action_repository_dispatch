const { getInput, setFailed } = require('@actions/core');
const fetch = require('node-fetch');

(async () => {
    try {
        const repository = getInput('target_repository', { required: true })
        const event_type = getInput('event_type', { required: true })
        const pat = getInput('pat', { required: true })

        const res = await fetch(`https://api.github.com/repos/${repository}/dispatches`, {
            method: 'post',
            body: JSON.stringify({ event_type }),
            headers: {
                Accept: 'application/vnd.github.everest-preview+json',
                Authorization: `token ${pat}`,
                'Content-Type': 'application/json'
            },
        });

        if (res.status == 204) return;

        const { message } = await res.json();

        setFailed(`Request failed with code ${res.status} and message ${message}`);
    } catch (error) {
        setFailed(error.message);
    }
})();