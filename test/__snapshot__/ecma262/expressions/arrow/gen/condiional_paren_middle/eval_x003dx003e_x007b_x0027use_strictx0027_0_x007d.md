# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/gen/condiional_paren_middle
> :: test: condiional_paren_middle
> :: case: eval => { 'use strict'; 0 }
## Options

`````js
{}
`````
## Input

`````js
bar ? (eval => { 'use strict'; 0 }) : baz;
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
                            "start": 7,
                            "end": 11
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 14
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
                                        "start": 16,
                                        "end": 29
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
                                            "start": 30,
                                            "end": 32
                                        },
                                        "flags": 16,
                                        "transformFlags": 4096,
                                        "start": 30,
                                        "end": 32
                                    }
                                ],
                                "flags": 4194336,
                                "transformFlags": 0,
                                "start": 16,
                                "end": 32
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 14,
                            "end": 34
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 7,
                        "end": 34
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 5,
                    "end": 35
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 37
                },
                "alternate": {
                    "kind": 134299649,
                    "text": "baz",
                    "rawText": "baz",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 37,
                    "end": 41
                },
                "flags": 96,
                "transformFlags": 4096,
                "start": 0,
                "end": 41
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 42
        }
    ],
    "isModule": false,
    "source": "bar ? (eval => { 'use strict'; 0 }) : baz;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 42
}
```

### Printed

```javascript
bar ? (eval => {

        "'use strict'";
        0;
      }) : baz;
```

### Diagnostics

```javascript
✔ No errors
```

