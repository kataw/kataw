# Kataw parser test case

## Input

`````js
fuction *f() {  return await yield;  }
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
                    "kind": 134299649,
                    "text": "fuction",
                    "rawText": "fuction",
                    "flags": 96,
                    "start": 0,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 64,
                    "start": 7,
                    "end": 9
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 96,
                        "start": 9,
                        "end": 10
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 11,
                        "end": 11
                    },
                    "flags": 32,
                    "start": 9,
                    "end": 12
                },
                "flags": 32,
                "start": 0,
                "end": 12
            },
            "flags": 16,
            "start": 0,
            "end": 12
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 161,
                        "returnKeyword": {
                            "kind": 37757022,
                            "flags": 0,
                            "start": 14,
                            "end": 22
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 96,
                            "start": 22,
                            "end": 28
                        },
                        "flags": 16,
                        "start": 0,
                        "end": 14
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 96,
                            "start": 28,
                            "end": 34
                        },
                        "flags": 16,
                        "start": 28,
                        "end": 35
                    }
                ],
                "flags": 16,
                "start": 14,
                "end": 35
            },
            "flags": 16,
            "start": 12,
            "end": 38
        }
    ],
    "isModule": false,
    "source": "fuction *f() {  return await yield;  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
✖ Soon to be open sourced
```

### Diagnostics

```javascript
✖ Expected a `;` - start: 12, end: 14
✖ A return statement can only be used within a function_body - start: 14, end: 22
✖ Expected a `;` - start: 28, end: 34

```

