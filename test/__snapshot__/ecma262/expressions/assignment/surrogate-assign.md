# Kataw parser test case

## Input

`````js
const 𝓱𝓮𝓵𝓵𝓸 = "𝔀𝓸𝓻𝓵𝓭";

//const ၡ𝑀ဒ = 7;

//const Ɐⱱ = "ok"; // BMP

const 𓀸𓀹𓀺 = "ok"; // SMP

const 𡚭𡚮𡚯 = "ok"; // SIP

const 𡚭𓀺ⱱ𝓮 = "ok";

const 𓀺ⱱ𝓮𡚭 = "ok";

//const ⱱ𝓮𡚭𓀺 = "ok";

const 𝓮𡚭𓀺ⱱ = "ok";

`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 80,
                "start": 0,
                "end": 5
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "𝓱𝓮𝓵𝓵𝓸",
                            "rawText": " 𝓱𝓮𝓵𝓵𝓸",
                            "flags": 96,
                            "start": 5,
                            "end": 16
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "𝔀𝓸𝓻𝓵𝓭",
                            "rawText": "\"𝔀𝓸𝓻𝓵𝓭\"",
                            "flags": 96,
                            "start": 18,
                            "end": 31
                        },
                        "flags": 16,
                        "start": 5,
                        "end": 31
                    }
                ],
                "flags": 16777232,
                "start": 5,
                "end": 31
            },
            "flags": 33554448,
            "start": 0,
            "end": 32
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 32,
                "end": 85
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "𓀸𓀹𓀺",
                            "rawText": " 𓀸𓀹𓀺",
                            "flags": 96,
                            "start": 85,
                            "end": 92
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "ok",
                            "rawText": "\"ok\"",
                            "flags": 96,
                            "start": 94,
                            "end": 99
                        },
                        "flags": 16,
                        "start": 85,
                        "end": 99
                    }
                ],
                "flags": 16777232,
                "start": 85,
                "end": 99
            },
            "flags": 33554448,
            "start": 32,
            "end": 100
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 100,
                "end": 114
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "𡚭𡚮𡚯",
                            "rawText": " 𡚭𡚮𡚯",
                            "flags": 96,
                            "start": 114,
                            "end": 121
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "ok",
                            "rawText": "\"ok\"",
                            "flags": 96,
                            "start": 123,
                            "end": 128
                        },
                        "flags": 16,
                        "start": 114,
                        "end": 128
                    }
                ],
                "flags": 16777232,
                "start": 114,
                "end": 128
            },
            "flags": 33554448,
            "start": 100,
            "end": 129
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 129,
                "end": 143
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "𡚭𓀺ⱱ𝓮",
                            "rawText": " 𡚭𓀺ⱱ𝓮",
                            "flags": 96,
                            "start": 143,
                            "end": 151
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "ok",
                            "rawText": "\"ok\"",
                            "flags": 96,
                            "start": 153,
                            "end": 158
                        },
                        "flags": 16,
                        "start": 143,
                        "end": 158
                    }
                ],
                "flags": 16777232,
                "start": 143,
                "end": 158
            },
            "flags": 33554448,
            "start": 129,
            "end": 159
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 159,
                "end": 166
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "𓀺ⱱ𝓮𡚭",
                            "rawText": " 𓀺ⱱ𝓮𡚭",
                            "flags": 96,
                            "start": 166,
                            "end": 174
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "ok",
                            "rawText": "\"ok\"",
                            "flags": 96,
                            "start": 176,
                            "end": 181
                        },
                        "flags": 16,
                        "start": 166,
                        "end": 181
                    }
                ],
                "flags": 16777232,
                "start": 166,
                "end": 181
            },
            "flags": 33554448,
            "start": 159,
            "end": 182
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "start": 182,
                "end": 214
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "𝓮𡚭𓀺ⱱ",
                            "rawText": " 𝓮𡚭𓀺ⱱ",
                            "flags": 96,
                            "start": 214,
                            "end": 222
                        },
                        "type": null,
                        "initializer": {
                            "kind": 201392131,
                            "text": "ok",
                            "rawText": "\"ok\"",
                            "flags": 96,
                            "start": 224,
                            "end": 229
                        },
                        "flags": 16,
                        "start": 214,
                        "end": 229
                    }
                ],
                "flags": 16777232,
                "start": 214,
                "end": 229
            },
            "flags": 33554448,
            "start": 182,
            "end": 230
        }
    ],
    "isModule": false,
    "source": "const 𝓱𝓮𝓵𝓵𝓸 = \"𝔀𝓸𝓻𝓵𝓭\";\n\n//const ၡ𝑀ဒ = 7;\n\n//const Ɐⱱ = \"ok\"; // BMP\n\nconst 𓀸𓀹𓀺 = \"ok\"; // SMP\n\nconst 𡚭𡚮𡚯 = \"ok\"; // SIP\n\nconst 𡚭𓀺ⱱ𝓮 = \"ok\";\n\nconst 𓀺ⱱ𝓮𡚭 = \"ok\";\n\n//const ⱱ𝓮𡚭𓀺 = \"ok\";\n\nconst 𝓮𡚭𓀺ⱱ = \"ok\";\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 231
}
```

### Printed

```javascript

const  𝓱𝓮𝓵𝓵𝓸 = '"𝔀𝓸𝓻𝓵𝓭"';
 //const ၡ𝑀ဒ = 7;
//const Ɐⱱ = "ok"; // BMP
const  𓀸𓀹𓀺 = '"ok"';// SMP
const  𡚭𡚮𡚯 = '"ok"';// SIP
const  𡚭𓀺ⱱ𝓮 = '"ok"';
const  𓀺ⱱ𝓮𡚭 = '"ok"';
 //const ⱱ𝓮𡚭𓀺 = "ok";
const  𝓮𡚭𓀺ⱱ = '"ok"';

```

### Diagnostics

```javascript
✔ No errors
```

