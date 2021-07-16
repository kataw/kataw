# Kataw parser test case

## Input

`````js
for ({a: x + y} = z in obj);
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [
                            {
                                "kind": 219,
                                "asteriskToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 6,
                                    "end": 7
                                },
                                "right": {
                                    "kind": 198,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 10
                                    },
                                    "operatorToken": {
                                        "kind": 99634,
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 10,
                                        "end": 12
                                    },
                                    "right": {
                                        "kind": 134299649,
                                        "text": "y",
                                        "rawText": "y",
                                        "flags": 96,
                                        "transformFlags": 0,
                                        "start": 12,
                                        "end": 14
                                    },
                                    "flags": 96,
                                    "transformFlags": 5120,
                                    "start": 6,
                                    "end": 14
                                },
                                "flags": 32,
                                "transformFlags": 128,
                                "start": 6,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "flags": 16,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 14
                    },
                    "flags": 48,
                    "transformFlags": 8,
                    "start": 5,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 17
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "z",
                        "rawText": "z",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 19
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 96,
                        "transformFlags": 8192,
                        "start": 19,
                        "end": 22
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 22,
                        "end": 26
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 17,
                    "end": 26
                },
                "flags": 32,
                "transformFlags": 128,
                "start": 5,
                "end": 26
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "rawText": "",
                "flags": 64,
                "transformFlags": 0,
                "start": 26,
                "end": 26
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "transformFlags": 0,
                "start": 27,
                "end": 28
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "for ({a: x + y} = z in obj);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 5, end: 17
✖ Identifier expected - start: 26, end: 27

```

