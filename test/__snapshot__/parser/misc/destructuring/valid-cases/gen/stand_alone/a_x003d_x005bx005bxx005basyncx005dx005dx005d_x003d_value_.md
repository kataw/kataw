# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-01
- From: kataw8/test\__snapshot__/parser/misc/destructuring/valid-cases/autogen.md
- Path: kataw8/test\__snapshot__\parser\misc\destructuring\valid-cases\gen\stand_alone
> :: test: stand alone
> :: case: a = [[x[async]]] = value;
## Input

`````js
a = [[x[async]]] = value;
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
                    "kind": 134299649,
                    "text": "a",
                    "rawText": "a",
                    "flags": 96,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 1,
                    "end": 3
                },
                "right": {
                    "kind": 125,
                    "left": {
                        "kind": 119,
                        "elementList": {
                            "kind": 270,
                            "elements": [
                                {
                                    "kind": 119,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 536871042,
                                                "member": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 6,
                                                    "end": 7
                                                },
                                                "expression": {
                                                    "kind": 134299649,
                                                    "text": "async",
                                                    "rawText": "async",
                                                    "flags": 96,
                                                    "start": 8,
                                                    "end": 13
                                                },
                                                "flags": 32,
                                                "start": 6,
                                                "end": 14
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 6,
                                        "end": 14
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 15
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 5,
                            "end": 15
                        },
                        "flags": 32,
                        "start": 3,
                        "end": 16
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 64,
                        "start": 16,
                        "end": 18
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "value",
                        "rawText": "value",
                        "flags": 96,
                        "start": 18,
                        "end": 24
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 24
                },
                "flags": 32,
                "start": 0,
                "end": 24
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "a = [[x[async]]] = value;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

a = [[]] = value;
```

### Diagnostics

```javascript
✔ No errors
```

