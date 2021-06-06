# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-pass\gen\in_a_block
> :: test: in a block
> :: case: ([a, my_var, b]) => my_var;
## Input

`````js
{ ([a, my_var, b]) => my_var; }
`````
## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 124,
            "block": {
                "kind": 249,
                "statements": [
                    {
                        "kind": 120,
                        "expression": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 64,
                                "start": 18,
                                "end": 21
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 201,
                                    "elementList": {
                                        "kind": 270,
                                        "elements": [
                                            {
                                                "kind": 134299649,
                                                "text": "b",
                                                "rawText": "b",
                                                "flags": 96,
                                                "start": 14,
                                                "end": 16
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "my_var",
                                                "rawText": "my_var",
                                                "flags": 96,
                                                "start": 6,
                                                "end": 13
                                            },
                                            {
                                                "kind": 134299649,
                                                "text": "a",
                                                "rawText": "a",
                                                "flags": 96,
                                                "start": 4,
                                                "end": 5
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 4,
                                        "end": 16
                                    },
                                    "flags": 32,
                                    "start": 3
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 134299649,
                                "text": "my_var",
                                "rawText": "my_var",
                                "flags": 96,
                                "start": 21,
                                "end": 28
                            },
                            "flags": 34,
                            "start": 1,
                            "end": 28
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 29
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 31
        }
    ],
    "isModule": false,
    "source": "{ ([a, my_var, b]) => my_var; }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 31
}
```

### Printed

```javascript

{
  ([b, my_var, a]) =>  my_var;
}
```

### Diagnostics

```javascript
✔ No errors
```

