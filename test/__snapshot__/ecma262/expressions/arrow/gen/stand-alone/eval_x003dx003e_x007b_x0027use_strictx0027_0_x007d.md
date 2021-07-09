# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-14
- From: kataw/test/__snapshot__/parser/expressions/arrow/autogen.md
- Path: kataw/test/__snapshot__/parser/expressions/arrow/gen/stand-alone
> :: test: stand-alone
> :: case: eval => { 'use strict'; 0 }
## Options

`````js
{}
`````
## Input

`````js
eval => { 'use strict'; 0 } ;
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
                                "transformFlags": 4096,
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
            "flags": 16,
            "transformFlags": 4096,
            "start": 0,
            "end": 29
        }
    ],
    "isModule": false,
    "source": "eval => { 'use strict'; 0 } ;",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 29
}
```

### Printed

```javascript
eval => {

  "'use strict'";
  0;
};
```

### Diagnostics

```javascript
✔ No errors
```

