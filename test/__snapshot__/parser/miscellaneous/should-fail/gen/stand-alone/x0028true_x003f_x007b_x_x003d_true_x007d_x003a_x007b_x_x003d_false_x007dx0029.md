# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-12
- From: d
- Path: e
> :: test: stand-alone
> :: case: (true ? { x = true } : { x = false })
## Options

`````js
{}
`````
## Input

`````js
(true ? { x = true } : { x = false })
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
                    "kind": 197,
                    "shortCircuit": {
                        "kind": 24752947,
                        "flags": 96,
                        "start": 1,
                        "end": 5
                    },
                    "questionToken": {
                        "kind": 134217750,
                        "flags": 64,
                        "start": 5,
                        "end": 7
                    },
                    "consequent": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 9,
                                        "end": 11
                                    },
                                    "right": {
                                        "kind": 24752947,
                                        "flags": 96,
                                        "start": 13,
                                        "end": 18
                                    },
                                    "flags": 32,
                                    "start": 9,
                                    "end": 18
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 9,
                            "end": 18
                        },
                        "flags": 48,
                        "start": 7,
                        "end": 20
                    },
                    "colonToken": {
                        "kind": 21,
                        "flags": 64,
                        "start": 20,
                        "end": 22
                    },
                    "alternate": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [
                                {
                                    "kind": 301,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 96,
                                        "start": 24,
                                        "end": 26
                                    },
                                    "right": {
                                        "kind": 205586437,
                                        "flags": 96,
                                        "start": 28,
                                        "end": 34
                                    },
                                    "flags": 32,
                                    "start": 24,
                                    "end": 34
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 24,
                            "end": 34
                        },
                        "flags": 48,
                        "start": 22,
                        "end": 36
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 36
                },
                "flags": 32,
                "start": 0,
                "end": 37
            },
            "flags": 16,
            "start": 0,
            "end": 37
        }
    ],
    "isModule": false,
    "source": "(true ? { x = true } : { x = false })",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 37
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 20, end: 22
✖ Did you mean to use a ':'? An '=' can only follow a property name when the containing object literal is part of a destructuring - start: 36, end: 37

```

