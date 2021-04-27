# Kataw parser test case

## Input

`````js
async (a, ...b+b=c) => a;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 131,
            "expression": {
                "kind": 134299649,
                "text": "async",
                "rawText": "async",
                "flags": 768,
                "start": 0,
                "end": 5
            },
            "argumentList": {
                "kind": 256,
                "elements": [
                    {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 768,
                        "start": 7,
                        "end": 8
                    },
                    {
                        "kind": 223,
                        "ellipsisToken": {
                            "kind": 524302,
                            "flags": 768,
                            "start": 9,
                            "end": 13
                        },
                        "flags": 256,
                        "start": 9,
                        "end": 16
                    }
                ],
                "trailingComma": false,
                "flags": 256,
                "start": 0,
                "end": 0
            },
            "flags": 256,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "c",
                "rawText": "c",
                "flags": 768,
                "start": 17,
                "end": 18
            },
            "flags": 128,
            "start": 17,
            "end": 18
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 768,
                "start": 22,
                "end": 24
            },
            "flags": 128,
            "start": 22,
            "end": 25
        }
    ],
    "isModule": false,
    "text": "async (a, ...b+b=c) => a;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Statement expected - start: 16, end: 17
@{x2716}@ Statement expected - start: 18, end: 19
@{x2716}@ Statement expected - start: 19, end: 22

```

