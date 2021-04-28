# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
(...{a: b}.c = [])
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
                "kind": 125,
                "left": {
                    "kind": 129,
                    "member": {
                        "kind": 121,
                        "expression": {
                            "kind": 132,
                            "flags": 256,
                            "start": 0,
                            "end": 10
                        },
                        "flags": 256,
                        "start": 0,
                        "end": 10
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 768,
                        "start": 11,
                        "end": 12
                    },
                    "flags": 256,
                    "start": 0,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 12,
                    "start": 512,
                    "end": 14
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 256,
                    "start": 14,
                    "end": 17
                },
                "flags": 256,
                "start": 0,
                "end": 17
            },
            "flags": 128,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": true,
    "text": "(...{a: b}.c = [])",
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
✖ Statement expected - start: 17, end: 18

```

