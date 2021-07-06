# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/binary/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/binary/gen/group
> :: test: group
> :: case: a instanceof b > c
## Options

`````js
{}
`````
## Input

`````js
( a instanceof b > c )
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
                "kind": 121,
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "a",
                            "rawText": "a",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 1,
                            "end": 3
                        },
                        "operatorToken": {
                            "kind": 4229173,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 14
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 16
                        },
                        "flags": 96,
                        "transformFlags": 1024,
                        "start": 0,
                        "end": 16
                    },
                    "operatorToken": {
                        "kind": 34883,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 16,
                        "end": 18
                    },
                    "right": {
                        "kind": 134299649,
                        "text": "c",
                        "rawText": "c",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 20
                    },
                    "flags": 96,
                    "transformFlags": 1024,
                    "start": 0,
                    "end": 20
                },
                "flags": 0,
                "transformFlags": 0,
                "start": 32,
                "end": 22
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        }
    ],
    "isModule": false,
    "source": "( a instanceof b > c )",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed

```javascript

(a instanceof b > c);
```

### Diagnostics

```javascript
✔ No errors
```

