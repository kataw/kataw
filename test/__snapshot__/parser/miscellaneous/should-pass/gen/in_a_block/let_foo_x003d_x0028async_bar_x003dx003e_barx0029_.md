# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-06
- From: kataw/test/__snapshot__/parser/miscellaneous/should-pass/autogen.md
- Path: kataw/test/__snapshot__/parser/miscellaneous/should-pass/gen/in_a_block
> :: test: in a block
> :: case: let foo = (async bar => bar);
## Input

`````js
{ let foo = (async bar => bar); }
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
                        "kind": 162,
                        "lexicalKeyword": {
                            "kind": 41951307,
                            "flags": 80,
                            "start": 1,
                            "end": 5
                        },
                        "binding": {
                            "kind": 151,
                            "bindingList": [
                                {
                                    "kind": 190,
                                    "binding": {
                                        "kind": 134299649,
                                        "text": "foo",
                                        "rawText": "foo",
                                        "flags": 96,
                                        "start": 5,
                                        "end": 9
                                    },
                                    "optionalToken": null,
                                    "type": null,
                                    "initializer": {
                                        "kind": 121,
                                        "expression": {
                                            "kind": 271,
                                            "arrowToken": {
                                                "kind": 10,
                                                "flags": 64,
                                                "start": 22,
                                                "end": 25
                                            },
                                            "typeParameters": null,
                                            "parameters": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 18,
                                                "end": 22
                                            },
                                            "asyncKeyword": {
                                                "kind": 82031,
                                                "flags": 64,
                                                "start": 13,
                                                "end": 18
                                            },
                                            "returnType": null,
                                            "contents": {
                                                "kind": 134299649,
                                                "text": "bar",
                                                "rawText": "bar",
                                                "flags": 96,
                                                "start": 25,
                                                "end": 29
                                            },
                                            "flags": 288,
                                            "start": 13,
                                            "end": 29
                                        },
                                        "flags": 32,
                                        "start": 11,
                                        "end": 30
                                    },
                                    "flags": 16,
                                    "start": 5,
                                    "end": 30
                                }
                            ],
                            "flags": 16,
                            "start": 5,
                            "end": 30
                        },
                        "flags": 33554448,
                        "start": 1,
                        "end": 31
                    }
                ],
                "flags": 16,
                "start": 1,
                "end": 31
            },
            "flags": 16,
            "start": 0,
            "end": 33
        }
    ],
    "isModule": false,
    "source": "{ let foo = (async bar => bar); }",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 33
}
```

### Printed

```javascript

{
  let foo = (async bar =>  bar);
}
```

### Diagnostics

```javascript
✔ No errors
```

