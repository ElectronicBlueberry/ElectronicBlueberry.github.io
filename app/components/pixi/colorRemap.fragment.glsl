#version 300 es
in vec2 vTextureCoord;
out vec4 color;

uniform sampler2D uTexture;

const vec4 col0 = vec4(1.0, 1.0, 1.0, 1.0);
const vec4 col1 = vec4(0.863, 0.902, 0.988, 1.0);
const vec4 col2 = vec4(0.965, 0.816, 0.965, 1.0);

const vec4[6] colors = vec4[6](
    col2,
    col2,
    col1,
    col1,
    col0,
    col0
);

const float[6] stops = float[6](
    0.0,
    0.23,
    0.25,
    0.48,
    0.5,
    1.0
);

void main(void) {
    vec4 col = texture(uTexture, vTextureCoord);
    float val = col.x;

    int index = 0;

    for (int i = 0; i < stops.length() - 1; i++) {
        float stop = stops[i];

        bool isBetween = val >= stop;
        index = isBetween ? i : index;
    }

    float fromStop = stops[index];
    float toStop = stops[index + 1];

    float range = toStop - fromStop;
    float offset = (val - fromStop) / range;

    vec4 fromCol = colors[index];
    vec4 toCol = colors[index + 1];

    color = mix(fromCol, toCol, offset);
}
