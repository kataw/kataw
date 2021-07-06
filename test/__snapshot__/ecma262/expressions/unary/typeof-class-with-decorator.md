# Kataw parser test case

## Input

`````js
typeof @foo class {};
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 126,
                "operandToken": {
                    "kind": 138477613,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 6
                },
                "operand": {
                    "kind": 189,
                    "decorators": {
                        "kind": 207,
                        "elements": [
                            {
                                "kind": 34611453,
                                "decoratorToken": {
                                    "kind": 34611453,
                                    "flags": 64,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 8
                                },
                                "expression": {
                                    "kind": 134299649,
                                    "text": "foo",
                                    "rawText": "foo",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 11
                                },
                                "flags": 0,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 11
                            }
                        ],
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 11
                    },
                    "classKeyword": {
                        "kind": 37822544,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 17
                    },
                    "name": null,
                    "typeParameters": null,
                    "tail": {
                        "kind": 277,
                        "classHeritage": null,
                        "body": {
                            "kind": 303,
                            "elements": [],
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 19
                        },
                        "flags": 17,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 20
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 20
                },
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 20
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "typeof @foo class {};",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript
typeof @ foo class {};
```

### Diagnostics

```javascript
✔ No errors
```

