# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/stand-alone
> :: test: stand-alone
> :: case: [ a = (initialized = true, initializer) ] = value
## Options

`````js
{}
`````
## Input

`````js
[ a = (initialized = true, initializer) ] = value
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
                                "kind": 125,
                                "left": {
                                    "kind": 134299649,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 96,
                                    "start": 1,
                                    "end": 3
                                },
                                "operatorToken": {
                                    "kind": 4125,
                                    "flags": 96,
                                    "start": 3,
                                    "end": 5
                                },
                                "right": {
                                    "kind": 121,
                                    "expression": {
                                        "kind": 132,
                                        "expressions": [
                                            {
                                                "kind": 125,
                                                "left": {
                                                    "kind": 134299649,
                                                    "text": "initialized",
                                                    "rawText": "initialized",
                                                    "flags": 96,
                                                    "start": 7,
                                                    "end": 18
                                                },
                                                "operatorToken": {
                                                    "kind": 4125,
                                                    "flags": 96,
                                                    "start": 18,
                                                    "end": 20
                                                },
                                                "right": {
                                                    "kind": 24752947,
                                                    "flags": 96,
                                                    "start": 20,
                                                    "end": 25
                                                },
                                                "flags": 32,
                                                "start": 5,
                                                "end": 25
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "initializer",
                                                "rawText": "initializer",
                                                "flags": 96,
                                                "start": 26,
                                                "end": 38
                                            }
                                        ],
                                        "flags": 32,
                                        "start": 5,
                                        "end": 39
                                    },
                                    "flags": 32,
                                    "start": 5,
                                    "end": 39
                                },
                                "flags": 32,
                                "start": 1,
                                "end": 39
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 1,
                        "end": 39
                    },
                    "flags": 32,
                    "start": 0,
                    "end": 41
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "start": 41,
                    "end": 43
                },
                "right": {
                    "kind": 134299649,
                    "text": "value",
                    "rawText": "value",
                    "flags": 96,
                    "start": 43,
                    "end": 49
                },
                "flags": 32,
                "start": 0,
                "end": 49
            },
            "flags": 16,
            "start": 0,
            "end": 49
        }
    ],
    "isModule": false,
    "source": "[ a = (initialized = true, initializer) ] = value",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 49
}
```

### Printed

```javascript

[a = (initialized = true, initializer)] = value;
```

### Diagnostics

```javascript
✔ No errors
```

