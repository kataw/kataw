# Kataw parser test case

## Input

`````js
s = {"foo": await a = x} = x
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "s",
                    "rawText": "s",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 219,
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 201392131,
                                        "text": "foo",
                                        "rawText": "\"foo\"",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 10
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "await",
                                        "rawText": "await",
                                        "flags": 96,
                                        "start": 11,
                                        "end": 17
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 17
                                },
                                {
                                    "kind": 205,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 17,
                                        "end": 19
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 21,
                                        "end": 23
                                    },
                                    "flags": 32,
                                    "start": 17,
                                    "end": 23
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 5,
                            "end": 23
                        },
                        "flags": 32,
                        "start": 3,
                        "end": 24
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 24,
                        "end": 26
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 26,
                        "end": 28
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 28
                },
                "flags": 32,
                "start": 0,
                "end": 28
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "s = {\"foo\": await a = x} = x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ',' expected - start: 17, end: 19
✖ The left-hand side must be a variable or a property access. - start: 24, end: 26

```

