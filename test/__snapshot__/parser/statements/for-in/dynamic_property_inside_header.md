# Kataw parser test case

## Input

`````js
for (x[a in b] in y);
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
                "start": 14,
                "end": 17
            },
            "kind": 166,
            "initializer": {
                "kind": 130,
                "member": {
                    "kind": 134299649,
                    "original": "x",
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 5,
                    "end": 6
                },
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "original": "a",
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 7,
                        "end": 8
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 64,
                        "start": 8,
                        "end": 11
                    },
                    "right": {
                        "kind": 134299649,
                        "original": "b",
                        "text": "b",
                        "rawText": " b",
                        "flags": 96,
                        "start": 11,
                        "end": 13
                    },
                    "flags": 32,
                    "start": 7,
                    "end": 13
                },
                "flags": 32,
                "start": 5,
                "end": 14
            },
            "expression": {
                "kind": 134299649,
                "original": "y",
                "text": "y",
                "rawText": " y",
                "flags": 96,
                "start": 17,
                "end": 19
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 20,
                "end": 21
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "for (x[a in b] in y);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
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

