# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/destructuring/valid-cases/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/destructuring/valid-cases/gen/stand_alone
> :: test: stand alone
> :: case: a = [{ x = yield }] = value;
## Options

`````js
{}
`````
## Input

`````js
a = [{ x = yield }] = value;
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
                    "flags": 96,
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
                                    "kind": 220,
                                    "propertyList": {
                                        "kind": 218,
                                        "properties": [
                                            {
                                                "kind": 301,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "start": 6,
                                                    "end": 8
                                                },
                                                "right": {
                                                    "kind": 134299649,
                                                    "text": "yield",
                                                    "rawText": "yield",
                                                    "flags": 96,
                                                    "start": 10,
                                                    "end": 16
                                                },
                                                "flags": 32,
                                                "start": 6,
                                                "end": 16
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 16,
                                        "start": 6,
                                        "end": 16
                                    },
                                    "flags": 48,
                                    "start": 5,
                                    "end": 18
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "start": 5,
                            "end": 18
                        },
                        "flags": 32,
                        "start": 3,
                        "end": 19
                    },
                    "operatorToken": {
                        "kind": 4125,
                        "flags": 96,
                        "start": 19,
                        "end": 21
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "value",
                        "rawText": "value",
                        "flags": 96,
                        "start": 21,
                        "end": 27
                    },
                    "flags": 32,
                    "start": 3,
                    "end": 27
                },
                "flags": 32,
                "start": 0,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 28
        }
    ],
    "isModule": false,
    "source": "a = [{ x = yield }] = value;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 28
}
```

### Printed

```javascript

a = [ { x = yield }, ] = value;

```

### Diagnostics

```javascript
✔ No errors
```

