# Kataw parser test case

## Input

`````js
for (a * b + c * d;b;c);
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
                "kind": 198,
                "left": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "original": "a",
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 5,
                        "end": 6
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 6,
                        "end": 8
                    },
                    "right": {
                        "kind": 134299649,
                        "original": "b",
                        "text": "b",
                        "rawText": " b",
                        "flags": 96,
                        "start": 8,
                        "end": 10
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 10
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 64,
                    "start": 10,
                    "end": 12
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "original": "c",
                        "text": "c",
                        "rawText": " c",
                        "flags": 96,
                        "start": 12,
                        "end": 14
                    },
                    "operatorToken": {
                        "kind": 67143222,
                        "flags": 64,
                        "start": 14,
                        "end": 16
                    },
                    "right": {
                        "kind": 134299649,
                        "original": "d",
                        "text": "d",
                        "rawText": " d",
                        "flags": 96,
                        "start": 16,
                        "end": 18
                    },
                    "flags": 32,
                    "start": 14,
                    "end": 18
                },
                "flags": 32,
                "start": 0,
                "end": 18
            },
            "condition": {
                "kind": 134299649,
                "original": "c",
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 21,
                "end": 22
            },
            "incrementor": {
                "kind": 134299649,
                "original": "b",
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 19,
                "end": 20
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 23,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 24
        }
    ],
    "isModule": false,
    "source": "for (a * b + c * d;b;c);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
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

