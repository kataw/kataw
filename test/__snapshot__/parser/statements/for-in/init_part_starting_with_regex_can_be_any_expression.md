# Kataw parser test case

## Input

`````js
for (/x/g + b in obj);
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
                "flags": 768,
                "start": 0,
                "end": 3
            },
            "initializer": {
                "kind": 198,
                "left": {
                    "kind": 221,
                    "text": "/x/g",
                    "flags": 768,
                    "start": 5,
                    "end": 9
                },
                "operatorToken": {
                    "kind": 34098,
                    "flags": 768,
                    "start": 9,
                    "end": 11
                },
                "right": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "b",
                        "rawText": "b",
                        "flags": 768,
                        "start": 11,
                        "end": 13
                    },
                    "operatorToken": {
                        "kind": 21006388,
                        "flags": 768,
                        "start": 13,
                        "end": 16
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "obj",
                        "rawText": "obj",
                        "flags": 768,
                        "start": 16,
                        "end": 20
                    },
                    "flags": 256,
                    "start": 13,
                    "end": 20
                },
                "flags": 256,
                "start": 0,
                "end": 20
            },
            "condition": null,
            "incrementor": {
                "kind": 16637,
                "text": "",
                "autofix": 0,
                "flags": 12,
                "start": 20,
                "end": 20
            },
            "statement": {
                "kind": 168,
                "flags": 128,
                "start": 21,
                "end": 22
            },
            "flags": 128,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "text": "for (/x/g + b in obj);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 20, end: 21
@{x2716}@ Expression expected - start: 20, end: 21
@{x2716}@ Unexpected token. - start: 20, end: 21

```

