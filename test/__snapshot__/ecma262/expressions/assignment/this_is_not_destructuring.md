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
                    "kind": 129,
                    "member": {
                        "kind": 121,
                        "expression": {
                            "kind": 132,
                            "expressions": [],
                            "flags": 32,
                            "transformFlags": 1024,
                            "start": 0,
                            "end": 10
                        },
                        "flags": 0,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 10
                    },
                    "expression": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 12
                    },
                    "flags": 32,
                    "transformFlags": 2,
                    "start": 0,
                    "end": 12
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 14
                },
                "right": {
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 16
                    },
                    "flags": 32,
                    "transformFlags": 8,
                    "start": 14,
                    "end": 17
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 17
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": true,
    "source": "(...{a: b}.c = [])",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a ')' to match the '(' token here - start: 10, end: 11
✖ ')' expected - start: 17, end: 18

```

