# Auto-generated test cases ( Kataw )
- From: kataw/test/__snapshot__/ecma262/expressions/arrow/autogen.md
- Path: kataw/test/__snapshot__/ecma262/expressions/arrow/gen/assignmen
> :: test: assignmen
> :: case: (interface) => { 'use strict'; 0 }
## Options

`````js
{}
`````
## Input

`````js
x = (interface) => { 'use strict'; 0 } ;
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
                "kind": 125,
                "left": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 1
                },
                "operatorToken": {
                    "kind": 4125,
                    "flags": 96,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 3
                },
                "right": {
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
                                "start": 5,
                                "end": 14
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 15
                    },
                    "returnType": null,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 18
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
                                    "start": 20,
                                    "end": 33
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
                                        "start": 34,
                                        "end": 36
                                    },
                                    "flags": 16,
                                    "transformFlags": 4096,
                                    "start": 34,
                                    "end": 36
                                }
                            ],
                            "flags": 4194336,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 36
                        },
                        "flags": 32,
                        "transformFlags": 0,
                        "start": 18,
                        "end": 38
                    },
                    "flags": 32,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 38
                },
                "flags": 0,
                "transformFlags": 128,
                "start": 0,
                "end": 38
            },
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 40
        }
    ],
    "isModule": false,
    "source": "x = (interface) => { 'use strict'; 0 } ;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed

```javascript
x = (interface) => {

  "'use strict'";
  0;
};
```

### Diagnostics

```javascript
✔ No errors
```

