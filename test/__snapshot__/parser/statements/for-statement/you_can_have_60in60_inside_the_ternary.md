# Kataw parser test case

## Input

`````js
for (true ? a in b : {}; false; ) ;
`````

## Options

### Parser Options

`````js
{}
`````

### Printer Options

`````js
{
  "tabWidth": 2,
  "printWidth": 80,
  "useTabs": false,
  "bracketSpacing": true
}
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "statements": [
        {
            "kind": 165,
            "initializer": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134,
                    "value": true,
                    "autofix": 0,
                    "flags": 768,
                    "start": 5,
                    "end": 9
                },
                "questionToken": {
                    "kind": 22,
                    "autofix": 0,
                    "flags": 0,
                    "start": 9,
                    "end": 11
                },
                "consequent": {
                    "kind": 198,
                    "left": {
                        "kind": 81921,
                        "value": "a",
                        "autofix": 0,
                        "flags": 768,
                        "start": 11,
                        "end": 13
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "autofix": 0,
                        "flags": 0,
                        "start": 13,
                        "end": 16
                    },
                    "right": {
                        "kind": 81921,
                        "value": "b",
                        "autofix": 0,
                        "flags": 768,
                        "start": 16,
                        "end": 18
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 11,
                    "end": 18
                },
                "colonToken": {
                    "kind": 21,
                    "autofix": 0,
                    "flags": 0,
                    "start": 18,
                    "end": 20
                },
                "alternate": {
                    "kind": 220,
                    "propertyList": {
                        "kind": 218,
                        "properties": [],
                        "trailingComma": false,
                        "multiline": false,
                        "autofix": 0,
                        "flags": 0,
                        "start": 22,
                        "end": 22
                    },
                    "autofix": 0,
                    "flags": 256,
                    "start": 20,
                    "end": 23
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 23
            },
            "condition": null,
            "incrementor": {
                "kind": 134,
                "value": false,
                "autofix": 0,
                "flags": 768,
                "start": 24,
                "end": 30
            },
            "statement": {
                "kind": 168,
                "autofix": 0,
                "flags": 128,
                "start": 33,
                "end": 35
            },
            "autofix": 0,
            "flags": 128,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "for (true ? a in b : {}; false; ) ;",
    "fileName": "__root__",
    "autofix": 0,
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

