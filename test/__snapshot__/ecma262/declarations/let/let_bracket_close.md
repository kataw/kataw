# Kataw parser test case

## Input

`````js
let ];
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
                "kind": 134299649,
                "text": "let",
                "rawText": "let",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 3
        },
        {
            "kind": 168,
            "flags": 16,
            "transformFlags": 0,
            "start": 5,
            "end": 6
        }
    ],
    "isModule": false,
    "source": "let ];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 6
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ ']' is not allowed here. Did you mean ';'? - start: 3, end: 5

```

