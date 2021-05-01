# Kataw parser test case

## Input

`````js
for (2 + b in obj);
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
                    "kind": 201392130,
                    "text": 2,
                    "rawText": "2",
                    "flags": 96,
                    "start": 5,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 64,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": " b",
                        "flags": 96,
                        "start": 8,
                        "end": 10
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 64,
                        "start": 10,
                        "end": 13
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": " obj",
                        "flags": 96,
                        "start": 13,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 10,
                    "end": 17
                },
                "flags": 32,
                "start": 0,
                "end": 17
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 17,
                "end": 17
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 18,
                "end": 19
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "for (2 + b in obj);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 17, end: 18

```

