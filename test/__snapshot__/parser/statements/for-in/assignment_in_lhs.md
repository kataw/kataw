# Kataw parser test case

## Input

`````js
for (a = b in x);
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

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 165,
            "forKeyword": {
                "kind": 37757017,
                "flags": 80,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 5,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
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
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "start": 13,
                        "end": 15
                    },
                    "flags": 32,
                    "start": 8,
                    "end": 15
                },
                "flags": 32,
                "start": 0,
                "end": 15
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 64,
                "start": 15,
                "end": 15
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 16,
                "end": 17
            },
            "flags": 80,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "for (a = b in x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Identifier expected - start: 15, end: 16

```

