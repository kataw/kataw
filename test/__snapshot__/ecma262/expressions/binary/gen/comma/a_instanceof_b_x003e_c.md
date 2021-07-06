# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/binary/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/binary/gen/comma
> :: test: comma
> :: case: a instanceof b > c
## Options

`````js
{}
`````
## Input

`````js
x, a instanceof b > c
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
                "kind": 132,
                "expressions": [
                    {
                        "kind": 134299649,
                        "text": "x",
                        "rawText": "x",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 1
                    },
                    {
                        "kind": 198,
                        "left": {
                            "kind": 198,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 2,
                                "end": 4
                            },
                            "operatorToken": {
                                "kind": 4229173,
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 4,
                                "end": 15
                            },
                            "right": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "transformFlags": 0,
                                "start": 15,
                                "end": 17
                            },
                            "flags": 96,
                            "transformFlags": 1024,
                            "start": 2,
                            "end": 17
                        },
                        "operatorToken": {
                            "kind": 34883,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 17,
                            "end": 19
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 21
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 2,
                        "end": 21
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 21
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "x, a instanceof b > c",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

x, a instanceof b > c;
```

### Diagnostics

```javascript
✔ No errors
```

