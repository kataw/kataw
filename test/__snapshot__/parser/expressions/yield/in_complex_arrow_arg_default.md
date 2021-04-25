# Kataw parser test case

## Input

`````js
{ (x = u + yield z) => {}; }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 121,
                            "expression": {
                                "kind": 132,
                                "flags": 256,
                                "start": 1,
                                "end": 16
                            },
                            "flags": 256,
                            "start": 1,
                            "end": 16
                        },
                        "flags": 128,
                        "start": 1,
                        "end": 16
                    },
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 134299649,
                            "text": "z",
                            "rawText": "z",
                            "flags": 768,
                            "start": 16,
                            "end": 18
                        },
                        "flags": 128,
                        "start": 16,
                        "end": 18
                    }
                ],
                "multiLine": false,
                "flags": 128,
                "start": 1,
                "end": 18
            },
            "flags": 128,
            "start": 0,
            "end": 18
        },
        {
            "kind": 249,
            "block": {
                "kind": 124,
                "statements": [],
                "multiLine": false,
                "flags": 128,
                "start": 24,
                "end": 24
            },
            "flags": 128,
            "start": 22,
            "end": 25
        },
        {
            "kind": 168,
            "flags": 128,
            "start": 25,
            "end": 26
        }
    ],
    "isModule": false,
    "text": "{ (x = u + yield z) => {}; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript
@{x2716}@ Unexpected token. - start: 16, end: 18
@{x2716}@ Unexpected token. - start: 16, end: 18
@{x2716}@ Unexpected token. - start: 18, end: 19
@{x2716}@ Unexpected token. - start: 18, end: 19
@{x2716}@ Statement expected - start: 18, end: 19
@{x2716}@ Statement expected - start: 19, end: 22
@{x2716}@ Statement expected - start: 26, end: 28

```

