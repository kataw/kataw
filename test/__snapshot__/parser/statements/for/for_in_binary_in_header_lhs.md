# Kataw parser test case

## Input

`````js
for (x in a>c;;) x
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
            "forKeyword": {
                "kind": 37757017,
                "flags": 0,
                "start": 0,
                "end": 3
            },
            "inKeyword": {
                "kind": 21006388,
                "flags": 64,
                "start": 6,
                "end": 9
            },
            "kind": 166,
            "initializer": {
                "kind": 134299649,
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
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 9,
                    "end": 11
                },
                "operatorToken": {
                    "kind": 34883,
                    "flags": 64,
                    "start": 11,
                    "end": 12
                },
                "right": {
                    "kind": 134299649,
                    "text": "c",
                    "rawText": "c",
                    "flags": 96,
                    "start": 12,
                    "end": 13
                },
                "flags": 32,
                "start": 9,
                "end": 13
            },
            "statement": {
                "kind": 168,
                "flags": 16,
                "start": 13,
                "end": 14
            },
            "flags": 16,
            "start": 0,
            "end": 14
        },
        {
            "kind": 168,
            "flags": 16,
            "start": 14,
            "end": 15
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 16,
                "end": 18
            },
            "flags": 16,
            "start": 16,
            "end": 18
        }
    ],
    "isModule": false,
    "source": "for (x in a>c;;) x",
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
✖ Expected a ')' to match the '(' token here - start: 13, end: 14
✖ Declaration or statement expected - start: 15, end: 16

```

