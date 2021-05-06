# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
null = 42;
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
                "kind": 125,
                "left": {
                    "kind": 269,
                    "text": null,
                    "flags": 96,
                    "start": 0,
                    "end": 4
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 4,
                    "end": 6
                },
                "right": {
                    "kind": 201392130,
                    "text": 42,
                    "rawText": "42",
                    "flags": 96,
                    "start": 6,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 10
        }
    ],
    "isModule": false,
    "source": "null = 42;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 10
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ The left-hand side of an assignment expression must be a variable or a property access - start: 4, end: 6

```

