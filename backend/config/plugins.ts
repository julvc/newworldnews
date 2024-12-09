export default ({ env }) => ({
    "video-field": {
        enabled: true,
    },
    upload: {
        config: {
            provider: "local",
            providerOptions: {
                sizeLimit: 1000000, // Límite de tamaño en bytes (1MB en este ejemplo)
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },
});