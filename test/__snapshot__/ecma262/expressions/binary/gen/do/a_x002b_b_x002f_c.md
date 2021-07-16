# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/binary/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/binary/gen/do
> :: test: do
> :: case: a + b / c
## Options

`````js
{}
`````
## Input

`````js
do a + b / c while (x);
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 169,
            "doKeyword": {
                "kind": 4202580,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 2
            },
            "statement": {
                "kind": 120,
                "expression": {
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
                        "kind": 99634,
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 6
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 8
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 10
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 10,
                            "end": 12
                        },
                        "flags": 96,
                        "transformFlags": 5120,
                        "start": 8,
                        "end": 12
                    },
                    "flags": 96,
                    "transformFlags": 5120,
                    "start": 2,
                    "end": 12
                },
                "flags": 16,
                "transformFlags": 4096,
                "start": 2,
                "end": 12
            },
            "whileKeyword": {
                "kind": 37757028,
                "flags": 80,
                "transformFlags": 0,
                "start": 12,
                "end": 18
            },
            "expression": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "transformFlags": 0,
                "start": 20,
                "end": 21
            },
            "flags": 80,
            "transformFlags": 0,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "do a + b / c while (x);",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 23
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ '; ' expected - start: 12, end: 18

```

