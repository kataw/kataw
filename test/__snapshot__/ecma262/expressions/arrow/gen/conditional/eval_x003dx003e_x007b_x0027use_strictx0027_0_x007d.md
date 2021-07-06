# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/gen/conditional
> :: test: conditional
> :: case: eval => { 'use strict'; 0 }
## Options

`````js
{}
`````
## Input

`````js
eval => { 'use strict'; 0 } , bar;
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
                        "kind": 271,
                        "asyncKeyword": null,
                        "typeParameters": null,
                        "arrowPatameterList": {
                            "kind": 134299649,
                            "text": "eval",
                            "rawText": "eval",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 4
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 7
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
                                        "start": 9,
                                        "end": 22
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
                                            "start": 23,
                                            "end": 25
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 23,
                                        "end": 25
                                    }
                                ],
                                "flags": 4194336,
                                "transformFlags": 0,
                                "start": 9,
                                "end": 25
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 7,
                            "end": 27
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 27
                    },
                    {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 29,
                        "end": 33
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 33
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "eval => { 'use strict'; 0 } , bar;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

### Printed

```javascript

eval => {
  0;
}, bar;
```

### Diagnostics

```javascript
✔ No errors
```

