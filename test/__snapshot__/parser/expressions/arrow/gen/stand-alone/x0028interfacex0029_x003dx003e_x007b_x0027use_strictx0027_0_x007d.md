# Auto-generated test cases ( Kataw )
- Regenerated: 2021-06-03
- From: kataw8/test\__snapshot__/parser/expressions/arrow/autogen.md
- Path: kataw8/test\__snapshot__\parser\expressions\arrow\gen\stand-alone
> :: test: stand-alone
> :: case: (interface) => { 'use strict'; 0 }
## Input

`````js
(interface) => { 'use strict'; 0 } ;
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
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 11,
                    "end": 14
                },
                "typeParameters": null,
                "parameters": [
                    {
                        "kind": 134299649,
                        "text": "interface",
                        "rawText": "interface",
                        "flags": 96,
                        "start": 1,
                        "end": 10
                    }
                ],
                "asyncKeyword": null,
                "returnType": null,
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
                                    "start": 30,
                                    "end": 32
                                },
                                "flags": 16,
                                "start": 30,
                                "end": 32
                            }
                        ],
                        "flags": 4194336,
                        "start": 16,
                        "end": 32
                    },
                    "flags": 32,
                    "start": 14,
                    "end": 34
                },
                "flags": 32,
                "start": 0,
                "end": 34
            },
            "flags": 16,
            "start": 0,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "(interface) => { 'use strict'; 0 } ;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

(interface) =>  {
  0;
};
```

### Diagnostics

```javascript
✔ No errors
```

