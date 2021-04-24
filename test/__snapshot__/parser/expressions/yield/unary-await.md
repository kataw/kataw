# Kataw parser test case

## Input

`````js
fuction *f() {  return await yield;  }
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
                "kind": 198,
                "left": {
                    "kind": 134299649,
                    "text": "fuction",
                    "rawText": "fuction",
                    "flags": 768,
                    "start": 0,
                    "end": 7
                },
                "operatorToken": {
                    "kind": 67143222,
                    "flags": 768,
                    "start": 7,
                    "end": 9
                },
                "right": {
                    "kind": 131,
                    "expression": {
                        "kind": 134299649,
                        "text": "f",
                        "rawText": "f",
                        "flags": 768,
                        "start": 9,
                        "end": 10
                    },
                    "argumentList": {
                        "kind": 256,
                        "elements": [],
                        "trailingComma": false,
                        "flags": 256,
                        "start": 11,
                        "end": 11
                    },
                    "flags": 256,
                    "start": 9,
                    "end": 12
                },
                "flags": 256,
                "start": 0,
                "end": 12
            },
            "flags": 128,
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
                            "flags": 768,
                            "start": 14,
                            "end": 22
                        },
                        "expression": {
                            "kind": 134299649,
                            "text": "await",
                            "rawText": "await",
                            "flags": 768,
                            "start": 22,
                            "end": 28
                        },
                        "flags": 128,
                        "start": 0,
                        "end": 14
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "yield",
                            "rawText": "yield",
                            "flags": 768,
                            "start": 28,
                            "end": 34
                        },
                        "flags": 128,
                        "start": 28,
                        "end": 35
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 14,
                "end": 35
            },
            "flags": 128,
            "start": 12,
            "end": 38
        }
    ],
    "isModule": false,
    "text": "fuction *f() {  return await yield;  }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 38
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

