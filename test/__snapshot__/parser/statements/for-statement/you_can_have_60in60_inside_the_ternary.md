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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134,
                    "text": true,
                    "flags": 96,
                    "start": 5,
                    "end": 9
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 0,
                    "start": 9,
                    "end": 11
                },
                "consequent": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 11,
                        "end": 13
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 64,
                        "start": 13,
                        "end": 16
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 96,
                        "start": 16,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 11,
                    "end": 18
                },
                "colonToken": {
                    "kind": 21,
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
                        "flags": 16,
                        "start": 22,
                        "end": 22
                    },
                    "flags": 32,
                    "start": 20,
                    "end": 23
                },
                "flags": 32,
                "start": 0,
                "end": 23
            },
            "condition": null,
            "incrementor": {
                "kind": 134,
                "text": false,
                "flags": 96,
                "start": 24,
                "end": 30
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 33,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "text": "for (true ? a in b : {}; false; ) ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
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

