# Auto-generated test cases ( Kataw )
- Regenerated: 2021-05-30
- From: kataw7/test\__snapshot__/parser/misc/destructuring/valid-cases/autogen.md
- Path: kataw7/test\__snapshot__\parser\misc\destructuring\valid-cases\gen\stand_alone
> :: test: stand alone
> :: case: [x] = obj
## Input

`````js
[x] = obj
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
                    "kind": 119,
                    "elementList": {
                        "kind": 270,
                        "elements": [
                            {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1,
                                "end": 2
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 2
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 3
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 64,
                    "start": 3,
                    "end": 5
                },
                "right": {
                    "kind": 134299649,
                    "text": "obj",
                    "rawText": "obj",
                    "flags": 96,
                    "start": 5,
                    "end": 9
                },
                "flags": 32,
                "start": 0,
                "end": 9
            },
            "flags": 16,
            "start": 0,
            "end": 9
        }
    ],
    "isModule": false,
    "source": "[x] = obj",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 9
}
```

### Printed

```javascript

[x] = obj;
```

### Diagnostics

```javascript
✔ No errors
```

