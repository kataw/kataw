# Kataw parser test case

## Input

`````js
const m = import(a + b);
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
                            "text": "m",
                            "rawText": "m",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 5,
                            "end": 7
                        },
                        "type": null,
                        "initializer": {
                            "kind": 206,
                            "importKeyword": {
                                "kind": 37814364,
                                "flags": 64,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 16
                            },
                            "expression": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 17,
                                    "end": 18
                                },
                                "operatorToken": {
                                    "kind": 99634,
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 18,
                                    "end": 20
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 20,
                                    "end": 22
                                },
                                "flags": 96,
                                "transformFlags": 5120,
                                "start": 17,
                                "end": 22
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 23
                        },
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 5,
                        "end": 23
                    }
                ],
                "flags": 16777232,
                "transformFlags": 0,
                "start": 5,
                "end": 23
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "const m = import(a + b);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

const m = import(a + b);

```

### Diagnostics

```javascript
✔ No errors
```

