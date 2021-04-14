# Kataw parser test case

## Input

`````js
for ([].b in c) d;
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
            "forKeyword": {
                "kind": 37757017,
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "kind": 166,
            "initializer": {
                "kind": 129,
                "member": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 6,
                        "end": 6
                    },
                    "flags": 256,
                    "start": 5,
                    "end": 7
                },
                "expression": {
                    "kind": 81921,
                    "text": "b",
                    "rawText": "b",
                    "flags": 768,
                    "start": 8,
                    "end": 9
                },
                "autofix": 0,
                "flags": 256,
                "start": 0,
                "end": 9
            },
            "expression": {
                "kind": 81921,
                "text": "c",
                "rawText": "c",
                "flags": 768,
                "start": 12,
                "end": 14
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 81921,
                    "text": "d",
                    "rawText": "d",
                    "flags": 768,
                    "start": 15,
                    "end": 17
                },
                "flags": 128,
                "start": 15,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "text": "for ([].b in c) d;",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

