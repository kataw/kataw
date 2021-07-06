# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/gen/conditional_last
> :: test: conditional_last
> :: case: (interface) => { 'use strict'; 0 }
## Options

`````js
{}
`````
## Input

`````js
bar, (interface) => { 'use strict'; 0 };
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
                        "kind": 134299649,
                        "text": "bar",
                        "rawText": "bar",
                        "flags": 96,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 3
                    },
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
                                    "start": 6,
                                    "end": 15
                                }
                            ],
                            "trailingComma": false,
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 16
                        },
                        "returnType": null,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "transformFlags": 0,
                            "start": 16,
                            "end": 19
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
                                        "start": 21,
                                        "end": 34
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
                                            "start": 35,
                                            "end": 37
                                        },
                                        "flags": 16,
                                        "transformFlags": 0,
                                        "start": 35,
                                        "end": 37
                                    }
                                ],
                                "flags": 4194336,
                                "transformFlags": 0,
                                "start": 21,
                                "end": 37
                            },
                            "flags": 32,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 39
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 4,
                        "end": 39
                    }
                ],
                "flags": 32,
                "transformFlags": 1024,
                "start": 0,
                "end": 39
            },
            "flags": 16,
            "transformFlags": 0,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "bar, (interface) => { 'use strict'; 0 };",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
bar, (interface) => {

  "'use strict'";
  0;
};
```

### Diagnostics

```javascript
✔ No errors
```

