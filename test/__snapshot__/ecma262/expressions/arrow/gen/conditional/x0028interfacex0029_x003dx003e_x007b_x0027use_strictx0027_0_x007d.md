# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/gen/conditional
> :: test: conditional
> :: case: (interface) => { 'use strict'; 0 }
## Options

`````js
{}
`````
## Input

`````js
(interface) => { 'use strict'; 0 } , bar;
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
                            "kind": 342,
                            "parameters": [
                                {
                                    "kind": 134299649,
                                    "text": "interface",
                                    "rawText": "interface",
                                    "flags": 96,
                                    "transformFlags": 0,
                                    "start": 1,
                                    "end": 10
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 1,
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
                                        "transformFlags": 0,
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
                        "start": 0,
                        "end": 34
                    },
                    {
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 36,
                        "end": 40
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 40
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 41
        }
    ],
    "isModule": false,
    "source": "(interface) => { 'use strict'; 0 } , bar;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 41
}
```

### Printed

```javascript

(interface) => {
  0;
}, bar;
```

### Diagnostics

```javascript
✔ No errors
```

