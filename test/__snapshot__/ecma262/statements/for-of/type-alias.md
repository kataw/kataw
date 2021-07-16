# Kataw parser test case

## Input

`````js
type x = y;
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
                "text": "type",
                "rawText": "type",
                "flags": 96,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 4
        },
        {
            "kind": 120,
            "expression": {
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 6
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 8
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": "y",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 10
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 4,
                "end": 10
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 4,
            "end": 11
        }
    ],
    "isModule": false,
    "source": "type x = y;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 11
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '; ' expected - start: 4, end: 6

```

