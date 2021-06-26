# Kataw parser test case

## Input

`````js
let.dot in x
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
            "kind": 120,
            "expression": {
                "kind": 198,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 134299649,
                        "text": "let",
                        "rawText": "let",
                        "flags": 96,
                        "start": 0,
                        "end": 3
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "dot",
                        "rawText": "dot",
                        "flags": 96,
                        "start": 4,
                        "end": 7
                    },
                    "flags": 96,
                    "start": 0,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 21006388,
                    "flags": 96,
                    "start": 7,
                    "end": 10
                },
                "right": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 10,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "let.dot in x",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

let.dot in x;
```

### Diagnostics

```javascript
✔ No errors
```

