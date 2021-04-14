# Kataw parser test case

## Input

`````js
for ([x.y] in obj);
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 129,
                            "member": {
                                "kind": 81921,
                                "text": "x",
                                "rawText": "x",
                                "flags": 768,
                                "start": 6,
                                "end": 7
                            },
                            "expression": {
                                "kind": 81921,
                                "text": "y",
                                "rawText": "y",
                                "flags": 768,
                                "start": 8,
                                "end": 9
                            },
                            "autofix": 0,
                            "flags": 256,
                            "start": 6,
                            "end": 9
                        }
                    ],
                    "trailingComma": false,
                    "flags": 256,
                    "start": 6,
                    "end": 9
                },
                "flags": 256,
                "start": 5,
                "end": 10
            },
            "expression": {
                "kind": 81921,
                "text": "obj",
                "rawText": "obj",
                "flags": 768,
                "start": 13,
                "end": 17
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 18,
                "end": 19
            },
            "flags": 128,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "text": "for ([x.y] in obj);",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [],
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
@{x2714}@ No errors
```

