def call(Map config)
{
    node {
        echo "I am a library ${config.message}"
    }
}