# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/gen/conditional_paren
> :: test: conditional_paren
> :: case: eval => { 'use strict'; 0 }
## Options

`````js
{}
`````
## Input

`````js
bar ? baz : ( eval => { 'use strict'; 0 } );
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
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 5
                },
                "consequent": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 9
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 11
                },
                "alternate": {
                    "kind": 121,
                    "expression": {
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "eval",
                            "rawText": "eval",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 13,
                            "end": 18
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 18,
                            "end": 21
                        },
                        "contents": {
                            "kind": 216,
                            "functionStatementList": {
                                "kind": 217,
                                "directives": [
                                    {
                                        "kind": 201392131,
                                        "text": "use strict",
                                        "rawText": "'use strict'",
                                        "flags": 4194400,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 36
                                    }
                                ],
                                "statements": [
                                    {
                                        "kind": 120,
                                        "expression": {
                                            "kind": 201392130,
                                            "text": 0,
                                            "rawText": "0",
                                            "flags": 96,
                                            "transformFlags": 0,
                                            "start": 37,
                                            "end": 39
                                        },
                                        "flags": 16,
                                        "transformFlags": 4096,
                                        "start": 37,
                                        "end": 39
                                    }
                                ],
                                "flags": 4194336,
                                "transformFlags": 0,
                                "start": 23,
                                "end": 39
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 21,
                            "end": 41
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 13,
                        "end": 41
                    },
                    "flags": 11,
                    "transformFlags": 0,
                    "start": 32,
                    "end": 43
                },
                "flags": 96,
                "transformFlags": 4096,
                "start": 0,
                "end": 43
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 44
        }
    ],
    "isModule": false,
    "source": "bar ? baz : ( eval => { 'use strict'; 0 } );",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 44
}
```

### Printed

```javascript
bar ? baz : (eval => {

        "'use strict'";
        0;
      });
```

### Diagnostics

```javascript
✔ No errors
```

