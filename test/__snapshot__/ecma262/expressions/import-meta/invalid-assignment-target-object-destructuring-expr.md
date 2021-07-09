# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
({a: import.meta} = {});
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
                                        "start": 2,
                                        "end": 3
                                    },
                                    "right": {
                                        "kind": 299,
                                        "importKeyword": {
                                            "kind": 37814364,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 4,
                                            "end": 11
                                        },
                                        "metaIdentifier": {
                                            "kind": 16595,
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 12,
                                            "end": 16
                                        },
                                        "flags": 11,
                                        "transformFlags": 0,
                                        "start": 96,
                                        "end": 16
                                    },
                                    "flags": 32,
                                    "transformFlags": 128,
                                    "start": 2,
                                    "end": 16
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 2,
                            "end": 16
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 1,
                        "end": 17
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 17,
                        "end": 19
                    },
                    "right": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 21
                        },
                        "flags": 48,
                        "transformFlags": 8,
                        "start": 19,
                        "end": 22
                    },
                    "flags": 32,
                    "transformFlags": 128,
                    "start": 1,
                    "end": 22
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 34,
                "end": 23
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": true,
    "source": "({a: import.meta} = {});",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 1, end: 19

```

