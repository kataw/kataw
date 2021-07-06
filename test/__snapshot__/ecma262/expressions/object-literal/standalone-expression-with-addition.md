# Kataw parser test case

## Input

`````js
({["x" + "y"]: 10});
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
                "kind": 121,
                "expression": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 194,
                                    "expression": {
                                        "kind": 198,
                                        "left": {
                                            "kind": 201392131,
                                            "text": "x",
                                            "rawText": "\"x\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 3,
                                            "end": 6
                                        },
                                        "operatorToken": {
                                            "kind": 99634,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 6,
                                            "end": 8
                                        },
                                        "right": {
                                            "kind": 201392131,
                                            "text": "y",
                                            "rawText": "\"y\"",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 12
                                        },
                                        "flags": 96,
                                        "transformFlags": 1024,
                                        "start": 3,
                                        "end": 12
                                    },
                                    "flags": 32,
                                    "transformFlags": 0,
                                    "start": 2,
                                    "end": 13
                                },
                                "right": {
                                    "kind": 201392130,
                                    "text": 10,
                                    "rawText": "10",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 17
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 2,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 2,
                        "end": 17
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 1,
                    "end": 18
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 19
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "({[\"x\" + \"y\"]: 10});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript

({["\"x\"" + "\"y\""]: 10});
```

### Diagnostics

```javascript
✔ No errors
```

