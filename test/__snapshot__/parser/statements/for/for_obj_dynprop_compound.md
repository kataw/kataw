# Kataw parser test case

## Input

`````js
for ({}.u |= c;;) x;
`````

## Options

### Parser Options

`````js
{}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 220,
                        "propertyList": {
                            "kind": 218,
                            "properties": [],
                            "trailingComma": false,
                            "flags": 16,
                            "start": 6,
                            "end": 6
                        },
                        "flags": 32,
                        "start": 5,
                        "end": 7
                    },
                    "expression": {
                        "kind": 134299649,
                        "original": "u",
                        "text": "u",
                        "rawText": "u",
                        "flags": 96,
                        "start": 8,
                        "end": 9
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 9
                },
                "operatorToken": {
                    "kind": 4136,
                    "flags": 64,
                    "start": 9,
                    "end": 12
                },
                "right": {
                    "kind": 134299649,
                    "original": "c",
                    "text": "c",
                    "rawText": " c",
                    "flags": 96,
                    "start": 12,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 14
            },
            "condition": null,
            "incrementor": null,
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "original": "x",
                    "text": "x",
                    "rawText": " x",
                    "flags": 96,
                    "start": 17,
                    "end": 19
                },
                "flags": 16,
                "start": 17,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "for ({}.u |= c;;) x;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 20
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✔ No errors
```

