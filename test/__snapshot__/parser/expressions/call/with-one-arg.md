# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
z(x);
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "original": "z",
                    "text": "z",
                    "rawText": "z",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 134299649,
                            "original": "x",
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "start": 2,
                            "end": 3
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 2,
                    "end": 3
                },
                "flags": 32,
                "start": 0,
                "end": 4
            },
            "flags": 16,
            "start": 0,
            "end": 5
        }
    ],
    "isModule": true,
    "source": "z(x);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 5
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

