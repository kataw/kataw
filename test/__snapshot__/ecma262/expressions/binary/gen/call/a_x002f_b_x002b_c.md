# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/binary/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/binary/gen/call
> :: test: call
> :: case: a / b + c
## Options

`````js
{}
`````
## Input

`````js
foo( a / b + c )
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
                "kind": 131,
                "expression": {
                    "kind": 134299649,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 96,
                    "start": 0,
                    "end": 3
                },
                "argumentList": {
                    "kind": 256,
                    "elements": [
                        {
                            "kind": 198,
                            "left": {
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
                                    "kind": 35640,
                                    "flags": 96,
                                    "start": 6,
                                    "end": 8
                                },
                                "right": {
                                    "kind": 134299649,
                                    "text": "b",
                                    "rawText": "b",
                                    "flags": 96,
                                    "start": 8,
                                    "end": 10
                                },
                                "flags": 32,
                                "start": 4,
                                "end": 10
                            },
                            "operatorToken": {
                                "kind": 99634,
                                "flags": 96,
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
                            "start": 4,
                            "end": 14
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 4,
                    "end": 14
                },
                "flags": 268435488,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        }
    ],
    "isModule": false,
    "source": "foo( a / b + c )",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 16
}
```

### Printed

```javascript

foo(a / b + c);

```

### Diagnostics

```javascript
✔ No errors
```

