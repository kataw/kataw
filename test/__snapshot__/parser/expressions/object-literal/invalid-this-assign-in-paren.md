# Kataw parser test case

## Input

`````js
({a:this}=0)
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
                                    "generatorToken": null,
                                    "left": {
                                        "kind": 134299649,
                                        "text": "a",
                                        "rawText": "a",
                                        "flags": 96,
                                        "start": 2,
                                        "end": 3
                                    },
                                    "right": {
                                        "kind": 4276321,
                                        "flags": 0,
                                        "start": 4,
                                        "end": 8
                                    },
                                    "flags": 32,
                                    "start": 2,
                                    "end": 8
                                }
                            ],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 2,
                            "end": 8
                        },
                        "flags": 48,
                        "start": 1,
                        "end": 9
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 9,
                        "end": 10
                    },
                    "right": {
                        "kind": 201392130,
                        "text": 0,
                        "rawText": "0",
                        "flags": 96,
                        "start": 10,
                        "end": 11
                    },
                    "flags": 32,
                    "start": 1,
                    "end": 11
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "({a:this}=0)",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ The left-hand side must be a variable or a property access. - start: 9, end: 10

```

