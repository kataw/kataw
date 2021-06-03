# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/binary/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\binary\gen\dynamic_property
> :: test: dynamic property
> :: case: a + b / c
## Input

`````js
foo[ a + b / c ]
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
                "kind": 536871042,
                "member": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "expression": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "a",
                        "rawText": "a",
                        "flags": 96,
                        "start": 4,
                        "end": 6
                    },
                    "operatorToken": {
                        "kind": 99634,
                        "flags": 64,
                        "start": 6,
                        "end": 8
                    },
                    "right": {
                        "kind": 198,
                        "left": {
                            "kind": 134299649,
                            "text": "b",
                            "rawText": "b",
                            "flags": 96,
                            "start": 8,
                            "end": 10
                        },
                        "operatorToken": {
                            "kind": 35640,
                            "flags": 64,
                            "start": 10,
                            "end": 12
                        },
                        "right": {
                            "kind": 134299649,
                            "text": "c",
                            "rawText": "c",
                            "flags": 96,
                            "start": 12,
                            "end": 14
                        },
                        "flags": 32,
                        "start": 10,
                        "end": 14
                    },
                    "flags": 32,
                    "start": 4,
                    "end": 14
                },
                "flags": 32,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "foo[ a + b / c ]",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

;
```

### Diagnostics

```javascript
✔ No errors
```

