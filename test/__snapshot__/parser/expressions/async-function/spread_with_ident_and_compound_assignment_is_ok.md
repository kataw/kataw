# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````


## Input

`````js
[...x += y];
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
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [
                        {
                            "kind": 223,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 0,
                                "start": 1,
                                "end": 4
                            },
                            "argument": {
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "original": "x",
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 4,
                                    "end": 5
                                },
                                "operatorToken": {
                                    "kind": 4130,
                                    "flags": 64,
                                    "start": 5,
                                    "end": 8
                                },
                                "right": {
                                    "kind": 134299649,
                                    "original": "y",
                                    "text": "y",
                                    "rawText": " y",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 10
                                },
                                "flags": 32,
                                "start": 4,
                                "end": 10
                            },
                            "flags": 32,
                            "start": 1,
                            "end": 10
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 1,
                    "end": 10
                },
                "flags": 32,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": true,
    "source": "[...x += y];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
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

