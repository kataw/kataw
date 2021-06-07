# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw8/test\__snapshot__/parser/miscellaneous/should-fail/autogen.md
- Path: kataw8/test\__snapshot__\parser\miscellaneous\should-fail\gen\in_a_block
> :: test: in a block
> :: case: ({interface}) => null
## Input

`````js
{ ({interface}) => null }
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
                                "start": 15,
                                "end": 18
                            },
                            "typeParameters": null,
                            "parameters": [
                                {
                                    "kind": 212,
                                    "propertyList": {
                                        "kind": 213,
                                        "properties": [
                                            {
                                                "kind": 134299649,
                                                "text": "interface",
                                                "rawText": "interface",
                                                "flags": 96,
                                                "start": 4,
                                                "end": 13
                                            }
                                        ],
                                        "trailingComma": false,
                                        "flags": 32,
                                        "start": 4,
                                        "end": 13
                                    },
                                    "flags": 32,
                                    "start": 3,
                                    "end": 14
                                }
                            ],
                            "asyncKeyword": null,
                            "returnType": null,
                            "contents": {
                                "kind": 138477575,
                                "flags": 96,
                                "start": 18,
                                "end": 23
                            },
                            "flags": 34,
                            "start": 1,
                            "end": 23
                        },
                        "flags": 16,
                        "start": 1,
                        "end": 23
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 23
            },
            "flags": 16,
            "start": 0,
            "end": 25
        }
    ],
    "isModule": false,
    "source": "{ ({interface}) => null }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 25
}
```

### Printed

```javascript

{
  ({
    interface
  }) =>  null;
}
```

### Diagnostics

```javascript
✔ No errors
```

