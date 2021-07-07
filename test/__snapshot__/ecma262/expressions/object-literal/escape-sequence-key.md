# Kataw parser test case

## Input

`````js
// #6235
const a = {
  '\u2139': 'why "\\u2139" is converted to "i"?',
};

const b = {
  "\x66\x69\x73\x6b\x65\x72": "\x66\x69\x73\x6b\x65\x72",
};
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
                "flags": 81,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 16
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "ℹ",
                                            "rawText": "'\\u2139'",
                                            "flags": 4210785,
                                            "transformFlags": 0,
                                            "start": 20,
                                            "end": 31
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "why \"\\u2139\" is converted to \"i\"?",
                                            "rawText": "'why \"\\\\u2139\" is converted to \"i\"?'",
                                            "flags": 4194400,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 69
                                        },
                                        "flags": 4210721,
                                        "transformFlags": 128,
                                        "start": 20,
                                        "end": 69
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 4210705,
                                "transformFlags": 0,
                                "start": 20,
                                "end": 70
                            },
                            "flags": 4210737,
                            "transformFlags": 8,
                            "start": 18,
                            "end": 72
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 14,
                        "end": 72
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 14,
                "end": 72
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 73
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 37757004,
                "flags": 81,
                "transformFlags": 0,
                "start": 73,
                "end": 80
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 80,
                            "end": 82
                        },
                        "type": null,
                        "initializer": {
                            "kind": 220,
                            "propertyList": {
                                "kind": 218,
                                "properties": [
                                    {
                                        "kind": 219,
                                        "asteriskToken": null,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "fisker",
                                            "rawText": "\"\\x66\\x69\\x73\\x6b\\x65\\x72\"",
                                            "flags": 97,
                                            "transformFlags": 0,
                                            "start": 86,
                                            "end": 115
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "fisker",
                                            "rawText": "\"\\x66\\x69\\x73\\x6b\\x65\\x72\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 116,
                                            "end": 143
                                        },
                                        "flags": 33,
                                        "transformFlags": 128,
                                        "start": 86,
                                        "end": 143
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 17,
                                "transformFlags": 0,
                                "start": 86,
                                "end": 144
                            },
                            "flags": 49,
                            "transformFlags": 8,
                            "start": 84,
                            "end": 146
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 80,
                        "end": 146
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 80,
                "end": 146
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 73,
            "end": 147
        }
    ],
    "isModule": false,
    "source": "// #6235\nconst a = {\n  '\\u2139': 'why \"\\\\u2139\" is converted to \"i\"?',\n};\n\nconst b = {\n  \"\\x66\\x69\\x73\\x6b\\x65\\x72\": \"\\x66\\x69\\x73\\x6b\\x65\\x72\",\n};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 147
}
```

### Printed

```javascript
const a = { "'\u2139'": "'why \"\\u2139\" is converted to \"i\"?'" };
const b = { "\"\x66\x69\x73\x6b\x65\x72\"": "\"\x66\x69\x73\x6b\x65\x72\"" };

```

### Diagnostics

```javascript
✔ No errors
```

