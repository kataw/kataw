# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
[...import.meta] = [];
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 223,
                                "ellipsisToken": {
                                    "kind": 524302,
                                    "flags": 64,
                                    "start": 1,
                                    "end": 4
                                },
                                "argument": {
                                    "kind": 120,
                                    "expression": {
                                        "kind": 207,
                                        "importKeyword": {
                                            "kind": 37814364,
                                            "flags": 64,
                                            "start": 4,
                                            "end": 10
                                        },
                                        "metaIdentifier": {
                                            "kind": 16595,
                                            "flags": 96,
                                            "start": 11,
                                            "end": 15
                                        },
                                        "flags": 10,
                                        "start": 96,
                                        "end": 15
                                    },
                                    "flags": 16,
                                    "start": 10,
                                    "end": 15
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 15
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 16
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 16,
                    "end": 18
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 20,
                        "end": 20
                    },
                    "flags": 32,
                    "start": 18,
                    "end": 21
                },
                "flags": 32,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": true,
    "source": "[...import.meta] = [];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 15, end: 16
✖ The left-hand side must be a variable or a property access. - start: 16, end: 18

```

