# Kataw parser test case

## Input

`````js
for ([].bar in obj);
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
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 11,
                "end": 14
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
                        "flags": 32,
                        "start": 6,
                        "end": 6
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 7
                },
                "expression": {
                    "kind": 134299649,
                    "original": "bar",
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "start": 8,
                    "end": 11
                },
                "flags": 32,
                "start": 0,
                "end": 11
            },
            "expression": {
                "kind": 134299649,
                "original": "obj",
                "text": "obj",
                "rawText": " obj",
                "flags": 96,
                "start": 14,
                "end": 18
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 19,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 20
        }
    ],
    "isModule": false,
    "source": "for ([].bar in obj);",
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

