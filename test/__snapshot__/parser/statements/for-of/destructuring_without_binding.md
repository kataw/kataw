# Kataw parser test case

## Input

`````js
for ([a.b] of c) d
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
            "kind": 167,
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "ofKeyword": {
                "kind": 16793717,
                "flags": 64,
                "start": 10,
                "end": 13
            },
            "initializer": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 129,
                            "member": {
                                "kind": 134299649,
                                "original": "a",
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 6,
                                "end": 7
                            },
                            "expression": {
                                "kind": 134299649,
                                "original": "b",
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 8,
                                "end": 9
                            },
                            "flags": 32,
                            "start": 6,
                            "end": 9
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 6,
                    "end": 9
                },
                "flags": 32,
                "start": 5,
                "end": 10
            },
            "expression": {
                "kind": 134299649,
                "original": "c",
                "text": "c",
                "rawText": " c",
                "flags": 96,
                "start": 13,
                "end": 15
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 134299649,
                    "original": "d",
                    "text": "d",
                    "rawText": " d",
                    "flags": 96,
                    "start": 16,
                    "end": 18
                },
                "flags": 16,
                "start": 16,
                "end": 18
            },
            "awaitKeyword": null,
            "flags": 16,
            "start": 0,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "for ([a.b] of c) d",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 18
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

