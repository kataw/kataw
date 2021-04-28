# Kataw parser test case

## Input

`````js
for (const ...x in y){}
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
                "kind": 151,
                "bindingList": [],
                "flags": 16777232,
                "start": 10,
                "end": 10
            },
            "condition": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 10,
                "end": 10
            },
            "incrementor": {
                "kind": 16637,
                "text": "",
                "flags": 68,
                "start": 10,
                "end": 10
            },
            "statement": {
                "kind": 120,
                "expression": {
                    "kind": 16637,
                    "text": "",
                    "flags": 68,
                    "start": 10,
                    "end": 10
                },
                "flags": 16,
                "start": 10,
                "end": 10
            },
            "flags": 16,
            "start": 0,
            "end": 10
        },
        {
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 14,
                    "end": 15
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 64,
                    "start": 15,
                    "end": 18
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "start": 18,
                    "end": 20
                },
                "flags": 32,
                "start": 14,
                "end": 20
            },
            "flags": 16,
            "start": 14,
            "end": 20
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 16,
                "start": 22,
                "end": 22
            },
            "flags": 16,
            "start": 21,
            "end": 23
        }
    ],
    "isModule": false,
    "text": "for (const ...x in y){}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expression expected - start: 10, end: 14
✖ Expression expected - start: 10, end: 14
✖ Expression expected - start: 10, end: 14
✖ Statement expected - start: 10, end: 14
✖ Statement expected - start: 20, end: 21

```

