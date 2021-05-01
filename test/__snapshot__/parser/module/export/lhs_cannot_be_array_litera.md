# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default [x] = y
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 258,
            "exportKeyword": {
                "kind": 4202582,
                "flags": 0,
                "start": 0,
                "end": 6
            },
            "defaultKeyword": {
                "kind": 4194387,
                "flags": 0,
                "start": 6,
                "end": 14
            },
            "declaration": {
                "kind": 125,
                "left": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 16,
                                "end": 17
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 16,
                        "end": 17
                    },
                    "flags": 32,
                    "start": 14,
                    "end": 18
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 18,
                    "end": 20
                },
                "right": {
                    "kind": 134299649,
                    "text": "y",
                    "rawText": " y",
                    "flags": 96,
                    "start": 20,
                    "end": 22
                },
                "flags": 32,
                "start": 14,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": true,
    "source": "export default [x] = y",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 22
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

