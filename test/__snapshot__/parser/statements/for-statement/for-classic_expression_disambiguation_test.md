# Kataw parser test case

## Input

`````js
for ((a * b + c) * d;b;c);
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
                    "kind": 121,
                    "expression": {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 6,
                                "end": 7
                            },
                            "operatorToken": {
                                "kind": 67143222,
                                "flags": 64,
                                "start": 7,
                                "end": 9
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 9,
                                "end": 11
                            },
                            "flags": 32,
                            "start": 5,
                            "end": 11
                        },
                        "operatorToken": {
                            "kind": 34098,
                            "flags": 64,
                            "start": 11,
                            "end": 13
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 13,
                            "end": 15
                        },
                        "flags": 32,
                        "start": 5,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 5,
                    "end": 16
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 16,
                    "end": 18
                },
                "right": {
                    "kind": 134299649,
                    "text": "d",
                    "rawText": "d",
                    "flags": 96,
                    "start": 18,
                    "end": 20
                },
                "flags": 32,
                "start": 0,
                "end": 20
            },
            "condition": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 96,
                "start": 23,
                "end": 24
            },
            "incrementor": {
                "kind": 134299649,
                "text": "b",
                "rawText": "b",
                "flags": 96,
                "start": 21,
                "end": 22
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 25,
                "end": 26
            },
            "flags": 16,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "for ((a * b + c) * d;b;c);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
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

