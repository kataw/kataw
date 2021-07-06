# Kataw parser test case

## Input

`````js
const array = [
    1, /* comment */
];
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
                "transformFlags": 0,
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
                            "text": "array",
                            "rawText": "array",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 11
                        },
                        "type": null,
                        "initializer": {
                            "kind": 119,
                            "elementList": {
                                "kind": 270,
                                "elements": [
                                    {
                                        "kind": 201392130,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 97,
                                        "transformFlags": 0,
                                        "start": 15,
                                        "end": 21
                                    }
                                ],
                                "trailingComma": true,
                                "flags": 33,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 22
                            },
                            "flags": 32,
                            "transformFlags": 8,
                            "start": 13,
                            "end": 38
                        },
                        "flags": 16,
                        "transformFlags": 128,
                        "start": 5,
                        "end": 38
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 38
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 39
        }
    ],
    "isModule": false,
    "source": "const array = [\n    1, /* comment */\n];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed

```javascript

const array = [1,];
```

### Diagnostics

```javascript
✔ No errors
```

